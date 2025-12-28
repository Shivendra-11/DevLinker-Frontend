import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ProfileStrengthMeter } from "@/components/profile/ProfileStrengthMeter";
import { 
  Edit, Camera, MapPin, Briefcase, Github, Linkedin, Globe, Check, X,
  Eye, Share2, Crown, Shield, ExternalLink, Sparkles, Star, Zap, Heart
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const allSkills = [
  "React", "TypeScript", "Node.js", "Python", "Go", "Rust", 
  "AWS", "Docker", "Kubernetes", "GraphQL", "PostgreSQL", "MongoDB",
  "Vue.js", "Angular", "Next.js", "TailwindCSS", "Figma", "UI/UX"
];

const Profile = () => {
  const { profile, updateProfile, loading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile || {});
  const [previewMode, setPreviewMode] = useState(false);

  if (loading || !profile) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
            <Sparkles className="w-6 h-6 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
        </div>
      </MainLayout>
    );
  }

  const displayProfile = previewMode ? editedProfile : (isEditing ? editedProfile : profile);

  const handleSave = async () => {
    await updateProfile(editedProfile);
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Profile link copied to clipboard!");
  };

  const toggleSkill = (skill) => {
    const currentSkills = editedProfile.skills || [];
    if (currentSkills.includes(skill)) {
      setEditedProfile({ ...editedProfile, skills: currentSkills.filter((s) => s !== skill) });
    } else {
      setEditedProfile({ ...editedProfile, skills: [...currentSkills, skill] });
    }
  };

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto pb-8">
        {previewMode && (
          <div className="mb-6 p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-2"><Eye className="w-5 h-5 text-primary" /><span className="font-medium">Preview Mode</span></div>
            <Button variant="outline" size="sm" onClick={() => setPreviewMode(false)}><X className="w-4 h-4 mr-2" />Exit</Button>
          </div>
        )}

        <div className="glass rounded-3xl overflow-hidden animate-scale-in">
          <div className="relative">
            <div className="h-32 rounded-t-2xl gradient-primary relative overflow-hidden">
              <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-white/10 blur-2xl animate-pulse" />
            </div>
            <div className="flex justify-center -mt-16 relative z-10">
              <div className="relative group">
                <img src={displayProfile.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.id}`} alt={displayProfile.name} className="relative w-32 h-32 rounded-2xl border-4 border-background object-cover shadow-2xl bg-muted" />
                {profile.is_premium && (<div className="absolute -top-3 -right-3 animate-bounce" style={{ animationDuration: '2s' }}><Badge className="gradient-primary gap-1 shadow-lg"><Crown className="w-3 h-3" />Premium</Badge></div>)}
                {isEditing && (<button className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg"><Camera className="w-4 h-4" /></button>)}
              </div>
            </div>
          </div>

          <div className="pt-6 px-6 pb-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">{displayProfile.name}</h1>
              <p className="text-primary font-medium mt-1">{displayProfile.role}</p>
              <div className="flex items-center justify-center gap-4 mt-3 text-sm text-muted-foreground">
                {displayProfile.experience && <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50"><Briefcase className="w-3.5 h-3.5" />{displayProfile.experience}</span>}
                {displayProfile.location && <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50"><MapPin className="w-3.5 h-3.5" />{displayProfile.location}</span>}
              </div>
              <div className="mt-4"><Badge variant="secondary" className={cn("px-4 py-1.5", displayProfile.availability === "Available" && "bg-green-500/10 text-green-500")}>{displayProfile.availability}</Badge></div>
            </div>

            {!previewMode && (
              <div className="flex gap-3 justify-center mb-6">
                <Button variant={isEditing ? "outline" : "default"} className={!isEditing ? "gradient-primary" : ""} onClick={() => isEditing ? handleSave() : (setEditedProfile(profile), setIsEditing(true))}>
                  {isEditing ? <><Check className="w-4 h-4 mr-2" />Save</> : <><Edit className="w-4 h-4 mr-2" />Edit</>}
                </Button>
                {isEditing && <Button variant="ghost" onClick={() => setIsEditing(false)}>Cancel</Button>}
                {!isEditing && (<><Button variant="outline" onClick={() => setPreviewMode(true)}><Eye className="w-4 h-4 mr-2" />Preview</Button><Button variant="outline" onClick={handleShare}><Share2 className="w-4 h-4 mr-2" />Share</Button></>)}
              </div>
            )}

            <ProfileStrengthMeter profile={displayProfile} />

            <Tabs defaultValue="about" className="w-full mt-6">
              <TabsList className="grid w-full grid-cols-3 mb-6"><TabsTrigger value="about">About</TabsTrigger><TabsTrigger value="skills">Skills</TabsTrigger><TabsTrigger value="links">Links</TabsTrigger></TabsList>
              <TabsContent value="about" className="space-y-6">
                <div className="p-5 rounded-2xl glass border border-border/50">
                  <Label className="text-muted-foreground text-sm">Bio</Label>
                  {isEditing ? <Textarea value={editedProfile.bio || ""} onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })} rows={4} className="mt-3" /> : <p className="mt-3">{displayProfile.bio || "No bio yet"}</p>}
                </div>
              </TabsContent>
              <TabsContent value="skills" className="space-y-4">
                <div className="p-5 rounded-2xl glass border border-border/50">
                  <Label className="text-muted-foreground text-sm mb-4 block">{isEditing ? "Select your skills" : "Skills"}</Label>
                  <div className="flex flex-wrap gap-2">
                    {(isEditing ? allSkills : (displayProfile.skills || [])).map((skill) => (
                      <Badge key={skill} variant={isEditing ? (editedProfile.skills?.includes(skill) ? "default" : "outline") : "secondary"} className={cn("cursor-pointer", isEditing && editedProfile.skills?.includes(skill) && "gradient-primary")} onClick={() => isEditing && toggleSkill(skill)}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="links" className="space-y-4">
                <div className="p-4 rounded-2xl glass border border-border/50">
                  <div className="flex items-center gap-3"><Github className="w-5 h-5" /><div className="flex-1"><Label className="text-muted-foreground text-sm">GitHub</Label>
                  {isEditing ? <Input value={editedProfile.github || ""} onChange={(e) => setEditedProfile({ ...editedProfile, github: e.target.value })} className="mt-1" /> : displayProfile.github ? <a href={displayProfile.github} target="_blank" className="text-primary hover:underline flex items-center gap-1 mt-1">{displayProfile.github.replace('https://github.com/', '@')}<ExternalLink className="w-3 h-3" /></a> : <p className="text-muted-foreground text-sm mt-1">Not added</p>}</div></div>
                </div>
                <div className="p-4 rounded-2xl glass border border-border/50">
                  <div className="flex items-center gap-3"><Linkedin className="w-5 h-5 text-[#0077B5]" /><div className="flex-1"><Label className="text-muted-foreground text-sm">LinkedIn</Label>
                  {isEditing ? <Input value={editedProfile.linkedin || ""} onChange={(e) => setEditedProfile({ ...editedProfile, linkedin: e.target.value })} className="mt-1" /> : displayProfile.linkedin ? <a href={displayProfile.linkedin} target="_blank" className="text-[#0077B5] hover:underline flex items-center gap-1 mt-1">LinkedIn Profile<ExternalLink className="w-3 h-3" /></a> : <p className="text-muted-foreground text-sm mt-1">Not added</p>}</div></div>
                </div>
                <div className="p-4 rounded-2xl glass border border-border/50">
                  <div className="flex items-center gap-3"><Globe className="w-5 h-5 text-primary" /><div className="flex-1"><Label className="text-muted-foreground text-sm">Portfolio</Label>
                  {isEditing ? <Input value={editedProfile.portfolio || ""} onChange={(e) => setEditedProfile({ ...editedProfile, portfolio: e.target.value })} className="mt-1" /> : displayProfile.portfolio ? <a href={displayProfile.portfolio} target="_blank" className="text-primary hover:underline flex items-center gap-1 mt-1">{displayProfile.portfolio.replace(/^https?:\/\//, '')}<ExternalLink className="w-3 h-3" /></a> : <p className="text-muted-foreground text-sm mt-1">Not added</p>}</div></div>
                </div>
              </TabsContent>
            </Tabs>

            {!profile.is_premium && (
              <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center"><Crown className="w-6 h-6 text-primary-foreground" /></div>
                  <div className="flex-1"><h3 className="font-semibold">Who viewed your profile?</h3><p className="text-sm text-muted-foreground">Upgrade to see who's interested</p></div>
                  <Button className="gradient-primary"><Zap className="w-4 h-4 mr-2" />Upgrade</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
