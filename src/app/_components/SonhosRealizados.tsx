"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  { value: 30,   suffix: "",  label: "Cursos realizados" },
  { value: 1000, suffix: "",  label: "Pessoas certificadas" },
  { value: 80,   suffix: "%", label: "Pessoas empregadas" },
  { value: 55,   suffix: "",  label: "Treinamentos realizados" },
  { value: 2500, suffix: "",  label: "Pessoas treinadas" },
  { value: 80,   suffix: "%", label: "Mão de obra local em eventos" },
  { value: 68,   suffix: "%", label: "Mulheres trabalhando em eventos" },
  { value: 3000, suffix: "",  label: "Pessoas impactadas" },
];

function formatNumber(n: number): string {
  return n.toLocaleString("pt-BR");
}

function CountUp({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [started, target]);

  return (
    <>
      {formatNumber(count)}
      {suffix && (
        <span className="text-3xl md:text-4xl align-top mt-2 inline-block">
          {suffix}
        </span>
      )}
    </>
  );
}

// Calcula as classes de borda para cada card considerando
// grid de 2 colunas (mobile) e 4 colunas (desktop).
function borderClasses(i: number): string {
  const mobileRight  = i % 2 === 0;
  const desktopRight = (i + 1) % 4 !== 0;
  const mobileBottom  = i < 6; // 4 linhas em 2-col → última linha = i >= 6
  const desktopBottom = i < 4; // 2 linhas em 4-col → última linha = i >= 4

  const right =
    mobileRight && desktopRight  ? "border-r" :
    mobileRight && !desktopRight ? "border-r md:border-r-0" :
    !mobileRight && desktopRight ? "md:border-r" : "";

  const bottom =
    mobileBottom && desktopBottom  ? "border-b" :
    mobileBottom && !desktopBottom ? "border-b md:border-b-0" : "";

  return [right, bottom].filter(Boolean).join(" ");
}

export default function SonhosRealizados() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="site-px section-py"
      style={{ background: "var(--color-secao)" }}
    >
      {/* Label + título */}
      <div className="text-center mb-20">
        <p
          className="text-xs tracking-[0.25em] uppercase mb-3"
          style={{ color: "var(--color-secundaria)" }}
        >
          Nosso Impacto
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ color: "var(--color-texto)" }}
        >
          Sonhos Realizados
        </h2>
      </div>

      {/* Grid 4×2 com divisórias responsivas */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {cards.map(({ value, suffix, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center text-center px-6 py-12 ${borderClasses(i)}`}
            style={{ borderColor: "var(--color-secundaria)" }}
          >
            <p
              className="text-xs tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--color-texto)" }}
            >
              + de
            </p>
            <p
              className="text-5xl md:text-6xl font-bold leading-none mb-4"
              style={{ color: "var(--color-secundaria)" }}
            >
              <CountUp target={value} suffix={suffix} started={started} />
            </p>
            <p
              className="text-xs md:text-sm leading-snug tracking-wider"
              style={{ color: "var(--color-texto)" }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
