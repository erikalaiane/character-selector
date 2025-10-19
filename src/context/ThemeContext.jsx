import { createContext, useContext, useState, useEffect } from 'react';

// Criar o Context
const ThemeContext = createContext();

// Hook customizado para usar o tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }
  return context;
};

// Provider do Tema
export const ThemeProvider = ({ children }) => {
  // Estado do tema (light ou dark)
  const [theme, setTheme] = useState(() => {
    // Verifica se tem tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    // Se não tiver, usa a preferência do sistema
    if (!savedTheme) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return savedTheme;
  });

  // Estado da cor de accent (dinâmica baseada no personagem)
  const [accentColor, setAccentColor] = useState({
    primary: '#3B82F6',
    secondary: '#2563EB',
    rgb: '59, 130, 246'
  });

  // Aplicar o tema ao documento
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Aplicar a cor de accent
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent-primary', accentColor.primary);
    root.style.setProperty('--accent-secondary', accentColor.secondary);
    root.style.setProperty('--accent-rgb', accentColor.rgb);
  }, [accentColor]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Função para mudar a cor de accent
  const changeAccentColor = (primary, secondary) => {
    // Extrair RGB da cor primária
    const hex = primary.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    setAccentColor({
      primary,
      secondary,
      rgb: `${r}, ${g}, ${b}`
    });
  };

  const value = {
    theme,
    toggleTheme,
    accentColor,
    changeAccentColor,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};