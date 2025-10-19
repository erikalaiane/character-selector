import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        
        <main>
          <Hero />

          {/* Seções futuras (comentadas por enquanto) */}
          {/* 
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
          */}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;