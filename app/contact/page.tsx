import { Mail, Github, Linkedin } from "lucide-react";

export const metadata = {
  title: "Contact — Sandali Chandrasekara",
};

const links = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://linkedin.com/in/your-profile",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/your-username",
    icon: Github,
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="mb-3 font-mono text-sm text-blue-600">$ contact --info</p>

      <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Get in Touch
      </h1>

      <p className="mt-4 text-base leading-relaxed text-slate-500">
        Feel free to reach out — I&apos;m always happy to connect.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        {links.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={label === "Email" ? undefined : "_blank"}
            rel={label === "Email" ? undefined : "noopener noreferrer"}
            className="group flex items-center gap-4 rounded-lg border border-slate-200 px-5 py-4 transition-colors hover:border-blue-600 hover:bg-blue-50/40"
          >
            <Icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-blue-600" />
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-slate-400">
                {label}
              </p>
              <p className="text-sm text-slate-700">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}