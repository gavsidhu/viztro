"use client";

import {
  Shield,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface GuaranteePoint {
  title: string;
  description: string;
}

interface GuaranteeProps {
  title: string;
  subtitle: string;
  description: string;
  guaranteePoints: GuaranteePoint[];
  testimonial: {
    quote: string;
  };
  cta: {
    text: string;
    href: string;
  };
}

export function Guarantee({
  title,
  subtitle,
  description,
  guaranteePoints,
  testimonial,
  cta,
}: GuaranteeProps) {
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
            {title}
          </h2>
          <p className='text-muted-foreground sm:text-lg'>{description}</p>
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
            <p className='text-lg font-medium'>{testimonial.quote}</p>
          </div>

          <Button size='lg' className='group'>
            <a href={cta.href} className='flex items-center gap-2'>
              {cta.text}
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
