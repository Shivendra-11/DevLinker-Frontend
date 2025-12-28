export const mockDevelopers = [
  {
    id: "mock-1",
    name: "Sarah Chen",
    role: "Full Stack Developer",
    bio: "Passionate about building scalable web applications. Love React and Node.js ecosystem. Always learning new technologies.",
    avatar_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    experience: "5+ years",
    location: "San Francisco, CA",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    availability: "Open to work",
    github: "github.com/sarahchen",
    linkedin: "linkedin.com/in/sarahchen",
    portfolio: "sarahchen.dev",
    is_premium: true,
    verifiedSkills: ["React", "TypeScript", "Node.js"],
    badges: ["Top Contributor", "React Expert", "Mentor"],
  },
  {
    id: "mock-2",
    name: "Marcus Johnson",
    role: "Backend Engineer",
    bio: "Building robust APIs and microservices. Kubernetes enthusiast. Coffee addict.",
    avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    experience: "7+ years",
    location: "New York, NY",
    skills: ["Python", "Go", "Docker", "Kubernetes", "MongoDB"],
    availability: "Open to collaborate",
    github: "github.com/marcusj",
    linkedin: "linkedin.com/in/marcusj",
    is_premium: false,
    verifiedSkills: ["Python", "Kubernetes"],
    badges: ["API Master", "DevOps Pro"],
  },
  {
    id: "mock-3",
    name: "Emily Rodriguez",
    role: "Frontend Developer",
    bio: "UI/UX enthusiast with a focus on accessibility and performance. Vue.js advocate.",
    avatar_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    experience: "3+ years",
    location: "Austin, TX",
    skills: ["Vue.js", "JavaScript", "CSS", "Figma", "Tailwind"],
    availability: "Looking for co-founder",
    github: "github.com/emilydev",
    linkedin: "linkedin.com/in/emilyrod",
    portfolio: "emilyrodriguez.io",
    is_premium: false,
    verifiedSkills: ["Vue.js", "CSS"],
    badges: ["Design Eye", "A11y Champion"],
  },
  {
    id: "mock-4",
    name: "David Kim",
    role: "Mobile Developer",
    bio: "Cross-platform mobile development expert. React Native and Flutter. Building apps that matter.",
    avatar_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    experience: "4+ years",
    location: "Seattle, WA",
    skills: ["React Native", "Flutter", "iOS", "Android", "TypeScript"],
    availability: "Open to work",
    github: "github.com/davidkim",
    linkedin: "linkedin.com/in/davidkim",
    portfolio: "davidkim.dev",
    is_premium: true,
    verifiedSkills: ["React Native", "Flutter", "TypeScript"],
    badges: ["Mobile Expert", "Cross-Platform Pro"],
  },
  {
    id: "mock-5",
    name: "Priya Patel",
    role: "DevOps Engineer",
    bio: "Infrastructure as code evangelist. Making deployments boring since 2019.",
    avatar_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    experience: "6+ years",
    location: "Boston, MA",
    skills: ["AWS", "Terraform", "Docker", "Jenkins", "Linux"],
    availability: "Open to collaborate",
    github: "github.com/priyapatel",
    linkedin: "linkedin.com/in/priyapatel",
    is_premium: false,
    verifiedSkills: ["AWS", "Docker", "Terraform"],
    badges: ["Cloud Architect", "CI/CD Master"],
  },
  {
    id: "mock-6",
    name: "Alex Thompson",
    role: "ML Engineer",
    bio: "Machine learning practitioner focused on NLP and computer vision. PyTorch lover.",
    avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    experience: "4+ years",
    location: "Remote",
    skills: ["Python", "PyTorch", "TensorFlow", "AWS", "Docker"],
    availability: "Looking for co-founder",
    github: "github.com/alexthompson",
    linkedin: "linkedin.com/in/alexthompson",
    portfolio: "alexthompson.ai",
    is_premium: true,
    verifiedSkills: ["Python", "PyTorch", "TensorFlow"],
    badges: ["AI Pioneer", "Research Pro", "Open Source Hero"],
  },
  {
    id: "mock-7",
    name: "Jessica Wu",
    role: "Full Stack Developer",
    bio: "MERN stack specialist. Open source contributor. Tech blogger.",
    avatar_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
    experience: "5+ years",
    location: "Los Angeles, CA",
    skills: ["MongoDB", "Express", "React", "Node.js", "GraphQL"],
    availability: "Open to work",
    github: "github.com/jessicawu",
    linkedin: "linkedin.com/in/jessicawu",
    portfolio: "jessicawu.dev",
    is_premium: false,
    verifiedSkills: ["React", "Node.js", "GraphQL"],
    badges: ["MERN Master", "Blogger"],
  },
  {
    id: "mock-8",
    name: "Ryan Martinez",
    role: "Blockchain Developer",
    bio: "Web3 enthusiast building the decentralized future. Solidity and Rust.",
    avatar_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    experience: "3+ years",
    location: "Miami, FL",
    skills: ["Solidity", "Rust", "Web3.js", "Ethereum", "React"],
    availability: "Open to collaborate",
    github: "github.com/ryanmart",
    linkedin: "linkedin.com/in/ryanmart",
    portfolio: "ryanmartinez.eth",
    is_premium: true,
    verifiedSkills: ["Solidity", "Ethereum"],
    badges: ["Web3 Pioneer", "Smart Contract Expert"],
  },
];

export const allTechStacks = [
  "React", "Vue.js", "Angular", "Node.js", "Python", "Go", "TypeScript", "JavaScript",
  "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes", "Flutter", "React Native",
  "Solidity", "Rust", "TensorFlow", "PyTorch", "GraphQL", "Tailwind", "Figma"
];

export const experienceLevels = ["1-2 years", "3+ years", "4+ years", "5+ years", "6+ years", "7+ years"];
export const roles = ["Full Stack Developer", "Frontend Developer", "Backend Engineer", "Mobile Developer", "DevOps Engineer", "ML Engineer", "Blockchain Developer"];
export const availabilityOptions = ["Open to work", "Open to collaborate", "Looking for co-founder", "Not available"];

// Skill badges with verification status
export const skillBadges = [
  { id: "react", name: "React", icon: "⚛️", color: "bg-blue-500/20 text-blue-400 border-blue-500/30", category: "Frontend" },
  { id: "typescript", name: "TypeScript", icon: "📘", color: "bg-blue-600/20 text-blue-300 border-blue-600/30", category: "Language" },
  { id: "node", name: "Node.js", icon: "🟢", color: "bg-green-500/20 text-green-400 border-green-500/30", category: "Backend" },
  { id: "python", name: "Python", icon: "🐍", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", category: "Language" },
  { id: "aws", name: "AWS", icon: "☁️", color: "bg-orange-500/20 text-orange-400 border-orange-500/30", category: "Cloud" },
  { id: "docker", name: "Docker", icon: "🐳", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30", category: "DevOps" },
  { id: "kubernetes", name: "Kubernetes", icon: "☸️", color: "bg-purple-500/20 text-purple-400 border-purple-500/30", category: "DevOps" },
  { id: "graphql", name: "GraphQL", icon: "◈", color: "bg-pink-500/20 text-pink-400 border-pink-500/30", category: "API" },
  { id: "mongodb", name: "MongoDB", icon: "🍃", color: "bg-green-600/20 text-green-300 border-green-600/30", category: "Database" },
  { id: "postgresql", name: "PostgreSQL", icon: "🐘", color: "bg-blue-700/20 text-blue-300 border-blue-700/30", category: "Database" },
  { id: "flutter", name: "Flutter", icon: "💙", color: "bg-sky-500/20 text-sky-400 border-sky-500/30", category: "Mobile" },
  { id: "solidity", name: "Solidity", icon: "⟠", color: "bg-gray-500/20 text-gray-400 border-gray-500/30", category: "Web3" },
];

export const achievementBadges = [
  { id: "top-contributor", name: "Top Contributor", icon: "🏆", description: "Contributed to 10+ projects" },
  { id: "mentor", name: "Mentor", icon: "🎓", description: "Helped 5+ developers" },
  { id: "open-source-hero", name: "Open Source Hero", icon: "⭐", description: "100+ GitHub stars" },
  { id: "early-adopter", name: "Early Adopter", icon: "🚀", description: "Joined in the first month" },
  { id: "connector", name: "Super Connector", icon: "🔗", description: "Made 50+ connections" },
  { id: "verified", name: "Verified Developer", icon: "✓", description: "Identity verified" },
];

// Mock connections data
export const mockConnections = [
  {
    id: "conn-1",
    status: "accepted",
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    profile: mockDevelopers[0],
  },
  {
    id: "conn-2",
    status: "accepted",
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    profile: mockDevelopers[1],
  },
  {
    id: "conn-3",
    status: "accepted",
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    profile: mockDevelopers[3],
  },
  {
    id: "conn-4",
    status: "pending",
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    profile: mockDevelopers[2],
  },
  {
    id: "conn-5",
    status: "pending",
    created_at: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    profile: mockDevelopers[5],
  },
];

// Mock messages/chats data with code snippets
export const mockChats = [
  {
    id: "chat-1",
    profile: mockDevelopers[0],
    lastMessage: "Hey! Would love to collaborate on that React project you mentioned.",
    lastMessageTime: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    unreadCount: 2,
    messages: [
      { id: "msg-1", senderId: "mock-1", content: "Hi there! I saw your profile and really liked your work.", timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), type: "text" },
      { id: "msg-2", senderId: "current-user", content: "Thanks! Your portfolio is impressive too. Love the React projects.", timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000).toISOString(), type: "text" },
      { id: "msg-3", senderId: "mock-1", content: "Here's the custom hook I mentioned:", timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), type: "text" },
      { id: "msg-4", senderId: "mock-1", content: "```typescript\nconst useDebounce = <T>(value: T, delay: number): T => {\n  const [debouncedValue, setDebouncedValue] = useState<T>(value);\n\n  useEffect(() => {\n    const handler = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delay);\n\n    return () => clearTimeout(handler);\n  }, [value, delay]);\n\n  return debouncedValue;\n};\n```", timestamp: new Date(Date.now() - 55 * 60 * 1000).toISOString(), type: "code", language: "typescript" },
      { id: "msg-5", senderId: "mock-1", content: "Hey! Would love to collaborate on that React project you mentioned.", timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), type: "text" },
    ]
  },
  {
    id: "chat-2",
    profile: mockDevelopers[1],
    lastMessage: "The API is ready for integration. Let me know when you're free for a call.",
    lastMessageTime: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    unreadCount: 0,
    messages: [
      { id: "msg-6", senderId: "current-user", content: "Hey Marcus, how's the backend coming along?", timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), type: "text" },
      { id: "msg-7", senderId: "mock-2", content: "Going great! Almost done with the auth module.", timestamp: new Date(Date.now() - 4.5 * 60 * 60 * 1000).toISOString(), type: "text" },
      { id: "msg-8", senderId: "mock-2", content: "Check out this endpoint structure:", timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), type: "text" },
      { id: "msg-9", senderId: "mock-2", content: "```python\n@app.route('/api/users/<user_id>', methods=['GET'])\n@jwt_required()\ndef get_user(user_id):\n    user = User.query.get_or_404(user_id)\n    return jsonify(user.to_dict())\n```", timestamp: new Date(Date.now() - 3.5 * 60 * 60 * 1000).toISOString(), type: "code", language: "python" },
      { id: "msg-10", senderId: "mock-2", content: "The API is ready for integration. Let me know when you're free for a call.", timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), type: "text" },
    ]
  },
  {
    id: "chat-3",
    profile: mockDevelopers[3],
    lastMessage: "Sure, I can help with the mobile app. React Native would be perfect for this.",
    lastMessageTime: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    unreadCount: 1,
    messages: [
      { id: "msg-11", senderId: "current-user", content: "David, do you have experience with mobile notifications?", timestamp: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(), type: "text" },
      { id: "msg-12", senderId: "mock-4", content: "Yes! I've implemented push notifications in several apps.", timestamp: new Date(Date.now() - 25 * 60 * 60 * 1000).toISOString(), type: "text" },
      { id: "msg-13", senderId: "mock-4", content: "Sure, I can help with the mobile app. React Native would be perfect for this.", timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), type: "text" },
    ]
  },
];

// Mock notifications data
export const mockNotifications = [
  { id: "notif-1", type: "match", title: "New Match!", description: "You matched with Sarah Chen. Start a conversation!", is_read: false, created_at: new Date(Date.now() - 30 * 60 * 1000).toISOString() },
  { id: "notif-2", type: "message", title: "New Message", description: "Marcus Johnson sent you a message.", is_read: false, created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() },
  { id: "notif-3", type: "view", title: "Profile View", description: "Emily Rodriguez viewed your profile.", is_read: true, created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString() },
  { id: "notif-4", type: "connection", title: "Connection Request", description: "Alex Thompson wants to connect with you.", is_read: false, created_at: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString() },
  { id: "notif-5", type: "match", title: "New Match!", description: "You matched with David Kim. Say hello!", is_read: true, created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() },
  { id: "notif-6", type: "view", title: "Profile Views", description: "5 developers viewed your profile this week.", is_read: true, created_at: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString() },
  { id: "notif-7", type: "project", title: "Project Interest", description: "Jessica Wu is interested in your AI Code Review project.", is_read: false, created_at: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString() },
  { id: "notif-8", type: "badge", title: "New Badge Earned!", description: "You earned the 'Top Contributor' badge.", is_read: false, created_at: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString() },
];

// Enhanced project boards data with media, voting, comments
export const mockProjectBoards = [
  {
    id: "proj-1",
    title: "AI-Powered Code Review Tool",
    description: "Building an intelligent code review assistant using GPT-4 and static analysis. Looking for frontend developers to create the dashboard and UX flow.",
    fullDescription: `## Problem Statement
Manual code reviews are time-consuming and inconsistent. Developers spend hours reviewing code that could be automated.

## Our Solution
An AI-powered tool that provides instant, intelligent feedback on code quality, security vulnerabilities, and best practices.

### Key Features
- **Automated Analysis**: GPT-4 powered code understanding
- **Security Scanning**: Detect vulnerabilities before they ship
- **Style Enforcement**: Ensure consistent coding standards
- **Performance Tips**: Identify bottlenecks and optimization opportunities

## Tech Stack
- React for the dashboard
- Python FastAPI backend
- PostgreSQL for data storage
- Docker for deployment

## Looking For
We need frontend developers who can create an intuitive dashboard experience. Experience with data visualization is a plus!`,
    techStack: ["React", "Python", "OpenAI", "PostgreSQL", "Docker"],
    lookingFor: ["Frontend Developer", "UI/UX Designer"],
    teamSize: "3-4 developers",
    owner: mockDevelopers[5],
    interested: [mockDevelopers[0], mockDevelopers[6]],
    interestedCount: 8,
    status: "active",
    category: "AI/ML",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    media: {
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
      ],
      videos: [
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Demo Video" }
      ],
      links: [
        { title: "GitHub Repository", url: "https://github.com/example/code-review", type: "github" },
        { title: "Live Demo", url: "https://demo.codereview.ai", type: "demo" },
        { title: "Documentation", url: "https://docs.codereview.ai", type: "docs" },
      ]
    },
    upvotes: ["user-1", "user-2", "user-3", "user-5", "user-8"],
    downvotes: ["user-4"],
    views: 234,
    viewedBy: ["user-1", "user-2", "user-3", "user-4", "user-5"],
  },
  {
    id: "proj-2",
    title: "Decentralized Marketplace",
    description: "Web3 marketplace for digital assets. Smart contracts are ready, need help with frontend and user experience. Revenue share model for contributors.",
    fullDescription: `## The Vision
Create a truly decentralized marketplace where creators can sell digital assets without intermediaries.

## What We've Built
- Complete smart contract infrastructure on Ethereum
- IPFS integration for decentralized storage
- Basic React frontend

## What We Need
Looking for developers to help with:
1. Frontend polish and UX improvements
2. Mobile responsiveness
3. Additional blockchain integrations

## Revenue Model
Contributors receive a share of platform fees based on their contributions.`,
    techStack: ["Solidity", "React", "Web3.js", "IPFS", "Ethereum"],
    lookingFor: ["Full Stack Developer", "Blockchain Developer"],
    teamSize: "4-5 developers",
    owner: mockDevelopers[7],
    interested: [mockDevelopers[0], mockDevelopers[3], mockDevelopers[6]],
    interestedCount: 12,
    status: "active",
    category: "Web3",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    media: {
      images: [
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
        "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800",
      ],
      videos: [],
      links: [
        { title: "Smart Contracts", url: "https://github.com/example/marketplace", type: "github" },
        { title: "Whitepaper", url: "https://example.com/whitepaper", type: "docs" },
      ]
    },
    upvotes: ["user-1", "user-3", "user-5", "user-7", "user-9", "user-10", "user-11"],
    downvotes: ["user-2", "user-6"],
    views: 456,
    viewedBy: ["user-1", "user-2", "user-3"],
  },
  {
    id: "proj-3",
    title: "Health & Fitness Mobile App",
    description: "Cross-platform fitness tracking app with AI-powered workout recommendations. MVP stage, looking for contributors who are passionate about health tech.",
    fullDescription: `## Our Mission
Make personalized fitness accessible to everyone through AI-powered recommendations.

## Current Progress
- Basic workout tracking
- User profiles and goals
- Initial ML model for recommendations

## Tech Challenges
- Real-time heart rate integration
- Offline-first architecture
- Battery optimization

Join us if you're passionate about health and technology!`,
    techStack: ["React Native", "Node.js", "MongoDB", "TensorFlow"],
    lookingFor: ["Mobile Developer", "ML Engineer", "Backend Developer"],
    teamSize: "3-4 developers",
    owner: mockDevelopers[3],
    interested: [mockDevelopers[5]],
    interestedCount: 15,
    status: "active",
    category: "Health",
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    media: {
      images: [
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
        "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800",
      ],
      videos: [
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "App Walkthrough" }
      ],
      links: [
        { title: "Figma Designs", url: "https://figma.com/example", type: "figma" },
        { title: "App Store (Beta)", url: "https://testflight.apple.com/example", type: "demo" },
      ]
    },
    upvotes: ["user-2", "user-4", "user-6", "user-8", "user-10", "user-12", "user-14", "user-15"],
    downvotes: [],
    views: 678,
    viewedBy: ["user-1", "user-2", "user-3", "user-4"],
  },
  {
    id: "proj-4",
    title: "Developer Learning Platform",
    description: "Interactive coding platform with real-time collaboration features. Think LeetCode meets Google Docs. Pre-seed stage with strong traction.",
    fullDescription: `## What We're Building
An interactive platform where developers can learn, practice, and collaborate in real-time.

## Features
- Live code collaboration
- AI-powered hints and explanations
- Structured learning paths
- Community challenges

## Traction
- 500+ beta users
- 85% retention rate
- Pre-seed funding secured

Looking for passionate developers to join our founding team!`,
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket", "Docker"],
    lookingFor: ["Full Stack Developer", "DevOps Engineer"],
    teamSize: "5-6 developers",
    owner: mockDevelopers[0],
    interested: [mockDevelopers[1], mockDevelopers[4]],
    interestedCount: 22,
    status: "active",
    category: "Education",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    media: {
      images: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
      ],
      videos: [],
      links: [
        { title: "Live Platform", url: "https://devlearn.example.com", type: "demo" },
        { title: "GitHub", url: "https://github.com/example/devlearn", type: "github" },
      ]
    },
    upvotes: ["user-1", "user-2", "user-3", "user-4", "user-5", "user-6", "user-7", "user-8", "user-9", "user-10", "user-11", "user-12"],
    downvotes: ["user-13"],
    views: 892,
    viewedBy: ["user-1", "user-2", "user-3", "user-4", "user-5"],
  },
  {
    id: "proj-5",
    title: "E-commerce Analytics Dashboard",
    description: "Real-time analytics platform for e-commerce businesses. Beautiful visualizations and actionable insights. Looking for data visualization experts.",
    fullDescription: `## Problem
E-commerce businesses struggle to get actionable insights from their data.

## Solution
A beautiful, real-time analytics dashboard that makes data accessible to everyone on the team.

## Features
- Real-time sales tracking
- Customer behavior analysis
- Inventory predictions
- Custom report builder`,
    techStack: ["Vue.js", "Python", "PostgreSQL", "Redis", "D3.js"],
    lookingFor: ["Frontend Developer", "Data Engineer"],
    teamSize: "2-3 developers",
    owner: mockDevelopers[2],
    interested: [mockDevelopers[1]],
    interestedCount: 9,
    status: "active",
    category: "Analytics",
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    media: {
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      ],
      videos: [],
      links: [
        { title: "Demo Dashboard", url: "https://analytics.example.com", type: "demo" },
      ]
    },
    upvotes: ["user-1", "user-5", "user-9"],
    downvotes: ["user-3"],
    views: 345,
    viewedBy: ["user-1", "user-2"],
  },
  {
    id: "proj-6",
    title: "DevOps Automation Suite",
    description: "Open-source CI/CD toolkit with modern UI. Simplifying infrastructure management for small teams. Already have 200+ GitHub stars.",
    fullDescription: `## Open Source CI/CD
Making DevOps accessible to small teams with limited resources.

## Current State
- 200+ GitHub stars
- Active community
- Core features stable

## Roadmap
- Kubernetes integration
- Self-hosted runners
- Plugin marketplace`,
    techStack: ["Go", "React", "Kubernetes", "Terraform", "gRPC"],
    lookingFor: ["DevOps Engineer", "Backend Developer"],
    teamSize: "3-4 developers",
    owner: mockDevelopers[4],
    interested: [mockDevelopers[1], mockDevelopers[5]],
    interestedCount: 18,
    status: "active",
    category: "DevOps",
    createdAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
    media: {
      images: [
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800",
      ],
      videos: [],
      links: [
        { title: "GitHub", url: "https://github.com/example/devops-suite", type: "github" },
        { title: "Documentation", url: "https://docs.devops-suite.io", type: "docs" },
      ]
    },
    upvotes: ["user-2", "user-4", "user-6", "user-8", "user-10"],
    downvotes: [],
    views: 567,
    viewedBy: ["user-1", "user-2", "user-3"],
  },
];

// Mock comments for projects
export const mockProjectComments = [
  {
    id: "comment-1",
    projectId: "proj-1",
    userId: "mock-1",
    user: mockDevelopers[0],
    content: "This looks amazing! I'd love to contribute to the frontend. I have experience with similar data visualization dashboards.",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    likes: ["user-2", "user-3", "user-5"],
    replies: [
      {
        id: "reply-1",
        userId: "mock-6",
        user: mockDevelopers[5],
        content: "Thanks Sarah! Would love to have you on board. DM me and let's discuss!",
        createdAt: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000).toISOString(),
        likes: ["user-1"],
      }
    ]
  },
  {
    id: "comment-2",
    projectId: "proj-1",
    userId: "mock-2",
    user: mockDevelopers[1],
    content: "Have you considered using LangChain for the AI orchestration? It could simplify the GPT-4 integration significantly.",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    likes: ["user-1", "user-4"],
    replies: []
  },
  {
    id: "comment-3",
    projectId: "proj-1",
    userId: "mock-4",
    user: mockDevelopers[3],
    content: "What's the monetization strategy? Is this going to be open source or SaaS?",
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    likes: ["user-2"],
    replies: [
      {
        id: "reply-2",
        userId: "mock-6",
        user: mockDevelopers[5],
        content: "We're planning a freemium model - open source for personal use, paid tiers for teams and enterprises.",
        createdAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
        likes: ["user-4", "user-5", "user-6"],
      }
    ]
  },
  {
    id: "comment-4",
    projectId: "proj-2",
    userId: "mock-1",
    user: mockDevelopers[0],
    content: "Web3 is the future! I've been wanting to get into blockchain development. Would this be a good first project?",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    likes: ["user-7", "user-8"],
    replies: [
      {
        id: "reply-3",
        userId: "mock-8",
        user: mockDevelopers[7],
        content: "Absolutely! We have experienced blockchain devs who can mentor. The frontend work is similar to traditional React apps.",
        createdAt: new Date(Date.now() - 4.5 * 24 * 60 * 60 * 1000).toISOString(),
        likes: ["user-1"],
      }
    ]
  },
  {
    id: "comment-5",
    projectId: "proj-3",
    userId: "mock-6",
    user: mockDevelopers[5],
    content: "The ML recommendation engine sounds interesting. What kind of data are you using for training?",
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    likes: ["user-3", "user-4", "user-5"],
    replies: []
  },
  {
    id: "comment-6",
    projectId: "proj-4",
    userId: "mock-3",
    user: mockDevelopers[2],
    content: "Love the concept! Real-time collaboration for coding is something I've always wanted. Count me in!",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    likes: ["user-1", "user-2"],
    replies: []
  },
];

export const projectCategories = ["All", "AI/ML", "Web3", "Health", "Education", "Analytics", "DevOps", "Social", "Fintech"];

// Enhanced dashboard data with analytics
export const mockDashboardStats = {
  stats: [
    { label: "Profile Views", value: 127, change: +12, trend: [45, 52, 48, 61, 55, 67, 72] },
    { label: "Connections", value: 24, change: +3, trend: [15, 17, 18, 19, 21, 22, 24] },
    { label: "Messages", value: 48, change: +8, trend: [32, 35, 38, 41, 44, 45, 48] },
    { label: "Interests Received", value: 36, change: +5, trend: [22, 25, 28, 30, 31, 34, 36] },
  ],
  weeklyActivity: [
    { day: "Mon", views: 15, connections: 2, messages: 5 },
    { day: "Tue", views: 22, connections: 4, messages: 8 },
    { day: "Wed", views: 18, connections: 1, messages: 6 },
    { day: "Thu", views: 28, connections: 5, messages: 12 },
    { day: "Fri", views: 24, connections: 3, messages: 9 },
    { day: "Sat", views: 12, connections: 1, messages: 4 },
    { day: "Sun", views: 8, connections: 2, messages: 3 },
  ],
  monthlyGrowth: [
    { month: "Jan", connections: 5, matches: 8, views: 45 },
    { month: "Feb", connections: 8, matches: 12, views: 62 },
    { month: "Mar", connections: 12, matches: 18, views: 78 },
    { month: "Apr", connections: 15, matches: 22, views: 95 },
    { month: "May", connections: 20, matches: 28, views: 112 },
    { month: "Jun", connections: 24, matches: 36, views: 127 },
  ],
  recentActivity: [
    { type: "view", text: "Sarah Chen viewed your profile", time: "2 hours ago", avatar: mockDevelopers[0].avatar_url },
    { type: "connection", text: "Marcus Johnson connected with you", time: "5 hours ago", avatar: mockDevelopers[1].avatar_url },
    { type: "message", text: "New message from David Kim", time: "Yesterday", avatar: mockDevelopers[3].avatar_url },
    { type: "interest", text: "Emily Rodriguez showed interest in your project", time: "2 days ago", avatar: mockDevelopers[2].avatar_url },
    { type: "view", text: "Alex Thompson viewed your profile", time: "3 days ago", avatar: mockDevelopers[5].avatar_url },
  ],
  topSkillsViewed: [
    { skill: "React", views: 45, percentage: 35 },
    { skill: "TypeScript", views: 38, percentage: 30 },
    { skill: "Node.js", views: 32, percentage: 25 },
    { skill: "PostgreSQL", views: 25, percentage: 20 },
    { skill: "AWS", views: 18, percentage: 14 },
  ],
  profileViewers: [
    { profile: mockDevelopers[0], viewedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), count: 3 },
    { profile: mockDevelopers[5], viewedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), count: 2 },
    { profile: mockDevelopers[2], viewedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), count: 1 },
    { profile: mockDevelopers[7], viewedAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(), count: 1 },
    { profile: mockDevelopers[6], viewedAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(), count: 2 },
  ],
  matchRate: {
    sent: 45,
    matched: 24,
    percentage: 53,
    weeklyChange: +5,
  },
  responseRate: {
    received: 36,
    responded: 28,
    percentage: 78,
    avgResponseTime: "2.5 hours",
  },
  peakHours: [
    { hour: "9 AM", activity: 12 },
    { hour: "10 AM", activity: 18 },
    { hour: "11 AM", activity: 25 },
    { hour: "12 PM", activity: 22 },
    { hour: "1 PM", activity: 15 },
    { hour: "2 PM", activity: 28 },
    { hour: "3 PM", activity: 35 },
    { hour: "4 PM", activity: 32 },
    { hour: "5 PM", activity: 28 },
    { hour: "6 PM", activity: 20 },
    { hour: "7 PM", activity: 15 },
    { hour: "8 PM", activity: 10 },
  ],
};

// For backward compatibility
export const mockProjects = mockProjectBoards;
