export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="animate-fade-up mb-4 font-mono text-sm text-blue-600">
          $ whoami
        </p>

        <h1 className="animate-fade-up delay-1 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Hey, I&apos;m Sandali
        </h1>

        <p className="animate-fade-up delay-2 mt-5 text-lg leading-relaxed text-slate-500">
          A passionate DevOps Engineer with hands-on experience in cloud platforms, CI/CD automation, and
          infrastructure management, dedicated to building secure, scalable, and reliable solutions.
        </p>
      </div>
    </section>
  );
}