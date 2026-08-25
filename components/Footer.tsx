export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] py-8">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 px-6 text-center">
        <p className="font-mono text-xs text-ios-tertiary">
          © {year} Sandali Chandrasekara
        </p>
      </div>
    </footer>
  );
}