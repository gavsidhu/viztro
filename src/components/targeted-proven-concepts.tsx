"use client"

import { Microscope, Users, BookOpen, BrainCircuit, Target, LayoutGrid } from 'lucide-react'

const researchAreas = [
    {
        icon: BrainCircuit,
        name: "Creator Psychology Research",
        description: "Built on studies of how successful content creators maintain consistent output while avoiding burnout",
        source: "Content Creator Psychology Institute"
    },
    {
        icon: Target,
        name: "Content Strategy Studies",
        description: "Incorporates proven content planning methodologies from leading digital media researchers",
        source: "Digital Content Research Lab"
    },
    {
        icon: LayoutGrid,
        name: "Workflow Optimization",
        description: "Based on extensive research of how top creators organize and manage their content production",
        source: "Creator Excellence Center"
    }
]

const keyFindings = [
    {
        stat: "Structure",
        finding: "Creators with organized systems are 3x more likely to maintain consistent output",
    },
    {
        stat: "Planning",
        finding: "Advanced content planning reduces creative block by over 60%",
    },
    {
        stat: "Systems",
        finding: "Unified content systems lead to 2x higher completion rates",
    }
]

export function TargetedProvenConcepts() {
    return (
        <section className="container mx-auto py-24 sm:py-32">
            <div className="mx-auto max-w-6xl space-y-16">
                <div className="mx-auto max-w-2xl space-y-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                            <Microscope className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Built for Content Creators
                    </h2>
                    <p className="text-muted-foreground sm:text-lg">
                        V.I.T.A integrates years of research on content creator productivity
                        and success patterns into one comprehensive system
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-3">
                    {researchAreas.map((area) => (
                        <div
                            key={area.name}
                            className="relative space-y-4 rounded-2xl border bg-muted/50 p-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                    <area.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{area.name}</h3>
                                    <p className="text-xs text-muted-foreground">{area.source}</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mx-auto max-w-3xl space-y-8">
                    <div className="rounded-lg border bg-muted/50 px-6 py-8 md:px-12">
                        <div className="grid gap-8 sm:grid-cols-3">
                            {keyFindings.map((finding) => (
                                <div key={finding.stat} className="relative pl-6">
                                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20" />
                                    <div className="font-semibold">{finding.stat}</div>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {finding.finding}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-lg border bg-muted/50 p-6 text-center text-sm text-muted-foreground">
                        <div className="flex items-center justify-center gap-2 text-primary">
                            <Users className="h-5 w-5" />
                            <span className="font-medium">Research-Backed Methodology</span>
                        </div>
                        <p className="mt-2">
                            Every feature in V.I.T.A is grounded in real-world studies of successful content
                            creators and proven content production methodologies.
                        </p>
                    </div>
                </div>

                {/* Research Process Steps */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-16 border-l border-dashed border-primary/30 sm:left-1/2" />
                    <div className="space-y-8">
                        <div className="relative pl-20 sm:flex sm:items-center sm:gap-6 sm:pl-0">
                            <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border bg-muted sm:relative sm:left-auto sm:mr-0">
                                <BookOpen className="h-6 w-6 text-primary" />
                            </div>
                            <div className="sm:w-1/2 sm:text-right sm:pr-8">
                                <h3 className="font-semibold">Research Phase</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Analyzed content creation workflows of successful creators across multiple platforms
                                </p>
                            </div>
                            <div className="hidden sm:block sm:w-1/2" />
                        </div>

                        <div className="relative pl-20 sm:flex sm:items-center sm:gap-6 sm:pl-0">
                            <div className="sm:w-1/2" />
                            <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border bg-muted sm:relative sm:left-auto">
                                <BrainCircuit className="h-6 w-6 text-primary" />
                            </div>
                            <div className="sm:w-1/2 sm:pl-8">
                                <h3 className="font-semibold">System Development</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Created and refined our system based on proven content creation patterns
                                </p>
                            </div>
                        </div>

                        <div className="relative pl-20 sm:flex sm:items-center sm:gap-6 sm:pl-0">
                            <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border bg-muted sm:relative sm:left-auto">
                                <Target className="h-6 w-6 text-primary" />
                            </div>
                            <div className="sm:w-1/2 sm:text-right sm:pr-8">
                                <h3 className="font-semibold">Implementation</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Optimized the system specifically for content creator workflows and needs
                                </p>
                            </div>
                            <div className="hidden sm:block sm:w-1/2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

