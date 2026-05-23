"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 gradient-blush" />
      <div className="absolute inset-0 bg-grain-texture opacity-60" />

      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blush-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-sage-100/50 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gold-300/20 blur-2xl animate-float" />

      {/* Decorative lines */}
      <div className="absolute top-24 left-12 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent to-blush-300/40" />
      </div>
      <div className="absolute bottom-24 right-12 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-t from-transparent to-blush-300/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <div className="opacity-0-start animate-fade-up" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
              <p className="section-label mb-6">Welcome to Lumira Circle</p>
            </div>

            <div className="opacity-0-start animate-fade-up" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-charcoal-900 mb-8">
                You Were{" "}
                <em className="font-display font-light italic text-blush-500 block">
                  Always
                </em>
                Meant to{" "}
                <span className="relative inline-block">
                  Rise
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blush-300 to-transparent" />
                </span>
                .
              </h1>
            </div>

            <div className="opacity-0-start animate-fade-up" style={{ animationDelay: "500ms", animationFillMode: "both" }}>
              <p className="body-lg max-w-xl mb-10">
                Lumira Circle is a sacred space for women who are ready to shed what no longer serves them — and step into the version of themselves they&apos;ve always felt was possible.
              </p>
            </div>

            <div
              className="opacity-0-start animate-fade-up flex flex-col sm:flex-row gap-4"
              style={{ animationDelay: "700ms", animationFillMode: "both" }}
            >
              <Link href="#membership" className="btn-primary">
                Join the Circle <ArrowRight size={14} />
              </Link>
              <Link href="#programs" className="btn-outline">
                Explore Programs
              </Link>
            </div>

            {/* Stats */}
            <div
              className="opacity-0-start animate-fade-up flex flex-wrap gap-10 mt-14 pt-10 border-t border-blush-200"
              style={{ animationDelay: "900ms", animationFillMode: "both" }}
            >
              {[
                { value: "2,400+", label: "Women Transformed" },
                { value: "48", label: "Expert Coaches" },
                { value: "12", label: "Signature Programs" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl font-light text-charcoal-900">
                    {stat.value}
                  </p>
                  <p className="text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/40 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div
            className="lg:col-span-5 opacity-0-start animate-fade-in"
            style={{ animationDelay: "600ms", animationFillMode: "both" }}
          >
            <div className="relative">
              {/* Main image card */}
              <div className="relative bg-blush-100 aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-12">
                    <div className="w-32 h-32 rounded-full bg-blush-200/60 mx-auto mb-6 flex items-center justify-center animate-float">
                      <span className="font-display text-5xl text-blush-400">✦</span>
                    </div>
                    <p className="font-display text-2xl font-light italic text-charcoal-800/50">
                      Your transformation begins within
                    </p>
                  </div>
                </div>
                {/* Overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blush-50/60 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm border border-blush-100 p-6 shadow-lg max-w-[200px]">
                <p className="font-display text-sm font-light italic text-charcoal-800 leading-relaxed">
                  "The greatest gift you can give yourself is permission to bloom."
                </p>
              </div>

              {/* Top badge */}
              <div className="absolute -top-4 -right-4 bg-charcoal-900 text-ivory-50 px-4 py-2">
                <p className="text-[9px] tracking-ultra-wide uppercase font-body font-light">
                  Est. 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal-800/30">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-blush-300/50 animate-pulse" />
        <p className="text-[8px] tracking-ultra-wide uppercase font-body font-light rotate-0">
          Scroll
        </p>
      </div>
    </section>
  );
}

// Promo Video Section
export function VideoSection() {
  return (
    <section className="py-20 lg:py-32 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain-texture opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blush-400/20 to-transparent" />
      <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-blush-500/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="section-label text-blush-300 mb-4">Our Story</p>
          <h2 className="font-display text-5xl lg:text-6xl font-light text-ivory-50 mb-6">
            A Message from Our Founders
          </h2>
          <p className="body-lg text-ivory-100/50 max-w-xl mx-auto">
            Discover what makes Lumira Circle different — and why thousands of women call it home.
          </p>
        </div>

        {/* Video embed area */}
        <div className="relative max-w-4xl mx-auto aspect-video bg-charcoal-800 overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-blush-500/20 via-transparent to-sage-400/20" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-ivory-50/10 border border-ivory-50/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-blush-500/20 transition-all duration-300">
              <Play size={28} className="text-ivory-50 ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Placeholder text - replace with actual video */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-body text-xs font-light text-ivory-100/30 text-center tracking-widest uppercase">
              Replace with YouTube or Vimeo embed
            </p>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-blush-400/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-blush-400/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-blush-400/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-blush-400/30" />
        </div>
      </div>
    </section>
  );
}
