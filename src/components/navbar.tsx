"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type NavbarProps = {
  promoBanner?: {
    text: string
  }
}
const navigation = [
  { name: "Home", href: "#home" },
  { name: "Why", href: "#why" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar({ promoBanner }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [showPromoBanner, setShowPromoBanner] = useState(promoBanner != undefined);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${isScrolled ? "bg-background backdrop-blur-sm" : "bg-background"
        }`}
    >
      {showPromoBanner && (
        <div className='bg-primary px-4 py-2'>
          <div className='max-w-full flex items-center justify-between gap-2'>
            <div className='flex flex-1 items-center justify-center gap-2 text-center text-sm text-primary-foreground'>
              <span className='hidden sm:inline'>🚀</span>
              <p>
                {promoBanner?.text}
              </p>
            </div>
            <Button
              variant='ghost'
              size='icon'
              className='h-8 w-8 shrink-0 text-primary-foreground hover:bg-primary-foreground/20'
              onClick={() => setShowPromoBanner(false)}
            >
              <X className='h-4 w-4' />
              <span className='sr-only'>Dismiss banner</span>
            </Button>
          </div>
        </div>
      )}
      <nav className='container mx-auto flex h-16 items-center justify-between'>
        <div className='flex items-center gap-8'>
          <Link href='/' className='flex items-center space-x-2'>
            <div className='h-6 w-6 rounded-lg bg-primary'></div>
            <span className='text-xl font-bold'>V.I.T.A</span>
          </Link>
          <div className='hidden md:flex md:gap-6'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Button asChild className='hidden md:inline-flex'>
            <Link href='#pricing'>Get Template</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' className='md:hidden'>
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right'>
              <div className='flex h-full flex-col gap-4'>
                <Link href='/' className='flex items-center space-x-2'>
                  <div className='h-6 w-6 rounded-lg bg-primary'></div>
                  <span className='text-xl font-bold'>V.I.T.A</span>
                </Link>
                <div className='flex flex-col space-y-3'>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className='mt-4'>
                    <Link href='#pricing'>Get Template</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
