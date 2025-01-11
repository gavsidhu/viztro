import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t bg-muted/40'>
      <div className='container mx-auto py-8'>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <div className='flex items-center gap-2 text-sm'>
            <span>© {currentYear} V.I.T.A.</span>
            <span className='text-muted-foreground'>All rights reserved.</span>
          </div>
          <nav className='flex gap-4 text-sm text-muted-foreground'>
            <Link href='/privacy' className='hover:text-primary'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='hover:text-primary'>
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className='mt-8 text-center text-xs text-muted-foreground'>
          <p>
            Disclaimer: V.I.T.A is a template and educational resource. Results
            from using the system may vary and depend on individual effort and
            implementation. The testimonials and examples used are exceptional
            results and are not intended to guarantee that anyone will achieve
            the same or similar results.
          </p>
        </div>
      </div>
    </footer>
  );
}
