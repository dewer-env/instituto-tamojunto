import HeaderColorida from "../_components/HeaderColorida";
import GaleriaGrid from "../_components/GaleriaGrid";

export default function GaleriaPage() {
  return (
    <main style={{ background: "var(--color-fundo)" }}>
      <HeaderColorida />

      {/* Introdução */}
      <section className="site-px pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--color-secundaria)" }}
            >
              Nossos registros
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ color: "var(--color-texto)" }}
            >
              Galeria
            </h1>
          </div>
          <div className="flex items-center justify-end text-right">
            <p
              className="text-xs md:text-sm leading-relaxed"
              style={{ color: "#333333" }}
            >
              Cada foto é um pedaço de Milagres. Registros da nossa comunidade, da nossa praia e da nossa história.
            </p>
          </div>
        </div>
        <div
          className="mt-8 border-t"
          style={{ borderColor: "var(--color-secundaria)", opacity: 0.4 }}
        />
      </section>

      {/* Grid com lightbox */}
      <GaleriaGrid />
    </main>
  );
}
