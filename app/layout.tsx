import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE_URL, PERSON_NAME, personJsonLd, toJsonLd } from "@/lib/profiles";
import "./globals.css";

// SF Pro renders natively on Apple devices; Inter is the fallback everywhere else.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const DESCRIPTION =
  "DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and reliable, scalable systems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PERSON_NAME} - DevOps Engineer`,
    template: `%s - ${PERSON_NAME}`,
  },
  description: DESCRIPTION,
  authors: [{ name: PERSON_NAME, url: SITE_URL }],
  creator: PERSON_NAME,
  // No site-wide canonical here: a canonical set in the root layout is inherited
  // by every page that doesn't override it. Each page sets its own.
  openGraph: {
    title: PERSON_NAME,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: PERSON_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PERSON_NAME,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-ios-bg text-ios-label`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd({ "@context": "https://schema.org", ...personJsonLd }),
          }}
        />

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