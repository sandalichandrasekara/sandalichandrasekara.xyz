import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
    default: "Sandali Chandrasekara",
    template: "%s - Sandali Chandrasekara",
  },
  description:
    "DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and reliable, scalable systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sandali Chandrasekara",
    description:
      "DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and reliable, scalable systems.",
    url: "https://sandalichandrasekara.xyz",
    siteName: "Sandali Chandrasekara",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandali Chandrasekara",
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
    "https://facebook.com/sanyyylia",
    "https://youtube.com/@sandalinc",
    "https://pinterest.com/sanyyylia",    
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
        <GoogleAnalytics />

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-1/4"
          style={{
            background:
              "linear-gradient(to right, #ff3b30, #ff9500, #ffcc00, #34c759, #00c7be, #007aff, #af52de, #ff2d92)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
          }}
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