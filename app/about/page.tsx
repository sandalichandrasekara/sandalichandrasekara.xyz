export const metadata = {
  title: "About — Sandali Chandrasekara",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="mb-3 font-mono text-sm text-blue-600">$ cat about.md</p>

      <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        About Me
      </h1>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-600">
        <p>
          I&apos;m a DevOps Engineer with a passion for building infrastructure
          that just works — reliable, automated, and built to scale without
          drama. I care about the systems behind the systems: the pipelines,
          the monitoring, the small automations that quietly save teams hours
          every week.
        </p>

        <p>
          My day-to-day lives somewhere between cloud platforms, CI/CD
          pipelines, containers, and infrastructure as code. I enjoy taking
          manual, error-prone processes and turning them into something
          repeatable and boring — in the best possible way.
        </p>

        <p>
          Outside of shipping pipelines, I&apos;m always learning — new tools,
          new patterns, better ways to keep systems resilient and teams
          moving fast without breaking things.
        </p>
      </div>
    </section>
  );
}