import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Meet the Gurus", href: "/meet-the-gurus" },
    { label: "Who Is This For", href: "/who-is-this-for" },
    { label: "Become a Coach", href: "/become-a-coach" },
    { label: "Join Our Team", href: "/join-our-team" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Refund Policy", href: "/legal/refund-policy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ],
  Community: [
    { label: "Join the Circle", href: "/#membership" },
    { label: "Programs", href: "/#programs" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact Us", href: "mailto:hello@lumiracircle.com" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "mailto:hello@lumiracircle.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-ivory-100 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blush-400/30 to-transparent" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blush-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <h3 className="font-display text-3xl font-light mb-2 text-ivory-50">
                Lumira Circle
              </h3>
            </Link>
            <p className="text-[9px] tracking-ultra-wide uppercase font-body font-light text-blush-300 mb-6">
              Transform · Elevate · Thrive
            </p>
            <p className="font-body font-light text-sm leading-relaxed text-ivory-100/50 max-w-xs">
              A sacred space for women stepping into their fullest expression — through wisdom, community, and intentional transformation.
            </p>
            <div className="flex items-center gap-4 mt-8">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-ivory-100/10 flex items-center justify-center text-ivory-100/40 hover:text-blush-300 hover:border-blush-300/40 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[10px] tracking-ultra-wide uppercase font-body font-light text-blush-300 mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm font-light text-ivory-100/40 hover:text-ivory-100/80 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-10 border-t border-ivory-100/5 border-b border-ivory-100/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-display text-xl font-light text-ivory-50 mb-1">
                Letters from the Circle
              </p>
              <p className="font-body text-xs font-light text-ivory-100/40">
                Monthly wisdom, invitations, and curated insights for women in transformation.
              </p>
            </div>
            <form className="flex gap-0 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-72 px-5 py-3 bg-ivory-100/5 border border-ivory-100/10 text-ivory-100 placeholder-ivory-100/25 font-body text-sm font-light focus:outline-none focus:border-blush-400/50 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blush-500 text-ivory-50 font-body text-xs font-light tracking-widest uppercase hover:bg-blush-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs font-light text-ivory-100/25">
            © {new Date().getFullYear()} Lumira Circle. All rights reserved.
          </p>
          <p className="font-body text-xs font-light text-ivory-100/20 italic font-display">
            "She remembered who she was, and the game changed."
          </p>
        </div>
      </div>
    </footer>
  );
}
