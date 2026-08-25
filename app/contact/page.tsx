import { Mail, Github, Linkedin, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Sandali Chandrasekara — DevOps Engineer. Connect via email, GitHub, or LinkedIn.",
  alternates: {
    canonical: "/contact",
  },
};

const links = [
  {
    label: "Email",
    value: "sandalichandrasekarat20@gmail.com",
    href: "mailto:sandalichandrasekarat20@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sandalichandrasekara",
    href: "https://www.linkedin.com/in/sandalichandrasekara",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/sandalichandrasekara",
    href: "https://github.com/sandalichandrasekara",
    icon: Github,
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="animate-fade-up mb-3 font-mono text-sm text-ios-blueText">$ contact --info</p>

      <h1 className="animate-fade-up delay-1 font-display text-3xl font-semibold tracking-tight text-ios-label sm:text-4xl">
        Get in Touch
      </h1>

      <p className="animate-fade-up delay-2 mt-4 text-base leading-relaxed text-ios-secondary">
        Feel free to reach out, I&apos;m always happy to connect.
      </p>

      {/* iOS inset grouped list */}
      <div className="ios-card animate-fade-up delay-3 mt-10 overflow-hidden">
        {links.map(({ label, value, href, icon: Icon }, i) => (
          <a
            key={label}
            href={href}
            target={label === "Email" ? undefined : "_blank"}
            rel={label === "Email" ? undefined : "noopener noreferrer"}
            className={`ios-row group flex items-center gap-4 px-5 py-4 ${
              i !== 0 ? "border-t border-[var(--ios-separator)]" : ""
            }`}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-ios-blue/10">
              <Icon className="h-[18px] w-[18px] text-ios-blue" />
            </span>
            <span className="min-w-0 flex-1 truncate text-[15px] text-ios-label">
              {value}
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 text-ios-tertiary transition-transform duration-300 ease-spring group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </section>
  );
}
