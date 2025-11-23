"use client";

import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { Icon: Github, href: "https://github.com/votreusername", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com/in/votreusername", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:contact@votredomaine.com", label: "Email" }
  ];

  return (
    <section className="
      min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-slate-950 via-[#001F2D] to-slate-950 
      pt-20 relative overflow-hidden
    ">
      
      {/* Glow background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 bg-[#0096C7]/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 right-16 w-40 h-40 bg-[#48CAE4]/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-12 animate-fadeInSlow">

          {/* New Badge */}
          <div className="
            inline-flex items-center gap-2 px-4 py-2 
            bg-white/5 border border-[#0096C7]/30 rounded-full 
            backdrop-blur-xl shadow-[0_0_20px_rgba(0,150,199,0.2)]
            animate-slideDown
          ">
            <Sparkles className="h-4 w-4 text-[#00B4D8]" />
            <span className="text-sm font-medium text-[#ADE8F4]">
              Toujours curieuse, toujours en progrès
            </span>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="
              text-4xl md:text-6xl lg:text-7xl font-extrabold 
              leading-tight text-white tracking-tight animate-slideUp
            ">
              <span className="text-[#00B4D8] text-3xl md:text-4xl block mb-2 opacity-80">
                It's me
              </span>

              {/* Glow name */}
              <span className="
                relative inline-block px-4
              ">
                <span className="
                  absolute inset-0 blur-[45px] bg-[#00B4D8]/20 rounded-full
                "></span>

                <span className="
                  relative z-10 drop-shadow-[0_0_25px_rgba(0,180,216,0.35)]
                ">
                  ELMHEDDEN HAJAR
                </span>
              </span>

              {/* typing effect */}
              <span className="
                block mt-4 bg-gradient-to-r from-[#0096C7] via-[#00B4D8] to-[#48CAE4]
                bg-clip-text text-transparent 
                font-light text-2xl md:text-4xl
                animate-typing overflow-hidden whitespace-nowrap border-r-4 border-[#48CAE4]
                mr-auto ml-auto w-fit
              ">
                Full Stack Developer
              </span>
            </h1>

            {/* Subtext highlight */}
            <p className="
              text-lg md:text-xl text-[#CAF0F8]/90 font-light leading-relaxed
              animate-fadeIn
            ">
              Je code avec précision, exigence et amour du travail bien fait.
            </p>
          </div>

          {/* ---- 🔥 NEW: Tech Stack Section ---- */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fadeInSlow">
            {[
              "Java",
              "Spring Boot",
              "React.js",
              "Tailwind CSS",
              "PostgreSql",
              "Git",
              "Docker",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-4 py-2 rounded-full
                  text-sm md:text-base font-medium
                  text-[#CAF0F8] border border-[#00B4D8]/40 
                  bg-white/5 backdrop-blur-xl
                  shadow-[0_0_12px_rgba(0,150,199,0.2)]
                  hover:shadow-[0_0_20px_rgba(0,180,216,0.35)]
                  hover:scale-110 hover:-translate-y-1
                  transition-all duration-500
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4 mb-16">

            {/* Primary button */}
            <a
              href="#projects"
              className="
                group relative inline-flex items-center justify-center
                px-10 py-3.5 rounded-full text-lg font-semibold
                text-white bg-gradient-to-r from-[#0077B6] via-[#0096C7] to-[#00B4D8]
                shadow-[0_0_25px_rgba(0,150,199,0.3)]
                hover:shadow-[0_0_35px_rgba(72,202,228,0.5)]
                hover:scale-105 hover:-translate-y-1
                transition-all duration-500 overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000"></div>

              <span className="relative z-10 flex items-center ">
                Découvrir mes projets
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </a>

            {/* Secondary button */}
            <a
              href="#contact"
              className="
                group relative inline-flex items-center justify-center
                px-10 py-3.5 rounded-full text-lg font-semibold
                border border-[#00B4D8]/60 text-[#CAF0F8]
                hover:bg-[#0096C7]/10 hover:text-white
                hover:scale-105 hover:-translate-y-1 transition-all duration-500
                backdrop-blur-md shadow-[0_0_15px_rgba(0,150,199,0.1)]
              "
            >
              <span className="relative z-10">Contactez-moi</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0096C7]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
            </a>
          </div>

          {/* Social links */}
          

        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInSlow { 0% { opacity: 0; } 100% { opacity: 1; } }
        .animate-fadeInSlow { animation: fadeInSlow 2s ease forwards; }

        @keyframes slideUp { 
          0% { opacity: 0; transform: translateY(30px); } 
          100% { opacity: 1; transform: translateY(0); } 
        }
        .animate-slideUp { animation: slideUp 1.2s ease forwards; }

        @keyframes slideDown { 
          0% { opacity: 0; transform: translateY(-20px); } 
          100% { opacity: 1; transform: translateY(0); } 
        }
        .animate-slideDown { animation: slideDown 1s ease forwards; }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          50% { border-color: transparent; }
        }
        .animate-typing {
          animation: typing 3s steps(30, end), blink .75s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
