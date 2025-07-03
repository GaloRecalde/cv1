import Perfil from "../components/Perfil";
import Resumen from "../components/Resumen";
import Experiencia from "../components/Experiencia";
import Educacion from "../components/Educacion";
import Certificados from "../components/Certificados";
import Habilidades from "../components/Habilidades";
import Idiomas from "../components/Idiomas";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="min-h-screen flex bg-[var(--background)]">
      {/* Lateral azul */}
      <aside className="hidden md:flex flex-col w-80 bg-sidebar text-sidebar p-6 gap-6 items-center">
        <div className="w-full">
          <h2 className="text-xl font-bold mb-2">PERSONAL</h2>
          <Perfil />
        </div>
        <div className="w-full">
          <h2 className="text-xl font-bold mb-2">IDIOMAS</h2>
          <Idiomas />
        </div>
      </aside>
      {/* Contenido principal */}
      <main className="flex-1 max-w-3xl mx-auto p-4">
        <Resumen />
        <Experiencia />
        <Educacion />
        <Certificados />
        <Habilidades />
        <ScrollToTopButton />
      </main>
    </div>
  );
}
