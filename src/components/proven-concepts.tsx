"use client"

import { Check, Download, Users, MessageCircle, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { ReactNode } from "react"

export interface Bonus {
  icon: ReactNode
  title: string
  description: string
  value: string
}

export interface SocialProof {
  users: string
  rating: string
  reviews: string
}

export interface PricingDetails {
  current: number
  original: number
  discount: string
  currency: string
}

export interface CTAButton {
  text: string
  href?: string
}

export interface PurchaseProps {
  title: string
  description: string
  features: string[]
  bonuses: Bonus[]
  socialProof: SocialProof
  pricing: PricingDetails
  cta: CTAButton
  deliveryFeatures: string[]
  securityNote: string
}

export function Purchase({
  title,
  description,
  features,
  bonuses,
  socialProof,
  pricing,
  cta,
  deliveryFeatures,
  securityNote,
}: PurchaseProps) {
  return (
    <section className="container mx-auto py-24 sm:py-32" id="pricing">
      <div className="relative space-y-16">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
          <p className="text-muted-foreground sm:text-lg">{description}</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr,400px]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Everything you need to succeed:</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Exclusive Bonuses:</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {bonuses.map((bonus, index) => (
                  <Card
                    key={bonus.title}
                    className={`relative overflow-hidden ${index === bonuses.length - 1 && bonuses.length % 2 !== 0 ? "sm:col-span-2 lg:col-span-1" : ""
                      }`}
                  >
                    <CardHeader className="space-y-2 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          {bonus.icon}
                        </div>
                        <div className="text-sm font-semibold">{bonus.title}</div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <p className="text-sm text-muted-foreground">{bonus.description}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="text-sm font-semibold text-primary">Value: {bonus.value}</div>
                    </CardFooter>
                    <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <Card className="relative overflow-hidden lg:sticky lg:top-32">
            <CardHeader className="space-y-4 pb-4">
              <div className="space-y-2">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">One-time payment</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">
                        {pricing.currency}
                        {pricing.current}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground line-through">
                        {pricing.currency}
                        {pricing.original}
                      </span>
                    </div>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {pricing.discount} OFF
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">Limited time offer. Price will increase soon!</div>
              </div>
              <Separator />
              <div className="flex justify-between text-sm">
                <div className="flex flex-col items-center gap-1">
                  <Users className="h-4 w-4 text-primary" />
                  <div className="font-medium">{socialProof.users}</div>
                  <div className="text-xs text-muted-foreground">Active Users</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <div className="font-medium">{socialProof.reviews}</div>
                  <div className="text-xs text-muted-foreground">Reviews</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <div className="font-medium">{socialProof.rating}</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  {deliveryFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      {feature.includes("Instant") ? (
                        <Download className="h-4 w-4 text-primary" />
                      ) : (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button size="lg" className="w-full group" asChild>
                <a href={cta.href}>
                  {cta.text}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <div className="text-center text-xs text-muted-foreground">{securityNote}</div>
            </CardFooter>
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </Card>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-4 top-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute right-4 top-2/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
      </div>
    </section>
  )
}


