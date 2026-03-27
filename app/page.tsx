import ThemeToggle from "@/components/ThemeToggle";
import AppCard from "@/components/AppCard";
import Footer from "@/components/Footer"; // <-- Asegurate que el nombre del archivo sea Footer.tsx
import Image from "next/image";

export default function Home() {
  return (
    // Quitamos el overflow-hidden del contenedor principal para que deje hacer scroll hasta el footer
    <div className="relative min-h-screen">
      
      {/* ── FONDO AURORA ── */}
      <div className="aurora">
        <div className="aurora-blob blob-1" />
        <div className="aurora-blob blob-2" />
        <div className="aurora-blob blob-3" />
      </div>

      {/* ── CONTENIDO ── */}
      <div className="relative z-10">
        
        {/* NAV */}
        <nav className="flex justify-between items-center max-w-6xl mx-auto p-8 sm:p-6">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo-escuela.png" 
              alt="Logo" 
              width={38} height={38} 
              className="invert-[var(--logo-blend)]" 
            />
            <span className="font-serif font-bold text-lg tracking-tight text-[var(--text)]">Helen Keller</span>
          </div>
          <ThemeToggle />
        </nav>

        {/* HERO */}
        <header className="text-center py-24 sm:py-16 animate-fade-up">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text3)] mb-4">
            Esc. N° 2-006 · Mendoza
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-[var(--text)] mb-6">
            Apps <span className="italic font-bold">Educativas</span>
          </h1>
          <p className="text-[var(--text2)] max-w-md mx-auto text-sm sm:px-6">
            Herramientas digitales inclusivas diseñadas con cuidado para nuestros estudiantes.
          </p>
        </header>

        {/* GRILLA DE APPS */}
        <section className="max-w-6xl mx-auto px-8 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AppCard 
              title="Alfabetización" 
              desc="Módulos de letras, sílabas y oraciones para primaria."
              emoji="🔤" badge="Nuevo" 
              href="https://alfabetizacion2.vercel.app/" 
              glow="rgba(85,239,196,0.3)" accent="#55EFC4" delay="0.1s"
            />
            <AppCard 
              title="EstímulaVisión" 
              desc="Ejercicios de contraste y seguimiento ocular."
              emoji="👁️" badge="Popular" 
              href="https://estimulacionvisual.vercel.app/"
              glow="rgba(255,150,60,0.3)" accent="#FF963C" delay="0.2s"
            />
            <AppCard 
              title="Aprender a Tipear" 
              desc="Domina el teclado con asistencia de audio."
              emoji="⌨️" badge="Accesible" 
              href="https://tecladohelenkeller.vercel.app/"
              glow="rgba(162,155,254,0.3)" accent="#A29BFE" delay="0.3s"
            />
            <AppCard 
              title="Tienda HK" 
              desc="Simulador de compras online inclusivo."
              emoji="🛍️" badge="Beta" 
              href="https://tiendaonlinehk.vercel.app/"
              glow="rgba(253,121,168,0.3)" accent="#FD79A8" delay="0.4s"
            />
          </div>
        </section>

        {/* FOOTER - Ahora dentro del flujo de la página */}
        <Footer />
      </div>
    </div>
  );
}