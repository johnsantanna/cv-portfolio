import { useState, useEffect, useCallback } from 'react';
import './App.css';
import { useCv } from './hooks/useCv';
import Sidebar from './components/Sidebar/Sidebar';
import Summary from './components/Summary/Summary';
import Experience from './components/Experience/Experience';
import FloatingCode from './components/FloatingCode/FloatingCode';

export type Lang = 'pt' | 'en';

function App() {
  const [lang, setLang] = useState<Lang>('pt');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const { cv, loading, error } = useCv();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'pt' ? 'en' : 'pt');
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <p>Carregando...</p>
      </div>
    );
  }

  if (error || !cv) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <p>{error ?? 'Erro ao carregar dados'}</p>
      </div>
    );
  }

  return (
    <>
      <FloatingCode />
      <div className="cv-page">
        <div className="cv-container">
          <Sidebar
            cv={cv}
            lang={lang}
            darkMode={darkMode}
            onToggleLang={toggleLang}
            onToggleDarkMode={toggleDarkMode}
          />
          <main className="main-content">
            <Summary cv={cv} lang={lang} />
            <Experience cv={cv} lang={lang} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
