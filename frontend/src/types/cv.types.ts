export interface CvProfile {
  nome: string;
  iniciais: string;
  cargo: string;
  local: string;
  email: string;
  telefone: string;
  linkedin: string;
  resumoPt: string;
  resumoEn: string;
  experiencias: Experience[];
  habilidades: SkillCategory[];
  softSkills: string[];
  formacoes: Education[];
  diferenciais: string[];
  certificacoes: Certification[];
  idiomas: string;
  infraestrutura: string;
}

export interface Experience {
  empresa: string;
  cargo: string;
  cargoEn: string;
  periodo: string;
  tipo: string;
  atividadesPt: string[];
  atividadesEn: string[];
  projetos?: Projeto[];
}

export interface Projeto {
  titulo: string;
  tituloEn: string;
  descricaoPt: string;
  descricaoEn: string;
  tags: string[];
}

export interface SkillCategory {
  categoria: string;
  categoriaEn: string;
  skills: string[];
}

export interface Education {
  curso: string;
  cursoEn: string;
  instituicao: string;
  periodo: string;
  status: string;
  statusEn: string;
}

export interface Certification {
  nome: string;
  url: string;
}
