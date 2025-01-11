"use client";

import {
  Briefcase,
  Brush,
  Code2,
  Rocket,
  GraduationCap,
  PenTool,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const audiences = [
  {
    title: "Entrepreneurs",
    description:
      "Transform your business ideas into structured plans. Perfect for startup founders and small business owners.",
    icon: Rocket,
    link: "/entrepreneurs",
    benefits: [
      "Business plan organization",
      "Project milestone tracking",
      "Resource allocation tools",
    ],
  },
  {
    title: "Creative Professionals",
    description:
      "Keep your creative projects organized and on track. Ideal for designers, writers, and artists.",
    icon: Brush,
    link: "/creatives",
    benefits: [
      "Portfolio management",
      "Client project tracking",
      "Creative asset organization",
    ],
  },
  {
    title: "Developers",
    description:
      "Manage your development roadmap and technical documentation. Built for software developers and tech leads.",
    icon: Code2,
    link: "/developers",
    benefits: [
      "Technical documentation",
      "Sprint planning",
      "Code snippet organization",
    ],
  },
  {
    title: "Product Managers",
    description:
      "Streamline your product development process. Essential for PMs and product owners.",
    icon: Briefcase,
    link: "/product-managers",
    benefits: [
      "Feature roadmapping",
      "User feedback tracking",
      "Release planning",
    ],
  },
  {
    title: "Students",
    description:
      "Organize your academic goals and research. Perfect for students and researchers.",
    icon: GraduationCap,
    link: "/students",
    benefits: [
      "Study plan creation",
      "Research organization",
      "Project tracking",
    ],
  },
  {
    title: "Content Creators",
    description:
      "Plan and organize your content calendar. Made for YouTubers, bloggers, and social media managers.",
    icon: PenTool,
    link: "/content-creators",
    benefits: ["Content calendar", "Asset management", "Idea repository"],
  },
];

export function DesignedFor() {
  return (
    <section className='container mx-auto py-24 sm:py-32'>
      <div className='space-y-8'>
        <div className='space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Specifically Designed For You
          </h2>
          <p className='mx-auto max-w-[900px] text-muted-foreground sm:text-lg'>
            Whether you&apos;re an entrepreneur, creative professional, or
            developer, V.I.T.A adapts to your unique needs. Discover how our
            system can be tailored to your workflow.
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {audiences.map((audience) => (
            <Card
              key={audience.title}
              className='group h-full transition-colors hover:border-primary'
            >
              <CardHeader>
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20'>
                    <audience.icon className='h-6 w-6 text-primary' />
                  </div>
                  <CardTitle>{audience.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <CardDescription>{audience.description}</CardDescription>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  {audience.benefits.map((benefit, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      <div className='h-1 w-1 rounded-full bg-primary' />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant='ghost' className='w-full group/button'>
                  <Link
                    href={audience.link}
                    className='flex items-center justify-between'
                  >
                    Learn more
                    <ArrowRight className='h-4 w-4 transition-transform group-hover/button:translate-x-1' />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
