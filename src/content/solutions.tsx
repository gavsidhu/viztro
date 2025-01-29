import {
  BookOpen,
  Brain,
  BrainCircuit,
  Briefcase,
  ClipboardList,
  Clock,
  Coins,
  Component,
  FileText,
  LayoutGrid,
  Lightbulb,
  ListChecks,
  Target,
  TargetIcon,
  Timer,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const solutions = {
  adhd: {
    hero: {
      title: "How to Stay Organized with ADHD",
      description:
        "Discover the V.I.T.A system tailored to ADHD brains to help you stay focused and manage tasks.",
      benefits: [
        "Break down overwhelming goals into smaller steps.",
        "Stay on track with ADHD-friendly workflows.",
        "Achieve more without feeling overwhelmed.",
      ],
    },
    problemSolution: {
      problems: [
        {
          icon: <ClipboardList className='h-5 w-5 text-red-500' />,
          title: "Scattered Business Ideas",
          description:
            "Multiple business opportunities, but no clear way to evaluate and prioritize them effectively",
        },
        {
          icon: <Timer className='h-5 w-5 text-red-500' />,
          title: "Time Management Chaos",
          description:
            "Juggling multiple projects without a system to track progress and deadlines",
        },
        {
          icon: <Brain className='h-5 w-5 text-red-500' />,
          title: "Mental Overwhelm",
          description:
            "Too many ideas and tasks competing for attention, leading to decision paralysis",
        },
        {
          icon: <Coins className='h-5 w-5 text-red-500' />,
          title: "Resource Allocation",
          description:
            "Difficulty in tracking and allocating limited resources across different initiatives",
        },
      ],
      solutions: [
        {
          title: "Idea Validation Framework",
          description:
            "Systematically evaluate and prioritize your business ideas using our proven framework",
          benefits: [
            "Score ideas based on market potential",
            "Assess resource requirements",
            "Track validation milestones",
          ],
        },
        {
          title: "Project Command Center",
          description:
            "Keep all your business initiatives organized in one central dashboard",
          benefits: [
            "Visual project timelines",
            "Resource allocation tracking",
            "Progress monitoring",
          ],
        },
        {
          title: "Vision-to-Action System",
          description:
            "Transform your entrepreneurial vision into concrete, actionable steps",
          benefits: [
            "Break down big goals",
            "Create action sequences",
            "Track daily progress",
          ],
        },
      ],
      problemSection: {
        subtitle: "Common Entrepreneur Struggles",
        title: "Sound Familiar?",
        description:
          "As an entrepreneur, you have the vision and drive to build something great. But without the right system, turning those visions into reality can feel impossible.",
      },
      solutionSection: {
        subtitle: "The V.I.T.A Solution",
        title: "Your Entrepreneurial Command Center",
        description:
          "V.I.T.A provides the structure and tools you need to transform your entrepreneurial visions into thriving businesses.",
      },
      ctaText: " Get Your Command Center",
    },
    results: {
      title: "From chaos to creativity",
      subtitle: "The Transformation",
      description: "See how V.I.T.A transforms your content creation process",
      transformations: [
        {
          before: "Scattered Ideas",
          after: "Structured Content Pipelines",
          description:
            "Transform random thoughts into an organized content creation system",
        },
        {
          before: "Inconsistent Uploads",
          after: "Reliable Publishing Schedule",
          description:
            "Move from sporadic posting to a consistent content calendar",
        },
        {
          before: "Platform Chaos",
          after: "Unified Strategy",
          description: "Manage all your content platforms from one central hub",
        },
      ],
      keyOutcomes: [
        {
          icon: <Clock className='h-5 w-5 text-red-500' />,
          title: "Streamlined Process",
          description:
            "Reduce your content creation time with organized systems and templates",
          benefit: "More time for creativity, less time on administration",
        },
        {
          icon: <TrendingUp className='h-5 w-5 text-red-500' />,
          title: "Increased Output",
          description:
            "Create more content consistently without sacrificing quality",
          benefit: "Grow your audience through regular engagement",
        },
        {
          icon: <Trophy className='h-5 w-5 text-red-500' />,
          title: "Creative Freedom",
          description:
            "Focus on creating great content instead of managing chaos",
          benefit: "Turn your creative vision into reality",
        },
      ],
      vision: {
        icon: <Users className='h-5 w-5 text-primary' />,
        title: "Your Creator Journey",
        quote: `"Imagine transforming from overwhelmed creator to confident content strategist. With V.I.T.A, you'll have the systems and structure to make that vision a reality."`,
        subtitle:
          "Start your transformation today and join the community of organized, productive creators.",
      },
    },
    benefits: {
      title: "Why Choose V.I.T.A?",
      description:
        "Stop letting great ideas slip away. V.I.T.A provides a comprehensive system that helps visionaries like you transform thoughts into reality through organized, actionable steps.",
      benefits: [
        {
          title: "Vision Clarity",
          description:
            "Transform abstract ideas into clear, actionable visions. Our structured approach helps you define and refine your goals with precision.",
          icon: <Lightbulb className='h-6 w-6 text-primary' />,
          delay: 0.1,
        },
        {
          title: "Strategic Planning",
          description:
            "Break down your visions into manageable initiatives. Create a roadmap that turns your big ideas into achievable milestones.",
          icon: <Target className='h-6 w-6 text-primary' />,
          delay: 0.2,
        },
        {
          title: "Task Management",
          description:
            "Never lose track of your progress. Our task system helps you organize, prioritize, and execute your daily actions effectively.",
          icon: <ListChecks className='h-6 w-6 text-primary' />,
          delay: 0.3,
        },
        {
          title: "Asset Organization",
          description:
            "Keep all your resources in one place. Efficiently manage documents, links, and tools needed to bring your vision to life.",
          icon: <Briefcase className='h-6 w-6 text-primary' />,
          delay: 0.4,
        },
        {
          title: "System Integration",
          description:
            "All components work seamlessly together. Experience a unified workflow that connects your visions to your daily tasks.",
          icon: <Component className='h-6 w-6 text-primary' />,
          delay: 0.5,
        },
        {
          title: "Mental Clarity",
          description:
            "Free your mind from chaos. Our system serves as your second brain, helping you focus on execution rather than organization.",
          icon: <Brain className='h-6 w-6 text-primary' />,
          delay: 0.6,
        },
      ],
    },
    howItWorks: {
      title: "How V.I.T.A Works",
      description:
        "Our systematic approach transforms your visions into reality through a four-step process. Each step is designed to bring clarity, organization, and momentum to your projects.",
      steps: [
        {
          title: "Vision Capture",
          description:
            "Start by capturing your big ideas in our Vision Hub. Break down your dreams into clear, actionable concepts using our structured templates.",
          icon: <Lightbulb className='h-6 w-6 text-primary' />,
          delay: 0.1,
        },
        {
          title: "Initiative Planning",
          description:
            "Transform your visions into concrete initiatives. Define objectives, set timelines, and create strategic roadmaps for each project.",
          icon: <Target className='h-6 w-6 text-primary' />,
          delay: 0.2,
        },
        {
          title: "Task Management",
          description:
            "Convert initiatives into manageable tasks. Our task system helps you prioritize and track daily actions that move you closer to your goals.",
          icon: <ListChecks className='h-6 w-6 text-primary' />,
          delay: 0.3,
        },
        {
          title: "Asset Organization",
          description:
            "Keep all your resources organized and accessible. Store documents, links, and tools in a structured system that connects to your tasks and initiatives.",
          icon: <Briefcase className='h-6 w-6 text-primary' />,
          delay: 0.4,
        },
      ],
      ctaText: "Start your journey today",
      ctaHref: "#pricing",
    },
    provenCocepts: {
      title: "Built for Content Creators",
      subtitle: "Research-Backed",
      description:
        "V.I.T.A integrates years of research on content creator productivity and success patterns into one comprehensive system",
      researchAreas: [
        {
          icon: <BrainCircuit className='h-6 w-6 text-primary' />,
          name: "Creator Psychology Research",
          description:
            "Built on studies of how successful content creators maintain consistent output while avoiding burnout",
          source: "Content Creator Psychology Institute",
        },
        {
          icon: <Target className='h-6 w-6 text-primary' />,
          name: "Content Strategy Studies",
          description:
            "Incorporates proven content planning methodologies from leading digital media researchers",
          source: "Digital Content Research Lab",
        },
        {
          icon: <LayoutGrid className='h-6 w-6 text-primary' />,
          name: "Workflow Optimization",
          description:
            "Based on extensive research of how top creators organize and manage their content production",
          source: "Creator Excellence Center",
        },
      ],
      keyFindings: [
        {
          stat: "Structure",
          finding:
            "Creators with organized systems are 3x more likely to maintain consistent output",
        },
        {
          stat: "Planning",
          finding:
            "Advanced content planning reduces creative block by over 60%",
        },
        {
          stat: "Systems",
          finding: "Unified content systems lead to 2x higher completion rates",
        },
      ],
      methodologyNote: {
        title: "Research-Backed Methodology",
        description:
          "Every feature in V.I.T.A is grounded in real-world studies of successful content creators and proven content production methodologies.",
      },
      researchSteps: [
        {
          icon: <BookOpen className='h-6 w-6 text-primary' />,
          title: "Research Phase",
          description:
            "Analyzed content creation workflows of successful creators across multiple platforms",
        },
        {
          icon: <BrainCircuit className='h-6 w-6 text-primary' />,
          title: "System Development",
          description:
            "Created and refined our system based on proven content creation patterns",
        },
        {
          icon: <TargetIcon className='h-6 w-6 text-primary' />,
          title: "Implementation",
          description:
            "Optimized the system specifically for content creator workflows and needs",
        },
      ],
    },
    guarantee: {
      title: "Our Vision-to-Reality Guarantee",
      subtitle: "Guaranteed Success",
      description:
        "We're so confident in the V.I.T.A system that we're backing it with our strongest guarantee ever.",
      guaranteePoints: [
        {
          title: "30-Day Implementation Guarantee",
          description:
            "If you haven't started implementing your first vision within 30 days, we'll extend your access until you do.",
        },
        {
          title: "Lifetime Access",
          description:
            "Get permanent access to the V.I.T.A template and all future updates.",
        },
        {
          title: "Community Support",
          description:
            "Join our community of visionaries and get support whenever you need it.",
        },
      ],
      testimonial: {
        quote:
          "We believe in your vision as much as you do. That's why we're removing all the risk from your decision to get started.",
      },
      cta: {
        text: "Get Started Risk-Free",
        href: "#pricing",
      },
    },
    purchase: {
      title: "Start Realizing Your Vision Today",
      description: "Join thousands of visionaries who have transformed their ideas into reality with V.I.T.A.",
      features: [
        "Complete V.I.T.A Notion Template",
        "Vision-to-Reality Framework Guide",
        "30+ Pre-built Vision Templates",
        "Task Management System",
        "Asset Organization Structure",
        "Progress Tracking Dashboard",
        "Regular Template Updates",
        "Priority Support",
      ],
      bonuses: [
        {
          icon: <FileText className="h-5 w-5 text-primary" />,
          title: "Vision Clarity Workbook",
          description: "A step-by-step guide to clarify and articulate your visions",
          value: "$97",
        },
        {
          icon: <Users className="h-5 w-5 text-primary" />,
          title: "Private Community Access",
          description: "Connect with fellow visionaries and share insights",
          value: "$197/year",
        },
        {
          icon: <Zap className="h-5 w-5 text-primary" />,
          title: "Quick-Start Implementation Guide",
          description: "Get up and running with V.I.T.A in under 60 minutes",
          value: "$47",
        },
      ],
      socialProof: {
        users: "2,000+",
        rating: "4.9/5",
        reviews: "500+",
      },
      pricing: {
        current: 197,
        original: 497,
        discount: "60%",
        currency: "$",
      },
      cta: {
        text: "Get Instant Access",
        href: "#pricing",
      },
      deliveryFeatures: ["Instant Digital Delivery", "Lifetime Access", "30-Day Implementation Guarantee"],
      securityNote: "Secure payment powered by Stripe",
    },
    faqs: {
      title: "Frequently Asked Questions",
      subtitle: "FAQ",
      description:
        "Everything you need to know about V.I.T.A and how it can help you realize your vision.",
      faqs: [
        {
          question: "What exactly is V.I.T.A and how does it work?",
          answer:
            "V.I.T.A (Visions, Initiatives, Tasks, Assets) is a comprehensive Notion template system designed specifically for visionaries. It helps you transform your ideas into reality through a structured four-step process: Vision Capture, Initiative Planning, Task Management, and Asset Organization. The system includes pre-built templates, workflows, and frameworks that guide you from initial concept to final execution.",
        },
        {
          question: "Do I need to be familiar with Notion to use V.I.T.A?",
          answer:
            "No prior Notion experience is required! V.I.T.A comes with a detailed quick-start guide and video tutorials that will help you get up and running quickly. The system is designed to be intuitive and user-friendly, even for Notion beginners. Plus, our community support is always available to help you if needed.",
        },
        {
          question: "Can I customize the templates to fit my specific needs?",
          answer:
            "While V.I.T.A provides a robust framework out of the box, every component is fully customizable. You can adapt the templates, workflows, and systems to match your unique vision and working style. We even provide guidance on how to customize effectively without breaking the core functionality.",
        },
        {
          question: "What's included in the V.I.T.A package?",
          answer:
            "Your purchase includes the complete V.I.T.A Notion template, Vision-to-Reality Framework Guide, 30+ pre-built vision templates, task management system, asset organization structure, progress tracking dashboard, and regular template updates. Plus, you get bonus items including the Vision Clarity Workbook, Private Community Access, and Quick-Start Implementation Guide.",
        },
        {
          question: "How long do I have access to V.I.T.A?",
          answer:
            "You get lifetime access to V.I.T.A! This includes the main template system, all current bonus materials, and future updates. Once you purchase, it's yours forever, and you can use it across all your Notion workspaces.",
        },
        {
          question: "What if V.I.T.A doesn't work for me?",
          answer:
            "We offer a 30-day implementation guarantee. If you haven't started implementing your first vision within 30 days of purchase, we'll extend your access and provide additional support until you do. We're committed to helping you succeed and will work with you to ensure you get value from the system.",
        },
        {
          question: "Can I use V.I.T.A with my team?",
          answer:
            "Yes! V.I.T.A works great for both individuals and teams. The template can be shared with your Notion workspace members, and includes features specifically designed for collaboration. Each team member can track their tasks while contributing to the overall vision.",
        },
        {
          question: "How quickly can I get started?",
          answer:
            "You can start using V.I.T.A immediately after purchase. The Quick-Start Implementation Guide will help you set up your workspace in under 60 minutes. Most users begin capturing their first vision within hours of installation.",
        },
      ],
    },
    cta: {
      title: "Your Vision Is Waiting to Become Reality",
      description:
        "Join 2,000+ visionaries who have already transformed their ideas into tangible results with V.I.T.A.",
      statistics: [
        {
          value: "2k+",
          label: "Active Users",
        },
        {
          value: "10k+",
          label: "Visions Tracked",
        },
        {
          value: "4.9/5",
          label: "User Rating",
        },
      ],
      cta: {
        text: "Get Started Today",
        href: "#pricing",
      },
      guaranteeText:
        "30-Day Implementation Guarantee • Lifetime Access • Instant Delivery",
    },
  },
};

export default solutions;
