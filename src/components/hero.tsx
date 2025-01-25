"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "@/components/dashboard-preview";

type HeroProps = {
  title: string;
  description: string;
  benefits: string[];
};

export function Hero({ title, description, benefits }: HeroProps) {
  return (
    <section className='container mx-auto relative'>
      <div className='mx-auto max-w-5xl space-y-12 py-12 md:py-16 lg:py-24'>
        <div className='mx-auto max-w-3xl space-y-8 text-center'>
          <div className='space-y-6'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
              {title}
            </h1>
            <p className='text-lg text-muted-foreground sm:text-xl'>
              {description}
            </p>
          </div>

          <div className='space-y-4'>
            <div className='inline-flex flex-col gap-2'>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2 text-sm text-muted-foreground'
                >
                  <CheckCircle className='h-4 w-4 text-primary' />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-4 min-[400px]:flex-row justify-center'>
            <Button asChild size='lg' className='gap-2'>
              <Link href='#pricing'>
                Get Started Today
                <ArrowRight className='h-4 w-4' />
              </Link>
            </Button>
            <Button asChild variant='outline' size='lg'>
              <Link href='#system'>Learn More</Link>
            </Button>
          </div>
        </div>

        <div className='relative mx-auto w-full max-w-5xl'>
          <div className='relative w-full overflow-hidden rounded-xl border shadow-2xl'>
            <DashboardPreview />
          </div>
          {/* Add decorative elements */}
          <div className='absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/10 blur-xl' />
          <div className='absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-xl' />
        </div>
      </div>

      {/* Add a subtle divider */}
      <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-foreground/25 to-transparent' />
    </section>
  );
}
