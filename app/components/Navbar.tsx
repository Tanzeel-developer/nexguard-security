import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#020817]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between relative">

        <Link href="/">
          <Image src="/logo-light.svg" alt="NexGuard Protection" width={150} height={40} priority className="block dark:hidden" />
          <Image src="/logo-dark.svg" alt="NexGuard Protection" width={150} height={40} priority className="hidden dark:block" />
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-zinc-300">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Home</Link>
          <Link href="/#services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Services</Link>
          <Link href="/#industries" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Industries</Link>
          <Link href="/#advantages" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Why Us</Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700 text-white transition-colors px-5 py-2.5 rounded-lg text-sm font-semibold"
          >
            Get a Quote
          </Link>
          <MobileMenu />
        </div>

      </div>
    </nav>
  );
}
