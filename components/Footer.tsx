import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--sep)] pt-16 pb-12 mt-20">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-10">
        
        <div className="flex gap-6 items-start flex-1">
          <Image 
            src="/logo-escuela.png" 
            alt="Logo Helen Keller" 
            width={50} height={50} 
            className="opacity-80 grayscale hover:grayscale-0 transition-all"
          />
          <div>
            <h3 className="font-serif text-lg font-bold text-[var(--text)]">Esc. N° 2-006 Helen Keller</h3>
            <p className="text-xs text-[var(--text3)] mt-1">Desarrollado por Dante Ezequiel Basilici</p>
            
            <div className="flex gap-3 mt-6">
              <FooterLink href="https://dantebasilici.netlify.app" label="Portfolio" />
              <FooterLink href="https://github.com/dantebasilici" label="GitHub" />
              <FooterLink href="https://www.linkedin.com/in/dante-ezequiel-basilici/" label="LinkedIn" />
            </div>
          </div>
        </div>

        <div className="font-mono text-[10px] text-[var(--text3)] text-right md:text-right uppercase tracking-widest leading-loose">
          <p>© 2026</p>
          <p>Mendoza, Argentina</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href} 
      target="_blank"
      className="font-mono text-[10px] uppercase tracking-tighter text-[var(--text3)] border border-[var(--chip-bd)] px-3 py-1.5 rounded-md bg-[var(--chip-bg)] hover:text-[var(--text)] hover:border-[var(--border-h)] transition-all"
    >
      {label}
    </Link>
  );
}