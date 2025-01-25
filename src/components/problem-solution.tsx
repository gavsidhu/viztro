"use client";

import { Brain, Lightbulb, X, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

export interface Problem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Solution {
  title: string;
  description: string;
  benefits: string[];
}

export interface SectionContent {
  subtitle: string;
  title: string;
  description: string;
}

export interface ProblemSolutionProps {
  problems: Problem[];
  solutions: Solution[];
  problemSection: SectionContent;
  solutionSection: SectionContent;
  ctaText: string;
  ctaHref?: string;
  problemItems?: {
    mindItems: string[];
    resultItems: string[];
  };
  solutionItems?: {
    icon: ReactNode;
    title: string;
    description: string;
  }[];
}

export function ProblemSolution({
  problems,
  solutions,
  problemSection,
  solutionSection,
  ctaText,
  ctaHref = "#pricing",
  problemItems = {
    mindItems: [
      "Ideas scattered across notes, apps, and documents",
      "Overwhelmed by the complexity of execution",
      "No clear path from vision to reality",
      "Struggling to maintain momentum",
      "Lost in the details, losing sight of the big picture",
    ],
    resultItems: [
      "Brilliant ideas remain unrealized",
      "Time and energy wasted on disorganization",
      "Frustration and diminished motivation",
      "Opportunities missed due to lack of execution",
      "Impact potential never fully realized",
    ],
  },
  solutionItems = [
    {
      icon: <Brain className='h-6 w-6 text-primary' />,
      title: "Clarity",
      description:
        "Transform scattered ideas into clear, actionable visions using our structured templates and proven frameworks.",
    },
    {
      icon: <Lightbulb className='h-6 w-6 text-primary' />,
      title: "Strategy",
      description:
        "Break down your vision into strategic initiatives and milestones, creating a clear roadmap to success.",
    },
    {
      icon: <Check className='h-6 w-6 text-primary' />,
      title: "Execution",
      description:
        "Convert strategies into daily actions with our task management system, maintaining momentum towards your goals.",
    },
  ],
}: ProblemSolutionProps) {
  return (
    <section className='container mx-auto py-24 sm:py-32' id='why'>
      <div className='relative space-y-16'>
        {/* Problem Section */}
        <div className='space-y-8'>
          <div className='space-y-4'>
            <div className='flex items-center justify-center gap-2 text-red-500'>
              <X className='h-5 w-5' />
              <span className='text-sm font-medium uppercase tracking-wider'>
                {problemSection.subtitle}
              </span>
            </div>
            <h2 className='text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              {problemSection.title}
            </h2>
            <p className='mx-auto max-w-[900px] text-center text-muted-foreground sm:text-lg'>
              {problemSection.description}
            </p>
          </div>

          <div className='mx-auto grid max-w-4xl gap-4 sm:grid-cols-2'>
            <div className='relative space-y-4 rounded-lg border bg-muted/50 p-6'>
              <div className='flex items-center gap-2 text-red-500'>
                <Brain className='h-5 w-5' />
                <span className='font-medium'>
                  Inside a Visionary&apos;s Mind
                </span>
              </div>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                {problemItems.mindItems.map((item) => (
                  <li key={item} className='flex items-start gap-2'>
                    <X className='h-4 w-4 shrink-0 text-red-500' />
                    {item}
                  </li>
                ))}
              </ul>
              <div className='absolute -left-2 -top-2 h-24 w-24 rounded-full bg-red-500/10 blur-2xl' />
            </div>

            <div className='relative space-y-4 rounded-lg border bg-muted/50 p-6'>
              <div className='flex items-center gap-2 text-red-500'>
                <Lightbulb className='h-5 w-5' />
                <span className='font-medium'>The Result</span>
              </div>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                {problemItems.resultItems.map((item) => (
                  <li key={item} className='flex items-start gap-2'>
                    <X className='h-4 w-4 shrink-0 text-red-500' />
                    {item}
                  </li>
                ))}
              </ul>
              <div className='absolute -right-2 -top-2 h-24 w-24 rounded-full bg-red-500/10 blur-2xl' />
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className='space-y-8'>
          <div className='space-y-4'>
            <div className='flex items-center justify-center gap-2 text-primary'>
              <Check className='h-5 w-5' />
              <span className='text-sm font-medium uppercase tracking-wider'>
                {solutionSection.subtitle}
              </span>
            </div>
            <h2 className='text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              {solutionSection.title}
            </h2>
            <p className='mx-auto max-w-[900px] text-center text-muted-foreground sm:text-lg'>
              {solutionSection.description}
            </p>
          </div>

          <div className='mx-auto grid max-w-5xl gap-8 sm:grid-cols-3'>
            {solutionItems.map((item) => (
              <div
                key={item.title}
                className='relative space-y-4 rounded-lg border bg-muted/50 p-6'
              >
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                  {item.icon}
                </div>
                <h3 className='font-semibold'>{item.title}</h3>
                <p className='text-sm text-muted-foreground'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className='flex justify-center'>
            <Button asChild size='lg' className='group'>
              <a href={ctaHref}>
                {ctaText}
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </a>
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className='absolute -left-4 top-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
        <div className='absolute -right-4 top-2/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
      </div>
    </section>
  );
}
