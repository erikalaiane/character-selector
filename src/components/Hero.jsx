import { useState, useEffect } from 'react';
import { Sparkles, Shuffle, Heart, Download, Share2, Info } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { characters, getRandomCharacter } from '../data/characters';

const Hero = () => {
  const { changeAccentColor } = useTheme();
  const [currentCharacter, setCurrentCharacter] = useState(characters[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Atualizar cor do tema baseado no personagem
  useEffect(() => {
    changeAccentColor(
      currentCharacter.colors.primary,
      currentCharacter.colors.secondary
    );
  }, [currentCharacter, changeAccentColor]);

  // Função para selecionar personagem aleatório
  const handleRandomPick = () => {
    setIsAnimating(true);
    
    // Animação de "roleta"
    const interval = setInterval(() => {
      setCurrentCharacter(getRandomCharacter());
    }, 100);

    // Para após 1 segundo e seleciona o final
    setTimeout(() => {
      clearInterval(interval);
      setCurrentCharacter(getRandomCharacter());
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Gradient Animado */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${currentCharacter.colors.primary}20 0%, transparent 50%),
                       radial-gradient(circle at 70% 50%, ${currentCharacter.colors.secondary}20 0%, transparent 50%)`
        }}
      />

      {/* Partículas Decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles
          className="absolute top-20 left-10 animate-float opacity-20"
          size={24}
          style={{ color: currentCharacter.colors.primary }}
        />
        <Sparkles
          className="absolute top-40 right-20 animate-float opacity-20"
          size={32}
          style={{ color: currentCharacter.colors.secondary, animationDelay: '1s' }}
        />
        <Sparkles
          className="absolute bottom-32 left-1/4 animate-float opacity-20"
          size={20}
          style={{ color: currentCharacter.colors.primary, animationDelay: '2s' }}
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,380px] gap-6 lg:gap-8 items-start lg:items-center min-h-[calc(100vh-180px)]">
          
          {/* Lado Esquerdo - Personagem */}
          <div className="relative order-2 lg:order-1">
            <div
              className={`relative group transition-all duration-500 ${
                isAnimating ? 'blur-sm scale-95' : 'blur-0 scale-100'
              }`}
            >
              {/* Card do Personagem */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={currentCharacter.image}
                  alt={currentCharacter.name}
                  className="w-full h-[400px] sm:h-[450px] lg:h-[520px] xl:h-[560px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background: `linear-gradient(to top, ${currentCharacter.colors.primary}80 0%, transparent 50%)`
                  }}
                />

                {/* Badge de Raridade */}
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                  <div
                    className="glass px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold text-xs lg:text-sm backdrop-blur-md"
                    style={{
                      borderColor: currentCharacter.colors.primary,
                      borderWidth: '2px'
                    }}
                  >
                    ✨ {currentCharacter.rarity}
                  </div>
                </div>

                {/* Nome e Classe */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 lg:mb-2 drop-shadow-lg">
                    {currentCharacter.name}
                  </h2>
                  <p className="text-lg lg:text-xl text-white/90 drop-shadow-lg">
                    {currentCharacter.class}
                  </p>
                </div>
              </div>

              {/* Barra de Ferramentas */}
              <div className="flex items-center justify-center gap-2 lg:gap-3 mt-4 lg:mt-6">
                <button
                  className="glass w-11 h-11 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center hover:shadow-lg transition-all hover:scale-110"
                  aria-label="Like"
                >
                  <Heart size={18} className="lg:w-5 lg:h-5" style={{ color: currentCharacter.colors.primary }} />
                </button>
                <button
                  className="glass w-11 h-11 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center hover:shadow-lg transition-all hover:scale-110"
                  aria-label="Download"
                >
                  <Download size={18} className="lg:w-5 lg:h-5" style={{ color: currentCharacter.colors.primary }} />
                </button>
                <button
                  className="glass w-11 h-11 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center hover:shadow-lg transition-all hover:scale-110"
                  aria-label="Share"
                >
                  <Share2 size={18} className="lg:w-5 lg:h-5" style={{ color: currentCharacter.colors.primary }} />
                </button>
                <button
                  className="glass w-11 h-11 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center hover:shadow-lg transition-all hover:scale-110"
                  aria-label="Info"
                >
                  <Info size={18} className="lg:w-5 lg:h-5" style={{ color: currentCharacter.colors.primary }} />
                </button>
              </div>
            </div>
          </div>

          {/* Lado Direito - Painel de Informações */}
          <div className="order-1 lg:order-2 space-y-4 lg:space-y-5">
            
            {/* Status Badge */}
            <div className="glass rounded-2xl p-5 lg:p-6 animate-slideIn">
              <div className="flex items-center gap-3 mb-3 lg:mb-4">
                <div
                  className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: currentCharacter.colors.primary }}
                />
                <span className="text-xs lg:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                  {isAnimating ? 'Selecting...' : 'Ready'}
                </span>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Current Character
              </h3>
            </div>

            {/* Tags */}
            <div className="glass rounded-2xl p-5 lg:p-6 animate-slideIn" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-xs lg:text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentCharacter.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all hover:scale-105"
                    style={{
                      backgroundColor: `${currentCharacter.colors.primary}20`,
                      color: currentCharacter.colors.primary,
                      border: `1px solid ${currentCharacter.colors.primary}40`
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="glass rounded-2xl p-5 lg:p-6 animate-slideIn" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-xs lg:text-sm font-semibold mb-3 lg:mb-4 uppercase tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                Statistics
              </h4>
              <div className="space-y-2.5 lg:space-y-3">
                {Object.entries(currentCharacter.stats).map(([stat, value]) => (
                  <div key={stat}>
                    <div className="flex justify-between text-xs lg:text-sm mb-1">
                      <span className="capitalize" style={{ color: 'var(--text-primary)' }}>
                        {stat}
                      </span>
                      <span className="font-semibold" style={{ color: currentCharacter.colors.primary }}>
                        {value}
                      </span>
                    </div>
                    <div className="h-1.5 lg:h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${value}%`,
                          backgroundColor: currentCharacter.colors.primary
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botão Random */}
            <button
              onClick={handleRandomPick}
              disabled={isAnimating}
              className="w-full glass rounded-2xl p-5 lg:p-6 font-bold text-base lg:text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group animate-slideIn"
              style={{
                animationDelay: '0.3s',
                backgroundColor: `${currentCharacter.colors.primary}20`,
                borderColor: currentCharacter.colors.primary,
                borderWidth: '2px'
              }}
            >
              <div className="flex items-center justify-center gap-3">
                <Shuffle
                  size={22}
                  className={`lg:w-6 lg:h-6 transition-transform ${isAnimating ? 'animate-spin' : 'group-hover:rotate-180'}`}
                  style={{ color: currentCharacter.colors.primary }}
                />
                <span style={{ color: currentCharacter.colors.primary }}>
                  {isAnimating ? 'Rolling...' : 'Random Pick'}
                </span>
              </div>
            </button>

            {/* Contador */}
            <div className="glass rounded-2xl p-5 lg:p-6 text-center animate-slideIn" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: currentCharacter.colors.primary }}>
                15
              </div>
              <div className="text-xs lg:text-sm" style={{ color: 'var(--text-secondary)' }}>
                Characters Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;