namespace Backend.Models;

public record CvProfile(
    string Nome,
    string Iniciais,
    string Cargo,
    string Local,
    string Email,
    string Telefone,
    string Linkedin,
    string ResumoPt,
    string ResumoEn,
    List<Experience> Experiencias,
    List<SkillCategory> Habilidades,
    List<string> SoftSkills,
    List<Education> Formacoes,
    List<string> Diferenciais,
    List<Certification> Certificacoes,
    string Idiomas,
    string Infraestrutura
);

public record Experience(
    string Empresa,
    string Cargo,
    string CargoEn,
    string Periodo,
    string Tipo,
    List<string> AtividadesPt,
    List<string> AtividadesEn,
    List<Projeto>? Projetos = null
);

public record Projeto(
    string Titulo,
    string TituloEn,
    string DescricaoPt,
    string DescricaoEn,
    List<string> Tags
);

public record SkillCategory(string Categoria, string CategoriaEn, List<string> Skills);
public record Education(string Curso, string CursoEn, string Instituicao, string Periodo, string Status, string StatusEn);
public record Certification(string Nome, string Url);
