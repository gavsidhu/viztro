import { Brain, ClipboardList, Coins, Timer } from "lucide-react";

export const homeContent = {
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
  ctaText: "Get Your Command Center",
};
