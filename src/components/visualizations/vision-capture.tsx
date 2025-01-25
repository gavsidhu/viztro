import { Database, Calendar, Users, ChevronRight } from "lucide-react";

interface StepVisualizationProps {
  className?: string;
}

export function VisionCaptureVisualization({
  className,
}: StepVisualizationProps) {
  return (
    <div
      className={`grid h-full grid-cols-1 gap-4 rounded-lg border bg-background p-6 ${className}`}
    >
      <div className='space-y-4'>
        <div className='flex items-center gap-3 border-b pb-4'>
          <Database className='h-5 w-5 text-primary' />
          <span className='font-medium'>Vision Database</span>
        </div>
        <div className='space-y-3'>
          <div className='space-y-2 rounded-lg border bg-muted/50 p-3'>
            <div className='flex items-center gap-2'>
              <ChevronRight className='h-4 w-4 text-muted-foreground' />
              <div className='h-2 w-48 rounded-full bg-primary/20' />
              <span className='ml-auto text-xs text-muted-foreground'>
                Vision #1
              </span>
            </div>
            <div className='ml-6 space-y-2'>
              <div className='flex items-center gap-2'>
                <Calendar className='h-3 w-3 text-muted-foreground' />
                <div className='h-2 w-24 rounded-full bg-muted' />
              </div>
              <div className='flex items-center gap-2'>
                <Users className='h-3 w-3 text-muted-foreground' />
                <div className='h-2 w-32 rounded-full bg-muted' />
              </div>
            </div>
          </div>
          <div className='space-y-2 rounded-lg border bg-muted/50 p-3'>
            <div className='flex items-center gap-2'>
              <ChevronRight className='h-4 w-4 text-muted-foreground' />
              <div className='h-2 w-40 rounded-full bg-muted' />
              <span className='ml-auto text-xs text-muted-foreground'>
                Vision #2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
