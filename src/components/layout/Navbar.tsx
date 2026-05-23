"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const navLinks = [
  { label: "Meet the Gurus", href: "/meet-the-gurus" },
  { label: "Who Is This For", href: "/who-is-this-for" },
  { label: "Become a Coach", href: "/become-a-coach" },
  { label: "Join Our Team", href: "/join-our-team" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ivory-50/95 backdrop-blur-md border-b border-blush-100 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start group">
          <span className="font-display text-2xl font-light tracking-wide text-charcoal-900 group-hover:text-blush-500 transition-colors duration-300">
            Lumira Circle
          </span>
          <span className="text-[9px] tracking-ultra-wide uppercase font-body font-light text-blush-400 -mt-0.5">
            Transform · Elevate · Thrive
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs font-light tracking-widest uppercase text-charcoal-800/60 hover:text-blush-500 transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blush-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/#membership" className="btn-primary text-[10px]">
            Join the Circle
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-charcoal-900"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={clsx(
          "lg:hidden fixed inset-0 top-0 bg-ivory-50 z-40 transition-all duration-500 flex flex-col",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-blush-100">
          <span className="font-display text-2xl font-light">Lumira Circle</span>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-4 font-body text-sm font-light tracking-widest uppercase text-charcoal-800/70 border-b border-ivory-200 hover:text-blush-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-8">
            <Link href="/#membership" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
              Join the Circle
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
