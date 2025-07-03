const habilidades = [
  { nombre: "Python", nivel: 5 },
  { nombre: "Visual Studio .Net", nivel: 5 },
  { nombre: "Dinamics AX", nivel: 5 },
  { nombre: "Power Builder", nivel: 5 },
  { nombre: "Sql Server", nivel: 5 },
  { nombre: "Html5", nivel: 5 },
  { nombre: "Postgres", nivel: 5 },
  { nombre: "DI-API Sap Buisnnes One", nivel: 5 },
  { nombre: "UIAPI-Sap Buisnnes One", nivel: 5 },
  { nombre: "Prevención de Lavados de Activos", nivel: 5 },
  { nombre: "Planificación Estratégica y Operativa de Cooperati", nivel: 5 },
  { nombre: "Riesgos Bancarios", nivel: 5 },
  { nombre: "Sistema Nacional de Pagos del Sistema Bancario Ec", nivel: 5 },
  { nombre: "Microsoft IIS (Internet Information Server) 6,7,8", nivel: 5 },
  { nombre: "HTML y Silverlight", nivel: 5 },
  { nombre: "Mvc 3,4,5", nivel: 5 },
  { nombre: "Conocimientos de Banca", nivel: 5 },
  { nombre: "Metodologías ágiles", nivel: 5 },
  { nombre: "Análisis de negocio", nivel: 5 },
  { nombre: "Análisis financiero", nivel: 5 },
  { nombre: "Capacidad de análisis", nivel: 5 },
  { nombre: "SAP BUISNNE ONE", nivel: 5 },
  { nombre: "Liderazgo de equipos", nivel: 5 },
  { nombre: "Programación neurolingüística (PNL)", nivel: 5 },
  { nombre: "Herramientas de inteligencia de negocios", nivel: 5 },
  { nombre: "Pentaho", nivel: 5 },
  { nombre: "Balanced Scorecard", nivel: 5 },
  { nombre: "SyBase", nivel: 5 },
  { nombre: "C++", nivel: 5 },
  { nombre: "Visual Fox Pro", nivel: 5 },
  { nombre: "Entity Framework", nivel: 4 },
  { nombre: "Jquery", nivel: 4 },
  { nombre: "Oracle", nivel: 4 },
  { nombre: "MySQL", nivel: 4 },
  { nombre: "SAP AddOns", nivel: 4 },
  { nombre: "Power BI", nivel: 4 },
  { nombre: "Azure Devops", nivel: 4 },
  { nombre: "Data Studio", nivel: 4 },
  { nombre: "NetCore", nivel: 4 },
  { nombre: "NODE JS", nivel: 4 },
  { nombre: "Php", nivel: 4 },
  { nombre: "React", nivel: 3 }
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-accent">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[var(--foreground)]">
          <span>⭐</span> DESTREZAS
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          {habilidades.map((hab, idx) => (
            <li key={idx} className="flex items-center justify-between">
              <span>{hab.nombre}</span>
              <span>{"★".repeat(hab.nivel)}{"☆".repeat(5 - hab.nivel)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
