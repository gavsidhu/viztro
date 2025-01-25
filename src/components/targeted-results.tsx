import React, { ReactNode } from "react";
import {
  Trophy,
  Clock,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Transformation = {
  before: string;
  after: string;
  description: string;
};

type KeyOutcome = {
  icon: ReactNode;
  title: string;
  description: string;
  benefit: string;
};

type TargetedResultsProps = {
  title: string;
  subtitle: string;
  description: string;
  transformations: Transformation[];
  keyOutcomes: KeyOutcome[];
  vision: {
    icon: ReactNode;
    title: string;
    quote: string;
    subtitle: string;
  };
};

export function TargetedResults({
  title,
  subtitle,
  description,
  transformations,
  keyOutcomes,
  vision,
}: TargetedResultsProps) {
  return (
    <section className='container mx-auto py-24 sm:py-32'>
      <div className='relative space-y-16'>
        {/* Header */}
        <div className='mx-auto max-w-2xl space-y-4 text-center'>
          <div className='flex items-center justify-center gap-2 text-primary'>
            <Trophy className='h-5 w-5' />
            <span className='text-sm font-medium uppercase tracking-wider'>
              {subtitle}
            </span>
          </div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            {title}
          </h2>
          <p className='text-muted-foreground sm:text-lg'>{description}</p>
        </div>

        {/* Before/After Transformations */}
        <div className='mx-auto grid max-w-5xl gap-6 sm:grid-cols-3'>
          {transformations.map((item) => (
            <Card key={item.before} className='relative overflow-hidden'>
              <CardContent className='p-6'>
                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <div className='flex items-center justify-between text-sm'>
                      <div className='text-red-500'>{item.before}</div>
                      <ArrowRight className='h-4 w-4 text-muted-foreground' />
                      <div className='text-primary font-medium'>
                        {item.after}
                      </div>
                    </div>
                    <div className='h-2 rounded-full bg-muted overflow-hidden'>
                      <div className='h-full w-full bg-gradient-to-r from-red-500 via-primary to-primary rounded-full' />
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Outcomes */}
        <div className='mx-auto grid max-w-5xl gap-6 sm:grid-cols-3'>
          {keyOutcomes.map((outcome) => (
            <Card key={outcome.title} className='relative overflow-hidden'>
              <CardContent className='p-6'>
                <div className='space-y-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                    {outcome.icon}
                  </div>
                  <div className='space-y-2'>
                    <h3 className='font-semibold'>{outcome.title}</h3>
                    <p className='text-sm text-muted-foreground'>
                      {outcome.description}
                    </p>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <CheckCircle2 className='h-4 w-4 text-primary' />
                    <span className='text-primary font-medium'>
                      {outcome.benefit}
                    </span>
                  </div>
                </div>
              </CardContent>
              <div className='absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0' />
            </Card>
          ))}
        </div>

        {/* Vision Statement */}
        <div className='mx-auto max-w-3xl rounded-lg border bg-muted/50 p-8 text-center'>
          <div className='space-y-4'>
            <div className='flex items-center justify-center gap-2 text-primary'>
              {vision.icon}
              <span className='text-sm font-medium'>{vision.title}</span>
            </div>
            <p className='text-lg font-medium'>{vision.quote}</p>
            <p className='text-sm text-muted-foreground'>{vision.subtitle}</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className='absolute left-4 top-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
        <div className='absolute right-4 top-2/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
      </div>
    </section>
  );
}
