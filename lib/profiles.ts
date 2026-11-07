export const SITE_URL = "https://sandalichandrasekara.xyz";
export const PERSON_NAME = "Sandali Chandrasekara";
export const PERSON_ID = `${SITE_URL}/#person`;

// Single source of truth: used by the footer, the About page and the JSON-LD.
// Use the exact canonical URL of each profile (same form everywhere).
export const profiles = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sandalichandrasekara" },
  { name: "GitHub", url: "https://github.com/sandalichandrasekara" },
  { name: "Medium", url: "https://medium.com/@sandalichandrasekara" },
  { name: "X", url: "https://x.com/sanyyylia" },
  { name: "Facebook", url: "https://www.facebook.com/sanyyylia" },
  { name: "Pinterest", url: "https://www.pinterest.com/sanyyylia" },
] as const;

export const personJsonLd = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON_NAME,
  url: SITE_URL,
  jobTitle: "DevOps Engineer",
  description:
    "DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and reliable, scalable systems.",
  image: `${SITE_URL}/images/sandali-chandrasekara.jpg`,
  knowsAbout: [
    "DevOps",
    "Cloud infrastructure",
    "CI/CD automation",
    "AWS",
    "Azure",
    "GCP",
  ],
  sameAs: profiles.map((p) => p.url),
};

// Serialise JSON-LD safely for use inside a <script> tag.
export function toJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}