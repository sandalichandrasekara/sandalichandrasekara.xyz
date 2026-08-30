import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

// SF Pro renders natively on Apple devices; Inter is the fallback everywhere else.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
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
        className={`${inter.variable} antialiased bg-ios-bg text-ios-label`}
      >
        <GoogleAnalytics />

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-1/3"
          style={{
            background:
              "linear-gradient(to right, #cfe4ff, #a7c9ff, #7fb0ff, #5b9bff, #7fb0ff, #a7c9ff, #cfe4ff)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0.18), transparent)",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0.18), transparent)",
            filter: "blur(8px)",
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