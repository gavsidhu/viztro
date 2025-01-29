"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface Author {
  name: string
  role: string
  image: string
}

export interface Review {
  id: number | string
  rating: number
  title: string
  content: string
  author: Author
}

export interface Metric {
  value: string
  label: string
}

export interface FeaturedReviewsProps {
  title: string
  description: string
  reviews: Review[]
  metrics: Metric[]
}


export function FeaturedReviews({ title, description, reviews, metrics }: FeaturedReviewsProps) {
  return (
    <section className="container mx-auto py-24 sm:py-32">
      <div className="space-y-16">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
          <p className="text-muted-foreground sm:text-lg">{description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className={`h-full ${index === reviews.length - 1 && reviews.length % 2 !== 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < review.rating ? "fill-primary text-primary" : "fill-muted stroke-muted-foreground"
                            }`}
                        />
                      ))}
                    </div>
                    <h3 className="font-semibold">{review.title}</h3>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -left-1 -top-1 h-4 w-4 text-muted-foreground/20" />
                    <p className="pl-4 text-muted-foreground">{review.content}</p>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <Avatar>
                      <AvatarImage src={review.author.image} alt={review.author.name} />
                      <AvatarFallback>
                        {review.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium leading-snug">{review.author.name}</div>
                      <div className="text-sm text-muted-foreground">{review.author.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-2xl space-y-4">
          <div className="flex justify-center gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex h-20 w-full items-center justify-center rounded-lg border bg-muted/50"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

