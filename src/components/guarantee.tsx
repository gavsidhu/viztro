/* eslint-disable react/no-unescaped-entities */
"use client";

import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const guaranteePoints = [
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
];

export function Guarantee() {
  return (
    <section className='container mx-auto relative py-24 sm:py-32'>
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-primary/5' />
        <div className='absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-background to-transparent' />
        <div className='absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-background to-transparent' />
      </div>

      <div className='relative space-y-12'>
        <div className='mx-auto max-w-2xl space-y-4 text-center'>
          <div className='flex items-center justify-center'>
            <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 p-3'>
              <Shield className='h-8 w-8 text-primary' />
            </div>
          </div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Our Vision-to-Reality Guarantee
          </h2>
          <p className='text-muted-foreground sm:text-lg'>
            We&apos;re so confident in the V.I.T.A system that we&apos;re
            backing it with our strongest guarantee ever.
          </p>
        </div>

        <div className='mx-auto grid max-w-5xl gap-8 md:grid-cols-3'>
          {guaranteePoints.map((point) => (
            <div key={point.title}>
              <Card className='h-full bg-background/60 backdrop-blur-sm'>
                <CardContent className='p-6'>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-2 text-primary'>
                      <CheckCircle2 className='h-5 w-5' />
                      <h3 className='font-semibold'>{point.title}</h3>
                    </div>
                    <p className='text-sm text-muted-foreground'>
                      {point.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className='mx-auto max-w-2xl space-y-8 text-center'>
          <div className='rounded-xl border bg-background/60 p-8 backdrop-blur-sm'>
            <p className='text-lg font-medium'>
              "We believe in your vision as much as you do. That's why we're
              removing all the risk from your decision to get started."
            </p>
          </div>

          <Button size='lg' className='group'>
            <a href='#pricing' className='flex items-center gap-2'>
              Get Started Risk-Free
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
