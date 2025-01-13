"use client";

import { HelpCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is V.I.T.A and how does it work?",
    answer:
      "V.I.T.A (Visions, Initiatives, Tasks, Assets) is a comprehensive Notion template system designed specifically for visionaries. It helps you transform your ideas into reality through a structured four-step process: Vision Capture, Initiative Planning, Task Management, and Asset Organization. The system includes pre-built templates, workflows, and frameworks that guide you from initial concept to final execution.",
  },
  {
    question: "Do I need to be familiar with Notion to use V.I.T.A?",
    answer:
      "No prior Notion experience is required! V.I.T.A comes with a detailed quick-start guide and video tutorials that will help you get up and running quickly. The system is designed to be intuitive and user-friendly, even for Notion beginners. Plus, our community support is always available to help you if needed.",
  },
  {
    question: "Can I customize the templates to fit my specific needs?",
    answer:
      "While V.I.T.A provides a robust framework out of the box, every component is fully customizable. You can adapt the templates, workflows, and systems to match your unique vision and working style. We even provide guidance on how to customize effectively without breaking the core functionality.",
  },
  {
    question: "What's included in the V.I.T.A package?",
    answer:
      "Your purchase includes the complete V.I.T.A Notion template, Vision-to-Reality Framework Guide, 30+ pre-built vision templates, task management system, asset organization structure, progress tracking dashboard, and regular template updates. Plus, you get bonus items including the Vision Clarity Workbook, Private Community Access, and Quick-Start Implementation Guide.",
  },
  {
    question: "How long do I have access to V.I.T.A?",
    answer:
      "You get lifetime access to V.I.T.A! This includes the main template system, all current bonus materials, and future updates. Once you purchase, it's yours forever, and you can use it across all your Notion workspaces.",
  },
  {
    question: "What if V.I.T.A doesn't work for me?",
    answer:
      "We offer a 30-day implementation guarantee. If you haven't started implementing your first vision within 30 days of purchase, we'll extend your access and provide additional support until you do. We're committed to helping you succeed and will work with you to ensure you get value from the system.",
  },
  {
    question: "Can I use V.I.T.A with my team?",
    answer:
      "Yes! V.I.T.A works great for both individuals and teams. The template can be shared with your Notion workspace members, and includes features specifically designed for collaboration. Each team member can track their tasks while contributing to the overall vision.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "You can start using V.I.T.A immediately after purchase. The Quick-Start Implementation Guide will help you set up your workspace in under 60 minutes. Most users begin capturing their first vision within hours of installation.",
  },
];

export function FAQ() {
  return (
    <section className='container mx-auto py-24 sm:py-32' id="faq">
      <div className='relative'>
        <div className='mx-auto max-w-2xl space-y-4 text-center'>
          <div className='flex items-center justify-center'>
            <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 p-3'>
              <HelpCircle className='h-8 w-8 text-primary' />
            </div>
          </div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Frequently Asked Questions
          </h2>
          <p className='text-muted-foreground sm:text-lg'>
            Everything you need to know about V.I.T.A and how it can help you
            realize your vision.
          </p>
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
