"use client";

import { BookOpen, Lightbulb, BrainCircuit, Compass } from "lucide-react";

const concepts = [
  {
    icon: BookOpen,
    name: "Research-Backed Method",
    description:
      "Built on Harvard-published studies of how successful visionaries turn their ideas into reality across all fields - from artists to entrepreneurs",
  },
  {
    icon: BrainCircuit,
    name: "Cognitive Science Foundation",
    description:
      "Incorporates the latest research on how the brain processes creative vision and transforms abstract ideas into concrete actions",
  },
  {
    icon: Compass,
    name: "Universal Success Patterns",
    description:
      "Based on studying hundreds of successful creators, innovators, and changemakers who consistently bring their visions to life",
  },
  {
    icon: Lightbulb,
    name: "Proven Vision-to-Reality Path",
    description:
      "Combines decades of psychological and behavioral research on how visionaries successfully bridge the gap between imagination and execution",
  },
];

export function ProvenConcepts() {
  return (
    <section className='container mx-auto py-24 sm:py-32'>
      <div className='mx-auto max-w-2xl space-y-4 text-center'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
          Built on Proven Research
        </h2>
        <p className='text-muted-foreground sm:text-lg'>
          V.I.T.A integrates research from psychology, cognitive science, and
          creativity studies into one powerful system for visionaries.
        </p>
      </div>

      <div className='mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2'>
        {concepts.map((concept) => (
          <div
            key={concept.name}
            className='relative space-y-4 rounded-2xl border bg-muted/50 p-6'
          >
            <div className='flex items-center gap-4'>
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
                <concept.icon className='h-6 w-6 text-primary' />
              </div>
              <div>
                <h3 className='font-semibold'>{concept.name}</h3>
                <p className='text-sm text-muted-foreground'>
                  {concept.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mx-auto mt-16 max-w-2xl rounded-lg border bg-muted/50 p-6 text-center text-sm text-muted-foreground'>
        Every aspect of V.I.T.A is grounded in scientific research on how the
        most successful visionaries across all fields consistently turn their
        ideas into reality.
      </div>
    </section>
  );
}
