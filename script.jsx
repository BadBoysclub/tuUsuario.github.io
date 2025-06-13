
function CafecitoClub() {
  const { Menu, Search, MessageSquare } = lucide;

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <div className="flex">
        <aside className="hidden md:flex flex-col w-64 h-screen bg-neutral-900 p-6 border-r border-neutral-800">
          <h1 className="text-xl font-bold mb-10">☕ Cafecito Club</h1>
          <nav className="flex flex-col gap-4">
            <a href="#" className="hover:text-amber-400">Inicio</a>
            <a href="#" className="hover:text-amber-400">Cursos</a>
            <a href="#" className="hover:text-amber-400">Mi Progreso</a>
            <a href="#" className="hover:text-amber-400">Comunidad</a>
          </nav>
          <div className="mt-auto pt-10 text-sm text-gray-500">
            © 2025 Cafecito Global
          </div>
        </aside>

        <main className="flex-1">
          <header className="px-6 py-4 flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center gap-4">
              <button className="md:hidden">
                <Menu className="text-white" />
              </button>
              <h1 className="text-2xl font-bold">Cafecito Club</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input type="text" placeholder="Buscar..." className="bg-neutral-800 text-white rounded-xl px-4 py-2 text-sm focus:outline-none" />
                <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
              <button className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-200">Mi Perfil</button>
            </div>
          </header>

          <section className="text-center py-12 px-4">
            <h2 className="text-4xl font-bold mb-4">Explora cursos gratuitos y empieza a crecer</h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">Accede a contenido práctico, directo y creado por personas reales que quieren ayudarte a avanzar en tu camino. Bienvenido al Club.</p>
          </section>

          <section className="px-6 py-10">
            <h3 className="text-2xl font-semibold mb-6">Cursos Destacados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Diseño con Canva", img: "https://source.unsplash.com/400x300/?design", level: "Básico" },
                { title: "Ventas por WhatsApp", img: "https://source.unsplash.com/400x300/?whatsapp", level: "Intermedio" },
                { title: "Cómo crear tu podcast", img: "https://source.unsplash.com/400x300/?podcast", level: "Básico" },
                { title: "Inversión sin miedo", img: "https://source.unsplash.com/400x300/?finance", level: "Avanzado" },
                { title: "Instagram desde cero", img: "https://source.unsplash.com/400x300/?instagram", level: "Básico" },
                { title: "Crea tu primer curso", img: "https://source.unsplash.com/400x300/?teaching", level: "Intermedio" }
              ].map((curso, i) => (
                <div key={i} className="bg-neutral-900 rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition">
                  <img src={curso.img} alt={curso.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-1">{curso.title}</h4>
                    <span className="text-sm text-gray-400">Nivel: {curso.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center py-16 px-4 bg-gradient-to-t from-neutral-900 to-black">
            <h3 className="text-3xl font-bold mb-4">Únete al Club y empieza hoy</h3>
            <p className="text-gray-400 mb-6">Solo necesitas tu primer cafecito para entrar. Sin mensualidades, sin complicaciones.</p>
            <button className="bg-amber-400 hover:bg-amber-300 text-black px-6 py-3 rounded-xl font-semibold text-lg">Empezar Ahora</button>
          </section>

          <button className="fixed bottom-6 right-6 bg-amber-400 hover:bg-amber-300 text-black p-3 rounded-full shadow-xl">
            <MessageSquare className="w-5 h-5" />
          </button>

          <footer className="px-6 py-6 text-center text-gray-600 text-sm border-t border-neutral-800 mt-10">
            © 2025 Cafecito Global. Todos los derechos reservados.
          </footer>
        </main>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CafecitoClub />);
