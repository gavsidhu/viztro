"use client";

import {
  TypeIcon as type,
  LucideIcon,
  Microscope,
  Users,
  BookOpen,
  BrainCircuit,
  Target,
} from "lucide-react";

interface ResearchArea {
  icon: LucideIcon;
  name: string;
  description: string;
  source: string;
}

interface KeyFinding {
  stat: string;
  finding: string;
}

interface ResearchStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TargetedProvenConceptsProps {
  title: string;
  subtitle: string;
  description: string;
  researchAreas: ResearchArea[];
  keyFindings: KeyFinding[];
  methodologyNote: {
    title: string;
    description: string;
  };
  researchSteps: ResearchStep[];
}

export function TargetedProvenConcepts({
  title,
  subtitle,
  description,
  researchAreas,
  keyFindings,
  methodologyNote,
  researchSteps,
}: TargetedProvenConceptsProps) {
  return (
    <section className='container mx-auto py-24 sm:py-32'>
      <div className='mx-auto max-w-6xl space-y-16'>
        <div className='mx-auto max-w-2xl space-y-4 text-center'>
          <div className='flex items-center justify-center gap-2'>
            <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10'>
              <Microscope className='h-8 w-8 text-primary' />
            </div>
          </div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            {title}
          </h2>
          <p className='text-muted-foreground sm:text-lg'>{description}</p>
        </div>

        <div className='grid gap-8 sm:grid-cols-3'>
          {researchAreas.map((area) => (
            <div
              key={area.name}
              className='relative space-y-4 rounded-2xl border bg-muted/50 p-6'
            >
              <div className='flex items-center gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
                  <area.icon className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h3 className='font-semibold'>{area.name}</h3>
                  <p className='text-xs text-muted-foreground'>{area.source}</p>
                </div>
              </div>
              <p className='text-sm text-muted-foreground'>
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className='mx-auto max-w-3xl space-y-8'>
          <div className='rounded-lg border bg-muted/50 px-6 py-8 md:px-12'>
            <div className='grid gap-8 sm:grid-cols-3'>
              {keyFindings.map((finding) => (
                <div key={finding.stat} className='relative pl-6'>
                  <div className='absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20' />
                  <div className='font-semibold'>{finding.stat}</div>
                  <p className='mt-2 text-sm text-muted-foreground'>
                    {finding.finding}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='rounded-lg border bg-muted/50 p-6 text-center text-sm text-muted-foreground'>
            <div className='flex items-center justify-center gap-2 text-primary'>
              <Users className='h-5 w-5' />
              <span className='font-medium'>{methodologyNote.title}</span>
            </div>
            <p className='mt-2'>{methodologyNote.description}</p>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute inset-y-0 left-16 border-l border-dashed border-primary/30 sm:left-1/2' />
          <div className='space-y-8'>
            {researchSteps.map((step, index) => (
              <div
                key={step.title}
                className='relative pl-20 sm:flex sm:items-center sm:gap-6 sm:pl-0'
              >
                {index % 2 === 0 ? (
                  <>
                    <div className='absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border bg-muted sm:relative sm:left-auto sm:mr-0'>
                      <step.icon className='h-6 w-6 text-primary' />
                    </div>
                    <div className='sm:w-1/2 sm:text-right sm:pr-8'>
                      <h3 className='font-semibold'>{step.title}</h3>
                      <p className='mt-2 text-sm text-muted-foreground'>
                        {step.description}
                      </p>
                    </div>
                    <div className='hidden sm:block sm:w-1/2' />
                  </>
                ) : (
                  <>
                    <div className='sm:w-1/2' />
                    <div className='absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border bg-muted sm:relative sm:left-auto'>
                      <step.icon className='h-6 w-6 text-primary' />
                    </div>
                    <div className='sm:w-1/2 sm:pl-8'>
                      <h3 className='font-semibold'>{step.title}</h3>
                      <p className='mt-2 text-sm text-muted-foreground'>
                        {step.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
