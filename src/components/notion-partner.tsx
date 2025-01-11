"use client";

import { BadgeCheck } from "lucide-react";

export function NotionPartner() {
  return (
    <div className='mx-auto -mt-4 mb-12 flex max-w-xl items-center justify-center gap-3 rounded-full border bg-background/95 px-5 py-2.5 shadow-sm backdrop-blur'>
      <BadgeCheck className='h-4 w-4 text-primary' />
      <p className='text-sm'>
        <span className='font-medium'>Notion Verified Creator</span>{" "}
        <span className='text-muted-foreground'>
          in the official Creator Network
        </span>
      </p>
    </div>
  );
}
