import { Code2, Database, Layout, Server, CheckCircle, TestTube, Zap, Target } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Layout,
      title: "Frontend",
      skills: [
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 80 },
        
        { name: "HTML / CSS", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 80},
      ],
      gradient: "from-[#0096C7] to-[#00B4D8]",
      description: "Développement d'interfaces modernes et dynamiques"
    },

    {
      icon: Server,
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 75 },
        { name: "Node.js / Express", level: 80 },
        { name: "Java / JEE", level: 80 },
        { name: "PHP", level: 75 },
        { name: "Ruby on Rails", level: 70 },
      ],
      gradient: "from-[#0077B6] to-[#0096C7]",
      description: "API robustes et architectures backend performantes"
    },

    {
      icon: Database,
      title: "Bases de données",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "SQL Server", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Oracle", level: 80 },
      ],
      gradient: "from-[#00B4D8] to-[#48CAE4]",
      description: "Modélisation, optimisation, SQL & NoSQL"
    },

    {
      icon: Code2,
      title: "Langages",
      skills: [
        { name: "JavaScript", level: 80 },
        { name: "Java", level: 80 },
        { name: "Python", level: 80 },
        { name: "C / C++", level: 85 },
        { name: "SQL", level: 85 },
      ],
      gradient: "from-[#0096C7] to-[#00B4D8]",
      description: "Maîtrise des langages de programmation"
    },

    {
      icon: TestTube,
      title: "DevOps & Outils",
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "Jenkins", level: 70 },
        { name: "CI / CD", level: 80 },
      ],
      gradient: "from-[#0077B6] to-[#0096C7]",
      description: "Déploiement, intégration et automatisation"
    },
{
  icon: CheckCircle, // tu peux changer l’icône si tu veux
  title: "Testing & Qualité Logicielle",
  skills: [
    { name: "PyTest", level: 85 },
    { name: "Selenium", level: 80 },
    { name: "Jest", level: 78 },
    { name: "JUnit", level: 82 }
    
  ],
  gradient: "from-[#6A00F4] to-[#B5179E]",
  description: "Tests automatisés, tests unitaires, fonctionnels et end-to-end"
},

  ];

  const expertiseAreas = [
    { name: "Développement Full Stack", level: 90 },
    { name: "Testing", level: 70 },
    { name: "UI / UX Design", level: 75 },
    { name: "DevOps & Déploiement", level: 80 },
    { name: "Méthodologie Agile & SCRUM", level: 92 },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-950 to-[#001F2D] relative overflow-hidden">
      {/* En-tête */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0096C7]/10 border border-[#0096C7]/20 rounded-full backdrop-blur-sm mb-6">
            <Zap className="h-4 w-4 text-[#0096C7]" />
            <span className="text-sm font-medium text-[#0096C7]">Expertise technique</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Mes{" "}
            <span className="bg-gradient-to-r from-[#0096C7] to-[#00B4D8] bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>

          <p className="text-xl text-[#CAF0F8]/70 max-w-2xl mx-auto font-light">
            Compétences techniques et outils que je maîtrise dans le développement web, mobile et logiciel.
          </p>
        </div>

        {/* Domaines d'expertise */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Target className="h-6 w-6 text-[#0096C7]" />
                Domaines d'expertise
              </h3>
              <p className="text-[#CAF0F8]/80 leading-relaxed">
                Expertise couvrant le cycle complet du développement logiciel : conception, développement, tests et déploiement.
              </p>
            </div>

            <div className="space-y-6">
              {expertiseAreas.map((area, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#CAF0F8] font-medium">{area.name}</span>
                    <span className="text-[#0096C7] font-bold text-sm">{area.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800/50 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#0096C7] to-[#00B4D8] h-2 rounded-full" style={{ width: `${area.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grille des compétences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl border border-slate-700/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-[#CAF0F8]/60 text-sm">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[#CAF0F8] text-sm">{skill.name}</span>
                        <span className="text-[#0096C7] text-xs font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800/30 rounded-full h-1.5">
                        <div 
                          className="h-1.5 rounded-full"
                          style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, #0096C7, #00B4D8)` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
