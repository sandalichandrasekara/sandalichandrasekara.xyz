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
          I&apos;m a DevOps Engineer passionate about building reliable, scalable, and automated
          infrastructure that enables teams to deliver software faster and more efficiently. 
          With over 2 years of hands-on experience in DevOps, I have worked across cloud environments,
          CI/CD automation, infrastructure management, monitoring, and production system support.
        </p>

        <p>
          My experience includes working with AWS, Azure, and GCP platforms, designing and
          maintaining deployment pipelines, automating workflows, and improving system
          reliability through modern DevOps practices. I enjoy bridging the gap between
          development and operations by creating solutions that are secure, efficient, and easy to maintain.
        </p>

        <p>
          Beyond technology, I believe in continuous learning, problem-solving, and improving
          processes through automation. I am always exploring new tools and practices to build
          better systems and contribute meaningful value to engineering teams.
        </p>
      </div>
    </section>
  );
}