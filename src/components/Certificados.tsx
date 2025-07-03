const certificados = [
  { anio: "2021", nombre: "Telefónica-EC Gestión de Proyectos con Metodologías Ágiles y Enfoques Lean - MINTEL Ed 1", entidad: "Telefónica" },
  { anio: "2021", nombre: "Mauricio Benoist-Coaching Expansivo", entidad: "" },
  { anio: "2020", nombre: "SAGO Consultores-LIDER IMPLEMENTADOR DE SEGURIDAD INFORMATICA", entidad: "" },
  { anio: "2020", nombre: "AULAFACIL-PEDAGOGIA", entidad: "" },
  { anio: "2020", nombre: "AULAFACIL-COMO ENSEÑAR", entidad: "" },
  { anio: "2020", nombre: "CERTIPROF-LIFELONG LEARNING", entidad: "" },
  { anio: "2020", nombre: "AULAFACIL-REUNIONES EFECTIVAS", entidad: "" },
  { anio: "2020", nombre: "CERTIPROF-Scrum Foundation Professional Certificate", entidad: "" },
  { anio: "2022", nombre: "MAURICIO BENOIST-COACH PNL", entidad: "" },
  { anio: "2020", nombre: "AULAFACIL-INTRODUCCION AL COACHING", entidad: "" },
  { anio: "2020", nombre: "AULAFACIL-LA ANSIEDAD", entidad: "" },
  { anio: "2020", nombre: "AULAFACIL-LA AUTOESTIMA", entidad: "" },
  { anio: "2020", nombre: "CERTIPROF-Scrum Master Professional Certificate", entidad: "" },
  { anio: "2020", nombre: "AULAFACIL-TRABAJO EN EQUIPO", entidad: "" },
  { anio: "2019", nombre: "MILLENIUM CIA LTDA-CONFIAR Y TRASCENDER", entidad: "" },
  { anio: "2019", nombre: "COLECTIVOS PADRINOS DEL ESPACIO PUBLICO-1ER ENCUENTRO EN LA PLAZA", entidad: "" },
  { anio: "2018", nombre: "BUSINESS IT-DEVOPS", entidad: "" },
  { anio: "2017", nombre: "SOFT SERVICE PLUS-EXCEL INTERMEDIO", entidad: "" },
  { anio: "2016", nombre: "CEC-EPN-BUSINESS INTELLIGENCE CON PENTAHO - MODULO 02", entidad: "" },
  { anio: "2016", nombre: "CEC-EPN-DATA WAREHOUSING BASICO CON PENTAHO MODULO 01", entidad: "" },
  { anio: "2016", nombre: "SOFT SERVICE PLUS-ADMINISTRACION DATALIFE WEB", entidad: "" },
  { anio: "2003", nombre: "UNIVERSIDAD SANTIAGO DE CALI- DESCUBRE TU GRANDEZA", entidad: "" },
  { anio: "2003", nombre: "UNIVERSIDAD SANTIAGO DE CALI- SISTEMAS DISTRIBUIDOS", entidad: "" },
  { anio: "2019", nombre: "DEVOPS LATAM- DEVOPS FUNDAMENTALS", entidad: "" }
];

export default function Certificados() {
  return (
    <section id="certificados" className="mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-accent">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[var(--foreground)]">
          <span>📄</span> CERTIFICADOS
        </h2>
        <div className="border-l-2 border-accent pl-6">
          {certificados.map((cert, idx) => (
            <div key={idx} className="mb-4">
              <div className="text-sm text-plomo-medio">{cert.anio}</div>
              <div className="font-bold text-plomo-oscuro">{cert.nombre}</div>
              {cert.entidad && <div className="text-xs text-plomo-medio">{cert.entidad}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
