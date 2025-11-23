"use client";
import { Mail, MapPin, Phone, Linkedin, Github, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hajar.elmhedden2133@gmail.com",
      href: "mailto:hajar.elmhedden2133@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212 6 84 72 54 87",
      href: "tel:+212684725487",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mobile",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hajar-elmhedden",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/HAJAR123577/",
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "/",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[#001F2D] to-slate-950 relative overflow-hidden"
    >
      {/* Arrière-plan décoratif */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-[#0096C7]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-24 h-24 bg-[#00B4D8]/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Titre de la section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0096C7]/10 border border-[#0096C7]/20 rounded-full backdrop-blur-sm mb-6">
            <Mail className="h-4 w-4 text-[#0096C7]" />
            <span className="text-sm font-medium text-[#0096C7]">Contact</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Travaillons{" "}
            <span className="bg-gradient-to-r from-[#0096C7] to-[#00B4D8] bg-clip-text text-transparent">
              Ensemble
            </span>
          </h2>

          <p className="text-xl text-[#CAF0F8]/70 max-w-2xl mx-auto font-light">
            Vous pouvez me contacter via email, téléphone ou mes réseaux sociaux.
          </p>
        </div>

        {/* Cartes d'information */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 hover:border-[#0096C7]/40 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-[#0096C7]/10 p-4 rounded-full border border-[#0096C7]/20">
                    <Icon className="h-6 w-6 text-[#0096C7]" />
                  </div>
                  <p className="text-sm text-[#CAF0F8]/70">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-medium text-white hover:text-[#00B4D8] transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium text-white">{info.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Réseaux sociaux */}
        <div className="mt-12 flex justify-center gap-8">
          {socialLinks.map((social, index) => {
            const SocialIcon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-[#0096C7] hover:text-[#00B4D8] hover:bg-[#0096C7]/20 rounded-full transition-all duration-300 transform hover:scale-110"
                title={social.label}
              >
                <SocialIcon className="h-8 w-8" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
