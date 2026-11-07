import Image from "next/image";
import type { Metadata } from "next";
import {
  SITE_URL,
  PERSON_NAME,
  profiles,
  personJsonLd,
  toJsonLd,
} from "@/lib/profiles";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Sandali Chandrasekara — a DevOps Engineer focused on cloud infrastructure, CI/CD automation, and building reliable, scalable systems.",
  alternates: {
    canonical: "/about",
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${SITE_URL}/about`,
  name: `About ${PERSON_NAME}`,
  mainEntity: personJsonLd,
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(profilePageJsonLd) }}
      />

      <p className="animate-fade-up mb-3 font-mono text-sm text-ios-blueText">$ cat about.md</p>

      <div className="animate-fade-up delay-1 flex items-center gap-5">
        <Image
          src="/images/sandali-chandrasekara.jpg"
          alt="Sandali Chandrasekara, DevOps Engineer"
          width={938}
          height={1037}
          priority
          className="h-20 w-20 shrink-0 rounded-full object-cover sm:h-24 sm:w-24"
        />
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ios-label sm:text-4xl">
          About Sandali Chandrasekara
        </h1>
      </div>

      <div className="ios-card animate-fade-up delay-2 mt-8 space-y-6 p-7 text-base leading-relaxed text-ios-secondary sm:p-9">
        <p>
          I&apos;m a DevOps Engineer focused on building reliable, scalable
          infrastructure that lets teams ship software with confidence. I work
          across AWS, Azure, and GCP, designing CI/CD pipelines, automating
          deployments, and strengthening the systems that keep production
          running.
        </p>

        <p>
          I&apos;m driven by continuous improvement, always refining processes
          and exploring new tools to build better, more resilient systems.
        </p>
      </div>

      <div className="animate-fade-up delay-3 mt-10">
        <h2 className="text-lg font-semibold text-ios-label">Find me online</h2>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {profiles.map((p) => (
            <li key={p.name}>
              <a
                href={p.url}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label={`${PERSON_NAME} on ${p.name}`}
                className="text-[15px] text-ios-blueText hover:underline"
              >
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}