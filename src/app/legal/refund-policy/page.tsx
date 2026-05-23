import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Lumira Circle's refund and cancellation policy for memberships and programs.",
};

const lastUpdated = "1 January 2025";

export default function RefundPolicyPage() {
  return (
    <>
      <section className="pt-40 pb-12 gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-texture opacity-40" />
        <Container narrow className="relative z-10">
          <p className="section-label mb-4">Legal</p>
          <h1 className="font-display text-5xl lg:text-6xl font-light text-charcoal-900 mb-4">
            Refund Policy
          </h1>
          <p className="font-body font-light text-sm text-charcoal-800/40">
            Last updated: {lastUpdated}
          </p>
        </Container>
      </section>

      <section className="py-16 bg-ivory-50">
        <Container narrow>
          <div className="bg-blush-50 border border-blush-100 p-6 mb-10 text-sm font-body font-light text-charcoal-800/70 leading-relaxed">
            <p>
              We want every woman in Lumira Circle to feel fully supported in her investment. This policy outlines our approach to refunds, cancellations, and disputes. Please read it carefully before purchasing.
            </p>
          </div>

          <div className="space-y-12 font-body font-light text-charcoal-800/70 leading-relaxed">
            {[
              {
                title: "1. Our Commitment to You",
                body: `Lumira Circle stands behind the quality of every program, coaching experience, and membership. We are committed to delivering exceptional value and ensuring that every woman feels supported in her transformation journey.

If you feel the product did not meet your expectations, we encourage you to contact our support team first — in many cases, we can offer additional support, session credits, or a program transfer to better suit your needs.`,
              },
              {
                title: "2. Monthly Membership Cancellations",
                body: `You may cancel your monthly membership at any time. Cancellations take effect at the end of your current billing period. You will retain access to all membership benefits until the end of the period you have paid for.

We do not offer partial refunds for unused days within a billing period. To cancel, log into your account settings or contact us at billing@lumiracircle.com with at least 5 business days notice before your next renewal date.`,
              },
              {
                title: "3. Signature Programs — 14-Day Satisfaction Guarantee",
                body: `All signature programs (The Lumira Method, Inner Architecture, Sovereign Woman) come with a 14-day satisfaction guarantee from the date of purchase.

If within 14 days you have engaged with the program (attended at least one live session or completed Module 1) and do not feel it is right for you, contact us at support@lumiracircle.com and we will process a full refund within 5–10 business days.

Refunds are not available after 14 days from the purchase date, or if you have completed more than 25% of the program content.`,
              },
              {
                title: "4. 1:1 Coaching Sessions",
                body: `Individual coaching sessions may be rescheduled with at least 24 hours notice at no charge. Sessions cancelled with less than 24 hours notice will be forfeited.

Unused prepaid session bundles are non-refundable but may be transferred to another member of Lumira Circle at your discretion.`,
              },
              {
                title: "5. Annual Membership Plans",
                body: `Annual memberships are eligible for a full refund within 7 days of purchase if you have not accessed any program content or live sessions.

After 7 days, annual memberships are non-refundable but may be paused for up to 3 months in cases of medical necessity, family emergency, or significant life circumstance, at our discretion. To request a pause, contact support@lumiracircle.com.`,
              },
              {
                title: "6. Retreats & Live Events",
                body: `For in-person retreats and live events:

— Cancellation more than 60 days before the event: full refund minus a £150 administrative fee
— Cancellation 30–60 days before the event: 50% refund
— Cancellation less than 30 days before the event: no refund, but your registration may be transferred to another attendee

In the event that Lumira Circle cancels or postpones an event, you will be offered a full refund or the option to transfer to a future date.`,
              },
              {
                title: "7. How to Request a Refund",
                body: `To request a refund, please contact us at:

Email: support@lumiracircle.com
Subject line: Refund Request — [Your Name] — [Product Name]

Please include your order number, the reason for your request, and any relevant details. We aim to respond to all refund requests within 2 business days and process approved refunds within 5–10 business days.`,
              },
              {
                title: "8. Disputes & Chargebacks",
                body: `We ask that you contact us before initiating a chargeback with your bank or credit card provider. Most concerns can be resolved quickly and amicably directly with our team.

Initiating a chargeback before contacting us may result in suspension of your account while the dispute is investigated. We reserve the right to contest chargebacks that are inconsistent with this policy.`,
              },
              {
                title: "9. Policy Changes",
                body: `We reserve the right to update this Refund Policy at any time. Purchases made prior to a policy change will be honoured under the policy in effect at the time of purchase. Material changes will be communicated to active members via email.`,
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-2xl font-light text-charcoal-900 mb-4">
                  {section.title}
                </h2>
                {section.body.split("\n\n").map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            ))}

            <div className="border-t border-blush-100 pt-10">
              <p className="text-sm">
                Questions about your refund?{" "}
                <Link
                  href="mailto:support@lumiracircle.com"
                  className="text-blush-500 underline underline-offset-4 hover:text-blush-600"
                >
                  Contact our support team
                </Link>{" "}
                and we&apos;ll be happy to help.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
