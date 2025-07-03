const experiencia = [
  {
    fecha: "feb 2005 - may 2005",
    puesto: "Supervisor de Impresión",
    empresa: "SONDA DEL ECUADOR, Quito",
    descripcion: [
      "Supervisión de trabajos realizados por personal de Xerox del ecuador, en el proceso de innovación de impresoras en Bancos del Pichincha de Quito, Manabí, Esmeraldas, Macas, Imbabura, Tungurahua."
    ]
  },
  {
    fecha: "abr 2006 - ago 2006",
    puesto: "Digitador/Pruebas de sistema de COMPUSEG",
    empresa: "ECUPRIMAS/COMPUSEG, Quito",
    descripcion: [
      "Jefe de digitadores, informar sobre el estado del trabajo realizado en el área",
      "Supervisar el trabajo de los digitadores."
    ]
  },
  {
    fecha: "ago 2006 - jul 2009",
    puesto: "Programador Junior",
    empresa: "PRACTISIS S.A., Quito",
    descripcion: [
      "Análisis de requerimientos",
      "Desarrollo de software",
      "Implementación de software",
      "Pruebas de control de calidad"
    ]
  },
  {
    fecha: "jul 2009 - mar 2010",
    puesto: "Programador Senior PRODUBANCO",
    empresa: "LOGIC STUDIO PRODUBANCO, Quito",
    descripcion: [
      "Análisis de requerimientos",
      "Desarrollo de software",
      "Implementación de software",
      "Pruebas de control de calidad"
    ]
  },
  {
    fecha: "mar 2010 - nov 2013",
    puesto: "Líder Junior de Sistemas",
    empresa: "BSOFTDEVELOPERS7DGRV, Ecuador/Colombia/Costa Rica",
    descripcion: [
      "Desarrollo de software.",
      "Implantación de software.",
      "Análisis de Requerimientos.",
      "Levantamiento de Información.",
      "Soporte de Software.",
      "Pruebas con usuarios expertos.",
      "Interacción con los usuarios que hacen uso de las herramientas desarrolladas.",
      "Conocimiento de las cooperativas que implementan el sistema.",
      "Interacción con Consultores de gestión de procesos cooperativos."
    ]
  },
  {
    fecha: "nov 2013 - mar 2015",
    puesto: "Program Developer/Arquitectura de Software",
    empresa: "EASYSOFT S.A (BANCO DEL PICHINCHA/BANCO DE GUAYAQUIL/CITIBANK), Quito",
    descripcion: [
      "Investigación, Desarrollo de software, Implementación de software, Pruebas con usuarios expertos, Análisis y desarrollo en el área de arquitectura de Software."
    ]
  },
  {
    fecha: "27 Dic 2022 - 30 sept 2024",
    puesto: "PROGRAM DEVELOPER",
    empresa: "EASYSOFT, Ecuador",
    sector: "TECNOLOGÍA DE LA INFORMACIÓN",
    area: "TECNOLOGÍA DE LA INFORMACIÓN",
    descripcion: [
      "Investigación, Desarrollo de software, Análisis de Requerimientos, Levantamiento de Información, Pruebas con usuarios expertos, Interacción con los usuarios que hacen uso de las herramientas desarrolladas, Seguimiento de proyectos.",
      "Cargo del jefe directo: DIRECTOR DE CUENTA FICOHSA, BANCO PICHINCHA PERU, COOPROGRESO",
      "Jefe directo: FERNANDO MORA",
      "Teléfono del Jefe directo: 982925699",
      "Contacto para referencia: 0982925699",
      "Motivo de salida: Mutuo acuerdo",
      "¿Tuvo personas bajo su cargo?: Sí",
      "Número de personas a cargo: (especificar número si lo deseas)"
    ]
  },
  {
    fecha: "mar 2014 - 27 Octubre 2022",
    puesto: "Coordinador Corporativo de Desarrollo de Software",
    empresa: "COMPAÑÍA ATISCODE STRATEGIC COMMUNICATIONS AND PUBLIC RELATIONS, Quito",
    descripcion: [
      "Administración de Recurso Humano, Gestión de Proyectos, Investigación, Optimización de procesos, Desarrollo de software, Implementación de software, Análisis de Requerimientos, Levantamiento de Información, Soporte de Software, Pruebas con usuarios expertos, Interacción con los usuarios y proveedores del holding empresarial que hacen uso de las herramientas desarrolladas.",
      "CORPIDE CORPORACION PUBLICITARIA INTEGRAL DELTA CIA. LTDA, PUBLIPROMUEVE S.A., ATISCODE S.A., REVISTA COSAS, GO FOR CUSTOMER, DOOBLECLICK, CLUBMILES, RAM, ATISKETCHUM"
    ]
  },
  {
    fecha: "16 DIC 2024 - Actualidad",
    puesto: "Analista de Sistemas de Desarrollo (DISV)",
    empresa: "DISTRIVEHIC S.A.S. (DIST), División: AUTOMOTRIZ (0001), Unidad: TRANSFORMACION E INNOVACION (10000046)",
    area: "ARQUITECTURA EMPRESARIAL Y PROCESOS (30000193, 20000142)",
    ubicacion: "GRANADOS (Dist12)",
    descripcion: [
      "Desarrollo de software.",
      "Implantación de software.",
      "Análisis de Requisitos.",
      "Levantamiento de Información.",
      "Soporte de Software.",
      "Pruebas con usuarios expertos.",
      "Interacción con los usuarios que hacen uso de las herramientas desarrolladas.",
      "Conocimiento de las cooperativas que implementan el sistema.",
      "Interacción con Consultores de gestión de procesos cooperativos."
    ]
  }
];

// Ordenar experiencias por fecha de inicio descendente
function parseFecha(fecha: string): string {
  // Extrae la fecha de inicio (primeros 2-3 palabras)
  const inicio = fecha.split("-")[0].trim();
  // Convierte a formato YYYYMMDD para comparar
  const meses: Record<string, string> = {
    'ene': '01', 'feb': '02', 'mar': '03', 'abr': '04', 'may': '05', 'jun': '06',
    'jul': '07', 'ago': '08', 'sep': '09', 'oct': '10', 'nov': '11', 'dic': '12',
    'Ene': '01', 'Feb': '02', 'Mar': '03', 'Abr': '04', 'May': '05', 'Jun': '06',
    'Jul': '07', 'Ago': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dic': '12',
    'DIC': '12', 'DIC.': '12'
  };
  const parts = inicio.split(" ");
  if (parts.length === 3) {
    // ej: 16 DIC 2024
    const mes = meses[parts[1].toLowerCase().slice(0,3)] || '01';
    return parts[2] + mes + parts[0].padStart(2, '0');
  } else if (parts.length === 2) {
    // ej: feb 2005
    const mes = meses[parts[0].toLowerCase().slice(0,3)] || '01';
    return parts[1] + mes + '01';
  }
  return inicio;
}

const experienciaOrdenada = [...experiencia].sort((a, b) => parseFecha(b.fecha).localeCompare(parseFecha(a.fecha)));

export default function Experiencia() {
  return (
    <section id="experiencia" className="mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-accent">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[var(--foreground)]">
          <span>🗂️</span> EXPERIENCIA LABORAL
        </h2>
        <div className="border-l-2 border-accent pl-6">
          {experienciaOrdenada.map((exp, idx) => (
            <div key={idx} className="mb-6">
              <div className="text-sm text-plomo-medio">{exp.fecha}</div>
              <div className="font-bold text-plomo-oscuro">{exp.puesto}</div>
              <div className="text-sm font-semibold text-plomo-medio">{exp.empresa}</div>
              <ul className="list-disc list-inside ml-4 text-sm">
                {exp.descripcion.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
