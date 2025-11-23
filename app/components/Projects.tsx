"use client";
import { ExternalLink, Github, ArrowUpRight, Star, Eye } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-[#001F2D] to-slate-950 relative overflow-hidden"
    >
      {/* Effets d'arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-[#0096C7]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-24 h-24 bg-[#00B4D8]/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0096C7]/10 border border-[#0096C7]/20 rounded-full backdrop-blur-sm mb-6">
            <Star className="h-4 w-4 text-[#0096C7]" />
            <span className="text-sm font-medium text-[#0096C7]">
              Mes réalisations
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Projets{" "}
            <span className="bg-gradient-to-r from-[#0096C7] to-[#00B4D8] bg-clip-text text-transparent">
              Récents
            </span>
          </h2>

          <p className="text-xl text-[#CAF0F8]/70 max-w-2xl mx-auto font-light">
            Découvrez une sélection de mes réalisations techniques les plus significatives
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Projet 1 */}
          <div className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/30 hover:border-[#0096C7]/40 overflow-hidden hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-fade-in-up min-h-[550px] flex flex-col">
            {/* Badge featured */}
             {/*<div className="absolute top-4 left-4 z-20">
              <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#0096C7] to-[#00B4D8] rounded-full">
                <Star className="h-3 w-3 text-white" />
               <span className="text-xs font-semibold text-white">Featured</span>
              </div>
            </div>*/}

            {/* Image avec overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src="/Photos/LuxuryTime.png"
                alt="Site vitrine"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/HAJAR123577/luxury-watch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://luxury-watch-nu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0096C7] rounded-xl text-white hover:bg-[#00B4D8] hover:scale-110 transition-all duration-300"
                >
                  <Eye className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00B4D8] transition-colors duration-300">
                  Site vitrine
                </h3>
                <ArrowUpRight className="h-5 w-5 text-[#0096C7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0 mt-1" />
              </div>

              <p className="text-[#CAF0F8]/80 leading-relaxed mb-4 text-sm flex-1">
                LuxuryWatch est un site vitrine présentant une collection de montres de luxe. Le site met en avant le design et l'élégance des produits à travers une interface moderne et responsive.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">
                  Tailwind CSS
                </span>
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href="https://github.com/HAJAR123577/luxury-watch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 text-[#CAF0F8] rounded-xl font-medium hover:bg-slate-700/50 hover:text-white border border-slate-700/50 transition-all duration-300 backdrop-blur-sm group/btn"
                >
                  <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                  Code
                </a>
                <a
                  href="https://luxury-watch-nu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#0096C7] to-[#00B4D8] text-white rounded-xl font-medium hover:from-[#00B4D8] hover:to-[#48CAE4] hover:shadow-lg hover:shadow-[#0096C7]/25 transition-all duration-300 group/btn"
                >
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  Demo
                </a>
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0096C7]/0 via-[#0096C7]/5 to-[#0096C7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>

          {/* Projet 2 */}
          <div className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/30 hover:border-[#0096C7]/40 overflow-hidden hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-fade-in-up min-h-[550px] flex flex-col">
            {/* Image et overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src="/Photos/najiihoun.png"
                alt="Plateforme d'apprentissage"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://najihoun.42web.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0096C7] rounded-xl text-white hover:bg-[#00B4D8] hover:scale-110 transition-all duration-300"
                >
                  <Eye className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00B4D8] transition-colors duration-300">
                  Plateforme d'apprentissage
                </h3>
                <ArrowUpRight className="h-5 w-5 text-[#0096C7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0 mt-1" />
              </div>

              <p className="text-[#CAF0F8]/80 leading-relaxed mb-4 text-sm flex-1">
                Plateforme de partage de cours destinée aux collégiens et lycéens.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">JavaScript</span>
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">React</span>
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">PHP</span>
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">TailwindCSS</span>
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">MySQL</span>
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href="https://najihoun.42web.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#0096C7] to-[#00B4D8] text-white rounded-xl font-medium hover:from-[#00B4D8] hover:to-[#48CAE4] hover:shadow-lg hover:shadow-[#0096C7]/25 transition-all duration-300 group/btn"
                >
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  Demo
                </a>
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0096C7]/0 via-[#0096C7]/5 to-[#0096C7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>

          {/* Projet 3 */}
          <div className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/30 hover:border-[#0096C7]/40 overflow-hidden hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-fade-in-up min-h-[550px] flex flex-col">
            {/* Image et overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src="/Photos/renuapp.png"
                alt="Application de Gestion"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/HAJAR123577/Renu-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="/Photos/RenuApp.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0096C7] rounded-xl text-white hover:bg-[#00B4D8] hover:scale-110 transition-all duration-300"
                >
                  <Eye className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00B4D8] transition-colors duration-300">
                  Plateforme E-Commerce
                </h3>
                <ArrowUpRight className="h-5 w-5 text-[#0096C7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0 mt-1" />
              </div>

              <p className="text-[#CAF0F8]/80 leading-relaxed mb-4 text-sm flex-1">
                ReNuMarket est une plateforme e-commerce permettant de gérer et vendre des produits d’occasion, avec gestion des utilisateurs, produits et commandes.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">Ruby On Rails</span>
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">Tailwind Css</span>
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">Sqlite</span>
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href="https://github.com/HAJAR123577/Renu-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 text-[#CAF0F8] rounded-xl font-medium hover:bg-slate-700/50 hover:text-white border border-slate-700/50 transition-all duration-300 backdrop-blur-sm group/btn"
                >
                  <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                  Code
                </a>
                <a
                  href="/Photos/RenuApp.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#0096C7] to-[#00B4D8] text-white rounded-xl font-medium hover:from-[#00B4D8] hover:to-[#48CAE4] hover:shadow-lg hover:shadow-[#0096C7]/25 transition-all duration-300 group/btn"
                >
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  Demo
                </a>
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0096C7]/0 via-[#0096C7]/5 to-[#0096C7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>

          {/* Projet 4 */}
          <div className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/30 hover:border-[#0096C7]/40 overflow-hidden hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-fade-in-up min-h-[550px] flex flex-col">
            {/* Image et overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src="/Photos/WorldBook.png"
                alt="Portfolio personnel"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/HAJAR123577/Librairy_system_management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00B4D8] transition-colors duration-300">
                 Application de Gestion de bibliothèque
                </h3>
                <ArrowUpRight className="h-5 w-5 text-[#0096C7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0 mt-1" />
              </div>

              <p className="text-[#CAF0F8]/80 leading-relaxed mb-4 text-sm flex-1">
                Gestion des utilisateurs et des emprunts avec suivi des dates d'emprunts. Interface réalisée avec JavaFX pour une expérience fluide.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">JavaFx</span>
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">Java</span>
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">MySQL</span>
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">Vercel</span>
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href="https://github.com/HAJAR123577/Librairy_system_management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 text-[#CAF0F8] rounded-xl font-medium hover:bg-slate-700/50 hover:text-white border border-slate-700/50 transition-all duration-300 backdrop-blur-sm group/btn"
                >
                  <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                  Code
                </a>
                
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0096C7]/0 via-[#0096C7]/5 to-[#0096C7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>

          {/* Projet 5 - Maintenant correctement intégré dans la grille */}
          <div className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/30 hover:border-[#0096C7]/40 overflow-hidden hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-fade-in-up min-h-[550px] flex flex-col">
            {/* Image et overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src="/Photos/myPortfollio.png"
                alt="Portfolio personnel"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0096C7] rounded-xl text-white hover:bg-[#00B4D8] hover:scale-110 transition-all duration-300"
                >
                  <Eye className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00B4D8] transition-colors duration-300">
                  Portfolio personnel
                </h3>
                <ArrowUpRight className="h-5 w-5 text-[#0096C7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0 mt-1" />
              </div>

              <p className="text-[#CAF0F8]/80 leading-relaxed mb-4 text-sm flex-1">
                Mon portfolio personnel présentant mes projets et compétences en développement web, avec une interface moderne et responsive utilisant Next.js et Tailwind CSS.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">Next.js</span>
                
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">Tailwind CSS</span>
                <span className="px-3 py-1 bg-slate-800/50 text-[#CAF0F8] text-xs rounded-lg border border-slate-700/50 backdrop-blur-sm group-hover:border-[#0096C7]/30 transition-all duration-300">Vercel</span>
              </div>

              <div className="flex gap-3 mt-auto">
                
                <a
                  href="https://hajar-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#0096C7] to-[#00B4D8] text-white rounded-xl font-medium hover:from-[#00B4D8] hover:to-[#48CAE4] hover:shadow-lg hover:shadow-[#0096C7]/25 transition-all duration-300 group/btn"
                >
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  Demo
                </a>
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0096C7]/0 via-[#0096C7]/5 to-[#0096C7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;