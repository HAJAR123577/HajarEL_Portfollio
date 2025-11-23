import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
 const icons = [
  { href: "https://github.com/HAJAR123577/", icon: <Github className="h-5 w-5" /> },
  { href: "https://www.linkedin.com/in/hajar-elmhedden", icon: <Linkedin className="h-5 w-5" /> },
  { href: "mailto:hajar.elmhedden2133@gmail.com", icon: <Mail className="h-5 w-5" /> },
];


  return (
    <footer className="bg-card py-6 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © 2025 Portfolio. Tous droits réservés.
        </p>

        <div className="flex gap-5">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith("mailto") ? "_self" : "_blank"}
              rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
