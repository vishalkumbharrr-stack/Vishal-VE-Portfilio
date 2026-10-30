export const categories = [
  { name: "All", count: 3 },
  { name: "Motion Graphics", count: 0 },
  { name: "Explainer", count: 0 },
  { name: "Promo", count: 0 },
  { name: "Talking Head", count: 0 },
  { name: "Shorts", count: 3 },
  { name: "Documentary", count: 0 },
];

export const projects = [
  {
    id: 1,
    title: "My First Short Video",
    tags: ["Shorts", "Reels"],
    category: "Shorts",
    duration: "0:45",
    client: "Personal",
    date: "10/10/2025",
    description: "A quick vertical video edit for Instagram reels.",
    thumbnail: "/thumb1.jpg", // 👈 public फोल्डर मधील इमेज
    videoUrl: "https://www.youtube.com/shorts/YtXhDxomB9w",
    type: "vertical"
  },
  {
    id: 2,
    title: "Trending Reel Edit",
    tags: ["Shorts", "Reels"],
    category: "Shorts",
    duration: "0:30",
    client: "Personal",
    date: "10/12/2025",
    description: "Fast-paced instagram reel with trending audio.",
    thumbnail: "/thumb2.jpg", // 👈 public फोल्डर मधील इमेज
    videoUrl: "https://youtube.com/shorts/fKkockWOvOw?feature=share",
    type: "vertical"
  },
  {
    id: 3,
    title: "Cinematic Short Edit",
    tags: ["Shorts", "Reels"],
    category: "Shorts",
    duration: "0:55",
    client: "Personal",
    date: "10/15/2025",
    description: "Cinematic color graded short video.",
    thumbnail: "/thumb3.jpg", // 👈 public फोल्डर मधील इमेज
    videoUrl: "https://www.youtube.com/shorts/7bXi_e_enxE",
    type: "vertical"
  }
];

export const services = [
  { icon: "🎬", title: "YouTube Editing", description: "Engaging edits optimized for retention with perfect pacing." },
  { icon: "📚", title: "Course Content", description: "Clear, educational content with professional polish." },
  { icon: "✨", title: "Motion Graphics", description: "Eye-catching animations that enhance your storytelling." },
  { icon: "🎨", title: "Color Grading", description: "Cinematic looks that give your videos a premium feel." },
  { icon: "🏷️", title: "Logo Animation", description: "Professional branding elements that stand out." },
  { icon: "🎧", title: "Audio Engineering", description: "Crystal clear audio mix with noise reduction." }
];

export const technicalSkills = [
  { logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg", name: "DaVinci Resolve", desc: "Professional color grading, editing, and audio post-production" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg", name: "Adobe Premiere Pro", desc: "Advanced video editing, multicam sync, and workflow optimization" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg", name: "After Effects", desc: "Motion graphics, visual effects, and advanced animations" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg", name: "Adobe Photoshop", desc: "Thumbnail design, graphics creation, and image manipulation" },
  { logo: "https://brandlogo.org/wp-content/uploads/2024/05/Adobe-Audition-Logo.png", name: "Adobe Audition", desc: "Audio editing, noise reduction, and sound enhancement" },
  { logo: "https://freepnglogo.com/images/all_img/1691746000capcut-logo%20(2).png", name: "CapCut", desc: "Trendy short-form editing, auto-captions, and social media templates" },
  { logo: "https://ai-bot.cn/wp-content/uploads/2025/09/Adobe-Podcast-logo.png", name: "Adobe Podcast", desc: "AI-powered audio enhancement, noise reduction, and voice clarity" }
];

export const specializations = [
  { icon: "🎬", title: "YouTube Content Creation", desc: "Specialized in creating engaging YouTube content that keeps viewers watching", tags: ["Retention Editing", "Thumbnail Design", "SEO Optimization", "Analytics Understanding"] },
  { icon: "📱", title: "Social Media Videos", desc: "Expert in creating content optimized for Instagram, TikTok, and other platforms", tags: ["Short-form Content", "Vertical Videos", "Platform Optimization", "Viral Techniques"] },
  { icon: "💼", title: "Corporate Videos", desc: "Creating polished corporate content that communicates effectively", tags: ["Professional Presentation", "Brand Consistency", "Clean Aesthetics", "Message Clarity"] },
  { icon: "📚", title: "Educational Content", desc: "Specialized in making complex topics easy to understand through video", tags: ["Screen Recording", "Tutorial Structure", "Clear Explanations", "Interactive Elements"] },
  { icon: "✨", title: "Motion Graphics", desc: "Creating eye-catching animations that enhance storytelling", tags: ["2D Animation", "Logo Animation", "Lower Thirds", "Kinetic Typography"] },
  { icon: "🎨", title: "Color Grading", desc: "Professional color work that gives videos a polished, cinematic feel", tags: ["Cinematic Looks", "Color Matching", "Mood Creation", "Technical Correction"] },
];

export const workflowSteps = [
  { step: "Step 01", title: "Project Analysis", desc: "Understanding client requirements, target audience, and project goals", icon: "📋", color: "bg-blue-500" },
  { step: "Step 02", title: "Content Review", desc: "Analyzing raw footage, identifying key moments, and planning the edit", icon: "🔍", color: "bg-purple-500" },
  { step: "Step 03", title: "Rough Cut", desc: "Creating initial edit with basic cuts, transitions, and structure", icon: "✂️", color: "bg-amber-500" },
  { step: "Step 04", title: "Fine Tuning", desc: "Adding graphics, color grading, audio enhancement, and effects", icon: "✨", color: "bg-emerald-500" },
  { step: "Step 05", title: "Client Review", desc: "Presenting the work for feedback and implementing revisions", icon: "💬", color: "bg-rose-500" },
  { step: "Step 06", title: "Final Delivery", desc: "Exporting in required formats and delivering the completed project", icon: "🚀", color: "bg-indigo-500" },
];