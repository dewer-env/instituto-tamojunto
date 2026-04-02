import Image from "next/image";
import Link from "next/link";

const projetos = [
  {
    img: "/brand/projetos-card1.jpg",
    alt: "AMAR - Casamento Comunitário",
    titulo: "AMAR - Casamento Comunitário",
    texto: (
      <>
        AMAR é… Testemunhar o nascimento das famílias, juntos celebrarmos o amor
        e a união, com uma linda festa e culto ecumênico…
        <br />
        <br />
        Juntos fortalecemos a vitalidade comunitária da nossa Rota Ecológica dos
        Milagres. É SOBRE AFETO POR CADA CASAL, POR MILAGRES E POR NOSSA
        COMUNIDADE!
      </>
    ),
  },
  {
    img: "/brand/projetos-card2.jpg",
    alt: "TAMO JUNTINHO - Natal & Dia das Crianças",
    titulo: "TAMO JUNTINHO - Natal & Dia das Crianças",
    texto: (
      <>
        Tamo Juntinho nasceu do objetivo de ter o sorriso como maior recompensa
        do nosso trabalho. Compartilhar a felicidade por meio de experiências nos
        move… Então, reunimos nossas crianças para dias de alegria compartilhada.
        <br />
        <br />
        Rola cinema ao ar livre, show de talentos, apresentações de manifestações
        populares, muita brincadeira e muito amor!
      </>
    ),
  },
  {
    img: "/brand/projetos-card3.jpg",
    alt: "MILAGRES SUSTENTÁVEL",
    titulo: "MILAGRES SUSTENTÁVEL",
    texto: (
      <>
        Repensar, respeitar, responsabilizar-se, recusar, reduzir, reaproveitar e
        reciclar são diretrizes para todas as nossas ações ambientais dentro da
        Rota Ecológica dos Milagres.
        <br />
        <br />
        Conectar a comunidade com o viver de maneira sustentável é nosso desafio.
        PENSANDO LOCAL E AGINDO MUNDIAL.
      </>
    ),
  },
];

export default function Projetos() {
  return (
    <section
      className="site-px section-py"
      style={{ background: "var(--color-fundo)" }}
    >
      {/* Cabeçalho: label + título + link */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--color-secundaria)" }}
          >
            Iniciativas
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--color-texto)" }}
          >
            Nossos projetos
          </h2>
        </div>
        <Link
          href="/projetos"
          className="hidden md:inline text-base md:text-lg tracking-wide hover:underline shrink-0 ml-8"
          style={{ color: "var(--color-secundaria)" }}
        >
          Conhecer todos os projetos →
        </Link>
      </div>

      {/* Divisória superior */}
      <div className="border-t" style={{ borderColor: "var(--color-secundaria)", opacity: 0.4 }} />

      {/* Lista de projetos */}
      {projetos.map(({ img, alt, titulo, texto }, i) => (
        <div key={titulo}>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16 py-14 md:py-16 items-center">
            {/* Imagem */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={img}
                alt={alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Texto */}
            <div>
              <h3
                className="text-lg md:text-xl font-bold mb-5 leading-snug"
                style={{ color: "var(--color-texto)" }}
              >
                {titulo}
              </h3>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--color-texto)" }}
              >
                {texto}
              </p>
            </div>
          </div>

          {/* Divisória entre projetos */}
          {i < projetos.length - 1 && (
            <div className="border-t" style={{ borderColor: "var(--color-secundaria)", opacity: 0.4 }} />
          )}
        </div>
      ))}

      {/* Link mobile */}
      <div className="md:hidden py-8 text-center">
        <Link
          href="/projetos"
          className="text-base md:text-lg tracking-wide hover:underline"
          style={{ color: "var(--color-secundaria)" }}
        >
          Conhecer todos os projetos →
        </Link>
      </div>
    </section>
  );
}
