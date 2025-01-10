"use client"

import { Lightbulb, Target, ListChecks, Briefcase, ArrowRight, ComponentIcon as Components, Brain } from 'lucide-react'

const benefits = [
    {
        title: "Vision Clarity",
        description:
            "Transform abstract ideas into clear, actionable visions. Our structured approach helps you define and refine your goals with precision.",
        icon: Lightbulb,
        delay: 0.1,
    },
    {
        title: "Strategic Planning",
        description:
            "Break down your visions into manageable initiatives. Create a roadmap that turns your big ideas into achievable milestones.",
        icon: Target,
        delay: 0.2,
    },
    {
        title: "Task Management",
        description:
            "Never lose track of your progress. Our task system helps you organize, prioritize, and execute your daily actions effectively.",
        icon: ListChecks,
        delay: 0.3,
    },
    {
        title: "Asset Organization",
        description:
            "Keep all your resources in one place. Efficiently manage documents, links, and tools needed to bring your vision to life.",
        icon: Briefcase,
        delay: 0.4,
    },
    {
        title: "System Integration",
        description:
            "All components work seamlessly together. Experience a unified workflow that connects your visions to your daily tasks.",
        icon: Components,
        delay: 0.5,
    },
    {
        title: "Mental Clarity",
        description:
            "Free your mind from chaos. Our system serves as your second brain, helping you focus on execution rather than organization.",
        icon: Brain,
        delay: 0.6,
    },
]

export function Benefits() {
    return (
        <section className="container mx-auto py-24 sm:py-32">
            <div
                className="relative"
            >
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Why Choose V.I.T.A?
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground sm:text-lg">
                        Stop letting great ideas slip away. V.I.T.A provides a comprehensive system
                        that helps visionaries like you transform thoughts into reality through
                        organized, actionable steps.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.title}
                            className="relative space-y-4 rounded-3xl border p-6 transition-shadow hover:shadow-md"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                    <benefit.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold">{benefit.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <div
                    >
                        <a
                            href="#pricing"
                            className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                        >
                            Start organizing your vision today
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                {/* Add decorative elements */}
                <div className="absolute -left-4 top-24 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute -right-4 bottom-24 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            </div>
        </section>
    )
}

