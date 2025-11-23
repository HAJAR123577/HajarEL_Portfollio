import { Briefcase, GraduationCap, Calendar, MapPin, ArrowRight, Target, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Développeur Full Stack Senior",
      company: "Tech Company",
      location: "Paris, France",
      period: "2022 - Présent",
      description: "Développement d'applications web complexes avec React, Node.js et architecture microservices. Management d'une équipe de 4 développeurs et mise en place de bonnes pratiques DevOps.",
      achievements: [
        "Augmentation de 40% des performances des applications",
        "Mise en place de la CI/CD réduisant les déploiements de 70%",
        "Formation et mentorat des développeurs juniors"
      ],
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker", "Kubernetes"]
    },
    {
      type: "work",
      title: "Développeur Frontend",
      company: "Digital Agency",
      location: "Lyon, France",
      period: "2020 - 2022",
      description: "Création d'interfaces utilisateur modernes et responsive pour des clients internationaux. Collaboration avec les designers pour optimiser l'expérience utilisateur.",
      achievements: [
        "Développement de 15+ applications web responsives",
        "Amélioration du score Lighthouse de 30% en moyenne",
        "Intégration de design systems cohérents"
      ],
      technologies: ["React", "Vue.js", "Sass", "Webpack", "Jest", "Cypress"]
    },
    {
      type: "education",
      title: "Master en Informatique",
      company: "Université de Paris",
      location: "Paris, France",
      period: "2018 - 2020",
      description: "Spécialisation en développement web et intelligence artificielle. Projet de fin d'études sur l'optimisation des performances des applications React.",
      achievements: [
        "Mention Très Bien (16.5/20)",
        "Projet de recherche publié sur les PWA",
        "Participation aux Google Developer Groups"
      ],
      technologies: ["Machine Learning", "React Native", "Python", "TensorFlow"]
    },
    {
      type: "education",
      title: "Licence en Informatique",
      company: "Université de Lyon",
      location: "Lyon, France",
      period: "2015 - 2018",
      description: "Formation fondamentale en programmation, algorithmique et systèmes d'information. Découverte des méthodologies agiles et du développement web moderne.",
      achievements: [
        "Major de promotion (15.8/20)",
        "Projet lauréat du hackathon universitaire",
        "Stage en développement frontend"
      ],
      technologies: ["Java", "JavaScript", "SQL", "HTML/CSS", "PHP"]
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#001F2D] to-slate-950 relative overflow-hidden">
      {/* Effets d'arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent"></div>
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-[#0096C7]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-[#00B4D8]/10 rounded-full blur-2xl"></div>
      
      {/* Ligne chronologique */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-32 bottom-32 w-0.5 bg-gradient-to-b from-[#0096C7] via-[#00B4D8] to-[#48CAE4] hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0096C7]/10 border border-[#0096C7]/20 rounded-full backdrop-blur-sm mb-6">
            <Target className="h-4 w-4 text-[#0096C7]" />
            <span className="text-sm font-medium text-[#0096C7]">Mon parcours</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Expérience &{" "}
            <span className="bg-gradient-to-r from-[#0096C7] to-[#00B4D8] bg-clip-text text-transparent">
              Formation
            </span>
          </h2>
          
          <p className="text-xl text-[#CAF0F8]/70 max-w-2xl mx-auto font-light">
            Mon parcours professionnel et académique qui a façonné mon expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group relative animate-fade-in-up ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Point sur la timeline */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 w-4 h-4 bg-gradient-to-br from-[#0096C7] to-[#00B4D8] rounded-full border-4 border-[#001F2D] z-20 hidden lg:block ${
                  index % 2 === 0 ? 'lg:left-1/2' : 'lg:left-1/2'
                }`}></div>

                {/* Carte d'expérience */}
                <div className={`relative lg:max-w-2xl ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                }`}>
                  <div className="group relative p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/30 hover:border-[#0096C7]/40 hover:transform hover:scale-105 transition-all duration-500">
                    
                    {/* En-tête */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ${
                        exp.type === "work" 
                          ? "bg-gradient-to-br from-[#0096C7] to-[#00B4D8]" 
                          : "bg-gradient-to-br from-[#0077B6] to-[#0096C7]"
                      }`}>
                        {exp.type === "work" ? (
                          <Briefcase className="h-7 w-7 text-white" />
                        ) : (
                          <GraduationCap className="h-7 w-7 text-white" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3">
                          <h3 className="text-2xl font-bold text-white group-hover:text-[#00B4D8] transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700/50">
                            <Calendar className="h-3 w-3 text-[#0096C7]" />
                            <span className="text-sm text-[#CAF0F8] font-medium">{exp.period}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              exp.type === "work" ? "bg-[#0096C7]" : "bg-[#0077B6]"
                            }`}></div>
                            <p className="text-lg font-semibold text-[#CAF0F8]">{exp.company}</p>
                          </div>
                          <div className="flex items-center gap-1 text-[#CAF0F8]/70">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#CAF0F8]/80 leading-relaxed mb-6 text-lg">
                      {exp.description}
                    </p>

                    {/* Réalisations */}
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                        <Award className="h-5 w-5 text-[#0096C7]" />
                        Principales réalisations
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3 text-[#CAF0F8]/80">
                            <div className="w-1.5 h-1.5 bg-[#0096C7] rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-sm rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0096C7]/0 via-[#0096C7]/3 to-[#0096C7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>

                  {/* Flèche de la timeline */}
                  {index < experiences.length - 1 && (
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0096C7] hidden lg:block ${
                      index % 2 === 0 ? '' : ''
                    }`}></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/30 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Prêt à <span className="text-[#0096C7]">collaborer</span> ensemble ?
            </h3>
            <p className="text-lg text-[#CAF0F8]/70">
              Mon expérience et mes compétences sont à votre service pour votre prochain projet
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0077B6] to-[#0096C7] text-white rounded-2xl font-semibold hover:from-[#0096C7] hover:to-[#00B4D8] hover:shadow-2xl hover:shadow-[#0096C7]/30 transform hover:scale-105 transition-all duration-500"
            >
              Démarrons notre collaboration
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;