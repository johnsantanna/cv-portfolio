import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { CvProfile } from '../../types/cv.types';
import { Lang } from '../../App';
import './Summary.css';

interface SummaryProps {
  cv: CvProfile;
  lang: Lang;
}

const Summary: React.FC<SummaryProps> = ({ cv, lang }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="content-section fade-in" ref={sectionRef}>
      <h2 className="section-title">
        <FontAwesomeIcon icon={faUserTie} />
        {lang === 'pt' ? 'Resumo Profissional' : 'Professional Summary'}
      </h2>
      <div className="justified-text">
        <p>{lang === 'pt' ? cv.resumoPt : cv.resumoEn}</p>
      </div>
    </section>
  );
};

export default Summary;
