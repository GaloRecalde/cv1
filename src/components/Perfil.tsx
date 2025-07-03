export default function Perfil() {
  return (
    <section id="perfil" className="mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-accent">
        <ul className="space-y-1 text-[var(--foreground)]">
          <li><strong>Nombre:</strong> GALO RECALDE</li>
          <li><strong>Dirección:</strong> Colinas del Norte OE13 CASA N78-165, Quito</li>
          <li><strong>Número de teléfono:</strong> 0984748269</li>
          <li><strong>Correo electrónico:</strong> galorecalde@hotmail.com</li>
          <li><strong>Fecha de nacimiento:</strong> 15-12-1981</li>
          <li><strong>Lugar de nacimiento:</strong> Quito</li>
          <li><strong>Género:</strong> Hombre</li>
          <li><strong>Nacionalidad:</strong> Ecuatoriana</li>
          <li><strong>Estado civil:</strong> Divorciado</li>
          <li><strong>Permiso de conducir:</strong> B</li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/galorecalde-valverde-86945a41/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">galorecalde-valverde</a></li>
        </ul>
      </div>
    </section>
  );
}
