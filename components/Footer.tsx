import { profiles, PERSON_NAME } from "@/lib/profiles";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] py-8">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 px-6 text-center">
        <nav aria-label={`${PERSON_NAME} on the web`}>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {profiles.map((p) => (
              <li key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label={`${PERSON_NAME} on ${p.name}`}
                  className="text-sm text-ios-secondary transition-colors hover:text-ios-blueText"
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-mono text-xs text-ios-tertiary">
          © {year} {PERSON_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}