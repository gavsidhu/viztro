import { FileText, Eye, Target, CheckSquare, Briefcase } from "lucide-react";

export const dashboardData = {
  quickLinks: [
    { name: "Quick Note", icon: <FileText /> },
    { name: "New Vision", icon: <Eye /> },
    { name: "New Initiative", icon: <Target /> },
    { name: "New Task", icon: <CheckSquare /> },
  ],
  navigation: [
    { name: "Visions", icon: <Eye />, count: 5 },
    { name: "Initiatives", icon: <Target />, count: 8 },
    { name: "Tasks", icon: <CheckSquare />, count: 12 },
    { name: "Assets", icon: <Briefcase />, count: 24 },
  ],
  currentInitiatives: {
    notStarted: [
      { name: "Plan Publication/Distribution", progress: 0 },
      { name: "Write a novel", progress: 0 },
    ],
    inProgress: [
      { name: "Purchase furniture and equipment", progress: 33.5 },
      { name: "Draft Novel", progress: 26.7 },
    ],
    done: [
      { name: "Organize and Declutter Space", progress: 100 },
      { name: "Design and Plan Workspace", progress: 100 },
    ],
  },
  recentAssets: [
    {
      name: "BESTA storage combination with doors",
      link: "ikea.com/us/_21699/",
      initiative: "Purchase furniture and...",
    },
    {
      name: "Seville Classics UltraHD 2-Drawer Rolling",
      link: "samsclub.com/p/uct_12",
      initiative: "Purchase furniture and...",
    },
    {
      name: "Character Relationship Chart: Free Template",
      link: "milanote.com/tem_dt-map",
      initiative: "Draft Novel",
    },
  ],
  currentTask: {
    title: "Write Act 1",
    status: "In progress",
    priority: "High",
    initiative: "Draft Novel",
  },
};
