"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Statistic {
  value: string;
  label: string;
}

interface FinalCTAProps {
  title: string;
  description: string;
  statistics: Statistic[];
  cta: {
    text: string;
    href?: string;
  };
  guaranteeText: string;
}

export function FinalCTA({
  title,
  description,
  statistics,
  cta,
  guaranteeText,
}: FinalCTAProps) {
  return (
    <section className='relative border-t'>
      {/* Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-b from-background via-background to-primary/10' />

      <div className='container mx-auto relative py-24 sm:py-32'>
        <div className='flex flex-col items-center space-y-10 text-center'>
          <div className='flex items-center justify-center'>
            <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 p-3'>
              <Sparkles className='h-8 w-8 text-primary' />
            </div>
          </div>

          <div className='space-y-4 md:space-y-6'>
            <h2 className='mx-auto max-w-3xl text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl'>
              {title}
            </h2>
            <p className='mx-auto max-w-2xl text-muted-foreground sm:text-lg md:text-xl'>
              {description}
            </p>
          </div>

          <div className='mx-auto w-full max-w-lg space-y-4'>
            <div className='grid grid-cols-3 gap-4 rounded-lg border bg-muted/50 p-4 text-center'>
              {statistics.map((stat) => (
                <div key={stat.label}>
                  <div className='text-2xl font-bold'>{stat.value}</div>
                  <div className='text-xs text-muted-foreground'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='space-y-4'>
            <Button size='lg' className='group h-12 px-8 text-lg' asChild>
              <a href={cta.href}>
                {cta.text}
                <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
              </a>
            </Button>
            <p className='text-sm text-muted-foreground'>{guaranteeText}</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className='absolute left-4 top-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
        <div className='absolute right-4 top-2/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
      </div>
    </section>
  );
}
