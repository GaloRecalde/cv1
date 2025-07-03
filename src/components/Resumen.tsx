"use client";

export default function Resumen() {
  return (
    <section id="resumen" className="mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-accent">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">GALO RECALDE</h2>
          <p className="text-base text-justify mb-2 text-[var(--foreground)]">
            Luego de graduarme en el 2006, supe que mi pasión era el desarrollo de software. Durante 16 años he tenido la oportunidad de investigar a profundidad una gran variedad de lenguajes de desarrollo, sistemas operativos, herramientas de desarrollo, así como experimentar con varios ciclos de vida de software, arquitectura de software, control de calidad, análisis de requerimientos, gestión y administración de recurso humano.
          </p>
        </div>
      </div>
    </section>
  );
}
