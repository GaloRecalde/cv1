const idiomas = [
  { nombre: "Español", nivel: 5 },
  { nombre: "Inglés", nivel: 3 }
];

export default function Idiomas() {
  return (
    <section id="idiomas" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span>🌐</span> IDIOMAS
      </h2>
      <ul>
        {idiomas.map((idioma, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span>{idioma.nombre}</span>
            <span>{"★".repeat(idioma.nivel)}{"☆".repeat(5 - idioma.nivel)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
