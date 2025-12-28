import { mockDevelopers } from "./mockDevelopers";

// Mock Gigs Data
export const mockGigs = [
  {
    id: "gig-1",
    title: "Build a Modern E-commerce Dashboard",
    category: "Web Dev",
    description: "Looking for a React developer to build a responsive e-commerce admin dashboard with analytics, order management, and inventory tracking.",
    fullDescription: `## Project Overview
We need a modern, responsive e-commerce dashboard that will serve as the admin panel for our online store.

### Key Features Required
- **Order Management**: View, filter, and manage orders
- **Inventory Tracking**: Real-time stock levels and alerts
- **Analytics Dashboard**: Sales charts, revenue metrics, customer insights`,
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    budgetType: "fixed",
    budgetMin: 2500,
    budgetMax: 4000,
    deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    duration: "3-4 weeks",
    attachments: [
      { type: "image", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800", title: "Dashboard Reference" },
    ],
    contactPreference: "platform",
    visibility: "public",
    owner: mockDevelopers[0],
    status: "open",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    views: 156,
    upvotes: ["user-1", "user-2", "user-3", "user-5"],
    downvotes: [],
    applicationsCount: 8,
  },
  {
    id: "gig-2",
    title: "Mobile App UI/UX Design for Fitness Platform",
    category: "UI/UX",
    description: "Need a talented UI/UX designer to create stunning mobile app designs for our fitness tracking platform.",
    fullDescription: `## About the Project
We're building a fitness tracking app and need beautiful, intuitive UI/UX designs.`,
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
    budgetType: "fixed",
    budgetMin: 1500,
    budgetMax: 2500,
    deadline: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
    duration: "2-3 weeks",
    attachments: [],
    contactPreference: "platform",
    visibility: "public",
    owner: mockDevelopers[2],
    status: "open",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    views: 234,
    upvotes: ["user-1", "user-4", "user-6"],
    downvotes: [],
    applicationsCount: 12,
  },
];

// Mock Applications Data
export const mockApplications = [
  {
    id: "app-1",
    gigId: "gig-1",
    gig: mockGigs[0],
    applicant: mockDevelopers[1],
    proposal: "I have 7+ years of experience building React dashboards.",
    expectedDelivery: "3 weeks",
    budgetQuote: 3200,
    attachments: [],
    status: "pending",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// Mock Gig Comments
export const mockGigComments = [
  {
    id: "gig-comment-1",
    gigId: "gig-1",
    user: mockDevelopers[3],
    content: "Is the design already finalized?",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    likes: ["user-1", "user-2"],
    replies: [],
  },
];

// Categories with counts
export const gigCategories = [
  { name: "Web Dev", count: 24 },
  { name: "App Dev", count: 18 },
  { name: "AI/ML", count: 12 },
  { name: "UI/UX", count: 15 },
  { name: "DevOps", count: 8 },
  { name: "Blockchain", count: 6 },
  { name: "Data Science", count: 9 },
  { name: "DSA", count: 4 },
  { name: "Other", count: 7 },
];

// Freelance Dashboard Stats
export const mockFreelancerDashboardStats = {
  appliedGigs: [],
  savedGigs: [mockGigs[0]],
  acceptedGigs: [],
  totalEarnings: 15600,
  activeProjects: 2,
  completedProjects: 8,
  successRate: 95,
  avgRating: 4.8,
  weeklyApplications: [
    { week: "W1", applications: 3 },
    { week: "W2", applications: 5 },
  ],
  applicationsByStatus: [
    { status: "Pending", count: 4, color: "hsl(var(--chart-1))" },
    { status: "Accepted", count: 8, color: "hsl(var(--chart-2))" },
  ],
};

export const mockClientDashboardStats = {
  postedGigs: mockGigs,
  totalGigsPosted: 12,
  activeGigs: 4,
  completedGigs: 8,
  applicationsReceived: mockApplications,
  acceptedFreelancers: [],
  totalSpent: 28500,
  avgGigBudget: 4200,
  gigPerformance: [],
  monthlySpending: [],
  applicationsByGig: [],
};
