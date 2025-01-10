"use client"

import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const benefits = [
    "All-in-one Notion workspace for visionaries",
    "Turn your vision into actionable initiatives",
    "Track tasks and assets efficiently",
]

export function Hero() {
    return (
        <section className="container relative mx-auto">
            <div className="grid lg:grid-cols-[1fr,400px] gap-8 py-12 md:py-16 lg:py-24">
                <div
                    className="flex flex-col justify-center space-y-8"
                >
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Transform Your Vision into{" "}
                            <span className="text-primary">Reality</span>
                        </h1>
                        <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
                            The ultimate Notion template designed for visionaries. Seamlessly
                            manage your visions, initiatives, tasks, and assets in one powerful
                            system.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                    <CheckCircle className="h-4 w-4 text-primary" />
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 min-[400px]:flex-row">
                        <Button asChild size="lg" className="gap-2">
                            <Link href="#pricing">
                                Get Started Today
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="#system">Learn More</Link>
                        </Button>
                    </div>
                </div>

                <div
                    className="relative flex items-center justify-center lg:justify-end"
                >
                    <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-lg border bg-muted/50 shadow-xl">
                        <Image
                            src="/placeholder.svg?height=400&width=400"
                            alt="V.I.T.A System Preview"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Add a gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-background/10 via-background/5 to-background/0" />
                    </div>
                    {/* Add decorative elements */}
                    <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
                </div>
            </div>

            {/* Add a subtle divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-foreground/25 to-transparent" />
        </section>
    )
}

