"use client";

import React, { ReactNode } from "react";
import {
  Lightbulb,
  Target,
  ListChecks,
  Briefcase,
  ArrowRight,
  ComponentIcon as Components,
  Brain,
  ClipboardList,
  Timer,
  Coins,
  Clock,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
}

interface BenefitsProps {
  title: string;
  description: string;
  benefits: Benefit[];
}

export function Benefits({ title, description, benefits }: BenefitsProps) {
  return (
    <section className='container mx-auto py-24 sm:py-32'>
      <div className='relative'>
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            {title}
          </h2>
          <p className='max-w-[900px] text-muted-foreground sm:text-lg'>
            {description}
          </p>
        </div>

        <div className='mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='relative space-y-4 rounded-3xl border p-6 transition-shadow hover:shadow-md'
            >
              <div className='flex items-center gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
                  {benefit.icon}
                </div>
                <h3 className='font-semibold'>{benefit.title}</h3>
              </div>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className='mt-16 flex justify-center'>
          <div>
            <a
              href='#pricing'
              className='group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80'
            >
              Start organizing your vision today
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </a>
          </div>
        </div>

        {/* Add decorative elements */}
        <div className='absolute -left-4 top-24 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
        <div className='absolute -right-4 bottom-24 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
      </div>
    </section>
  );
}
