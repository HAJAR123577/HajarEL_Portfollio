import { Target } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-slate-950 to-[#001F2D] overflow-hidden"
    >
      {/* Effets décoratifs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent"></div>
      <div className="absolute top-1/3 right-10 w-28 h-28 bg-[#0096C7]/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-[#00B4D8]/10 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Titre et paragraphe */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#0096C7]/10 border border-[#0096C7]/20 rounded-full backdrop-blur-sm mb-6 animate-slide-down">
            <Target className="h-5 w-5 text-[#0096C7]" />
            <span className="text-sm font-medium text-[#0096C7]">À propos de moi</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Une future{" "}
            <span className="bg-gradient-to-r from-[#0096C7] to-[#00B4D8] bg-clip-text text-transparent">
              ingénieure passionnée
            </span>{" "}
            par le développement
          </h2>

          <p className="text-xl md:text-lg text-[#CAF0F8]/70 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            Actuellement élève ingénieure en informatique, passionnée par les technologies web et mobiles,
            je suis à la recherche d’un <strong>stage PFE</strong> où je pourrai mettre en pratique mes compétences,
            développer des solutions avec rigueur, créativité et sens du détail. Sérieuse, motivée et capable de m’adapter 
            rapidement aux nouveaux environnements de travail, je m’efforce de créer des applications performantes, intuitives 
            et bien structurées.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-16 animate-fade-in-up delay-400">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjQxN3wwfDF8c2VhcmNofDF8fGRldmVsb3BtZW50fGVufDB8fHx8MTY5NzE4ODI2Nw&ixlib=rb-4.0.3&q=80&w=400"
            alt="Hajar"
            className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover shadow-2xl border border-[#0096C7]/30 transition-transform duration-700 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,180,216,0.4)]"
          />
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-fade-in-up delay-600">
          {[
            { number: "4", label: "Années d'études en ingénierie" },
            { number: "6+", label: "Projets académiques" },
            { number: "2", label: "Stages réalisés" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-900/30 backdrop-blur-md rounded-2xl border border-slate-700/30 hover:border-[#0096C7]/50 hover:bg-slate-900/50 transition-all duration-500 group"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0096C7] to-[#00B4D8] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                {stat.number}
              </div>
              <div className="text-[#CAF0F8]/70 text-sm md:text-base font-medium mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 1s ease forwards; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-400 { animation-delay: 0.4s; }
        .animate-fade-in-up.delay-600 { animation-delay: 0.6s; }

        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slideDown 1s ease forwards; }

        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        .animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default About;
