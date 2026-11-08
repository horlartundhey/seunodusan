"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/impact", label: "Impact" },
  { href: "/speaking", label: "Speaking" },
  { href: "/recognition", label: "Recognition" },
  { href: "/press", label: "Press & Blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  const cur = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header className="site-header">
      <div className="in">
        <Link className="logo" href="/" aria-label="Seun Odusanya, home">
          Seun<b>.</b>Odusanya
        </Link>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul className={`nav${open ? " open" : ""}`} id="site-nav">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} aria-current={cur(l.href)}>
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pill">
            <Link href="/contact" aria-current={cur("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
