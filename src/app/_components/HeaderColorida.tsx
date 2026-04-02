"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const COR = "#7E571E";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projetos", href: "/projetos" },
  { label: "Galeria", href: "/galeria" },
];

export default function HeaderColorida() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="relative z-20 flex items-center justify-between site-px py-6"
        style={{ background: "var(--color-fundo)" }}
      >
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo-colorida.png"
            alt="Tamo Junto"
            width={130}
            height={44}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm tracking-widest font-normal hover:underline transition-opacity"
              style={{ color: COR }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/#doe"
          className="hidden md:inline-block text-sm tracking-widest px-6 py-2 border border-[#7E571E] text-[#7E571E] transition-colors duration-300 hover:bg-[#7E571E] hover:text-[var(--color-branco)]"
        >
          Doe agora
        </Link>

        {/* Hamburger — mobile */}
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] z-50 relative"
        >
          <span
            className="block h-[2px] w-7 transition-all duration-300 origin-center"
            style={{
              background: COR,
              ...(open ? { transform: "translateY(8px) rotate(45deg)" } : {}),
            }}
          />
          <span
            className="block h-[2px] w-7 transition-all duration-300"
            style={{
              background: COR,
              ...(open ? { opacity: 0, transform: "scaleX(0)" } : {}),
            }}
          />
          <span
            className="block h-[2px] w-7 transition-all duration-300 origin-center"
            style={{
              background: COR,
              ...(open ? { transform: "translateY(-8px) rotate(-45deg)" } : {}),
            }}
          />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div
        aria-hidden={!open}
        className="fixed inset-0 z-10 md:hidden flex flex-col"
        style={{
          background: "var(--color-fundo)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 400ms ease",
        }}
      >
        <nav className="flex flex-col items-center justify-center flex-1 gap-10">
          {navLinks.map(({ label, href }, i) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-2xl tracking-[0.2em] font-normal hover:underline"
              style={{
                color: COR,
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(16px)",
                transitionProperty: "opacity, transform",
                transitionDuration: "300ms",
                transitionTimingFunction: "ease",
                transitionDelay: open ? `${150 + i * 80}ms` : "0ms",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#doe"
            onClick={() => setOpen(false)}
            className="mt-4 text-sm tracking-widest border px-8 py-3"
            style={{
              color: COR,
              borderColor: COR,
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(16px)",
              transitionProperty: "opacity, transform, background-color, color",
              transitionDuration: "300ms",
              transitionTimingFunction: "ease",
              transitionDelay: open ? "390ms" : "0ms",
            }}
          >
            Doe agora
          </Link>
        </nav>
      </div>
    </>
  );
}
