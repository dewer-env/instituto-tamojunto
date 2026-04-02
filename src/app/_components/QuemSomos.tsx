import Image from "next/image";

export default function QuemSomos() {
  return (
    <section
      className="site-px section-pt pb-0 overflow-hidden"
      style={{ background: "var(--color-fundo)" }}
    >
      {/* Texto: 2 colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-28 items-center">
        {/* Coluna esquerda: label + título */}
        <div>
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--color-secundaria)" }}
          >
            Nossa História
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "var(--color-texto)" }}
          >
            Somos locais
            <br />e Unidade
          </h2>
        </div>

        {/* Coluna direita: parágrafo */}
        <div className="flex items-center">
          <p
            className="text-lg md:text-xl leading-loose"
            style={{ color: "var(--color-texto)" }}
          >
            É sobre transformar potencial socioambiental em potência
            socioambiental através da sua própria essência.
            <br />
            <br />
            E foi assim que nasceu o Instituto Tamo Junto, em 2016. De ano em
            ano cultivamos as raízes da nossa cultura e preservamos a nossa
            natureza.
          </p>
        </div>
      </div>

      {/* 3 imagens em arco */}
      <div className="grid grid-cols-3 gap-3 md:gap-5">
        {[
          { src: "/brand/sobre-bg1.png", alt: "Sobre - imagem 1" },
          { src: "/brand/sobre-bg2.png", alt: "Sobre - imagem 2" },
          { src: "/brand/sobre-bg3.png", alt: "Sobre - imagem 3" },
        ].map(({ src, alt }) => (
          <div
            key={src}
            className="relative overflow-hidden aspect-[3/4]"
            style={{ borderRadius: "9999px 9999px 0 0" }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 33vw, 30vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
