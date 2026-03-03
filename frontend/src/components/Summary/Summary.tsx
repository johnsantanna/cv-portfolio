import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faEye } from '@fortawesome/free-solid-svg-icons';
import { CvProfile } from '../../types/cv.types';
import { Lang } from '../../App';
import { useVisitorCounter } from '../../hooks/useVisitorCounter';
import './Summary.css';

interface SummaryProps {
  cv: CvProfile;
  lang: Lang;
}

const Summary: React.FC<SummaryProps> = ({ cv, lang }) => {
  const { count } = useVisitorCounter();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="content-section fade-in" ref={sectionRef}>
      <h2 className="section-title">
        <FontAwesomeIcon icon={faUserTie} />
        {lang === 'pt' ? 'Resumo Profissional' : 'Professional Summary'}
        <div className="visitor-counter" title="Total de visualizações">
          <FontAwesomeIcon icon={faEye} />
          <span>{count}</span>
        </div>
      </h2>
      <div className="justified-text">
        <p>{lang === 'pt' ? cv.resumoPt : cv.resumoEn}</p>
      </div>
    </section>
  );
};

export default Summary;
