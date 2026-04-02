"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const BASE = "/brand/galeria";

// Cada linha tem altura fixa; largura de cada foto é proporcional ao flex ratio.
const rows: { src: string; alt: string; flex: number }[][] = [
  [
    { src: `${BASE}/654568513_18035016146783450_3365603357262507402_n.jpg`, alt: "Galeria 1",  flex: 1.4 },
    { src: `${BASE}/622876503_18115551649614360_4030077430249443993_n.jpg`, alt: "Galeria 2",  flex: 0.8 },
    { src: `${BASE}/325836530_714096106887749_8924311626803431934_n.jpg`,   alt: "Galeria 3",  flex: 1.3 },
    { src: `${BASE}/634207346_18436698529112761_7908729464629299733_n.jpg`, alt: "Galeria 4",  flex: 0.9 },
  ],
  [
    { src: `${BASE}/488314402_18111960499481122_8086187274560164931_n.jpg`, alt: "Galeria 5",  flex: 0.9 },
    { src: `${BASE}/447961544_17915912672936645_1238758783937144510_n.jpg`, alt: "Galeria 6",  flex: 0.75 },
    { src: `${BASE}/570128165_18132224401481122_1615552449847540959_n.jpg`, alt: "Galeria 7",  flex: 0.75 },
    { src: `${BASE}/621136748_18089183302858366_1596052814666354885_n.jpg`, alt: "Galeria 8",  flex: 1.4 },
  ],
  [
    { src: `${BASE}/339421234_1228486398029528_1806618532193426106_n.jpg`,  alt: "Galeria 9",  flex: 1.1 },
    { src: `${BASE}/655280020_18107306416861752_2861892922085196571_n.jpg`, alt: "Galeria 10", flex: 0.85 },
    { src: `${BASE}/650400144_17997646043865748_4182993390337212312_n.jpg`, alt: "Galeria 11", flex: 1.6 },
    { src: `${BASE}/628408131_18384377290156338_1691431186400451234_n.jpg`, alt: "Galeria 12", flex: 0.9 },
  ],
  [
    { src: `${BASE}/655014699_18041977922774047_8374018246982776709_n.jpg`, alt: "Galeria 13", flex: 0.85 },
    { src: `${BASE}/652792281_18105533753506496_7605230957513988427_n.jpg`, alt: "Galeria 14", flex: 1.7 },
    { src: `${BASE}/625053171_18165069598399019_5468121306068495483_n.jpg`, alt: "Galeria 15", flex: 1.1 },
    { src: `${BASE}/434605908_1911109642677843_8012373420703146354_n.jpg`,  alt: "Galeria 16", flex: 0.9 },
  ],
  [
    { src: `${BASE}/657953093_18097201543819254_9191045737890503297_n.jpg`, alt: "Galeria 17", flex: 1.3 },
    { src: `${BASE}/584501547_18135189721481122_715889507531067756_n.jpg`,  alt: "Galeria 18", flex: 0.8 },
    { src: `${BASE}/650999016_18068536181274428_7521868521394360160_n.jpg`, alt: "Galeria 19", flex: 1.0 },
    { src: `${BASE}/570589370_18132224440481122_8178325505272200977_n.jpg`, alt: "Galeria 20", flex: 1.2 },
  ],
];

// Array plano para navegação do lightbox
const fotos = rows.flat();

export default function GaleriaGrid() {
  const [selecionado, setSelecionado] = useState<number | null>(null);

  const fechar   = useCallback(() => setSelecionado(null), []);
  const anterior = useCallback(() =>
    setSelecionado((i) => (i !== null ? (i - 1 + fotos.length) % fotos.length : null)), []);
  const proximo  = useCallback(() =>
    setSelecionado((i) => (i !== null ? (i + 1) % fotos.length : null)), []);

  useEffect(() => {
    if (selecionado === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     fechar();
      if (e.key === "ArrowLeft")  anterior();
      if (e.key === "ArrowRight") proximo();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selecionado, fechar, anterior, proximo]);

  useEffect(() => {
    document.body.style.overflow = selecionado !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selecionado]);

  let globalIndex = 0;

  return (
    <>
      {/* Grid — respeitando site-px */}
      <section className="site-px pt-12 pb-12">

        {/* Mobile: grid 2 colunas simples */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {fotos.map(({ src, alt }, idx) => (
            <button
              key={idx}
              onClick={() => setSelecionado(idx)}
              className="relative overflow-hidden group aspect-square"
              aria-label={`Ver ${alt}`}
            >
              <Image
                src={src} alt={alt} fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(0,0,0,0.2)" }} />
            </button>
          ))}
        </div>

        {/* Desktop: linhas flex com larguras variadas */}
        <div className="hidden md:flex flex-col gap-5">
          {rows.map((row, ri) => (
            <div key={ri} className={`flex gap-5 ${ri % 2 === 1 ? "px-8" : ""}`}>
              {row.map(({ src, alt, flex }) => {
                const idx = globalIndex++;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelecionado(idx)}
                    className="relative overflow-hidden group h-[260px]"
                    style={{ flex }}
                    aria-label={`Ver ${alt}`}
                  >
                    <Image
                      src={src} alt={alt} fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="30vw"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(0,0,0,0.2)" }} />
                  </button>
                );
              })}
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox */}
      {selecionado !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={fechar}
        >
          <div
            className="relative w-[90vw] max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fotos[selecionado].src}
              alt={fotos[selecionado].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <button
            onClick={fechar}
            className="absolute top-6 right-8 text-4xl leading-none hover:opacity-60 transition-opacity duration-200"
            style={{ color: "var(--color-branco)" }}
            aria-label="Fechar"
          >
            ×
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); anterior(); }}
            className="absolute left-4 md:left-8 text-5xl leading-none hover:opacity-60 transition-opacity duration-200"
            style={{ color: "var(--color-branco)" }}
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); proximo(); }}
            className="absolute right-4 md:right-8 text-5xl leading-none hover:opacity-60 transition-opacity duration-200"
            style={{ color: "var(--color-branco)" }}
            aria-label="Próximo"
          >
            ›
          </button>

          <p
            className="absolute bottom-6 text-sm tracking-widest"
            style={{ color: "var(--color-branco)", opacity: 0.45 }}
          >
            {selecionado + 1} / {fotos.length}
          </p>
        </div>
      )}
    </>
  );
}
