"use client";

import {
  Brain,
  Lightbulb,
  X,
  Check,
  ArrowRight,
  Rocket,
  Target,
  ListChecks,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProblemSolution() {
  return (
    <section className='container mx-auto py-24 sm:py-32'>
      <div className='relative space-y-16'>
        {/* Problem Section */}
        <div className='space-y-8'>
          <div className='space-y-4'>
            <div className='flex items-center justify-center gap-2 text-red-500'>
              <X className='h-5 w-5' />
              <span className='text-sm font-medium uppercase tracking-wider'>
                The Problem
              </span>
            </div>
            <h2 className='text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Great Visions Often Stay as Just... Visions
            </h2>
            <p className='mx-auto max-w-[900px] text-center text-muted-foreground sm:text-lg'>
              As a visionary, you have brilliant ideas that could change the
              world. But turning these visions into reality feels like trying to
              build a skyscraper without a blueprint.
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
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 shrink-0 text-red-500' />
                  Ideas scattered across notes, apps, and documents
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 shrink-0 text-red-500' />
                  Overwhelmed by the complexity of execution
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 shrink-0 text-red-500' />
                  No clear path from vision to reality
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 shrink-0 text-red-500' />
                  Struggling to maintain momentum
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 shrink-0 text-red-500' />
                  Lost in the details, losing sight of the big picture
                </li>
              </ul>
              {/* Decorative elements */}
              <div className='absolute -left-2 -top-2 h-24 w-24 rounded-full bg-red-500/10 blur-2xl' />
            </div>

            <div className='relative space-y-4 rounded-lg border bg-muted/50 p-6'>
              <div className='flex items-center gap-2 text-red-500'>
                <Lightbulb className='h-5 w-5' />
                <span className='font-medium'>The Result</span>
              </div>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 shrink-0 text-red-500' />
                  Brilliant ideas remain unrealized
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 shrink-0 text-red-500' />
                  Time and energy wasted on disorganization
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 shrink-0 text-red-500' />
                  Frustration and diminished motivation
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 shrink-0 text-red-500' />
                  Opportunities missed due to lack of execution
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 shrink-0 text-red-500' />
                  Impact potential never fully realized
                </li>
              </ul>
              {/* Decorative elements */}
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
                The Solution
              </span>
            </div>
            <h2 className='text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Transform Vision into Reality with V.I.T.A
            </h2>
            <p className='mx-auto max-w-[900px] text-center text-muted-foreground sm:text-lg'>
              V.I.T.A is your complete system for turning visionary ideas into
              tangible results. It bridges the gap between imagination and
              execution with a structured, yet flexible approach.
            </p>
          </div>

          <div className='mx-auto grid max-w-5xl gap-8 sm:grid-cols-3'>
            <div className='relative space-y-4 rounded-lg border bg-muted/50 p-6'>
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                <Rocket className='h-6 w-6 text-primary' />
              </div>
              <h3 className='font-semibold'>Clarity</h3>
              <p className='text-sm text-muted-foreground'>
                Transform scattered ideas into clear, actionable visions using
                our structured templates and proven frameworks.
              </p>
            </div>

            <div className='relative space-y-4 rounded-lg border bg-muted/50 p-6'>
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                <Target className='h-6 w-6 text-primary' />
              </div>
              <h3 className='font-semibold'>Strategy</h3>
              <p className='text-sm text-muted-foreground'>
                Break down your vision into strategic initiatives and
                milestones, creating a clear roadmap to success.
              </p>
            </div>

            <div className='relative space-y-4 rounded-lg border bg-muted/50 p-6'>
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                <ListChecks className='h-6 w-6 text-primary' />
              </div>
              <h3 className='font-semibold'>Execution</h3>
              <p className='text-sm text-muted-foreground'>
                Convert strategies into daily actions with our task management
                system, maintaining momentum towards your goals.
              </p>
            </div>
          </div>

          <div className='flex justify-center'>
            <Button asChild size='lg' className='group'>
              <a href='#pricing'>
                Start Realizing Your Vision
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
