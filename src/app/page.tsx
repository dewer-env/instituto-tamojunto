import Image from "next/image";
import Header from "./_components/Header";
import QuemSomos from "./_components/QuemSomos";
import SonhosRealizados from "./_components/SonhosRealizados";
import Projetos from "./_components/Projetos";
import Doacao from "./_components/Doacao";

export default function Home() {
  return (
    <main>
      <section className="relative h-screen min-h-[600px]">
        {/* Background image */}
        <Image
          src="/brand/bg-hero-main.png"
          alt="Comunidade Tamo Junto"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Gradient overlay: stronger at top for header legibility, subtle across body */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.25) 100%)",
          }}
        />

        <Header />

        {/* Hero text — centered */}
        <div className="absolute inset-0 flex items-center justify-center site-px pt-28 md:pt-24 text-center">
          <div>
            <h1 className="text-branco font-bold text-2xl md:text-3xl tracking-[0.12em] md:tracking-[0.15em] uppercase leading-tight">
              AQUI NÓS VIVEMOS EM COMUNIDADE
            </h1>
            <p className="text-branco italic text-xl md:text-3xl tracking-[0.08em] md:tracking-[0.1em] mt-2">
              E VOCÊ FAZ PARTE DELA
            </p>
          </div>
        </div>
      </section>

      <QuemSomos />
      <SonhosRealizados />
      <Projetos />
      <Doacao />
    </main>
  );
}
