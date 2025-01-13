/* eslint-disable react/no-unescaped-entities */
"use client";

import { Quote, Lightbulb, Target, CheckCircle } from "lucide-react";

const journeySteps = [
  {
    icon: Lightbulb,
    title: "The Struggle",
    content:
      "Like many visionaries, I struggled with turning my ideas into reality. I had notebooks full of concepts, digital tools scattered everywhere, and a constant feeling of overwhelm. Despite having clear visions, I kept hitting walls when it came to execution.",
  },
  {
    icon: Target,
    title: "The Discovery",
    content:
      "After years of trial and error, I discovered that the missing link wasn't about having better ideas—it was about having a systematic approach to transform those ideas into reality. I began developing a framework that would bridge the gap between vision and execution.",
  },
  {
    icon: CheckCircle,
    title: "The Solution",
    content:
      "This journey led to the creation of V.I.T.A. What started as my personal system evolved into a comprehensive framework that has helped hundreds of visionaries during our beta phase. Now, I'm sharing this battle-tested system with you.",
  },
];

export function AboutFounder() {
  return (
    <section className='container mx-auto relative py-24 sm:py-32' id="about">
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-primary/5' />
        <div className='absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-background to-transparent' />
        <div className='absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-background to-transparent' />
      </div>

      <div className='relative space-y-12'>
        <div className='mx-auto max-w-2xl space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Why I Built V.I.T.A
          </h2>
          <p className='text-muted-foreground sm:text-lg'>
            A personal journey from overwhelmed visionary to systematic achiever
          </p>
        </div>

        <div className='mx-auto max-w-5xl'>
          <div className='grid gap-8 md:grid-cols-3'>
            {journeySteps.map((step, index) => (
              <div
                key={step.title}
                className='relative space-y-4 rounded-2xl border bg-background/60 p-6 backdrop-blur-sm'
              >
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10'>
                    <step.icon className='h-5 w-5 text-primary' />
                  </div>
                  <h3 className='font-semibold'>{step.title}</h3>
                </div>
                <p className='text-sm leading-relaxed text-muted-foreground'>
                  {step.content}
                </p>
                {index !== journeySteps.length - 1 && (
                  <div className='absolute -right-4 top-1/2 hidden h-1 w-8 -translate-y-1/2 bg-primary/20 md:block' />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className='mx-auto max-w-3xl space-y-8'>
          <div className='relative rounded-xl border bg-background/60 p-8 backdrop-blur-sm'>
            <Quote className='absolute -left-3 -top-3 h-6 w-6 text-primary/20' />
            <blockquote className='relative space-y-4'>
              <p className='text-lg font-medium'>
                "I believe every visionary deserves a systematic way to bring
                their ideas to life. V.I.T.A isn't just another productivity
                tool—it's a complete framework born from real struggles and real
                solutions."
              </p>
              <footer className='text-sm text-muted-foreground'>
                - Founder, V.I.T.A System
              </footer>
            </blockquote>
          </div>

          <div className='flex justify-center gap-8 rounded-lg border bg-muted/50 px-4 py-8'>
            <div className='text-center'>
              <div className='text-2xl font-bold'>3+</div>
              <div className='text-sm text-muted-foreground'>
                Years Developing
              </div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold'>100+</div>
              <div className='text-sm text-muted-foreground'>Iterations</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold'>500+</div>
              <div className='text-sm text-muted-foreground'>Beta Users</div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className='absolute left-4 top-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
        <div className='absolute right-4 top-2/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
      </div>
    </section>
  );
}
