import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapPin, faGlobe, faMoon, faSun, faFilePdf, faEnvelope, faPhone,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { CvProfile } from '../../types/cv.types';
import { Lang } from '../../App';
import './Sidebar.css';

interface SidebarProps {
  cv: CvProfile;
  lang: Lang;
  darkMode: boolean;
  onToggleLang: () => void;
  onToggleDarkMode: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ cv, lang, darkMode, onToggleLang, onToggleDarkMode }) => {
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    sidebarRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getStatusClass = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('conclu') || s.includes('complet')) return 'status-concluido';
    if (s.includes('trancado') || s.includes('interrupt')) return 'status-trancado';
    return 'status-andamento';
  };

  return (
    <aside className="sidebar" ref={sidebarRef}>
      <div className="profile-header fade-in">
        <div className="profile-avatar">
          <img
            src={`${import.meta.env.BASE_URL}assets/profile.png`}
            alt={cv.nome}
            onError={(e) => {
              const el = e.currentTarget;
              el.style.display = 'none';
              el.nextElementSibling?.removeAttribute('style');
            }}
          />
          <span style={{ display: 'none' }}>{cv.iniciais}</span>
        </div>
        <h1 className="name">{cv.nome}</h1>
        <p className="role">{cv.cargo}</p>
        <div className="location">
          <FontAwesomeIcon icon={faMapPin} /> {cv.local}
        </div>
      </div>

      <div className="sidebar-controls no-print fade-in">
        <button onClick={onToggleLang} className="btn-sidebar">
          <FontAwesomeIcon icon={faGlobe} />
          {lang === 'pt' ? ' English Version' : ' Mudar para Português'}
        </button>
        <button onClick={onToggleDarkMode} className="btn-sidebar btn-darkmode">
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          {darkMode ? ' Modo Claro' : ' Modo Escuro'}
        </button>
        <div className="download-container">
          <span className="btn-download disabled" title="Em desenvolvimento">
            <FontAwesomeIcon icon={faFilePdf} /> Download CV (PDF)
          </span>
          <span className="tooltip-dev">Em breve</span>
        </div>
      </div>

      <div className="separator no-print"></div>

      <div className="sidebar-section fade-in">
        <h3>{lang === 'pt' ? 'Contato' : 'Contact'}</h3>
        <ul className="contact-list">
          <li>
            <a href={`mailto:${cv.email}`}>
              <FontAwesomeIcon icon={faEnvelope} /> {cv.email}
            </a>
          </li>
          <li>
            <a href={`tel:${cv.telefone.replace(/\D/g, '')}`}>
              <FontAwesomeIcon icon={faPhone} /> {cv.telefone}
            </a>
          </li>
          <li>
            <a href={cv.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> linkedin
            </a>
          </li>
        </ul>
      </div>

      {cv.habilidades.map((cat, i) => (
        <div className="sidebar-section fade-in" key={i}>
          <h3>{lang === 'pt' ? cat.categoria : cat.categoriaEn}</h3>
          <div className="tags-container">
            {cat.skills.map((skill, j) => (
              <span className="tag" key={j}>{skill}</span>
            ))}
          </div>
        </div>
      ))}

      <div className="sidebar-section fade-in">
        <h3>{lang === 'pt' ? 'Soft Skills' : 'Soft Skills'}</h3>
        <div className="tags-container">
          {cv.softSkills.map((skill, i) => (
            <span className="tag" key={i}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="sidebar-section fade-in">
        <h3>{lang === 'pt' ? 'Certificações' : 'Certifications'}</h3>
        <ul className="contact-list">
          {cv.certificacoes.map((cert, i) => (
            <li key={i}>
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faChevronRight} /> {cert.nome}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section fade-in">
        <h3>{lang === 'pt' ? 'Educação' : 'Education'}</h3>
        {cv.formacoes.map((edu, i) => (
          <div className="education-item" key={i}>
            <span className="degree">{lang === 'pt' ? edu.curso : edu.cursoEn}</span>
            <span className="school">{edu.instituicao}</span>
            <span className="year">{edu.periodo}</span>
            <span className={`status-badge ${getStatusClass(edu.status)}`}>
              {lang === 'pt' ? edu.status : edu.statusEn}
            </span>
          </div>
        ))}
      </div>

      <div className="sidebar-section fade-in">
        <h3>{lang === 'pt' ? 'Diferenciais' : 'Highlights'}</h3>
        <ul className="contact-list">
          {cv.diferenciais.map((d, i) => (
            <li key={i}>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#e2e8f0', fontSize: '0.82rem' }}>
                <FontAwesomeIcon icon={faChevronRight} style={{ marginTop: '3px', flexShrink: 0, color: '#4f8ef7' }} />
                {d}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section fade-in">
        <h3>{lang === 'pt' ? 'Idiomas' : 'Languages'}</h3>
        <p style={{ fontSize: '0.82rem', color: '#a0aec0' }}>{cv.idiomas}</p>
      </div>

      <div className="sidebar-section fade-in">
        <h3>{lang === 'pt' ? 'Infraestrutura' : 'Infrastructure'}</h3>
        <p style={{ fontSize: '0.82rem', color: '#a0aec0' }}>{cv.infraestrutura}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
