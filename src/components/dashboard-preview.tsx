"use client";

import {
  Plus,
  Eye,
  Target,
  CheckSquare,
  Briefcase,
  Clock,
  ArrowRight,
  FileText,
  Layout,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import type { ReactNode } from "react";

export interface QuickLink {
  name: string;
  icon: ReactNode;
}

export interface NavigationItem {
  name: string;
  icon: ReactNode;
  count: number;
}

export interface Initiative {
  name: string;
  progress: number;
}

export interface InitiativeGroups {
  notStarted: Initiative[];
  inProgress: Initiative[];
  done: Initiative[];
}

export interface Asset {
  name: string;
  link: string;
  initiative: string;
}

export interface TaskItem {
  title: string;
  status: string;
  priority: string;
  initiative: string;
}

export interface DashboardPreviewProps {
  quickLinks: QuickLink[];
  navigation: NavigationItem[];
  currentInitiatives: InitiativeGroups;
  recentAssets: Asset[];
  currentTask: TaskItem;
}

export function DashboardPreview({
  quickLinks,
  navigation,
  currentInitiatives,
  recentAssets,
  currentTask,
}: DashboardPreviewProps) {
  return (
    <div className='mx-auto w-full max-w-6xl rounded-xl border bg-background p-4 shadow-lg sm:p-6'>
      <div className='grid gap-6 lg:grid-cols-[240px,1fr]'>
        {/* Sidebar */}
        <div className='space-y-6'>
          {/* Quick Links */}
          <div className='space-y-2'>
            <h3 className='text-sm font-medium'>Quick Links</h3>
            <div className='grid gap-1 sm:grid-cols-2 lg:grid-cols-1'>
              {quickLinks.map((link) => (
                <Button
                  key={link.name}
                  variant='ghost'
                  className='w-full justify-start gap-2'
                >
                  <Plus className='h-4 w-4' />
                  <span className='text-sm'>{link.name}</span>
                </Button>
              ))}
            </div>
          </div>

          <Separator className='hidden lg:block' />

          {/* Navigation */}
          <div className='space-y-2'>
            <h3 className='text-sm font-medium'>Navigation</h3>
            <div className='grid gap-1 sm:grid-cols-2 lg:grid-cols-1'>
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant='ghost'
                  className='w-full justify-between'
                >
                  <div className='flex items-center gap-2'>
                    <div className='h-4 w-4'>{item.icon}</div>
                    <span className='text-sm'>{item.name}</span>
                  </div>
                  <Badge variant='secondary' className='ml-2'>
                    {item.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className='space-y-6'>
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2 text-lg'>
                <Layout className='h-5 w-5' />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div className='flex flex-col gap-3 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between'>
                  <div className='flex items-center gap-3'>
                    <input
                      type='checkbox'
                      className='h-4 w-4 rounded border-primary'
                    />
                    <span className='text-sm'>{currentTask.title}</span>
                  </div>
                  <div className='flex flex-wrap items-center gap-2'>
                    <Badge variant='secondary'>{currentTask.status}</Badge>
                    <Badge variant='destructive'>{currentTask.priority}</Badge>
                    <Badge variant='outline'>{currentTask.initiative}</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Initiatives */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2 text-lg'>
                <Target className='h-5 w-5' />
                Current Initiatives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
                {/* Not Started */}
                <div className='space-y-4'>
                  <div className='flex items-center gap-2'>
                    <Clock className='h-4 w-4 text-muted-foreground' />
                    <span className='text-sm font-medium'>Not started</span>
                    <Badge variant='secondary'>
                      {currentInitiatives.notStarted.length}
                    </Badge>
                  </div>
                  <div className='space-y-2'>
                    {currentInitiatives.notStarted.map((initiative) => (
                      <div
                        key={initiative.name}
                        className='rounded-lg border p-3'
                      >
                        <div className='mb-2 text-sm'>{initiative.name}</div>
                        <Progress value={initiative.progress} className='h-1' />
                      </div>
                    ))}
                  </div>
                </div>

                {/* In Progress */}
                <div className='space-y-4'>
                  <div className='flex items-center gap-2'>
                    <ArrowRight className='h-4 w-4 text-blue-500' />
                    <span className='text-sm font-medium'>In progress</span>
                    <Badge variant='secondary'>
                      {currentInitiatives.inProgress.length}
                    </Badge>
                  </div>
                  <div className='space-y-2'>
                    {currentInitiatives.inProgress.map((initiative) => (
                      <div
                        key={initiative.name}
                        className='rounded-lg border p-3'
                      >
                        <div className='mb-2 text-sm'>{initiative.name}</div>
                        <Progress value={initiative.progress} className='h-1' />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Done */}
                <div className='space-y-4'>
                  <div className='flex items-center gap-2'>
                    <CheckSquare className='h-4 w-4 text-green-500' />
                    <span className='text-sm font-medium'>Done</span>
                    <Badge variant='secondary'>
                      {currentInitiatives.done.length}
                    </Badge>
                  </div>
                  <div className='space-y-2'>
                    {currentInitiatives.done.map((initiative) => (
                      <div
                        key={initiative.name}
                        className='rounded-lg border p-3'
                      >
                        <div className='mb-2 text-sm'>{initiative.name}</div>
                        <Progress value={initiative.progress} className='h-1' />
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
              <CardTitle className='flex items-center gap-2 text-lg'>
                <Star className='h-5 w-5' />
                Recent Assets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                {recentAssets.map((asset) => (
                  <div
                    key={asset.name}
                    className='flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between'
                  >
                    <div className='flex items-center gap-3'>
                      <FileText className='h-4 w-4 text-muted-foreground' />
                      <span className='text-sm'>{asset.name}</span>
                    </div>
                    <Badge variant='outline' className='w-fit'>
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
  );
}
