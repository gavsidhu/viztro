"use client";

import {
  Lightbulb,
  Target,
  ListChecks,
  Briefcase,
  ArrowRight,
  ArrowDown,
  ChevronRight,
  Database,
  Calendar,
  Users,
  LayoutDashboard,
  FileText,
  CheckSquare,
  FolderKanban,
  Link2,
  BookOpen,
} from "lucide-react";

const steps = [
  {
    title: "Vision Capture",
    description:
      "Start by capturing your big ideas in our Vision Hub. Break down your dreams into clear, actionable concepts using our structured templates.",
    icon: Lightbulb,
    delay: 0.1,
    visualization: (
      <div className='grid h-full grid-cols-1 gap-4 rounded-lg border bg-background p-6'>
        <div className='space-y-4'>
          <div className='flex items-center gap-3 border-b pb-4'>
            <Database className='h-5 w-5 text-primary' />
            <span className='font-medium'>Vision Database</span>
          </div>
          <div className='space-y-3'>
            {/* Vision Entry */}
            <div className='space-y-2 rounded-lg border bg-muted/50 p-3'>
              <div className='flex items-center gap-2'>
                <ChevronRight className='h-4 w-4 text-muted-foreground' />
                <div className='h-2 w-48 rounded-full bg-primary/20' />
                <span className='ml-auto text-xs text-muted-foreground'>
                  Vision #1
                </span>
              </div>
              <div className='ml-6 space-y-2'>
                <div className='flex items-center gap-2'>
                  <Calendar className='h-3 w-3 text-muted-foreground' />
                  <div className='h-2 w-24 rounded-full bg-muted' />
                </div>
                <div className='flex items-center gap-2'>
                  <Users className='h-3 w-3 text-muted-foreground' />
                  <div className='h-2 w-32 rounded-full bg-muted' />
                </div>
              </div>
            </div>
            {/* Vision Entry */}
            <div className='space-y-2 rounded-lg border bg-muted/50 p-3'>
              <div className='flex items-center gap-2'>
                <ChevronRight className='h-4 w-4 text-muted-foreground' />
                <div className='h-2 w-40 rounded-full bg-muted' />
                <span className='ml-auto text-xs text-muted-foreground'>
                  Vision #2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Initiative Planning",
    description:
      "Transform your visions into concrete initiatives. Define objectives, set timelines, and create strategic roadmaps for each project.",
    icon: Target,
    delay: 0.2,
    visualization: (
      <div className='grid h-full grid-cols-1 gap-4 rounded-lg border bg-background p-6'>
        <div className='space-y-4'>
          <div className='flex items-center justify-between border-b pb-4'>
            <div className='flex items-center gap-3'>
              <LayoutDashboard className='h-5 w-5 text-primary' />
              <span className='font-medium'>Initiative Board</span>
            </div>
            <div className='flex gap-2'>
              <div className='h-4 w-16 rounded-full bg-muted' />
              <div className='h-4 w-16 rounded-full bg-muted' />
            </div>
          </div>
          <div className='grid grid-cols-3 gap-3'>
            {/* Planning Column */}
            <div className='space-y-2'>
              <div className='flex items-center justify-between rounded-md bg-primary/10 px-3 py-2'>
                <span className='text-xs font-medium'>Planning</span>
                <div className='h-4 w-4 rounded-full bg-primary/20' />
              </div>
              <div className='space-y-2 rounded border bg-muted/50 p-2'>
                <div className='h-2 w-full rounded-full bg-muted' />
                <div className='h-2 w-2/3 rounded-full bg-muted' />
              </div>
            </div>
            {/* In Progress Column */}
            <div className='space-y-2'>
              <div className='flex items-center justify-between rounded-md bg-muted/50 px-3 py-2'>
                <span className='text-xs font-medium'>In Progress</span>
                <div className='h-4 w-4 rounded-full bg-muted' />
              </div>
              <div className='space-y-2 rounded border bg-muted/50 p-2'>
                <div className='h-2 w-full rounded-full bg-muted' />
                <div className='h-2 w-2/3 rounded-full bg-muted' />
              </div>
            </div>
            {/* Completed Column */}
            <div className='space-y-2'>
              <div className='flex items-center justify-between rounded-md bg-muted/50 px-3 py-2'>
                <span className='text-xs font-medium'>Completed</span>
                <div className='h-4 w-4 rounded-full bg-muted' />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Task Management",
    description:
      "Convert initiatives into manageable tasks. Our task system helps you prioritize and track daily actions that move you closer to your goals.",
    icon: ListChecks,
    delay: 0.3,
    visualization: (
      <div className='grid h-full grid-cols-1 gap-4 rounded-lg border bg-background p-6'>
        <div className='space-y-4'>
          <div className='flex items-center gap-3 border-b pb-4'>
            <CheckSquare className='h-5 w-5 text-primary' />
            <span className='font-medium'>Task Tracker</span>
          </div>
          <div className='space-y-3'>
            {/* Task Group */}
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <ChevronRight className='h-4 w-4 text-primary' />
                <span className='text-sm font-medium'>
                  Initiative: Launch MVP
                </span>
              </div>
              <div className='ml-6 space-y-2'>
                <div className='flex items-center gap-2 rounded border bg-primary/10 p-2'>
                  <div className='h-3 w-3 rounded border-2 border-primary' />
                  <div className='h-2 w-32 rounded-full bg-primary/20' />
                  <span className='ml-auto text-xs text-primary'>High</span>
                </div>
                <div className='flex items-center gap-2 rounded border bg-muted/50 p-2'>
                  <div className='h-3 w-3 rounded border-2 border-muted-foreground' />
                  <div className='h-2 w-40 rounded-full bg-muted' />
                  <span className='ml-auto text-xs text-muted-foreground'>
                    Medium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Asset Organization",
    description:
      "Keep all your resources organized and accessible. Store documents, links, and tools in a structured system that connects to your tasks and initiatives.",
    icon: Briefcase,
    delay: 0.4,
    visualization: (
      <div className='grid h-full grid-cols-1 gap-4 rounded-lg border bg-background p-6'>
        <div className='space-y-4'>
          <div className='flex items-center gap-3 border-b pb-4'>
            <FolderKanban className='h-5 w-5 text-primary' />
            <span className='font-medium'>Asset Library</span>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            {/* Document Section */}
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <FileText className='h-4 w-4 text-primary' />
                <span className='text-sm font-medium'>Documents</span>
              </div>
              <div className='space-y-2 rounded-lg border bg-muted/50 p-2'>
                <div className='flex items-center gap-2'>
                  <ChevronRight className='h-3 w-3 text-muted-foreground' />
                  <div className='h-2 w-full rounded-full bg-muted' />
                </div>
                <div className='flex items-center gap-2'>
                  <ChevronRight className='h-3 w-3 text-muted-foreground' />
                  <div className='h-2 w-4/5 rounded-full bg-muted' />
                </div>
              </div>
            </div>
            {/* Links Section */}
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <Link2 className='h-4 w-4 text-primary' />
                <span className='text-sm font-medium'>Resources</span>
              </div>
              <div className='space-y-2 rounded-lg border bg-muted/50 p-2'>
                <div className='flex items-center gap-2'>
                  <BookOpen className='h-3 w-3 text-muted-foreground' />
                  <div className='h-2 w-full rounded-full bg-muted' />
                </div>
                <div className='flex items-center gap-2'>
                  <BookOpen className='h-3 w-3 text-muted-foreground' />
                  <div className='h-2 w-4/5 rounded-full bg-muted' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className='container mx-auto py-24 sm:py-32' id="process">
      <div className='space-y-8'>
        <div className='space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            How V.I.T.A Works
          </h2>
          <p className='mx-auto max-w-[900px] text-muted-foreground sm:text-lg'>
            Our systematic approach transforms your visions into reality through
            a four-step process. Each step is designed to bring clarity,
            organization, and momentum to your projects.
          </p>
        </div>

        <div className='space-y-16'>
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`group relative grid gap-4 md:gap-8 ${index % 2 === 0
                ? "md:grid-cols-[2fr,3fr]"
                : "md:grid-cols-[3fr,2fr]"
                }`}
            >
              {/* Content */}
              <div
                className={`flex flex-col justify-center space-y-4 ${index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
              >
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20'>
                    <step.icon className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-semibold'>{step.title}</h3>
                </div>
                <p className='text-muted-foreground'>{step.description}</p>
              </div>

              {/* Visualization */}
              <div
                className={`h-[300px] ${index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
              >
                {step.visualization}
              </div>

              {/* Connector */}
              {index !== steps.length - 1 && (
                <div className='absolute -bottom-12 left-1/2 hidden -translate-x-1/2 md:block'>
                  <ArrowDown className='h-8 w-8 text-muted-foreground/25' />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='flex justify-center pt-8'>
          <a
            href='#pricing'
            className='group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80'
          >
            Start your journey today
            <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
          </a>
        </div>
      </div>
    </section>
  );
}
