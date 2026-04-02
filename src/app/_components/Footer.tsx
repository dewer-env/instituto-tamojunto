import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projetos", href: "/projetos" },
  { label: "Galeria", href: "/galeria" },
];

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer style={{ background: "#3D5560" }}>
      <div className="site-px pt-16 pb-10">
        {/* Conteúdo principal */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16">
          {/* Esquerda: logo + tagline */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/brand/logo-tj.png"
                alt="Instituto Tamo Junto"
                width={130}
                height={44}
                className="h-8 w-auto"
              />
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-branco)", opacity: 0.55 }}
            >
              Transformando potencial socioambiental em potência através da
              união e da essência da comunidade.
            </p>
          </div>

          {/* Direita: links */}
          <nav className="flex flex-wrap gap-x-10 gap-y-3 md:pt-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm tracking-wide hover:underline transition-opacity duration-200"
                style={{ color: "var(--color-branco)", opacity: 0.8 }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Separador */}
        <div
          className="border-t mb-8"
          style={{ borderColor: "var(--color-branco)", opacity: 0.15 }}
        />

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <p
            className="text-xs"
            style={{ color: "var(--color-branco)", opacity: 0.4 }}
          >
            © {ano} Instituto Tamo Junto
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--color-branco)", opacity: 0.4 }}
          >
            Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
