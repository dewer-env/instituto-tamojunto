import Link from "next/link";

const WHATSAPP = "5582996235320";

const formas = [
  {
    nome: "Apoiar o Instituto",
    tagline: "Fortaleça o trabalho do Instituto Tamo Junto.",
    mensagem:
      "Olá! Quero apoiar o Instituto Tamo Junto e fortalecer o trabalho de vocês.",
  },
  {
    nome: "Apadrinhar um projeto",
    tagline: "Escolha uma iniciativa para apoiar.",
    mensagem:
      "Olá! Quero apadrinhar um projeto do Instituto Tamo Junto.",
  },
  {
    nome: "Iniciativas sustentáveis",
    tagline: "Contribua para ações que cuidam do território e da comunidade.",
    mensagem:
      "Olá! Quero contribuir com as iniciativas sustentáveis do Instituto Tamo Junto.",
  },
  {
    nome: "Capacitação",
    tagline: "Apoie iniciativas de formação e desenvolvimento.",
    mensagem:
      "Olá! Quero apoiar as iniciativas de capacitação do Instituto Tamo Junto.",
  },
  {
    nome: "Doação livre",
    tagline: "Contribua com o valor que fizer sentido para você.",
    mensagem:
      "Olá! Quero fazer uma doação livre para o Instituto Tamo Junto.",
  },
];

export default function Doacao() {
  return (
    <section
      id="doe"
      className="relative overflow-hidden site-px section-py"
      style={{ background: "var(--color-secundaria)" }}
    >
      {/* Ondas no topo da seção */}
      <svg
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-[50px] md:h-[90px] pointer-events-none"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C120,0 240,80 360,40 C480,0 600,80 720,40 C840,0 960,80 1080,40 C1200,0 1320,80 1440,40 L1440,0 L0,0 Z"
          fill="var(--color-fundo)"
        />
      </svg>

      {/* Título */}
      <h2
        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-3"
        style={{ color: "var(--color-branco)" }}
      >
        MILAGRES QUE
        <br />
        TRANSFORMAM
      </h2>

      {/* Subtítulo */}
      <p
        className="text-lg md:text-2xl italic tracking-[0.04em] text-center mb-16"
        style={{ color: "var(--color-branco)", opacity: 0.75 }}
      >
        Faça parte dessa transformação.
      </p>

      {/* Texto */}
      <p
        className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-20"
        style={{ color: "var(--color-branco)", opacity: 0.8 }}
      >
        O Instituto Tamo Junto conecta pessoas, projetos e iniciativas que geram
        impacto na comunidade. Você escolhe como participar. Junto, cada
        contribuição ganha força!
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
        {formas.map(({ nome, tagline, mensagem }, i) => (
          <div
            key={nome}
            className="group flex flex-col px-7 py-9 sm:last:col-span-2 lg:last:col-span-1 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-all duration-300"
            style={{ background: "var(--color-branco)" }}
          >
            {/* Índice */}
            <span
              className="text-3xl font-bold leading-none mb-5"
              style={{ color: "var(--color-secundaria)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Nome + tagline */}
            <p
              className="text-lg font-bold leading-snug mb-2"
              style={{ color: "var(--color-texto)" }}
            >
              {nome}
            </p>
            <p
              className="text-xs leading-relaxed mb-8"
              style={{ color: "var(--color-texto)", opacity: 0.5 }}
            >
              {tagline}
            </p>

            {/* Botão */}
            <Link
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block text-center text-xs tracking-widest py-3 border transition-colors duration-300 hover:bg-texto hover:text-branco"
              style={{
                borderColor: "var(--color-texto)",
                color: "var(--color-texto)",
                background: "transparent",
              }}
            >
              Quero contribuir
            </Link>
          </div>
        ))}
      </div>

      {/* Rodapé: WhatsApp */}
      <div
        className="border-t pt-12 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ borderColor: "rgba(252,243,234,0.25)" }}
      >
        <p
          className="text-base md:text-lg leading-relaxed text-center md:text-left"
          style={{ color: "var(--color-branco)", opacity: 0.85 }}
        >
          Faça parte dessa transformação.
          <br />
          Escolha uma causa.
          <br />
          Escolha uma história.
          <br />
          <span style={{ fontStyle: "italic" }}>Faça parte dela.</span>
        </p>
        <Link
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm tracking-widest border px-8 py-3 transition-colors duration-300 text-[var(--color-branco)] border-[var(--color-branco)] hover:bg-[var(--color-branco)] hover:text-[#3D5560]"
        >
          Falar no WhatsApp
        </Link>
      </div>
    </section>
  );
}
