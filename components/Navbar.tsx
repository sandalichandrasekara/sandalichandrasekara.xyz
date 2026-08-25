"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="glass sticky top-0 z-50 border-b border-black/[0.06]">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link href="/" className="press block">
          <Image
            src="/images/logo.png"
            alt="Sandali Chandrasekara"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* iOS segmented control */}
        <ul className="flex items-center gap-1 rounded-full bg-black/[0.04] p-1">
          {navItems.map((item) => {
            const isActive = item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ease-spring ${
                    isActive
                      ? "bg-white text-ios-label shadow-sm"
                      : "text-ios-secondary hover:text-ios-label"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
