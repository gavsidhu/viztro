"use client";

import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  subtitle: string;
  description: string;
  faqs: FAQItem[];
}

export function FAQ({ title, subtitle, description, faqs }: FAQProps) {
  return (
    <section className='container mx-auto py-24 sm:py-32' id='faq'>
      <div className='relative'>
        <div className='mx-auto max-w-2xl space-y-4 text-center'>
          <div className='flex items-center justify-center'>
            <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 p-3'>
              <HelpCircle className='h-8 w-8 text-primary' />
            </div>
          </div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            {title}
          </h2>
          <p className='text-muted-foreground sm:text-lg'>{description}</p>
        </div>

        <div className='mx-auto max-w-3xl pt-16'>
          <Accordion type='single' collapsible className='w-full'>
            {faqs.map((faq, index) => (
              <div key={faq.question}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className='text-left'>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className='text-muted-foreground'>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>

        {/* Decorative elements */}
        <div className='absolute left-4 top-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
        <div className='absolute right-4 top-2/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl' />
      </div>
    </section>
  );
}
