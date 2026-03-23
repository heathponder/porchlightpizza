"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 ${scrolled ? "nav-solid py-3" : "py-5"}`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-accent text-lg">&#x1F525;</span>
          </div>
          <span className="font-heading text-xl font-bold text-text-primary tracking-tight">
            Porch Light <span className="text-accent">Pizza</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-text-secondary text-sm font-medium hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+18705550199"
            className="bg-accent hover:bg-accent-light text-primary text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            (870) 555-0199
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-xl border-t border-border mt-3">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-secondary text-sm font-medium hover:text-accent transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#menu"
              onClick={() => setMobileOpen(false)}
              className="bg-accent hover:bg-accent-light text-primary text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors text-center mt-2"
            >
              (870) 555-0199
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}