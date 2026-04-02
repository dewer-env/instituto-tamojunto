"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projetos", href: "/projetos" },
  { label: "Galeria", href: "/galeria" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Trava scroll do body quando menu aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between site-px py-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo-tj.png"
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
              className="text-branco text-sm tracking-widest font-normal opacity-90 hover:opacity-100 hover:underline transition-opacity"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#doe"
          className="hidden md:inline-block text-branco text-sm tracking-widest border border-branco px-6 py-2 hover:bg-branco hover:text-texto transition-colors duration-300"
        >
          Doe agora
        </Link>

        {/* Hamburger button — mobile only */}
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] z-50 relative"
        >
          <span
            className="block h-[2px] w-7 bg-branco transition-all duration-300 origin-center"
            style={open ? { transform: "translateY(8px) rotate(45deg)" } : {}}
          />
          <span
            className="block h-[2px] w-7 bg-branco transition-all duration-300"
            style={open ? { opacity: 0, transform: "scaleX(0)" } : {}}
          />
          <span
            className="block h-[2px] w-7 bg-branco transition-all duration-300 origin-center"
            style={open ? { transform: "translateY(-8px) rotate(-45deg)" } : {}}
          />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div
        aria-hidden={!open}
        className="fixed inset-0 z-10 md:hidden flex flex-col transition-all duration-500"
        style={{
          background: "rgba(0,0,0,0.88)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          backdropFilter: open ? "blur(4px)" : "blur(0px)",
        }}
      >
        <nav className="flex flex-col items-center justify-center flex-1 gap-10">
          {navLinks.map(({ label, href }, i) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-branco text-2xl tracking-[0.2em] font-normal hover:underline"
              style={{
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
            href="#doe"
            onClick={() => setOpen(false)}
            className="mt-4 text-branco text-sm tracking-widest border border-branco px-8 py-3 hover:bg-branco hover:text-texto"
            style={{
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
