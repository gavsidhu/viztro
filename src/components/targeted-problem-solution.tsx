"use client";

import {
  ClipboardList,
  Coins,
  Brain,
  Timer,
  CheckCircle2,
  X,
  ArrowRight,
  LucideProps,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

// Define TypeScript interfaces for props
interface Problem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Solution {
  title: string;
  description: string;
  benefits: string[];
}

interface SectionContent {
  subtitle: string;
  title: string;
  description: string;
}

interface TargetedProblemSolutionProps {
  problems: Problem[];
  solutions: Solution[];
  problemSection: SectionContent;
  solutionSection: SectionContent;
  ctaText: string;
}

export function TargetedProblemSolution({
  problems,
  solutions,
  problemSection,
  solutionSection,
  ctaText,
}: TargetedProblemSolutionProps) {
  return (
    <section className='container mx-auto py-24 sm:py-32'>
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
            <p className='mx-auto max-w-[800px] text-center text-muted-foreground sm:text-lg'>
              {problemSection.description}
            </p>
          </div>

          <div className='mx-auto grid max-w-5xl gap-6 sm:grid-cols-2'>
            {problems.map((problem) => (
              <Card key={problem.title} className='relative overflow-hidden'>
                <CardContent className='space-y-2 p-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10'>
                      {problem.icon}
                    </div>
                    <h3 className='font-semibold'>{problem.title}</h3>
                  </div>
                  <p className='text-sm text-muted-foreground pl-[3.25rem]'>
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className='space-y-8'>
          <div className='space-y-4'>
            <div className='flex items-center justify-center gap-2 text-primary'>
              <CheckCircle2 className='h-5 w-5' />
              <span className='text-sm font-medium uppercase tracking-wider'>
                {solutionSection.subtitle}
              </span>
            </div>
            <h2 className='text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              {solutionSection.title}
            </h2>
            <p className='mx-auto max-w-[800px] text-center text-muted-foreground sm:text-lg'>
              {solutionSection.description}
            </p>
          </div>

          <div className='mx-auto grid max-w-5xl gap-6 sm:grid-cols-3'>
            {solutions.map((solution) => (
              <Card key={solution.title} className='relative overflow-hidden'>
                <CardContent className='p-6'>
                  <div className='space-y-4'>
                    <h3 className='font-semibold'>{solution.title}</h3>
                    <p className='text-sm text-muted-foreground'>
                      {solution.description}
                    </p>
                    <ul className='space-y-2'>
                      {solution.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className='flex items-center gap-2 text-sm'
                        >
                          <CheckCircle2 className='h-4 w-4 text-primary' />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <div className='absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0' />
              </Card>
            ))}
          </div>

          <div className='flex justify-center pt-8'>
            <Button size='lg' className='group'>
              {ctaText}
              <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className='absolute left-4 top-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
        <div className='absolute right-4 top-2/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
      </div>
    </section>
  );
}
