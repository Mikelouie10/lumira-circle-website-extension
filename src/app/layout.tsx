import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Lumira Circle — Women's Transformation & Education Platform",
    template: "%s | Lumira Circle",
  },
  description:
    "Lumira Circle is a premium women's transformation and education platform offering holistic coaching, mindset mastery, and community for women ready to rise.",
  keywords: [
    "women coaching",
    "transformation",
    "wellness",
    "education platform",
    "mindset",
    "life coaching",
    "women empowerment",
  ],
  authors: [{ name: "Lumira Circle" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lumiracircle.com",
    siteName: "Lumira Circle",
    title: "Lumira Circle — Women's Transformation & Education Platform",
    description:
      "A sacred space for women ready to step into their fullest expression.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumira Circle",
    description: "Women's Transformation & Education Platform",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ivory-50 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
