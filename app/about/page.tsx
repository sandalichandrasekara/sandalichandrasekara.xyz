export const metadata = {
  title: "About",
  description:
    "About Sandali Chandrasekara — a DevOps Engineer focused on cloud infrastructure, CI/CD automation, and building reliable, scalable systems.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="animate-fade-up mb-3 font-mono text-sm text-ios-blueText">$ cat about.md</p>

      <h1 className="animate-fade-up delay-1 font-display text-3xl font-semibold tracking-tight text-ios-label sm:text-4xl">
        About Me
      </h1>

      <div className="ios-card animate-fade-up delay-2 mt-8 space-y-6 p-7 text-base leading-relaxed text-ios-secondary sm:p-9">
        <p>
          I&apos;m a DevOps Engineer focused on building reliable, scalable
          infrastructure that lets teams ship software with confidence. I work
          across AWS, Azure, and GCP, designing CI/CD pipelines, automating
          deployments, and strengthening the systems that keep production
          running.
        </p>

        <p>
          I focus on automating repetitive processes, implementing effective
          monitoring, and embedding reliability into systems from the ground up.
          My goal is to deliver solutions that are secure, maintainable, and
          built to scale.
        </p>

        <p>
          I&apos;m driven by continuous improvement, always refining processes
          and exploring new tools to build better, more resilient systems.
        </p>
      </div>
    </section>
  );
}