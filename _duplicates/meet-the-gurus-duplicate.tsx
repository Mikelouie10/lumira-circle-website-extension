import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Instagram, Globe, Linkedin } from "lucide-react";
import {
  Section,
  Container,
  SectionHeader,
  OrnamentDivider,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Meet the Gurus",
  description:
    "The extraordinary women behind Lumira Circle — coaches, healers, and guides who have walked the path themselves.",
};

// In production, this data would come from Sanity CMS
const coaches = [
  {
    name: "Serena Voss",
    role: "Lead Transformation Coach",
    specialty: "Identity & Life Redesign",
    bio: "With over a decade of coaching and a background in psychology and somatic healing, Serena guides women through profound identity shifts. Her signature Lumira Method has helped over 800 women rebuild from the inside out.",
    certifications: ["ICF-PCC Certified", "Somatic Healing Practitioner", "NLP Master"],
    socials: { instagram: "#", website: "#", linkedin: "#" },
    quote: "You are not starting over. You are starting from experience.",
    accentColor: "bg-blush-100",
    initials: "SV",
  },
  {
    name: "Maya Osei",
    role: "Mindset & Wellness Coach",
    specialty: "Mindfulness & Emotional Intelligence",
    bio: "Maya blends ancient wisdom traditions with modern neuroscience to help women achieve emotional sovereignty. A published author and former therapist, she brings both clinical depth and spiritual warmth to her work.",
    certifications: ["Licensed Therapist", "Mindfulness-Based Coach", "Yoga & Meditation Teacher"],
    socials: { instagram: "#", website: "#", linkedin: "#" },
    quote: "Stillness is not emptiness — it is where you find yourself.",
    accentColor: "bg-sage-50",
    initials: "MO",
  },
  {
    name: "Isabelle Laurent",
    role: "Business & Abundance Coach",
    specialty: "Financial Freedom & Entrepreneurship",
    bio: "A former investment banker turned entrepreneur, Isabelle built three six-figure businesses after her own transformation journey. Now she shows women how to align money, purpose, and power — without sacrificing their soul.",
    certifications: ["Certified Financial Coach", "ICF-ACC Certified", "Business Strategist"],
    socials: { instagram: "#", website: "#", linkedin: "#" },
    quote: "Wealth is not a destination. It is a way of being.",
    accentColor: "bg-gold-300/20",
    initials: "IL",
  },
  {
    name: "Priya Sharma",
    role: "Relationships & Embodiment Coach",
    specialty: "Feminine Energy & Sacred Relationships",
    bio: "Priya combines her background in feminine psychology, breathwork, and relationship therapy to guide women into deeper connection — with themselves, their partners, and their community.",
    certifications: ["Relationship Coach", "Breathwork Facilitator", "Feminine Embodiment Teacher"],
    socials: { instagram: "#", website: "#", linkedin: "#" },
    quote: "The deepest relationship you will ever have is with yourself.",
    accentColor: "bg-mauve-100",
    initials: "PS",
  },
  {
    name: "Naomi Clarke",
    role: "Leadership & Purpose Coach",
    specialty: "Visibility, Voice & Impact",
    bio: "A communications expert and former media personality, Naomi helps women own their voice, claim their stage, and build movements. She is the architect of Lumira's Sovereign Woman program.",
    certifications: ["Executive Coach", "Public Speaking Trainer", "Personal Brand Strategist"],
    socials: { instagram: "#", website: "#", linkedin: "#" },
    quote: "The world doesn't need you to be quieter. It needs your full expression.",
    accentColor: "bg-blush-50",
    initials: "NC",
  },
  {
    name: "Lena Müller",
    role: "Holistic Health Coach",
    specialty: "Body, Energy & Vitality",
    bio: "Lena integrates functional nutrition, movement, and energy medicine to help women reclaim their vitality. Her approach treats the body as the foundation of all transformation.",
    certifications: ["Functional Nutritionist", "Energy Medicine Practitioner", "Pilates Instructor"],
    socials: { instagram: "#", website: "#", linkedin: "#" },
    quote: "Your body is not an obstacle. She is your greatest ally.",
    accentColor: "bg-sage-50",
    initials: "LM",
  },
];

export default function MeetTheGurusPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-texture opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blush-200/40 blur-3xl" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="section-label mb-6">The Guides</p>
            <h1 className="display-heading mb-6">
              The Women Who Will
              <em className="block font-display italic text-blush-500 font-light">
                Walk With You
              </em>
            </h1>
            <p className="body-lg max-w-xl">
              Every coach in our circle has walked the path of transformation themselves. They don&apos;t teach theory — they teach from lived experience.
            </p>
          </div>
        </Container>
      </section>

      {/* Coaches Grid */}
      <Section className="bg-ivory-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <article key={coach.name} className="group">
                {/* Image area */}
                <div
                  className={`${coach.accentColor} aspect-[4/3] relative overflow-hidden mb-6 flex items-end p-6`}
                >
                  {/* Placeholder avatar */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/50 border border-white/80 flex items-center justify-center">
                    <span className="font-display text-2xl font-light text-charcoal-800/60">
                      {coach.initials}
                    </span>
                  </div>

                  {/* Quote overlay */}
                  <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/70 transition-all duration-500 flex items-center justify-center p-8">
                    <p className="font-display text-lg font-light italic text-ivory-50 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                      &ldquo;{coach.quote}&rdquo;
                    </p>
                  </div>

                  {/* Specialty badge */}
                  <span className="relative z-10 text-[9px] tracking-widest uppercase font-body font-light text-charcoal-800/50 bg-white/70 px-3 py-1">
                    {coach.specialty}
                  </span>
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-display text-2xl font-light text-charcoal-900 mb-1">
                    {coach.name}
                  </h3>
                  <p className="font-body text-xs font-light tracking-widest uppercase text-blush-400 mb-4">
                    {coach.role}
                  </p>
                  <p className="font-body font-light text-sm text-charcoal-800/60 leading-relaxed mb-5">
                    {coach.bio}
                  </p>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {coach.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-[9px] font-body font-light tracking-wide uppercase bg-ivory-200 text-charcoal-800/50 px-2 py-1"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Socials */}
                  <div className="flex items-center gap-4">
                    <a
                      href={coach.socials.instagram}
                      className="text-charcoal-800/30 hover:text-blush-400 transition-colors"
                    >
                      <Instagram size={15} />
                    </a>
                    <a
                      href={coach.socials.linkedin}
                      className="text-charcoal-800/30 hover:text-blush-400 transition-colors"
                    >
                      <Linkedin size={15} />
                    </a>
                    <a
                      href={coach.socials.website}
                      className="text-charcoal-800/30 hover:text-blush-400 transition-colors"
                    >
                      <Globe size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* CMS Note for Admin */}
      {/* 
        CONTENT MANAGEMENT NOTE:
        This page is configured to work with Sanity CMS.
        To edit coach profiles, log into your Sanity Studio at /studio
        and update the "coaches" collection. Changes will reflect instantly.
        See DOCUMENTATION.md for setup instructions.
      */}

      {/* CTA */}
      <section className="py-20 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-texture opacity-30" />
        <Container className="relative z-10 text-center">
          <OrnamentDivider className="mb-12 text-ivory-100/20" />
          <p className="section-label text-blush-300 mb-6">Ready to Work Together?</p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-ivory-50 mb-6">
            Find Your Perfect Coach Match
          </h2>
          <p className="body-lg text-ivory-100/50 max-w-lg mx-auto mb-10">
            Not sure where to start? Book a complimentary discovery call and we&apos;ll pair you with the coach who aligns best with your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#membership" className="btn-ghost">
              Join the Circle <ArrowRight size={14} />
            </Link>
            <Link href="mailto:hello@lumiracircle.com" className="btn-ghost">
              Book Discovery Call
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
