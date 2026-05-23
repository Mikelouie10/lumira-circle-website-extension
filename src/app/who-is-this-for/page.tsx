import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Section,
  Container,
  SectionHeader,
  FAQItem,
  OrnamentDivider,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Who Is This For",
  description:
    "Lumira Circle is for the woman who knows she is meant for more — and is ready to do the work. Is this you?",
};

const whoThisIsFor = [
  {
    title: "The High Achiever Who Feels Hollow",
    description:
      "You've built the career, hit the goals, received the accolades — and yet something feels missing. You know there's a deeper version of success you haven't yet tasted.",
  },
  {
    title: "The Woman in Transition",
    description:
      "Divorce, career change, loss, becoming a mother — life has shifted the ground beneath your feet. You're ready to rebuild, intentionally, with support.",
  },
  {
    title: "The Entrepreneur Ready to Quantum Leap",
    description:
      "Your business has potential you haven't yet unlocked. You need the mindset, strategy, and sisterhood to take it — and you — to the next level.",
  },
  {
    title: "The Seeker Who's Done with Band-Aid Solutions",
    description:
      "You've read the books, tried the apps, attended the workshops. You're ready for deep, lasting transformation — not another short-term fix.",
  },
  {
    title: "The Woman Craving Authentic Community",
    description:
      "You're surrounded by people, and yet you feel alone in your ambitions. You're seeking women who truly see you, challenge you, and celebrate you.",
  },
  {
    title: "The Leader Ready to Be Seen",
    description:
      "You have a message, a vision, a gift — but fear, imposter syndrome, or old conditioning has kept you playing small. It's time to claim your stage.",
  },
];

const benefits = [
  "Clarity on who you are, what you want, and how to get there",
  "A proven methodology for identity-level transformation",
  "Coaches who have walked the path themselves",
  "A global community of extraordinary women",
  "Tools for emotional healing and nervous system regulation",
  "Strategies for business, relationships, money, and wellbeing",
  "Accountability structures that actually work",
  "A safe space to be messy, honest, and fully human",
];

const notForYouIf = [
  "You're looking for a quick fix or overnight results",
  "You're not open to honest self-reflection",
  "You want someone else to do the work for you",
  "You're in a mental health crisis that requires clinical care (please seek specialist support)",
];

const faqs = [
  {
    question: "I'm not sure I'm 'ready' — is that normal?",
    answer:
      "Completely. Most women who join Lumira say exactly that before they start. Readiness is rarely a feeling — it's a decision. The truth is, you don't have to feel ready to begin. You just have to be willing.",
  },
  {
    question: "How much time do I need to commit each week?",
    answer:
      "Most of our members find that 3–6 hours per week is ideal for meaningful progress. This includes coaching sessions, community engagement, and personal practice. We design everything to integrate into a full life, not compete with it.",
  },
  {
    question: "I've tried coaching before and it didn't work. How is this different?",
    answer:
      "Lumira is not just about mindset tactics — it's about identity-level transformation. We combine somatic work, community, proven methodology, and expert coaching to create change that sticks. Many of our members have tried other programs; Lumira is where they finally broke through.",
  },
  {
    question: "I'm going through something really difficult right now. Is this the right time?",
    answer:
      "Some of our most powerful transformations happen during the hardest seasons. If you're going through change, grief, or uncertainty — this work can be a powerful anchor. That said, if you're experiencing a mental health crisis, please seek clinical support first.",
  },
  {
    question: "What if I can't afford it right now?",
    answer:
      "We believe transformation should be accessible. We offer payment plans, scholarship opportunities, and a lower-tier membership for women who need flexibility. Reach out to our team and we'll find a way to make it work.",
  },
  {
    question: "Is this only for women?",
    answer:
      "Lumira Circle is a women-centered space, designed specifically for the lived experience, challenges, and growth of women. Our circle is inclusive of all women, including transgender and non-binary women who feel aligned with our community.",
  },
];

export default function WhoIsThisForPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-texture opacity-30" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blush-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-sage-400/10 blur-3xl" />

        <Container narrow className="relative z-10 text-center">
          <p className="section-label text-blush-300 mb-6">Is This You?</p>
          <h1 className="font-display text-6xl lg:text-7xl font-light text-ivory-50 leading-tight mb-8">
            She is You.
            <em className="block font-display italic text-blush-300 font-light">
              You Are Her.
            </em>
          </h1>
          <p className="font-body font-light text-lg text-ivory-100/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Lumira Circle was built for a specific kind of woman. Not defined by her age, background, or income — but by a feeling she can&apos;t quite name. A pull toward more. A knowing that she is not yet living the full truth of who she is.
          </p>
          <OrnamentDivider className="text-ivory-100/20 justify-center" />
        </Container>
      </section>

      {/* Who This Is For Grid */}
      <Section className="bg-ivory-50">
        <Container>
          <SectionHeader
            label="You'll Find Your Home Here If..."
            title="This Was Made for the Woman Who"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoThisIsFor.map((item, index) => (
              <div
                key={item.title}
                className="group p-8 border border-blush-100 bg-white/50 hover:border-blush-300 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full bg-blush-50 border border-blush-100 flex items-center justify-center mb-5">
                  <span className="font-display text-sm font-light text-blush-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-light text-charcoal-900 mb-3">
                  {item.title}
                </h3>
                <p className="font-body font-light text-sm text-charcoal-800/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Emotional Copy Section */}
      <section className="py-20 lg:py-32 gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-texture opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blush-200/40 blur-3xl" />

        <Container narrow className="relative z-10">
          <div className="space-y-8 font-display text-2xl lg:text-3xl font-light text-charcoal-900 leading-relaxed">
            <p>
              You have spent years being who everyone else needed you to be.
            </p>
            <p className="text-blush-500 italic">
              The reliable one. The strong one. The one who holds it all together.
            </p>
            <p>
              And you&apos;ve done it beautifully. But somewhere along the way, <em>you</em> got lost in the doing.
            </p>
            <p>
              You catch glimpses of her sometimes — the version of you that is unapologetically alive, deeply fulfilled, fully expressed.
            </p>
            <p className="text-charcoal-900/60">
              She is not a fantasy. She is not someday.
            </p>
            <p className="text-blush-500 font-light italic text-4xl lg:text-5xl">
              She is already inside you. Waiting.
            </p>
            <p>
              Lumira Circle exists to help you find your way back to her — with wisdom, with community, and with the tools that actually work.
            </p>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <Section className="bg-ivory-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label="What You Gain"
                title="What Becomes Possible Inside the Circle"
              />
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-sage-400 mt-1 flex-shrink-0"
                    />
                    <span className="font-body font-light text-charcoal-800/70 leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeader
                label="Honest Clarity"
                title="This Might Not Be for You If..."
              />
              <ul className="space-y-4 mb-10">
                {notForYouIf.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-charcoal-800/30 mt-0.5 flex-shrink-0">
                      ×
                    </span>
                    <span className="font-body font-light text-charcoal-800/50 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body font-light text-sm text-charcoal-800/50 leading-relaxed border-l-2 border-blush-200 pl-5">
                We hold a high standard because we know what&apos;s possible when a woman is truly committed. We&apos;re not for everyone — and that&apos;s okay. But if you felt called reading this page... you&apos;re probably exactly who we&apos;re here for.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-ivory-100">
        <Container narrow>
          <SectionHeader
            label="Common Questions"
            title="Before You Take the Leap"
            centered
          />
          <div className="space-y-0">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="py-24 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-texture opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-blush-500/10 blur-3xl" />

        <Container narrow className="relative z-10 text-center">
          <p className="section-label text-blush-300 mb-6">Your Moment</p>
          <h2 className="font-display text-5xl lg:text-6xl font-light text-ivory-50 mb-6 text-balance">
            The Woman You&apos;re Meant to Be Is Closer Than You Think
          </h2>
          <p className="body-lg text-ivory-100/50 max-w-xl mx-auto mb-10">
            Stop waiting for the right time. The right time is the moment you decide you deserve more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#membership" className="btn-ghost">
              Join the Circle <ArrowRight size={14} />
            </Link>
            <Link
              href="mailto:hello@lumiracircle.com"
              className="inline-flex items-center gap-2 px-8 py-4 border border-ivory-100/20 text-ivory-100/50 font-body font-light tracking-widest text-xs uppercase hover:border-blush-300/40 hover:text-blush-300 transition-all duration-300"
            >
              Book a Discovery Call
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
