"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let currentY = 0;
    let targetY = 0;

    const lerp = () => {
      currentY += (targetY - currentY) * 0.08;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${currentY}px, 0)`;
      }
      if (Math.abs(targetY - currentY) > 0.5) {
        requestAnimationFrame(lerp);
      } else {
        ticking = false;
      }
    };

    const onScroll = () => {
      targetY = window.scrollY * 0.25;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(lerp);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <div ref={bgRef} className="hero-bg absolute inset-0 -top-20 -bottom-20">
          <img src="/images/hero.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.08] blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center pt-20">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">
              Open Late — Fri & Sat until 2 AM
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[1.05] mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            Open Late.
            <br />
            <span className="text-accent drop-shadow-[0_0_30px_rgba(232,145,58,0.3)]">Made Fresh.</span>
            <br />
            Always Worth the Drive.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Family-owned and wood-fired since 2019. Hand-tossed dough, house-made sauce,
            and the kind of pizza that keeps the lights on past midnight.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="btn-shimmer text-primary font-semibold px-8 py-4 rounded-xl text-base transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(232,145,58,0.3)] active:translate-y-0"
            >
              View Our Menu
            </a>
            <a
              href="tel:+18705550199"
              className="border border-border hover:border-accent/40 text-text-primary font-semibold px-8 py-4 rounded-xl text-base transition-all hover:-translate-y-1 backdrop-blur-sm bg-primary/20"
            >
              Call to Order
            </a>
          </div>
        </ScrollReveal>

        {/* Quick info badges */}
        <ScrollReveal delay={0.45}>
          <div className="flex flex-wrap justify-center gap-6 mt-14 text-text-secondary text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Ember Creek, AR
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Open until 2 AM
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">&#9733;</span>
              4.9 on Google
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
}
