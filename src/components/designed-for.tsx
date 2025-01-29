"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import type { ReactNode } from "react"

export interface Audience {
  title: string
  description: string
  icon: ReactNode
  link: string
  benefits: string[]
}

export interface DesignedForProps {
  title: string
  description: string
  audiences: Audience[]
}



export function DesignedFor({ title, description, audiences }: DesignedForProps) {
  return (
    <section className="container mx-auto py-24 sm:py-32">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground sm:text-lg">{description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <Card key={audience.title} className="group h-full transition-colors hover:border-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    {audience.icon}
                  </div>
                  <CardTitle>{audience.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>{audience.description}</CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {audience.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full group/button">
                  <Link href={audience.link} className="flex items-center justify-between">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

