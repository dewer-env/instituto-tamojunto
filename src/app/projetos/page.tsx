import Image from "next/image";
import HeaderColorida from "../_components/HeaderColorida";

const projetos = [
  {
    titulo: "AMAR — Casamento Comunitário",
    texto:
      "Testemunhar o nascimento das famílias — juntos celebramos o amor e a união com uma linda festa e culto ecumênico. Juntos fortalecemos a vitalidade comunitária da nossa Rota Ecológica dos Milagres.",
    img: "/brand/projetos-card-main1.jpg",
  },
  {
    titulo: "TAMO JUNTINHO — Natal & Dia das Crianças",
    texto:
      "Tamo Juntinho nasceu do objetivo de ter o sorriso como maior recompensa do nosso trabalho. Cinema ao ar livre, show de talentos, manifestações populares, muita brincadeira e muito amor.",
    img: "/brand/projetos-card-main2.jpg",
  },
  {
    titulo: "MILAGRES SUSTENTÁVEL",
    texto:
      "Repensar, respeitar, reduzir, reciclar — diretrizes para todas as nossas ações ambientais na Rota Ecológica dos Milagres. Conectar a comunidade com o viver sustentável é nosso desafio.",
    img: "/brand/projetos-card-main3.jpg",
  },
  {
    titulo: "CORRIDA ROSA",
    texto:
      "Todo outubro, há 7 anos juntas, percorremos 5km pela prevenção do câncer de mama e colo do útero. Trocamos sobre saúde, esporte e autocuidado com nossas vizinhas da Rota Ecológica dos Milagres.",
    img: "/brand/projetos-card-main4.jpg",
  },
  {
    titulo: "QUINTAL",
    texto:
      "Projeto de contraturno escolar com alfabetização, musicalização e livre brincar. Conectamos as crianças à natureza e à socialização em um ambiente acolhedor que respeita a essência de cada uma.",
    img: "/brand/projetos-card-main5.jpg",
  },
  {
    titulo: "ROTAS DO CONHECIMENTO",
    texto:
      "Desde 2013, mais de 30 cursos certificados para fazer de Milagres uma experiência inesquecível. Por conta do projeto, 80% da mão de obra do Réveillon dos Milagres é local.",
    img: "/brand/projetos-card-main6.jpg",
  },
];

export default function ProjetosPage() {
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
              O que fazemos
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ color: "var(--color-texto)" }}
            >
              Projetos
            </h1>
          </div>
          <div className="flex items-center justify-end text-right">
            <p
              className="text-xs md:text-sm leading-relaxed"
              style={{ color: "#333333" }}
            >
              Cada projeto nasce da comunidade e volta para ela. É assim que, desde 2016, fazemos Milagres acontecer.
            </p>
          </div>
        </div>
        <div
          className="mt-8 border-t"
          style={{ borderColor: "var(--color-secundaria)", opacity: 0.4 }}
        />
      </section>

      {/* Grid de projetos — layout alternado */}
      <section className="site-px">
        {projetos.map(({ titulo, texto, img }, i) => {
          const par = i % 2 === 0;
          return (
            <div key={titulo}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-12 md:py-16 items-center">
                {/* Texto — em mobile sempre primeiro; desktop: ordem via order */}
                <div className={par ? "md:order-1" : "md:order-2"}>
                  <h2
                    className="text-2xl md:text-3xl font-bold leading-snug mb-6"
                    style={{ color: "var(--color-texto)" }}
                  >
                    {titulo}
                  </h2>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "var(--color-texto)", opacity: 0.75 }}
                  >
                    {texto}
                  </p>
                </div>

                {/* Imagem */}
                <div
                  className={`relative w-full aspect-[4/5] overflow-hidden ${
                    par ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={img}
                    alt={titulo}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Divisória */}
              {i < projetos.length - 1 && (
                <div
                  className="border-t"
                  style={{ borderColor: "var(--color-secundaria)", opacity: 0.4 }}
                />
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
}
