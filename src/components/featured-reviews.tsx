"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    id: 1,
    rating: 5,
    title: "Game-Changing System for Entrepreneurs",
    content:
      "V.I.T.A has completely transformed how I approach my business ventures. The vision-to-execution framework helped me launch two successful startups in just 18 months.",
    author: {
      name: "Michael Chang",
      role: "Serial Entrepreneur",
      image: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 2,
    rating: 5,
    title: "Finally, A System That Works",
    content:
      "As a creative director, I've tried countless project management tools. V.I.T.A is different - it understands how visionaries think and helps translate big ideas into actionable steps.",
    author: {
      name: "Emma Rodriguez",
      role: "Creative Director",
      image: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 3,
    rating: 5,
    title: "Worth Every Penny",
    content:
      "The structured approach to vision realization is invaluable. I've accomplished more in 3 months using V.I.T.A than I did in the entire previous year.",
    author: {
      name: "David Kim",
      role: "Product Manager",
      image: "/placeholder.svg?height=40&width=40",
    },
  },
];

export function FeaturedReviews() {
  return (
    <section className='container mx-auto py-24 sm:py-32'>
      <div className='space-y-16'>
        <div className='mx-auto max-w-2xl space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Loved by Visionaries
          </h2>
          <p className='text-muted-foreground sm:text-lg'>
            Join thousands of visionaries who have transformed their ideas into
            reality using V.I.T.A.
          </p>
        </div>

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className={`h-full ${
                index === reviews.length - 1 && reviews.length % 2 !== 0
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <CardContent className='p-6'>
                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <div className='flex items-center gap-0.5'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating
                              ? "fill-primary text-primary"
                              : "fill-muted stroke-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <h3 className='font-semibold'>{review.title}</h3>
                  </div>
                  <div className='relative'>
                    <Quote className='absolute -left-1 -top-1 h-4 w-4 text-muted-foreground/20' />
                    <p className='pl-4 text-muted-foreground'>
                      {review.content}
                    </p>
                  </div>
                  <div className='flex items-center gap-4 pt-4'>
                    <Avatar>
                      <AvatarImage
                        src={review.author.image}
                        alt={review.author.name}
                      />
                      <AvatarFallback>
                        {review.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className='font-medium leading-snug'>
                        {review.author.name}
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        {review.author.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='mx-auto max-w-2xl space-y-4'>
          <div className='flex justify-center gap-4'>
            <div className='flex h-20 w-full items-center justify-center rounded-lg border bg-muted/50'>
              <div className='text-center'>
                <div className='text-2xl font-bold'>2,000+</div>
                <div className='text-sm text-muted-foreground'>
                  Active Users
                </div>
              </div>
            </div>
            <div className='flex h-20 w-full items-center justify-center rounded-lg border bg-muted/50'>
              <div className='text-center'>
                <div className='text-2xl font-bold'>10,000+</div>
                <div className='text-sm text-muted-foreground'>
                  Visions Realized
                </div>
              </div>
            </div>
            <div className='flex h-20 w-full items-center justify-center rounded-lg border bg-muted/50'>
              <div className='text-center'>
                <div className='text-2xl font-bold'>4.9/5</div>
                <div className='text-sm text-muted-foreground'>
                  Average Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
