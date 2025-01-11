"use client";

import {
  ArrowRight,
  Users,
  Building2,
  Newspaper,
  Award,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const trustIndicators = [
  {
    icon: Users,
    title: "500+ Pre-Launch Signups",
    description:
      "Visionaries already waiting to transform their ideas into reality",
  },
  {
    icon: Building2,
    title: "Built by Industry Experts",
    description:
      "Created by successful entrepreneurs and productivity specialists",
  },
  {
    icon: Newspaper,
    title: "Featured In",
    description:
      "Recognized by leading productivity and entrepreneurship publications",
  },
];

const prelaunchMetrics = [
  {
    number: "97%",
    label: "Beta User Satisfaction",
  },
  {
    number: "28",
    label: "Expert Contributors",
  },
  {
    number: "6+",
    label: "Months in Development",
  },
];

export function SocialProof() {
  return (
    <section className='container mx-auto py-24 sm:py-32'>
      <div className='relative space-y-16'>
        <div className='mx-auto max-w-2xl space-y-4 text-center'>
          <div className='flex items-center justify-center'>
            <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 p-3'>
              <BadgeCheck className='h-8 w-8 text-primary' />
            </div>
          </div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Trusted Before Launch
          </h2>
          <p className='text-muted-foreground sm:text-lg'>
            Join the growing community of visionaries who believe in the power
            of structured vision execution.
          </p>
        </div>

        <div className='mx-auto grid max-w-5xl gap-8 sm:grid-cols-3'>
          {trustIndicators.map((indicator) => (
            <div
              key={indicator.title}
              className='relative space-y-6 rounded-2xl border bg-background p-6'
            >
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                <indicator.icon className='h-6 w-6 text-primary' />
              </div>
              <div className='space-y-2'>
                <h3 className='font-semibold'>{indicator.title}</h3>
                <p className='text-sm text-muted-foreground'>
                  {indicator.description}
                </p>
              </div>
              <div className='absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0' />
            </div>
          ))}
        </div>

        <div className='space-y-8'>
          <div className='mx-auto grid max-w-4xl grid-cols-3 gap-4 rounded-xl border bg-muted/50 p-8'>
            {prelaunchMetrics.map((metric) => (
              <div key={metric.label} className='text-center'>
                <div className='text-3xl font-bold'>{metric.number}</div>
                <div className='mt-1 text-sm text-muted-foreground'>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className='mx-auto max-w-[900px] rounded-lg border bg-muted/50 p-8 text-center'>
            <p className='text-lg font-medium'>
              "V.I.T.A represents the culmination of years of experience in
              helping visionaries succeed. We've incorporated feedback from
              hundreds of beta users and industry experts to create the most
              comprehensive vision execution system available."
            </p>
            <div className='mt-4'>
              <div className='font-semibold'>The V.I.T.A Team</div>
              <div className='text-sm text-muted-foreground'>
                Founders & Vision Execution Experts
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <Button asChild size='lg' className='group'>
            <Link href='#pricing' className='flex items-center gap-2'>
              Join the Movement
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </Button>
        </div>

        {/* Decorative elements */}
        <div className='absolute left-4 top-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
        <div className='absolute right-4 top-2/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
      </div>
    </section>
  );
}
