import {
  FolderKanban,
  FileText,
  Link2,
  ChevronRight,
  BookOpen,
} from "lucide-react";

interface StepVisualizationProps {
  className?: string;
}

export function AssetOrganizationVisualization({
  className,
}: StepVisualizationProps) {
  return (
    <div
      className={`grid h-full grid-cols-1 gap-4 rounded-lg border bg-background p-6 ${className}`}
    >
      <div className='space-y-4'>
        <div className='flex items-center gap-3 border-b pb-4'>
          <FolderKanban className='h-5 w-5 text-primary' />
          <span className='font-medium'>Asset Library</span>
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <FileText className='h-4 w-4 text-primary' />
              <span className='text-sm font-medium'>Documents</span>
            </div>
            <div className='space-y-2 rounded-lg border bg-muted/50 p-2'>
              <div className='flex items-center gap-2'>
                <ChevronRight className='h-3 w-3 text-muted-foreground' />
                <div className='h-2 w-full rounded-full bg-muted' />
              </div>
              <div className='flex items-center gap-2'>
                <ChevronRight className='h-3 w-3 text-muted-foreground' />
                <div className='h-2 w-4/5 rounded-full bg-muted' />
              </div>
            </div>
          </div>
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <Link2 className='h-4 w-4 text-primary' />
              <span className='text-sm font-medium'>Resources</span>
            </div>
            <div className='space-y-2 rounded-lg border bg-muted/50 p-2'>
              <div className='flex items-center gap-2'>
                <BookOpen className='h-3 w-3 text-muted-foreground' />
                <div className='h-2 w-full rounded-full bg-muted' />
              </div>
              <div className='flex items-center gap-2'>
                <BookOpen className='h-3 w-3 text-muted-foreground' />
                <div className='h-2 w-4/5 rounded-full bg-muted' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
