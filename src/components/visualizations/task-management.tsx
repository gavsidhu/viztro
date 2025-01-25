import { CheckSquare, ChevronRight } from "lucide-react";

interface StepVisualizationProps {
  className?: string;
}

export function TaskManagementVisualization({
  className,
}: StepVisualizationProps) {
  return (
    <div
      className={`grid h-full grid-cols-1 gap-4 rounded-lg border bg-background p-6 ${className}`}
    >
      <div className='space-y-4'>
        <div className='flex items-center gap-3 border-b pb-4'>
          <CheckSquare className='h-5 w-5 text-primary' />
          <span className='font-medium'>Task Tracker</span>
        </div>
        <div className='space-y-3'>
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <ChevronRight className='h-4 w-4 text-primary' />
              <span className='text-sm font-medium'>
                Initiative: Launch MVP
              </span>
            </div>
            <div className='ml-6 space-y-2'>
              <div className='flex items-center gap-2 rounded border bg-primary/10 p-2'>
                <div className='h-3 w-3 rounded border-2 border-primary' />
                <div className='h-2 w-32 rounded-full bg-primary/20' />
                <span className='ml-auto text-xs text-primary'>High</span>
              </div>
              <div className='flex items-center gap-2 rounded border bg-muted/50 p-2'>
                <div className='h-3 w-3 rounded border-2 border-muted-foreground' />
                <div className='h-2 w-40 rounded-full bg-muted' />
                <span className='ml-auto text-xs text-muted-foreground'>
                  Medium
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
