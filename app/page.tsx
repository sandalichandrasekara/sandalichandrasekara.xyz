export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="mb-4 font-mono text-sm text-blue-600">
          $ whoami
        </p>
 
        <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Hey, I&apos;m Sandali
          <span className="ml-1 inline-block animate-blink text-blue-600">
            _
          </span>
        </h1>
 
        <p className="mt-5 text-lg leading-relaxed text-slate-500">
          A passionate DevOps Engineer with hands-on experience in cloud platforms, CI/CD automation, and
          infrastructure management, dedicated to building secure, scalable, and reliable solutions.
        </p>
      </div>
    </section>
  );
}