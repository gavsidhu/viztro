import { LayoutDashboard } from "lucide-react";

interface StepVisualizationProps {
  className?: string;
}

export function InitiativePlanningVisualization({
  className,
}: StepVisualizationProps) {
  return (
    <div
      className={`grid h-full grid-cols-1 gap-4 rounded-lg border bg-background p-6 ${className}`}
    >
      <div className='space-y-4'>
        <div className='flex items-center justify-between border-b pb-4'>
          <div className='flex items-center gap-3'>
            <LayoutDashboard className='h-5 w-5 text-primary' />
            <span className='font-medium'>Initiative Board</span>
          </div>
          <div className='flex gap-2'>
            <div className='h-4 w-16 rounded-full bg-muted' />
            <div className='h-4 w-16 rounded-full bg-muted' />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-3'>
          <div className='space-y-2'>
            <div className='flex items-center justify-between rounded-md bg-primary/10 px-3 py-2'>
              <span className='text-xs font-medium'>Planning</span>
              <div className='h-4 w-4 rounded-full bg-primary/20' />
            </div>
            <div className='space-y-2 rounded border bg-muted/50 p-2'>
              <div className='h-2 w-full rounded-full bg-muted' />
              <div className='h-2 w-2/3 rounded-full bg-muted' />
            </div>
          </div>
          <div className='space-y-2'>
            <div className='flex items-center justify-between rounded-md bg-muted/50 px-3 py-2'>
              <span className='text-xs font-medium'>In Progress</span>
              <div className='h-4 w-4 rounded-full bg-muted' />
            </div>
            <div className='space-y-2 rounded border bg-muted/50 p-2'>
              <div className='h-2 w-full rounded-full bg-muted' />
              <div className='h-2 w-2/3 rounded-full bg-muted' />
            </div>
          </div>
          <div className='space-y-2'>
            <div className='flex items-center justify-between rounded-md bg-muted/50 px-3 py-2'>
              <span className='text-xs font-medium'>Completed</span>
              <div className='h-4 w-4 rounded-full bg-muted' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
