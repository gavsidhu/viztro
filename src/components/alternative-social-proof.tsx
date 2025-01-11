"use client";

import {
  Award,
  BookOpen,
  Users,
  Newspaper,
  BarChart3,
  MessageSquare,
} from "lucide-react";

const mediaFeatures = [
  "ProductHunt",
  "Notion Featured",
  "Medium",
  "Productivity Weekly",
  "StartupDaily",
  "TechCrunch",
];

const impactMetrics = [
  {
    icon: Users,
    label: "Community Members",
    value: "2,000+",
    sublabel: "Pre-launch signups",
  },
  {
    icon: BookOpen,
    label: "Knowledge Base",
    value: "200+",
    sublabel: "Articles and guides",
  },
  {
    icon: MessageSquare,
    label: "Active Discussions",
    value: "1,000+",
    sublabel: "Community engagement",
  },
];

const certifications = [
  {
    icon: Award,
    label: "Notion Certified",
    description: "Official Notion template partner",
  },
  {
    icon: BarChart3,
    label: "Verified Analytics",
    description: "Independently verified results",
  },
  {
    icon: Newspaper,
    label: "Published Research",
    description: "Peer-reviewed methodology",
  },
];

export function AlternativeSocialProof() {
  return (
    <section className='container mx-auto py-24 sm:py-32'>
      <div className='space-y-16'>
        {/* Featured In Section */}
        <div className='space-y-8'>
          <h3 className='text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
            Featured In
          </h3>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
            {mediaFeatures.map((media) => (
              <div
                key={media}
                className='flex h-16 items-center justify-center rounded-lg border bg-muted/50 px-6 py-3'
              >
                <span className='font-semibold tracking-tight'>{media}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className='space-y-8'>
          <h3 className='text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
            Community Impact
          </h3>
          <div className='grid gap-4 sm:grid-cols-3'>
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className='relative rounded-lg border bg-muted/50 p-8 text-center'
              >
                <div className='absolute inset-x-0 -top-px h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0' />
                <metric.icon className='mx-auto h-6 w-6 text-primary' />
                <div className='mt-4 space-y-1'>
                  <div className='text-3xl font-bold tracking-tight'>
                    {metric.value}
                  </div>
                  <div className='font-medium'>{metric.label}</div>
                  <div className='text-sm text-muted-foreground'>
                    {metric.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Verification */}
        <div className='space-y-8'>
          <h3 className='text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
            Certifications & Recognition
          </h3>
          <div className='grid gap-4 sm:grid-cols-3'>
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className='flex items-center gap-4 rounded-lg border bg-muted/50 p-6'
              >
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
                  <cert.icon className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <div className='font-medium'>{cert.label}</div>
                  <div className='text-sm text-muted-foreground'>
                    {cert.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Associations */}
        <div className='rounded-lg border bg-muted/50 px-8 py-12'>
          <div className='mx-auto max-w-2xl text-center'>
            <h3 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
              Professional Network
            </h3>
            <p className='mt-4'>
              Part of the official{" "}
              <span className='font-medium text-primary'>
                Notion Creator Network
              </span>{" "}
              and contributor to the{" "}
              <span className='font-medium text-primary'>
                Global Productivity Alliance
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
