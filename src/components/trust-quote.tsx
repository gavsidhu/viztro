"use client"

import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export interface TrustQuoteProps {
  quote: string
  author: {
    name: string
    title: string
  }
}


export function TrustQuote({ quote, author }: TrustQuoteProps) {
  return (
    <section className="container mx-auto py-24 sm:py-32">
      <Card className="mx-auto max-w-4xl bg-muted/50">
        <CardContent className="p-8 sm:p-12">
          <div className="space-y-4">
            <Quote className="h-12 w-12 text-primary/20" />
            <blockquote className="space-y-6">
              <p className="text-xl font-medium leading-relaxed text-muted-foreground sm:text-2xl">{quote}</p>
              <footer>
                <div className="font-semibold">{author.name}</div>
                <div className="text-sm text-muted-foreground">{author.title}</div>
              </footer>
            </blockquote>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

