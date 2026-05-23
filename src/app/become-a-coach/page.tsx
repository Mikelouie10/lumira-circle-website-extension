import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import {
  Section,
  Container,
  SectionHeader,
  FAQItem,
  OrnamentDivider,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Become a Coach",
  description:
    "Share your gifts, expand your impact, and build a thriving coaching practice inside the Lumira Circle ecosystem.",
};

const benefits = [
  {
    title: "Built-in Audience",
    description:
      "Step into an existing community of thousands of women actively seeking transformation. No cold outreach, no building from scratch.",
  },
  {
    title: "Premium Brand Association",
    description:
      "Align yourself with a respected, premium platform. Lumira's brand elevates your credibility and commands higher rates.",
  },
  {
    title: "Training & Mentorship",
    description:
      "Access our proprietary coaching methodology, certification pathways, and ongoing mentorship from our founding coaches.",
  },
  {
    title: "Revenue Sharing",
    description:
      "Earn competitive commissions on all client sign-ups, with performance bonuses and recurring income opportunities.",
  },
  {
    title: "Marketing & Content Support",
    description:
      "Our team handles branding, photography, copywriting, and promotion so you can focus entirely on coaching.",
  },
  {
    title: "Global Reach",
    description:
      "Serve women across continents from wherever you are. Our platform is built for seamless virtual and hybrid coaching.",
  },
];

const faqs = [
  {
    question: "What qualifications do I need to apply?",
    answer:
      "We look for coaches who have lived-experience of transformation, a recognised coaching certification (ICF, ILM, or equivalent), and a genuine passion for women's growth. If you're currently working towards certification, you may still apply — we'll review on a case-by-case basis.",
  },
  {
    question: "Is this a full-time or part-time opportunity?",
    answer:
      "Both options are available. Many of our coaches start part-time (10–15 hours/week) alongside existing work and scale as their Lumira client base grows. Our flexible structure supports whatever arrangement serves you best.",
  },
  {
    question: "What does the onboarding process look like?",
    answer:
      "After application approval, you'll complete a 4-week virtual onboarding that covers the Lumira Method, platform tools, client communication protocols, and your first cohort preparation. It's immersive, supportive, and collaborative.",
  },
  {
    question: "How is coaching compensation structured?",
    answer:
      "Coaches receive a base commission on client enrollments (35–50% depending on tier), plus performance bonuses for client retention and satisfaction scores. Top coaches also receive profit-sharing from circle memberships.",
  },
  {
    question: "Can I bring my existing clients to the platform?",
    answer:
      "Yes — with mutual agreement. We welcome coaches who want to migrate their existing practice into Lumira's ecosystem. Our team will work with you to make the transition seamless for your clients.",
  },
  {
    question: "What kind of coaching specialties are you looking for?",
    answer:
      "We're always looking for coaches specialising in mindset, relationships, business, health & wellness, embodiment, spiritual growth, leadership, and financial empowerment. If your specialty serves women's holistic transformation, we want to hear from you.",
  },
];

export default function BecomeACoachPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-texture opacity-30" />
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-blush-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-sage-400/10 blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="section-label text-blush-300 mb-6">For Coaches</p>
            <h1 className="font-display text-6xl lg:text-8xl font-light text-ivory-50 leading-tight mb-6">
              Share Your Gift.
              <em className="block font-display italic text-blush-300 font-light">
                Change Lives.
              </em>
            </h1>
            <p className="font-body font-light text-lg text-ivory-100/60 leading-relaxed max-w-xl mb-10">
              Lumira Circle is seeking extraordinary women coaches to join our growing ecosystem — women who have walked through the fire themselves and emerged with wisdom to share.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#apply" className="btn-ghost">
                Apply to Coach <ArrowRight size={14} />
              </Link>
              <a
                href="/lumira-coach-application.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 border border-ivory-100/20 text-ivory-100/60 font-body font-light tracking-widest text-xs uppercase hover:border-blush-300/40 hover:text-blush-300 transition-all duration-300"
              >
                <Download size={14} /> Download Application
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <Section className="bg-ivory-50">
        <Container>
          <SectionHeader
            label="Why Lumira"
            title="Everything You Need to Coach at the Highest Level"
            subtitle="We've built the infrastructure, the audience, and the brand. You bring the mastery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group border-b border-blush-100 pb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blush-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 size={14} className="text-blush-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-light text-charcoal-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-body font-light text-sm text-charcoal-800/60 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quote Banner */}
      <section className="py-16 bg-blush-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-texture opacity-30" />
        <Container narrow className="relative z-10 text-center">
          <OrnamentDivider className="mb-10" />
          <blockquote className="font-display text-3xl lg:text-4xl font-light italic text-charcoal-900 leading-relaxed">
            &ldquo;Coaching inside Lumira transformed not just my clients&apos; lives — it transformed mine. The support, the community, the impact... there is nothing like it.&rdquo;
          </blockquote>
          <p className="font-body text-sm font-light text-charcoal-800/40 mt-6">
            — Serena Voss, Lead Transformation Coach & Lumira Founding Member
          </p>
          <OrnamentDivider className="mt-10" />
        </Container>
      </section>

      {/* FAQ */}
      <Section className="bg-ivory-50">
        <Container narrow>
          <SectionHeader
            label="Your Questions Answered"
            title="What You Need to Know Before Applying"
          />

          <div className="space-y-0">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Application Form */}
      <Section id="apply" className="gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-texture opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blush-200/40 blur-3xl" />

        <Container narrow className="relative z-10">
          <SectionHeader
            label="Apply Now"
            title="Begin Your Application"
            subtitle="We review applications on a rolling basis. Please allow 5–7 business days for a response."
          />

          <form className="space-y-10 bg-white/60 backdrop-blur-sm border border-blush-100 p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/50 mb-3">
                  First Name
                </label>
                <input type="text" className="input-field" placeholder="Serena" />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/50 mb-3">
                  Last Name
                </label>
                <input type="text" className="input-field" placeholder="Voss" />
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
                Coaching Specialty
              </label>
              <select className="input-field">
                <option value="">Select a specialty...</option>
                <option>Mindset & Life Coaching</option>
                <option>Relationships & Feminine Energy</option>
                <option>Business & Entrepreneurship</option>
                <option>Health & Wellness</option>
                <option>Leadership & Visibility</option>
                <option>Spiritual & Embodiment</option>
                <option>Financial Empowerment</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/50 mb-3">
                Your Certifications
              </label>
              <input type="text" className="input-field" placeholder="E.g. ICF-ACC, NLP Practitioner..." />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/50 mb-3">
                Your Transformation Story
              </label>
              <textarea
                className="input-field resize-none"
                rows={5}
                placeholder="Tell us about your own journey of transformation — what you walked through, and why you now guide others..."
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase font-body font-light text-charcoal-800/50 mb-3">
                Website or Social Profile
              </label>
              <input type="url" className="input-field" placeholder="https://..." />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 accent-blush-500"
              />
              <label
                htmlFor="terms"
                className="font-body text-sm font-light text-charcoal-800/60 leading-relaxed"
              >
                I understand that submitting this application does not guarantee placement, and that all applications are reviewed by the Lumira team within 5–7 business days.
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button type="submit" className="btn-primary flex-1 justify-center">
                Submit Application <ArrowRight size={14} />
              </button>
              <a
                href="/lumira-coach-application.pdf"
                download
                className="btn-outline flex items-center justify-center gap-2"
              >
                <Download size={14} /> Download PDF Version
              </a>
            </div>
          </form>
        </Container>
      </Section>
    </>
  );
}
