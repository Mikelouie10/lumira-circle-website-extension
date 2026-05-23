import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Lumira Circle collects, uses, and protects your personal information.",
};

const lastUpdated = "1 January 2025";
const companyName = "Lumira Circle Ltd";
const email = "privacy@lumiracircle.com";
const address = "c/o Lumira Circle Ltd, [Registered Address]";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-40 pb-12 gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-texture opacity-40" />
        <Container narrow className="relative z-10">
          <p className="section-label mb-4">Legal</p>
          <h1 className="font-display text-5xl lg:text-6xl font-light text-charcoal-900 mb-4">
            Privacy Policy
          </h1>
          <p className="font-body font-light text-sm text-charcoal-800/40">
            Last updated: {lastUpdated}
          </p>
        </Container>
      </section>

      <section className="py-16 bg-ivory-50">
        <Container narrow>
          <div className="prose-lumira space-y-10 font-body font-light text-charcoal-800/70 leading-relaxed">
            <div className="bg-blush-50 border border-blush-100 p-6 text-sm">
              <p>
                This Privacy Policy describes how {companyName} (&ldquo;Lumira Circle,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares information about you when you use our website, platform, and services. Please read this carefully.
              </p>
            </div>

            {[
              {
                title: "1. Information We Collect",
                content: `We collect information you provide directly to us, including when you create an account, enroll in a program, make a purchase, fill out a form, or contact us.

**Personal Information:** Name, email address, phone number, billing address, and payment information.

**Profile Information:** Coaching preferences, transformation goals, program participation history, and communication preferences.

**Usage Data:** Information about how you interact with our website and platform, including pages visited, features used, and time spent.

**Communications:** Messages sent to coaches, responses to surveys, and feedback submitted through our platform.

We may also collect information from third parties such as social media platforms when you connect your accounts, or from our analytics and marketing partners.`,
              },
              {
                title: "2. How We Use Your Information",
                content: `We use the information we collect to:

— Provide, operate, and improve our services and platform
— Process transactions and send related information, including confirmations and receipts
— Match you with appropriate coaches and programs
— Send promotional communications (with your consent, where required)
— Monitor and analyse trends, usage, and activities in connection with our services
— Detect, investigate and prevent fraudulent transactions and other illegal activities
— Comply with legal obligations and enforce our terms`,
              },
              {
                title: "3. Sharing of Information",
                content: `We do not sell your personal information. We may share your information with:

**Coaches:** Information necessary for your coaching relationship, including your name, goals, and program details.

**Service Providers:** Third-party companies that perform services on our behalf (payment processing, email delivery, analytics, customer support).

**Legal Requirements:** When required by law, regulation, legal process, or governmental request.

**Business Transfers:** In connection with a merger, acquisition, or sale of assets.

We require all third parties to respect the security of your personal data and treat it in accordance with applicable law.`,
              },
              {
                title: "4. Data Retention",
                content: `We retain personal information for as long as necessary to provide our services and fulfil the purposes outlined in this policy, unless a longer retention period is required by law. When information is no longer needed, we securely delete or anonymise it.

Account data is retained for the duration of your membership plus 24 months. Financial records are retained for 7 years in accordance with financial regulations.`,
              },
              {
                title: "5. Your Rights",
                content: `Depending on your location, you may have certain rights regarding your personal information, including:

— The right to access the personal information we hold about you
— The right to correct inaccurate or incomplete information
— The right to request deletion of your personal information
— The right to object to or restrict processing
— The right to data portability
— The right to withdraw consent at any time

To exercise these rights, please contact us at ${email}. We will respond within 30 days.`,
              },
              {
                title: "6. Cookies & Tracking",
                content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data stored on your device.

We use essential cookies (required for the platform to function), analytics cookies (to understand how visitors use our site), and marketing cookies (to deliver relevant advertising, with your consent).

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, some portions of our services may not function properly.`,
              },
              {
                title: "7. Security",
                content: `We implement appropriate technical and organisational measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access. These measures include SSL encryption, secure data storage, and access controls.

However, no internet transmission is completely secure, and we cannot guarantee the security of information transmitted through our services.`,
              },
              {
                title: "8. International Transfers",
                content: `Your information may be transferred to and processed in countries other than your own. We ensure that any such transfers are made with appropriate safeguards in place, including Standard Contractual Clauses where required under EU/UK GDPR.`,
              },
              {
                title: "9. Changes to This Policy",
                content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and, where appropriate, sending you an email notification. Please check this page periodically for updates.`,
              },
              {
                title: "10. Contact Us",
                content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us:

Email: ${email}
Address: ${address}

If you are located in the UK or EU and have concerns about our data practices that we have not resolved satisfactorily, you have the right to lodge a complaint with your local data protection authority.`,
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-2xl font-light text-charcoal-900 mb-4">
                  {section.title}
                </h2>
                {section.content.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-4 last:mb-0 text-sm leading-relaxed">
                    {para.startsWith("—") ? (
                      <span className="block pl-4 border-l-2 border-blush-100 py-1">
                        {para}
                      </span>
                    ) : para.startsWith("**") ? (
                      <span>
                        <strong className="font-medium text-charcoal-900">
                          {para.match(/\*\*(.*?)\*\*/)?.[1]}:
                        </strong>{" "}
                        {para.replace(/\*\*(.*?)\*\*:\s?/, "")}
                      </span>
                    ) : (
                      para
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
