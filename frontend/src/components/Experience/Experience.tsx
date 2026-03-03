import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { CvProfile } from '../../types/cv.types';
import { Lang } from '../../App';
import './Experience.css';

interface ExperienceProps {
  cv: CvProfile;
  lang: Lang;
}

const Experience: React.FC<ExperienceProps> = ({ cv, lang }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-in, .timeline-item').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="content-section" ref={sectionRef}>
      <h2 className="section-title fade-in">
        <FontAwesomeIcon icon={faBriefcase} />
        {lang === 'pt' ? 'Experiência Profissional' : 'Work Experience'}
      </h2>
      <div className="timeline">
        {cv.experiencias.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              {exp.projetos ? (
                // Seção de projetos autônomos
                <>
                  <div className="job-header">
                    <h3 className="projects-title">
                      {lang === 'pt' ? 'Projetos Profissionais' : 'Freelance Projects'}
                    </h3>
                    <span className="job-date">{exp.periodo}</span>
                  </div>
                  <span className="company-name consultant-label">
                    {lang === 'pt' ? 'Consultor Independente' : 'Independent Consultant'}
                    {' · '}{exp.empresa}
                  </span>
                  <div className="project-list">
                    {exp.projetos.map((proj, j) => (
                      <div className="project-card" key={j}>
                        <p className="project-title">{lang === 'pt' ? proj.titulo : proj.tituloEn}</p>
                        <p className="project-desc">{lang === 'pt' ? proj.descricaoPt : proj.descricaoEn}</p>
                        <div className="tags-container">
                          {proj.tags.map((tag, k) => (
                            <span className="tag" key={k}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                // Experiência CLT/PJ normal
                <>
                  <div className="job-header">
                    <h3>
                      {lang === 'pt' ? exp.cargo : exp.cargoEn}
                      {exp.tipo === 'PJ' ? (
                        <span className="badge-pj">PJ</span>
                      ) : (
                        <span className="badge-clt">CLT</span>
                      )}
                    </h3>
                    <span className="job-date">{exp.periodo}</span>
                  </div>
                  <span className="company-name">{exp.empresa}</span>
                  <ul className="dense-list">
                    {(lang === 'pt' ? exp.atividadesPt : exp.atividadesEn).map((atividade, j) => (
                      <li key={j}>{atividade}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
