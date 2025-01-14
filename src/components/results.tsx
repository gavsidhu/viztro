/* eslint-disable react/no-unescaped-entities */
"use client";

import { Trophy, Rocket, Clock, CheckCircle2 } from "lucide-react";

const metrics = [
  {
    number: "85%",
    label: "Vision Completion Rate",
    description:
      "of users successfully transform their visions into reality using V.I.T.A",
    icon: Trophy,
    delay: 0.1,
  },
  {
    number: "3x",
    label: "Faster Execution",
    description:
      "faster implementation of ideas compared to traditional methods",
    icon: Rocket,
    delay: 0.2,
  },
  {
    number: "60%",
    label: "Time Saved",
    description: "reduction in time spent on planning and organization",
    icon: Clock,
    delay: 0.3,
  },
];

const testimonial = {
  quote:
    "V.I.T.A transformed how I approach my visions. What used to be overwhelming dreams are now achievable goals with clear action steps.",
  author: "Sarah Chen",
  role: "Startup Founder",
};

export function Results() {
  return (
    <section className='container mx-auto relative py-24 sm:py-32'>
      <div className='absolute inset-x-0 -top-16 -z-10 overflow-hidden'>
        <div className='absolute inset-x-0 top-0 h-[800px] w-full rotate-12 transform bg-gradient-to-b from-primary/5 via-transparent to-transparent' />
      </div>

      <div className='space-y-16'>
        <div className='mx-auto max-w-2xl space-y-4 text-center'>
          <div className='flex items-center justify-center gap-2 text-primary'>
            <CheckCircle2 className='h-5 w-5' />
            <span className='text-sm font-medium uppercase tracking-wider'>
              The Results
            </span>
          </div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            From Vision to Reality
          </h2>
          <p className='text-muted-foreground sm:text-lg'>
            Our users don&apos;t just dream big - they achieve big. Here&apos;s
            what happens when visionaries get the right system.
          </p>
        </div>

        <div className='mx-auto grid max-w-5xl gap-8 sm:grid-cols-3'>
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className='relative space-y-6 rounded-2xl border bg-background p-6 shadow-lg'
            >
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                <metric.icon className='h-6 w-6 text-primary' />
              </div>
              <div className='space-y-2'>
                <div className='flex items-baseline gap-2'>
                  <span className='text-4xl font-bold tracking-tight'>
                    {metric.number}
                  </span>
                  <span className='text-sm font-medium text-muted-foreground'>
                    {metric.label}
                  </span>
                </div>
                <p className='text-sm text-muted-foreground'>
                  {metric.description}
                </p>
              </div>
              {/* Add a subtle gradient overlay */}
              <div className='absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0' />
            </div>
          ))}
        </div>

        <div className='mx-auto max-w-3xl rounded-2xl border bg-muted/50 p-8 text-center'>
          <figure className='space-y-4'>
            <blockquote>
              <p className='text-lg font-medium italic text-muted-foreground'>
                "{testimonial.quote}"
              </p>
            </blockquote>
            <figcaption>
              <div className='font-semibold'>{testimonial.author}</div>
              <div className='text-sm text-muted-foreground'>
                {testimonial.role}
              </div>
            </figcaption>
          </figure>
        </div>

        {/* Decorative elements */}
        <div className='absolute left-4 top-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
        <div className='absolute right-4 top-2/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
      </div>
    </section>
  );
}
