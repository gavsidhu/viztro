"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { VisionCaptureVisualization } from "./visualizations/vision-capture";
import { InitiativePlanningVisualization } from "./visualizations/initiative-planning";
import { TaskManagementVisualization } from "./visualizations/task-management";
import { AssetOrganizationVisualization } from "./visualizations/asset-organization";
import { ReactNode } from "react";

export interface Step {
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
}

export interface HowItWorksProps {
  title: string;
  description: string;
  steps: Step[];
  ctaText: string;
  ctaHref: string;
}

const visualizations = {
  "Vision Capture": VisionCaptureVisualization,
  "Initiative Planning": InitiativePlanningVisualization,
  "Task Management": TaskManagementVisualization,
  "Asset Organization": AssetOrganizationVisualization,
};

export function HowItWorks({
  title,
  description,
  steps,
  ctaText,
  ctaHref,
}: HowItWorksProps) {
  return (
    <section className='container mx-auto py-24 sm:py-32' id='process'>
      <div className='space-y-8'>
        <div className='space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            {title}
          </h2>
          <p className='mx-auto max-w-[900px] text-muted-foreground sm:text-lg'>
            {description}
          </p>
        </div>

        <div className='space-y-16'>
          {steps.map((step, index) => {
            const StepVisualization =
              visualizations[step.title as keyof typeof visualizations];
            return (
              <div
                key={step.title}
                className={`group relative grid gap-4 md:gap-8 ${index % 2 === 0
                    ? "md:grid-cols-[2fr,3fr]"
                    : "md:grid-cols-[3fr,2fr]"
                  }`}
              >
                <div
                  className={`flex flex-col justify-center space-y-4 ${index % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                >
                  <div className='flex items-center gap-4'>
                    <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20'>
                      {step.icon}
                    </div>
                    <h3 className='text-xl font-semibold'>{step.title}</h3>
                  </div>
                  <p className='text-muted-foreground'>{step.description}</p>
                </div>

                <div
                  className={`h-[300px] ${index % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                >
                  <StepVisualization />
                </div>

                {index !== steps.length - 1 && (
                  <div className='absolute -bottom-12 left-1/2 hidden -translate-x-1/2 md:block'>
                    <ArrowDown className='h-8 w-8 text-muted-foreground/25' />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className='flex justify-center pt-8'>
          <a
            href={ctaHref}
            className='group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80'
          >
            {ctaText}
            <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
          </a>
        </div>
      </div>
    </section>
  );
}
