import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        
        {/* Conteúdo Temporário - só pra testar */}
        <main className="pt-20">
          <section id="home" className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-4xl mx-auto animate-fadeIn">
              <h1 className="text-gradient mb-6">
                Character Selector
              </h1>
              <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                Sistema de tema funcionando! ✨
              </p>
              <div className="glass rounded-2xl p-8 max-w-md mx-auto">
                <h3 className="mb-4" style={{ color: 'var(--text-primary)' }}>
                  Status do Projeto:
                </h3>
                <ul className="space-y-2 text-left" style={{ color: 'var(--text-secondary)' }}>
                  <li>✅ React + Vite instalado</li>
                  <li>✅ Tailwind v3 configurado</li>
                  <li>✅ Sistema de tema (Light/Dark)</li>
                  <li>✅ Header responsivo</li>
                  <li>✅ Fontes Google (Inter + Space Grotesk)</li>
                  <li>⏳ Hero Section (próximo passo)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="gallery" className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
              <h2 className="text-gradient mb-4">Gallery Section</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Em breve...</p>
            </div>
          </section>

          <section id="classes" className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
              <h2 className="text-gradient mb-4">Classes Section</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Em breve...</p>
            </div>
          </section>

          <section id="about" className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
              <h2 className="text-gradient mb-4">About Section</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Em breve...</p>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;