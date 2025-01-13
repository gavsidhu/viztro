"use client"

import { Plus, Eye, Target, CheckSquare, Briefcase, Clock, ArrowRight, FileText, Layout, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

const quickLinks = [
    { name: "Quick Note", icon: FileText },
    { name: "New Vision", icon: Eye },
    { name: "New Initiative", icon: Target },
    { name: "New Task", icon: CheckSquare }
]

const navigation = [
    { name: "Visions", icon: Eye, count: 5 },
    { name: "Initiatives", icon: Target, count: 8 },
    { name: "Tasks", icon: CheckSquare, count: 12 },
    { name: "Assets", icon: Briefcase, count: 24 }
]

const currentInitiatives = {
    notStarted: [
        { name: "Plan Publication/Distribution", progress: 0 },
        { name: "Write a novel", progress: 0 }
    ],
    inProgress: [
        { name: "Purchase furniture and equipment", progress: 33.5 },
        { name: "Draft Novel", progress: 26.7 }
    ],
    done: [
        { name: "Organize and Declutter Space", progress: 100 },
        { name: "Design and Plan Workspace", progress: 100 }
    ]
}

const recentAssets = [
    {
        name: "BESTA storage combination with doors",
        link: "ikea.com/us/_21699/",
        initiative: "Purchase furniture and..."
    },
    {
        name: "Seville Classics UltraHD 2-Drawer Rolling",
        link: "samsclub.com/p/uct_12",
        initiative: "Purchase furniture and..."
    },
    {
        name: "Character Relationship Chart: Free Template",
        link: "milanote.com/tem_dt-map",
        initiative: "Draft Novel"
    }
]

export function DashboardPreview() {
    return (
        <div className="mx-auto w-full max-w-6xl rounded-xl border bg-background p-4 shadow-lg sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[240px,1fr]">
                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Quick Links */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium">Quick Links</h3>
                        <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
                            {quickLinks.map((link) => (
                                <Button
                                    key={link.name}
                                    variant="ghost"
                                    className="w-full justify-start gap-2"
                                >
                                    <Plus className="h-4 w-4" />
                                    <span className="text-sm">{link.name}</span>
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Separator className="hidden lg:block" />

                    {/* Navigation */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium">Navigation</h3>
                        <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
                            {navigation.map((item) => (
                                <Button
                                    key={item.name}
                                    variant="ghost"
                                    className="w-full justify-between"
                                >
                                    <div className="flex items-center gap-2">
                                        <item.icon className="h-4 w-4" />
                                        <span className="text-sm">{item.name}</span>
                                    </div>
                                    <Badge variant="secondary" className="ml-2">
                                        {item.count}
                                    </Badge>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    {/* Overview */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Layout className="h-5 w-5" />
                                Overview
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div className="flex flex-col gap-3 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-3">
                                        <input type="checkbox" className="h-4 w-4 rounded border-primary" />
                                        <span className="text-sm">Write Act 1</span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <Badge variant="secondary">In progress</Badge>
                                        <Badge variant="destructive">High</Badge>
                                        <Badge variant="outline">Draft Novel</Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Current Initiatives */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Target className="h-5 w-5" />
                                Current Initiatives
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {/* Not Started */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm font-medium">Not started</span>
                                        <Badge variant="secondary">2</Badge>
                                    </div>
                                    <div className="space-y-2">
                                        {currentInitiatives.notStarted.map((initiative) => (
                                            <div
                                                key={initiative.name}
                                                className="rounded-lg border p-3"
                                            >
                                                <div className="mb-2 text-sm">{initiative.name}</div>
                                                <Progress value={initiative.progress} className="h-1" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* In Progress */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4 text-blue-500" />
                                        <span className="text-sm font-medium">In progress</span>
                                        <Badge variant="secondary">2</Badge>
                                    </div>
                                    <div className="space-y-2">
                                        {currentInitiatives.inProgress.map((initiative) => (
                                            <div
                                                key={initiative.name}
                                                className="rounded-lg border p-3"
                                            >
                                                <div className="mb-2 text-sm">{initiative.name}</div>
                                                <Progress value={initiative.progress} className="h-1" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Done */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <CheckSquare className="h-4 w-4 text-green-500" />
                                        <span className="text-sm font-medium">Done</span>
                                        <Badge variant="secondary">2</Badge>
                                    </div>
                                    <div className="space-y-2">
                                        {currentInitiatives.done.map((initiative) => (
                                            <div
                                                key={initiative.name}
                                                className="rounded-lg border p-3"
                                            >
                                                <div className="mb-2 text-sm">{initiative.name}</div>
                                                <Progress value={initiative.progress} className="h-1" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Assets */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Star className="h-5 w-5" />
                                Recent Assets
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {recentAssets.map((asset) => (
                                    <div
                                        key={asset.name}
                                        className="flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between"
                                    >
                                        <div className="flex items-center gap-3">
                                            <FileText className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-sm">{asset.name}</span>
                                        </div>
                                        <Badge variant="outline" className="w-fit">
                                            {asset.initiative}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

