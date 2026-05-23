import Link from "next/link";
import { ArrowRight, Star, Sparkles, Heart, Sun, Moon } from "lucide-react";
import { Section, Container, SectionHeader, Card, OrnamentDivider } from "@/components/ui";

const programs = [
  {
    icon: Sparkles,
    badge: "Flagship",
    title: "The Lumira Method",
    subtitle: "12-Week Transformation",
    description:
      "A complete life redesign program covering identity, relationships, purpose, and financial sovereignty. Our most comprehensive transformation journey.",
    color: "blush",
    featured: true,
  },
  {
    icon: Moon,
    badge: "Mindset",
    title: "Inner Architecture",
    subtitle: "8-Week Program",
    description:
      "Rewire limiting beliefs and build an unshakeable inner foundation through somatic healing, mindset mastery, and embodiment practices.",
    color: "mauve",
    featured: false,
  },
  {
    icon: Sun,
    badge: "Leadership",
    title: "Sovereign Woman",
    subtitle: "10-Week Intensive",
    description:
      "For women ready to step into visible leadership — in business, community, and life. Develop your voice, vision, and authority.",
    color: "gold",
    featured: false,
  },
  {
    icon: Heart,
    badge: "Community",
    title: "The Circle Collective",
    subtitle: "Ongoing Membership",
    description:
      "Monthly masterclasses, peer coaching, weekly rituals, and a private community of women committed to continuous growth.",
    color: "sage",
    featured: false,
  },
];

const colorMap: Record<string, string> = {
  blush: "bg-blush-50 border-blush-200 group-hover:border-blush-300",
  mauve: "bg-mauve-100 border-mauve-200 group-hover:border-mauve-300",
  gold: "bg-gold-300/10 border-gold-300/40 group-hover:border-gold-400",
  sage: "bg-sage-50 border-sage-200 group-hover:border-sage-300",
};

const iconColorMap: Record<string, string> = {
  blush: "text-blush-400",
  mauve: "text-mauve-400",
  gold: "text-gold-500",
  sage: "text-sage-400",
};

const testimonials = [
  {
    quote:
      "Lumira Circle didn't just change my mindset — it changed the way I move through the world. I came in as a woman who was lost. I left as a woman who finally knew her worth.",
    name: "Amara O.",
    role: "Entrepreneur & Lumira Graduate",
    program: "The Lumira Method",
  },
  {
    quote:
      "The coaches here see you. Truly see you. Within three months, I left a career that was suffocating me and launched a business that lights me up every single day.",
    name: "Sophie L.",
    role: "Brand Strategist",
    program: "Sovereign Woman",
  },
  {
    quote:
      "I've tried therapy, journaling, retreats — nothing compared to the depth of transformation I experienced in the Circle. It is unlike anything I've ever encountered.",
    name: "Gabrielle M.",
    role: "Physician & Mother",
    program: "Inner Architecture",
  },
  {
    quote:
      "The community alone is worth every penny. These women became my tribe, my accountability partners, and my greatest cheerleaders. I am never alone on this journey.",
    name: "Priya K.",
    role: "Wellness Coach",
    program: "Circle Collective",
  },
];

export function ProgramsSection() {
  return (
    <Section id="programs" className="bg-ivory-50">
      <Container>
        <SectionHeader
          label="Our Offerings"
          title="Programs Designed to Unlock Your Next Chapter"
          subtitle="Each journey is carefully crafted to meet you where you are — and guide you where you're meant to go."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className={`group relative border p-8 lg:p-10 transition-all duration-500 cursor-pointer ${colorMap[program.color]}`}
              >
                {program.featured && (
                  <div className="absolute top-4 right-4 bg-blush-500 text-ivory-50 px-3 py-1 text-[9px] tracking-widest uppercase font-body font-light">
                    Most Popular
                  </div>
                )}
                <div className={`mb-5 ${iconColorMap[program.color]}`}>
                  <Icon size={28} strokeWidth={1} />
                </div>
                <p className="text-[9px] tracking-ultra-wide uppercase font-body font-light text-charcoal-800/40 mb-2">
                  {program.badge} · {program.subtitle}
                </p>
                <h3 className="font-display text-2xl font-light text-charcoal-900 mb-3">
                  {program.title}
                </h3>
                <p className="font-body font-light text-charcoal-800/60 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                <Link
                  href="/#membership"
                  className="inline-flex items-center gap-2 font-body text-xs font-light tracking-widest uppercase text-charcoal-900 hover:text-blush-500 transition-colors group-hover:gap-3 duration-300"
                >
                  Learn More <ArrowRight size={12} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/#membership" className="btn-primary">
            View All Programs <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      className="bg-charcoal-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain-texture opacity-30" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blush-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-sage-400/10 blur-3xl" />

      <Container className="relative z-10">
        <SectionHeader
          label="Real Stories"
          title="Women Who Chose to Rise"
          subtitle="Their words, unfiltered. Their transformations, undeniable."
          centered
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-ivory-100/8 bg-ivory-50/5 p-8 lg:p-10 card-hover group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="text-gold-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              <blockquote className="font-display text-xl font-light italic text-ivory-50 leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-light text-ivory-100/80 text-sm">
                    {t.name}
                  </p>
                  <p className="font-body font-light text-ivory-100/30 text-xs mt-0.5">
                    {t.role}
                  </p>
                </div>
                <span className="text-[9px] tracking-widest uppercase font-body font-light text-blush-300 border border-blush-400/20 px-3 py-1">
                  {t.program}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <OrnamentDivider className="mb-10 text-ivory-100/20" />
          <p className="font-display text-3xl lg:text-4xl font-light italic text-ivory-50 mb-8">
            Ready to write your own story?
          </p>
          <Link href="/#membership" className="btn-ghost">
            Begin Your Journey <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export function MembershipSection() {
  return (
    <Section id="membership" className="gradient-blush relative overflow-hidden">
      <div className="absolute inset-0 bg-grain-texture opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blush-200/50 blur-3xl" />

      <Container narrow className="relative z-10 text-center">
        <p className="section-label mb-6">Your Invitation</p>
        <h2 className="font-display text-5xl lg:text-6xl font-light text-charcoal-900 mb-6 text-balance">
          The Circle is Waiting for You
        </h2>
        <p className="body-lg max-w-2xl mx-auto mb-12">
          This is your sign. The life you envision, the woman you know you&apos;re meant to become — she is closer than you think. All it takes is one brave step.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              name: "Circle",
              price: "$97",
              period: "/month",
              features: [
                "Monthly masterclasses",
                "Community access",
                "Weekly group rituals",
                "Resource library",
              ],
            },
            {
              name: "Lumira",
              price: "$297",
              period: "/month",
              features: [
                "Everything in Circle",
                "1:1 coaching session",
                "Program access",
                "Priority support",
              ],
              featured: true,
            },
            {
              name: "Sovereign",
              price: "$797",
              period: "/month",
              features: [
                "Everything in Lumira",
                "Weekly 1:1 coaching",
                "VIP retreat access",
                "Business mentorship",
              ],
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`p-8 transition-all duration-300 ${
                tier.featured
                  ? "bg-charcoal-900 text-ivory-50 -translate-y-2 shadow-2xl"
                  : "bg-white/70 border border-blush-100 hover:-translate-y-1"
              }`}
            >
              {tier.featured && (
                <p className="text-[9px] tracking-ultra-wide uppercase font-body font-light text-blush-300 mb-4">
                  Most Loved
                </p>
              )}
              <h3
                className={`font-display text-2xl font-light mb-4 ${tier.featured ? "text-ivory-50" : "text-charcoal-900"}`}
              >
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span
                  className={`font-display text-4xl font-light ${tier.featured ? "text-ivory-50" : "text-charcoal-900"}`}
                >
                  {tier.price}
                </span>
                <span
                  className={`font-body text-sm font-light ${tier.featured ? "text-ivory-100/50" : "text-charcoal-800/40"}`}
                >
                  {tier.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2 font-body text-sm font-light ${tier.featured ? "text-ivory-100/70" : "text-charcoal-800/60"}`}
                  >
                    <span
                      className={`text-xs ${tier.featured ? "text-blush-300" : "text-sage-400"}`}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 font-body text-xs font-light tracking-widest uppercase transition-all duration-300 ${
                  tier.featured
                    ? "bg-blush-500 text-ivory-50 hover:bg-blush-400"
                    : "border border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-ivory-50"
                }`}
              >
                Begin Here
              </button>
            </div>
          ))}
        </div>

        <p className="font-body text-xs font-light text-charcoal-800/40">
          Not sure which tier is right for you?{" "}
          <Link
            href="mailto:hello@lumiracircle.com"
            className="text-blush-500 underline underline-offset-4 hover:text-blush-600"
          >
            Book a free discovery call.
          </Link>
        </p>
      </Container>
    </Section>
  );
}
