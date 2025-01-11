"use client";

import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TrustQuote() {
  return (
    <section className='container mx-auto py-24 sm:py-32'>
      <Card className='mx-auto max-w-4xl bg-muted/50'>
        <CardContent className='p-8 sm:p-12'>
          <div className='space-y-4'>
            <Quote className='h-12 w-12 text-primary/20' />
            <blockquote className='space-y-6'>
              <p className='text-xl font-medium leading-relaxed text-muted-foreground sm:text-2xl'>
                "The difference between a dream and a vision lies in the
                systematic approach to execution. A clear framework for
                transforming ideas into reality is what separates successful
                visionaries from eternal dreamers."
              </p>
              <footer>
                <div className='font-semibold'>Peter F. Drucker</div>
                <div className='text-sm text-muted-foreground'>
                  Management Consultant & Author of "The Effective Executive"
                </div>
              </footer>
            </blockquote>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
