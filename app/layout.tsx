import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandalichandrasekara.xyz"),
  title: {
    default: "Sandali Chandrasekara - DevOps Engineer",
    template: "%s — Sandali Chandrasekara",
  },
  description:
    "DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and reliable, scalable systems.",
  openGraph: {
    title: "Sandali Chandrasekara - DevOps Engineer",
    description:
      "DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and reliable, scalable systems.",
    url: "https://sandalichandrasekara.xyz",
    siteName: "Sandali Chandrasekara",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sandali Chandrasekara - DevOps Engineer",
    description:
      "DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and reliable, scalable systems.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandali Chandrasekara",
  url: "https://sandalichandrasekara.xyz",
  jobTitle: "DevOps Engineer",
  image: "https://sandalichandrasekara.xyz/images/profile.jpg",
  sameAs: [
    "https://linkedin.com/in/sandalichandrasekara",
    "https://github.com/sandalichandrasekara",
    "https://medium.com/@sandalichandrasekara",
    "https://x.com/sanyyylia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-white text-slate-900`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-1/4 bg-gradient-to-t from-blue-600/25 via-blue-600/10 to-transparent"
        />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}