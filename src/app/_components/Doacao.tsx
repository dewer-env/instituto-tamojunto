import Link from "next/link";

const WHATSAPP = "5582996235320";

const planos = [
  {
    nome: "Eu apoio Milagres",
    tagline: "Para quem quer dar o primeiro passo.",
    valor: "50",
    mensagem: "Eu apoio Milagres e quero apoiar o Instituto Tamo Junto com R$50/mês!",
  },
  {
    nome: "Eu amo Milagres",
    tagline: "Para quem quer fazer mais pela comunidade.",
    valor: "150",
    mensagem: "Eu amo Milagres e quero apoiar o Instituto Tamo Junto com R$150/mês!",
  },
  {
    nome: "Faço Milagres acontecerem",
    tagline: "Para quem transforma vidas em grande escala.",
    valor: "250",
    mensagem: "Faço Milagres acontecerem e quero apoiar o Instituto Tamo Junto com R$250/mês!",
  },
];

export default function Doacao() {
  return (
    <section
      id="doe"
      className="site-px section-py"
      style={{ background: "var(--color-secundaria)" }}
    >
      {/* Label */}
      <p
        className="text-xs tracking-[0.25em] uppercase text-center mb-8"
        style={{ color: "var(--color-branco)", opacity: 0.65 }}
      >
        Faça sua parte
      </p>

      {/* Título */}
      <h2
        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-center mb-10"
        style={{ color: "var(--color-branco)" }}
      >
        Sua contribuição
        <br />
        faz a diferença
      </h2>

      {/* Subtexto */}
      <p
        className="text-lg md:text-xl leading-relaxed text-center max-w-2xl mx-auto mb-20"
        style={{ color: "var(--color-branco)", opacity: 0.8 }}
      >
        Gostou e quer fazer milagres conosco? Escolha a sua categoria e nos
        ajude a continuar desenvolvendo o nosso potencial socioambiental!
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {planos.map(({ nome, tagline, valor, mensagem }) => (
          <div
            key={nome}
            className="group flex flex-col px-8 py-10 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-all duration-300"
            style={{ background: "var(--color-branco)" }}
          >
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

            {/* Preço */}
            <div className="flex items-baseline gap-1 mb-8">
              <span
                className="text-base font-bold"
                style={{ color: "var(--color-secundaria)" }}
              >
                R$
              </span>
              <span
                className="text-6xl md:text-7xl font-bold leading-none"
                style={{ color: "var(--color-secundaria)" }}
              >
                {valor}
              </span>
              <span
                className="text-sm self-end mb-1 ml-1"
                style={{ color: "var(--color-texto)", opacity: 0.45 }}
              >
                /mês
              </span>
            </div>

            {/* Botão */}
            <Link
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs tracking-widest py-3 border mb-8 transition-colors duration-300 hover:bg-texto hover:text-branco"
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
          className="text-base md:text-lg text-center md:text-left"
          style={{ color: "var(--color-branco)", opacity: 0.85 }}
        >
          Deseja nos apoiar de outras formas?{" "}
          <span style={{ fontStyle: "italic" }}>
            Entre em contato conosco pelo WhatsApp!
          </span>
        </p>
        <Link
          href="https://wa.me/55"
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
