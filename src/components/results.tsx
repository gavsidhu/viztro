"use client"

import { CheckCircle2 } from "lucide-react"
import type { ReactNode } from "react"

export interface Metric {
  number: string
  label: string
  description: string
  icon: ReactNode
  delay: number
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export interface ResultsProps {
  title: string
  subtitle: string
  description: string
  metrics: Metric[]
  testimonial: Testimonial
}



export function Results({ title, subtitle, description, metrics, testimonial }: ResultsProps) {
  return (
    <section className="container mx-auto relative py-24 sm:py-32">
      <div className="absolute inset-x-0 -top-16 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[800px] w-full rotate-12 transform bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="space-y-16">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <div className="flex items-center justify-center gap-2 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">{subtitle}</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
          <p className="text-muted-foreground sm:text-lg">{description}</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="relative space-y-6 rounded-2xl border bg-background p-6 shadow-lg"
              style={{
                transitionDelay: `${metric.delay}s`,
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">{metric.icon}</div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight">{metric.number}</span>
                  <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
                </div>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border bg-muted/50 p-8 text-center">
          <figure className="space-y-4">
            <blockquote>
              <p className="text-lg font-medium italic text-muted-foreground">"{testimonial.quote}"</p>
            </blockquote>
            <figcaption>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            </figcaption>
          </figure>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-4 top-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute right-4 top-2/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
      </div>
    </section>
  )
}

