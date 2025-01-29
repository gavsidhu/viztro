"use client"

import { Quote } from "lucide-react"
import type { ReactNode } from "react"

export interface JourneyStep {
  icon: ReactNode
  title: string
  content: string
}

export interface Metric {
  value: string
  label: string
}

export interface AboutFounderProps {
  title: string
  subtitle: string
  description: string
  journeySteps: JourneyStep[]
  quote: {
    text: string
    author: string
  }
  metrics: Metric[]
}

export function AboutFounder({ title, subtitle, description, journeySteps, quote, metrics }: AboutFounderProps) {
  return (
    <section className="container mx-auto relative py-24 sm:py-32" id="about">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-background to-transparent" />
      </div>

      <div className="relative space-y-12">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
          <p className="text-muted-foreground sm:text-lg">{subtitle}</p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {journeySteps.map((step, index) => (
              <div
                key={step.title}
                className="relative space-y-4 rounded-2xl border bg-background/60 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">{step.icon}</div>
                  <h3 className="font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.content}</p>
                {index !== journeySteps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-1 w-8 -translate-y-1/2 bg-primary/20 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <div className="relative rounded-xl border bg-background/60 p-8 backdrop-blur-sm">
            <Quote className="absolute -left-3 -top-3 h-6 w-6 text-primary/20" />
            <blockquote className="relative space-y-4">
              <p className="text-lg font-medium">{quote.text}</p>
              <footer className="text-sm text-muted-foreground">{quote.author}</footer>
            </blockquote>
          </div>

          <div className="flex justify-center gap-8 rounded-lg border bg-muted/50 px-4 py-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-4 top-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute right-4 top-2/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
      </div>
    </section>
  )
}