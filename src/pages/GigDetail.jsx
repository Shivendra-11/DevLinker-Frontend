import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  ArrowLeft, Eye, Users, ThumbsUp, ThumbsDown, Clock, DollarSign,
  Calendar, Crown, Send, MessageCircle, ExternalLink, FileText,
  Image as ImageIcon, Video, Bookmark, Share2, Flag
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import {
  addGigComment,
  applyToGig,
  getGigById,
  listGigComments,
  listSavedGigs,
  toggleGigCommentLike,
  toggleSaveGig,
  voteGig,
} from "@/services/freelanceService";

export default function GigDetail() {
  const { gigId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [proposal, setProposal] = useState("");
  const [budgetQuote, setBudgetQuote] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  const [gig, setGig] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = async () => {
    setLoading(true);
    setError(null);
    try {
      const [gigData, commentsData, saved] = await Promise.all([
        getGigById(gigId),
        listGigComments(gigId),
        listSavedGigs(),
      ]);
      setGig(gigData);
      setComments(commentsData);
      setIsSaved((saved || []).some((g) => g.id === gigId));
    } catch (e) {
      setError(e?.message || "Failed to load gig");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gigId]);

  if (loading) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">Loading gig...</p>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Unable to load gig</h1>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={() => navigate("/freelance")}>Back to Gigs</Button>
        </div>
      </MainLayout>
    );
  }

  if (!gig) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Gig Not Found</h1>
          <Button onClick={() => navigate("/freelance")}>Back to Gigs</Button>
        </div>
      </MainLayout>
    );
  }

  const userId = user?._id || user?.id;
  const userVote = useMemo(() => {
    if (!userId) return null;
    if ((gig.upvotes || []).includes(String(userId))) return "up";
    if ((gig.downvotes || []).includes(String(userId))) return "down";
    return null;
  }, [gig.downvotes, gig.upvotes, userId]);

  const netVotes = (gig.upvotes?.length || 0) - (gig.downvotes?.length || 0);
  const daysAgo = Math.floor((Date.now() - new Date(gig.createdAt).getTime()) / (1000 * 60 * 60 * 24));
  const deadlineDays = gig.deadline
    ? Math.ceil((new Date(gig.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : null;

  const handleVote = async (direction) => {
    try {
      const updated = await voteGig(gig.id, direction);
      setGig(updated);
    } catch (e) {
      toast({
        title: "Vote failed",
        description: e?.message || "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleApply = async () => {
    if (!proposal || !budgetQuote || !deliveryTime) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      await applyToGig(gig.id, {
        proposal,
        expectedDelivery: deliveryTime,
        budgetQuote: Number(budgetQuote),
      });

      toast({
        title: "Application Submitted!",
        description: "Your application has been sent to the client.",
      });

      setIsApplyOpen(false);
      setProposal("");
      setBudgetQuote("");
      setDeliveryTime("");

      // refresh counts
      const updated = await getGigById(gig.id);
      setGig(updated);
    } catch (e) {
      toast({
        title: "Application failed",
        description: e?.message || "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleComment = async () => {
    if (!newComment.trim()) return;
    try {
      const created = await addGigComment(gig.id, newComment.trim());
      setComments((prev) => [created, ...prev]);
      toast({
        title: "Comment posted",
        description: "Your comment has been added.",
      });
      setNewComment("");
    } catch (e) {
      toast({
        title: "Failed to post comment",
        description: e?.message || "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleToggleLike = async (commentId) => {
    try {
      const res = await toggleGigCommentLike(gig.id, commentId);
      if (!res) return;
      setComments((prev) =>
        prev.map((c) => (c.id === commentId ? { ...c, likes: res.likes } : c))
      );
    } catch {
      // ignore
    }
  };

  const formatBudget = () => {
    if (gig.budgetType === "hourly") {
      return `$${gig.budgetMin}-$${gig.budgetMax}/hr`;
    }
    return `$${gig.budgetMin.toLocaleString()}-$${gig.budgetMax.toLocaleString()}`;
  };

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/freelance")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Gigs
        </Button>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <Card className="glass border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary">{gig.category}</Badge>
                    <Badge 
                      variant="outline" 
                      className={cn(
                        gig.status === "open" && "border-green-500/50 text-green-500"
                      )}
                    >
                      {gig.status === "open" ? "Open" : gig.status}
                    </Badge>
                    {gig.visibility === "community" && (
                      <Badge variant="outline" className="border-purple-500/50 text-purple-500">
                        Community Only
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                        onClick={async () => {
                          try {
                            const res = await toggleSaveGig(gig.id);
                            setIsSaved((res.savedGigs || []).includes(String(gig.id)));
                          } catch {
                            // ignore
                          }
                        }}
                    >
                      <Bookmark className={cn("w-5 h-5", isSaved && "fill-primary text-primary")} />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <h1 className="text-2xl font-bold mb-4">{gig.title}</h1>
                
                <p className="text-muted-foreground mb-6">{gig.description}</p>

                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    <span>{gig.views} views</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{gig.applicationsCount} applications</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Posted {daysAgo === 0 ? "today" : `${daysAgo}d ago`}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {gig.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="bg-accent/50 border-accent-foreground/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Full Description */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {gig.fullDescription.split('\n').map((line, i) => {
                    if (line.startsWith('## ')) {
                      return <h2 key={i} className="text-lg font-semibold mt-4 mb-2">{line.replace('## ', '')}</h2>;
                    }
                    if (line.startsWith('### ')) {
                      return <h3 key={i} className="text-base font-semibold mt-3 mb-1">{line.replace('### ', '')}</h3>;
                    }
                    if (line.startsWith('- ')) {
                      return <li key={i} className="ml-4">{line.replace('- ', '')}</li>;
                    }
                    if (line.trim() === '') return <br key={i} />;
                    return <p key={i} className="mb-2">{line}</p>;
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Attachments */}
            {gig.attachments.length > 0 && (
              <Card className="glass border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Attachments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {gig.attachments.map((attachment, i) => (
                      <a
                        key={i}
                        href={attachment.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                      >
                        {attachment.type === "image" && <ImageIcon className="w-5 h-5 text-blue-500" />}
                        {attachment.type === "video" && <Video className="w-5 h-5 text-red-500" />}
                        {attachment.type === "pdf" && <FileText className="w-5 h-5 text-orange-500" />}
                        {attachment.type === "link" && <ExternalLink className="w-5 h-5 text-green-500" />}
                        <span className="flex-1 truncate text-sm">{attachment.title || "Attachment"}</span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Comments */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Discussion ({comments.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Add Comment */}
                <div className="flex gap-3">
                  <Textarea
                    placeholder="Ask a question or leave a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={2}
                    className="flex-1"
                  />
                  <Button onClick={handleComment} size="icon" className="self-end">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                <Separator />

                {/* Comments List */}
                {comments.length === 0 ? (
                  <p className="text-center text-muted-foreground py-4">
                    No comments yet. Be the first to ask a question!
                  </p>
                ) : (
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <CommentCard
                        key={comment.id}
                        comment={comment}
                        onToggleLike={() => handleToggleLike(comment.id)}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Budget & Apply */}
            <Card className="glass border-border/50 sticky top-4">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Budget</p>
                  <p className="text-3xl font-bold text-primary">{formatBudget()}</p>
                  <p className="text-sm text-muted-foreground">{gig.budgetType === "hourly" ? "Hourly Rate" : "Fixed Price"}</p>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Duration</p>
                    <p className="font-medium">{gig.duration}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Deadline</p>
                    <p className="font-medium">{deadlineDays > 0 ? `${deadlineDays} days` : "Expired"}</p>
                  </div>
                </div>

                <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full gradient-primary text-primary-foreground">
                      Apply Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Submit Your Proposal</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label>Your Proposal *</Label>
                        <Textarea
                          placeholder="Explain why you're the best fit for this gig..."
                          value={proposal}
                          onChange={(e) => setProposal(e.target.value)}
                          rows={4}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Your Quote ($) *</Label>
                          <Input
                            type="number"
                            placeholder={gig.budgetType === "hourly" ? "75" : "3000"}
                            value={budgetQuote}
                            onChange={(e) => setBudgetQuote(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Delivery Time *</Label>
                          <Input
                            placeholder="e.g., 2 weeks"
                            value={deliveryTime}
                            onChange={(e) => setDeliveryTime(e.target.value)}
                          />
                        </div>
                      </div>
                      <Button onClick={handleApply} className="w-full">
                        Submit Application
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Client
                </Button>
              </CardContent>
            </Card>

            {/* Voting */}
            <Card className="glass border-border/50">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-3">Community Rating</p>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant={userVote === "up" ? "default" : "outline"}
                    size="lg"
                    onClick={() => handleVote("up")}
                    className={cn(userVote === "up" && "bg-green-500 hover:bg-green-600")}
                  >
                    <ThumbsUp className="w-5 h-5" />
                  </Button>
                  <span className={cn(
                    "text-2xl font-bold",
                    netVotes > 0 && "text-green-500",
                    netVotes < 0 && "text-red-500"
                  )}>
                    {netVotes > 0 && "+"}{netVotes}
                  </span>
                  <Button
                    variant={userVote === "down" ? "default" : "outline"}
                    size="lg"
                    onClick={() => handleVote("down")}
                    className={cn(userVote === "down" && "bg-red-500 hover:bg-red-600")}
                  >
                    <ThumbsDown className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Client Info */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">About the Client</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={gig.owner.avatar_url} />
                      <AvatarFallback>{gig.owner.name[0]}</AvatarFallback>
                    </Avatar>
                    {gig.owner.is_premium && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-primary flex items-center justify-center">
                        <Crown className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">{gig.owner.name}</p>
                    <p className="text-sm text-muted-foreground">{gig.owner.role}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span>{gig.owner.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Member since</span>
                    <span>2024</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() => navigate(`/profile/${gig.owner?.id || ""}`)}
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Report */}
            <Button variant="ghost" className="w-full text-muted-foreground">
              <Flag className="w-4 h-4 mr-2" />
              Report this gig
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

function CommentCard({ comment, onToggleLike }) {
  const timeAgo = Math.floor((Date.now() - new Date(comment.createdAt).getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <Avatar className="w-8 h-8">
          <AvatarImage src={comment.user.avatar_url} />
          <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-sm">{comment.user.name}</span>
            <span className="text-xs text-muted-foreground">
              {timeAgo === 0 ? "today" : `${timeAgo}d ago`}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{comment.content}</p>
          <div className="flex items-center gap-4 mt-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-6 px-2 text-xs"
              onClick={onToggleLike}
            >
              <ThumbsUp className="w-3 h-3 mr-1" />
              {comment.likes.length}
            </Button>
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
              Reply
            </Button>
          </div>
        </div>
      </div>

      {/* Replies */}
      {comment.replies.length > 0 && (
        <div className="ml-11 space-y-3 border-l-2 border-border pl-4">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="flex items-start gap-3">
              <Avatar className="w-6 h-6">
                <AvatarImage src={reply.user.avatar_url} />
                <AvatarFallback>{reply.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{reply.user.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {Math.floor((Date.now() - new Date(reply.createdAt).getTime()) / (1000 * 60 * 60 * 24))}d ago
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{reply.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
