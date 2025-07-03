const educacion = [
  {
    fecha: "sep 2022 - jul 2022",
    titulo: "Ingeniería de sistemas",
    institucion: "Universidad Santiago de Cali, Cali",
    registro: "5054R-14-27876"
  },
  {
    fecha: "oct 2002 - oct 2006",
    titulo: "Tecnología informática",
    institucion: "INSTITUTO TECNOLÓGICO SUDAMERICANO, Quito",
    registro: "2201-03-36195"
  },
  {
    fecha: "oct 2002 - oct 2004",
    titulo: "Técnico Superior en Análisis de Sistemas",
    institucion: "INSTITUTO TECNOLÓGICO SUDAMERICANO, Quito",
    registro: "2201-02-5177"
  }
];

export default function Educacion() {
  return (
    <section id="educacion" className="mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-accent">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[var(--foreground)]">
          <span>🎓</span> ESTUDIOS Y CERTIFICACIONES
        </h2>
        <div className="border-l-2 border-accent pl-6">
          {educacion.map((edu, idx) => (
            <div key={idx} className="mb-6">
              <div className="text-sm text-plomo-medio">{edu.fecha}</div>
              <div className="font-bold text-plomo-oscuro">{edu.titulo}</div>
              <div className="text-sm font-semibold text-plomo-medio">{edu.institucion}</div>
              <div className="text-xs text-plomo-medio">REGISTRO: {edu.registro}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
