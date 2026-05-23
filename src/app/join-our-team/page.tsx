import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Users, Heart, Zap, Globe } from "lucide-react";
import {
  Section,
  Container,
  SectionHeader,
  OrnamentDivider,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Build the future of women's transformation from the inside. Explore career opportunities at Lumira Circle.",
};

const openRoles = [
  {
    title: "Senior Content Strategist",
    department: "Marketing",
    type: "Full-Time",
    location: "Remote / Global",
    description:
      "Lead the content strategy that speaks to hundreds of thousands of women at every stage of their transformation journey. From long-form editorial to social storytelling — your words will move people.",
    responsibilities: [
      "Develop and execute a comprehensive content calendar",
      "Write and edit long-form articles, email campaigns, and social content",
      "Collaborate with coaches to capture and amplify their expertise",
      "Own SEO strategy and organic growth through content",
    ],
    requirements: [
      "5+ years in content strategy or editorial",
      "Experience in wellness, personal development, or women's media preferred",
      "Exceptional writing — you know how to make someone feel something",
      "Data-driven mindset alongside creative flair",
    ],
    color: "border-blush-200",
  },
  {
    title: "Head of Community",
    department: "Community & Experience",
    type: "Full-Time",
    location: "Remote / Global",
    description:
      "You'll be the heartbeat of the Circle — designing experiences that make every woman feel seen, heard, and held. This role is for someone who thrives on human connection and knows how to build belonging at scale.",
    responsibilities: [
      "Oversee the Circle Collective community platform and engagement",
      "Design and facilitate monthly virtual rituals and events",
      "Build member onboarding systems and retention programs",
      "Manage and mentor a team of community moderators",
    ],
    requirements: [
      "3+ years in community management or customer success",
      "Deep understanding of women's psychology and group dynamics",
      "Experience with community platforms (Circle, Mighty Networks, etc.)",
      "Warm, empathetic leadership style",
    ],
    color: "border-sage-200",
  },
  {
    title: "Tech Lead — Platform Engineering",
    department: "Technology",
    type: "Full-Time",
    location: "Remote / Global",
    description:
      "Own and scale the technical infrastructure behind one of the fastest-growing women's education platforms in the world. You'll make decisions that impact thousands of women's learning experiences daily.",
    responsibilities: [
      "Lead development of the Lumira member platform and admin tools",
      "Architect scalable solutions for course delivery, community, and payments",
      "Manage a small, talented engineering team",
      "Collaborate cross-functionally with product, design, and marketing",
    ],
    requirements: [
      "7+ years of software engineering experience",
      "Proficiency in Next.js, TypeScript, and cloud infrastructure",
      "Experience with SaaS product or EdTech platforms",
      "Commitment to building for underrepresented users",
    ],
    color: "border-gold-300",
  },
  {
    title: "Partnerships & Brand Collaborations Manager",
    department: "Growth",
    type: "Full-Time",
    location: "Remote / Global",
    description:
      "Identify and activate brand partnerships that amplify Lumira's reach while staying aligned with our values. You're a connector who sees opportunity everywhere and closes deals with grace.",
    responsibilities: [
      "Develop and manage a portfolio of strategic brand partnerships",
      "Create co-branded campaign proposals and revenue sharing agreements",
      "Represent Lumira at industry events and summits",
      "Build long-term relationships with wellness, fashion, and lifestyle brands",
    ],
    requirements: [
      "4+ years in partnerships, business development, or sponsorships",
      "Existing network in wellness, coaching, or women's lifestyle sectors",
      "Strong negotiator with high emotional intelligence",
      "Passionate about women's empowerment and conscious business",
    ],
    color: "border-mauve-200",
  },
];

const cultureValues = [
  {
    icon: Heart,
    title: "Heart-Led Work",
    description:
      "We lead with empathy — for our members, our colleagues, and ourselves. Compassion is not a soft skill here. It is our greatest strength.",
  },
  {
    icon: Zap,
    title: "Radical Honesty",
    description:
      "We speak with care and candour. Feedback is a gift. Directness is an act of respect. We build cultures of courageous conversation.",
  },
  {
    icon: Globe,
    title: "Global & Inclusive",
    description:
      "Our team spans continents and our circle is for all women. Diversity of thought, background, and lived experience makes us better.",
  },
  {
    icon: Users,
    title: "Collective Growth",
    description:
      "Your growth is as important to us as our members'. We invest in continuous learning, peer mentorship, and space for personal development.",
  },
];

export default function JoinOurTeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-texture opacity-50" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blush-200/40 blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="section-label mb-6">Careers at Lumira</p>
            <h1 className="display-heading mb-6">
              Build the Future
              <em className="block font-display italic text-blush-500 font-light">
                of Women&apos;s Growth
              </em>
            </h1>
            <p className="body-lg max-w-xl mb-10">
              We&apos;re a team of women (and allies) who believe deeply in the power of transformation. If you want your work to mean something — you&apos;re in the right place.
            </p>
            <Link href="#open-roles" className="btn-primary">
              See Open Roles <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Culture */}
      <Section className="bg-ivory-50">
        <Container>
          <SectionHeader
            label="Our Culture"
            title="A Team That Walks the Talk"
            subtitle="We don't just talk about transformation — we live it. Our culture is built on the same values we teach our members."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-blush-50 border border-blush-100 flex items-center justify-center mx-auto mb-5">
                    <Icon size={20} className="text-blush-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-light text-charcoal-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body font-light text-sm text-charcoal-800/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Perks Banner */}
      <section className="py-12 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-texture opacity-30" />
        <Container className="relative z-10">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {[
              "100% Remote",
              "Flexible Hours",
              "Coaching Benefits",
              "Generous PTO",
              "Learning Stipend",
              "Global Retreats",
              "Equity Opportunities",
              "Mental Health Support",
            ].map((perk) => (
              <div key={perk} className="flex items-center gap-2">
                <span className="text-blush-400 text-sm">✦</span>
                <span className="font-body text-xs font-light tracking-widest uppercase text-ivory-100/60">
                  {perk}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Roles */}
      <Section id="open-roles" className="bg-ivory-100">
        <Container>
          <SectionHeader
            label="Open Positions"
            title="Where Will You Contribute?"
            subtitle="All positions are remote-first. We hire globally and celebrate diversity of background, experience, and location."
          />

          <div className="space-y-6">
            {openRoles.map((role) => (
              <details
                key={role.title}
                className={`group bg-white/70 border ${role.color} p-8 lg:p-10`}
              >
                <summary className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 cursor-pointer list-none">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="text-[9px] tracking-widest uppercase font-body font-light bg-blush-50 text-blush-500 px-3 py-1">
                        {role.department}
                      </span>
                      <span className="flex items-center gap-1 text-[9px] tracking-widest uppercase font-body font-light text-charcoal-800/40">
                        <Clock size={10} /> {role.type}
                      </span>
                      <span className="flex items-center gap-1 text-[9px] tracking-widest uppercase font-body font-light text-charcoal-800/40">
                        <MapPin size={10} /> {role.location}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-light text-charcoal-900">
                      {role.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <span className="font-body text-xs font-light tracking-widest uppercase text-charcoal-800/40 group-open:hidden">
                      View Role +
                    </span>
                    <span className="font-body text-xs font-light tracking-widest uppercase text-blush-400 hidden group-open:block">
                      Close −
                    </span>
                  </div>
                </summary>

                <div className="mt-8 space-y-6">
                  <p className="font-body font-light text-charcoal-800/70 leading-relaxed">
                    {role.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/40 mb-4">
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {role.responsibilities.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2 font-body text-sm font-light text-charcoal-800/60"
                          >
                            <span className="text-blush-400 mt-1 flex-shrink-0">→</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/40 mb-4">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {role.requirements.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2 font-body text-sm font-light text-charcoal-800/60"
                          >
                            <span className="text-sage-400 mt-1 flex-shrink-0">✓</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-ivory-200">
                    <Link
                      href="#application-form"
                      className="btn-primary"
                    >
                      Apply for This Role <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application Form */}
      <Section id="application-form" className="gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-texture opacity-40" />
        <Container narrow className="relative z-10">
          <SectionHeader
            label="Apply Now"
            title="Tell Us About Yourself"
            subtitle="Don't see a perfect role but feel called to be part of Lumira? Send an open application — we'd love to hear from you."
          />

          <form className="space-y-8 bg-white/60 backdrop-blur-sm border border-blush-100 p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/50 mb-3">
                  First Name
                </label>
                <input type="text" className="input-field" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/50 mb-3">
                  Last Name
                </label>
                <input type="text" className="input-field" placeholder="Your surname" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/50 mb-3">
                Email Address
              </label>
              <input type="email" className="input-field" placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/50 mb-3">
                Role You&apos;re Applying For
              </label>
              <select className="input-field">
                <option value="">Select a role...</option>
                {openRoles.map((r) => (
                  <option key={r.title}>{r.title}</option>
                ))}
                <option>Open Application (No Specific Role)</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/50 mb-3">
                LinkedIn or Portfolio URL
              </label>
              <input type="url" className="input-field" placeholder="https://..." />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/50 mb-3">
                Why Lumira Circle?
              </label>
              <textarea
                className="input-field resize-none"
                rows={5}
                placeholder="Tell us what drew you here and what you'd bring to the team..."
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              Submit Application <ArrowRight size={14} />
            </button>
          </form>
        </Container>
      </Section>
    </>
  );
}
