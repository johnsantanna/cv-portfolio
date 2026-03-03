using Backend.Models;

namespace Backend.Services;

public class CvService
{
    public CvProfile GetProfile() => new CvProfile(
        Nome: "Arylton John Sant'Anna Santos",
        Iniciais: "JS",
        Cargo: "Desenvolvedor Fullstack .NET | Java | SQL",
        Local: "Diadema - SP (Grande ABC)",
        Email: "john.santannas@gmail.com",
        Telefone: "(11) 98855-4981",
        Linkedin: "https://linkedin.com/in/john-santanna",
        ResumoPt: "Desenvolvedor Fullstack com 4 anos de experiência em .NET e Java, 7 anos em bancos de dados (SQL Server, MySQL, Oracle) e +10 anos em TI. Expertise em desenvolvimento de APIs REST, modernização de sistemas legados, otimização de performance e integração de sistemas. Experiência com C#, Java (Spring Boot), ASP.NET (WebForms, MVC, Core), Entity Framework, JPA e arquitetura em camadas. Foco em soluções escaláveis, seguras e de alta performance.",
        ResumoEn: "Fullstack Developer with 4 years of experience in .NET and Java, 7 years in databases (SQL Server, MySQL, Oracle), and 10+ years in IT. Expertise in REST API development, legacy system modernization, performance optimization, and system integration. Experienced with C#, Java (Spring Boot), ASP.NET (WebForms, MVC, Core), Entity Framework, JPA, and layered architecture. Focused on scalable, secure, and high-performance solutions.",
        Experiencias: new List<Experience>
        {
            new Experience(
                Empresa: "Hydac",
                Cargo: "Desenvolvedor Full Stack",
                CargoEn: "Full Stack Developer",
                Periodo: "Ago/2025 - Jan/2026",
                Tipo: "PJ",
                AtividadesPt: new List<string>
                {
                    "Implantação de sistema de laudo técnico (WebForms, MVC, JavaScript, jQuery, Bootstrap, MySQL, Git/GitHub)",
                    "Gestão de sistema VBA integrado ao ERP Protheus (Oracle) e MariaDB",
                    "Migração de sistema legado para ASP.NET Core MVC com Entity Framework",
                    "Criação de relatórios SQL com sintaxe Oracle para Totvs Protheus"
                },
                AtividadesEn: new List<string>
                {
                    "Implementation of technical report system (WebForms, MVC, JavaScript, jQuery, Bootstrap, MySQL, Git/GitHub)",
                    "Management of VBA system integrated with ERP Protheus (Oracle) and MariaDB",
                    "Migration of legacy system to ASP.NET Core MVC with Entity Framework",
                    "Creation of SQL reports with Oracle syntax for Totvs Protheus"
                }
            ),
            new Experience(
                Empresa: "Solid Soluções",
                Cargo: "Desenvolvedor Full Stack",
                CargoEn: "Full Stack Developer",
                Periodo: "Fev/2025 - Ago/2025",
                Tipo: "PJ",
                AtividadesPt: new List<string>
                {
                    "Manutenção de sistemas legados (ASP Clássico, WebForms)",
                    "Desenvolvimento com ASP.NET Core MVC, Entity Framework e APIs REST",
                    "Implementação de triggers, uploads de arquivos e automações com JavaScript, jQuery e SQL Server",
                    "Criação de formulários web com Java (Spring Boot)"
                },
                AtividadesEn: new List<string>
                {
                    "Maintenance of legacy systems (Classic ASP, WebForms)",
                    "Development with ASP.NET Core MVC, Entity Framework and REST APIs",
                    "Implementation of triggers, file uploads and automations with JavaScript, jQuery and SQL Server",
                    "Creation of web forms with Java (Spring Boot)"
                }
            ),
            new Experience(
                Empresa: "Tirreno - Moovelub",
                Cargo: "Analista de TI",
                CargoEn: "IT Analyst",
                Periodo: "Jan/2024 - Ago/2024",
                Tipo: "CLT",
                AtividadesPt: new List<string>
                {
                    "Suporte ao Protheus (Totvs) e relatórios em Power BI",
                    "Implantação do GLPI e gestão de chamados"
                },
                AtividadesEn: new List<string>
                {
                    "Protheus (Totvs) support and Power BI reporting",
                    "GLPI implementation and ticket management"
                }
            ),
            new Experience(
                Empresa: "Paula Torres",
                Cargo: "Analista de TI",
                CargoEn: "IT Analyst",
                Periodo: "Ago/2023 - Dez/2023",
                Tipo: "CLT",
                AtividadesPt: new List<string>
                {
                    "Suporte a sistemas e modelagem de dados",
                    "Desenvolvimento de macros VBA para automatização de rotinas"
                },
                AtividadesEn: new List<string>
                {
                    "Systems support and data modeling",
                    "Development of VBA macros for routine automation"
                }
            ),
            new Experience(
                Empresa: "Milaneli Sistemas",
                Cargo: "Desenvolvedor",
                CargoEn: "Developer",
                Periodo: "Ago/2016 - Jan/2023",
                Tipo: "CLT",
                AtividadesPt: new List<string>
                {
                    "Desenvolvimento de scripts SQL Server e automações VBA",
                    "Integração com bancos de dados e sustentações em .NET WebForms (SaaS) em Azure DevOps",
                    "Gestão de equipe e tickets de suporte, implantação de GLPI, Spiceworks, Movidesk"
                },
                AtividadesEn: new List<string>
                {
                    "SQL Server script development and VBA automations",
                    "Database integration and .NET WebForms (SaaS) maintenance in Azure DevOps",
                    "Team management and support tickets, GLPI, Spiceworks, Movidesk implementation"
                }
            ),
            new Experience(
                Empresa: "JTECH SOLUÇÕES",
                Cargo: "Projetos Profissionais",
                CargoEn: "Freelance Projects",
                Periodo: "Jun/2022 - Jan/2026",
                Tipo: "Consultor",
                AtividadesPt: new List<string>(),
                AtividadesEn: new List<string>(),
                Projetos: new List<Projeto>
                {
                    new Projeto(
                        Titulo: "[2024-2025] API REST com Java Spring Boot + JPA",
                        TituloEn: "[2024-2025] REST API with Java Spring Boot + JPA",
                        DescricaoPt: "Substituição de legado VBA/Excel. MySQL + Oracle, autenticação, documentação. Resultado: 70% melhoria de performance.",
                        DescricaoEn: "Replacing legacy VBA/Excel. MySQL + Oracle, authentication, documentation. Result: 70% performance improvement.",
                        Tags: new List<string> { "Java", "Spring Boot", "JPA", "MySQL", "Oracle", "REST API" }
                    ),
                    new Projeto(
                        Titulo: "[2025-2026] Sustentação .NET WebForms e WMS",
                        TituloEn: "[2025-2026] .NET WebForms & WMS Maintenance",
                        DescricaoPt: "Manutenção de sistemas ASP.NET WebForms e WMS (ASP Clássico).",
                        DescricaoEn: "Maintenance of ASP.NET WebForms and WMS (Classic ASP) systems.",
                        Tags: new List<string> { "C#", ".NET", "ASP.NET WebForms", "ASP Clássico", "WMS" }
                    ),
                    new Projeto(
                        Titulo: "[2022-2026] Otimização de Banco de Dados",
                        TituloEn: "[2022-2026] Database Optimization",
                        DescricaoPt: "Otimização de consultas SQL Server, stored procedures e triggers.",
                        DescricaoEn: "SQL Server query optimization, stored procedures and triggers.",
                        Tags: new List<string> { "SQL Server", "Stored Procedures", "Triggers", "Performance" }
                    ),
                    new Projeto(
                        Titulo: "[2022-2026] Desenvolvimento Fullstack",
                        TituloEn: "[2022-2026] Fullstack Development",
                        DescricaoPt: "Java Spring Boot / .NET Core, modelagem de dados e integração multi-banco.",
                        DescricaoEn: "Java Spring Boot / .NET Core, data modeling and multi-database integration.",
                        Tags: new List<string> { "Java", "Spring Boot", ".NET Core", "SQL Server", "Oracle", "MySQL" }
                    )
                }
            )
        },
        Habilidades: new List<SkillCategory>
        {
            new SkillCategory(
                Categoria: "Back-end & Linguagens",
                CategoriaEn: "Back-end & Languages",
                Skills: new List<string> { "C#", ".NET Framework", ".NET 6+", "ASP.NET Core", "Entity Framework", "APIs REST", "Java", "Spring Boot", "Python" }
            ),
            new SkillCategory(
                Categoria: "Front-end",
                CategoriaEn: "Front-end",
                Skills: new List<string> { "HTML", "CSS", "JavaScript", "jQuery", "AJAX", "Bootstrap", "React" }
            ),
            new SkillCategory(
                Categoria: "Banco de Dados",
                CategoriaEn: "Databases",
                Skills: new List<string> { "SQL Server", "Oracle", "MySQL", "MariaDB" }
            ),
            new SkillCategory(
                Categoria: "Outros",
                CategoriaEn: "Others",
                Skills: new List<string> { "VBA +8 anos", "Power BI", "DAX", "Git", "Power Automate" }
            )
        },
        SoftSkills: new List<string> { "Comunicação", "Trabalho sob Pressão", "Melhoria Contínua", "Proatividade" },
        Formacoes: new List<Education>
        {
            new Education(
                Curso: "Análise e Desenvolvimento de Sistemas",
                CursoEn: "Systems Analysis and Development",
                Instituicao: "Anhanguera SBC",
                Periodo: "2023 - 2026",
                Status: "Em andamento",
                StatusEn: "In progress"
            ),
            new Education(
                Curso: "Ciências da Computação",
                CursoEn: "Computer Science",
                Instituicao: "Uninove Vergueiro",
                Periodo: "2013 - 2014",
                Status: "Trancado",
                StatusEn: "Interrupted"
            ),
            new Education(
                Curso: "Técnico em Informática",
                CursoEn: "Technical Degree in IT",
                Instituicao: "SOS Computadores",
                Periodo: "2009 - 2011",
                Status: "Concluído",
                StatusEn: "Completed"
            )
        },
        Diferenciais: new List<string>
        {
            "Modernização de sistemas legados com resultados mensuráveis",
            "Fullstack .NET + Java - versatilidade para diferentes stacks",
            "7 anos SQL - modelagem, otimização e integração multi-banco",
            "Projeto Java/.NET em produção com documentação e handoff estruturado"
        },
        Certificacoes: new List<Certification>
        {
            new Certification(
                Nome: "Portfólio Alura (ASP.NET, C#, Java, Power BI)",
                Url: "https://bit.ly/john-certificados"
            ),
            new Certification(
                Nome: "C# POO Completo – Udemy (Nelio Alves)",
                Url: "https://bit.ly/john-udemy-csharp"
            )
        },
        Idiomas: "Inglês – Leitura e escrita técnica (conversação em desenvolvimento)",
        Infraestrutura: "Home-office completo"
    );
}
