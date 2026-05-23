"use client";

import { clsx } from "clsx";
import { ReactNode } from "react";

// Section Wrapper
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={clsx("py-20 lg:py-32", className)}>
      {children}
    </section>
  );
}

// Container
export function Container({
  children,
  className,
  narrow,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={clsx(
        "mx-auto px-6 lg:px-12",
        narrow ? "max-w-4xl" : "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}

// Section Header
export function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={clsx("mb-16", centered && "text-center")}>
      {label && (
        <p className={clsx("section-label mb-4", light && "text-blush-200")}>
          {label}
        </p>
      )}
      <h2
        className={clsx(
          "sub-heading text-balance",
          light && "text-ivory-50",
          centered && "mx-auto"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "font-body font-light text-lg leading-relaxed mt-6 max-w-2xl",
            light ? "text-ivory-100/60" : "text-charcoal-800/60",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Card
export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "bg-white/60 backdrop-blur-sm border border-blush-100 p-8 card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}

// Ornament divider
export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <div className={clsx("divider-ornament", className)}>
      <span className="font-display text-lg">✦</span>
    </div>
  );
}

// Animate on scroll (simple intersection observer)
export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={clsx("opacity-0-start animate-fade-up", className)}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      {children}
    </div>
  );
}

// Tag badge
export function Badge({
  children,
  variant = "blush",
}: {
  children: ReactNode;
  variant?: "blush" | "sage" | "gold" | "ivory";
}) {
  const styles = {
    blush: "bg-blush-100 text-blush-600",
    sage: "bg-sage-100 text-sage-600",
    gold: "bg-gold-300/30 text-gold-600",
    ivory: "bg-ivory-200 text-charcoal-800",
  };
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 text-[10px] font-body font-light tracking-widest uppercase",
        styles[variant]
      )}
    >
      {children}
    </span>
  );
}

// Accordion / FAQ Item
export function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group border-b border-blush-100 py-5">
      <summary className="flex justify-between items-center cursor-pointer list-none">
        <span className="font-display text-xl font-light text-charcoal-900">
          {question}
        </span>
        <span className="ml-6 text-blush-400 transition-transform duration-300 group-open:rotate-45 flex-shrink-0">
          +
        </span>
      </summary>
      <p className="mt-4 font-body font-light text-charcoal-800/60 leading-relaxed pr-8">
        {answer}
      </p>
    </details>
  );
}
