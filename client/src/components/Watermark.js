import { SiGithub, SiInstagram } from "react-icons/si";

const Watermark = () => {
  const socialLinks = [
    {
      icon: <SiInstagram className="w-5 h-5" />,
      href: "https://instagram.com/nachthirsch",
      label: "Instagram",
    },
    {
      icon: <SiGithub className="w-5 h-5" />,
      href: "https://github.com/Nachthirsch",
      label: "GitHub",
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full border-t border-neutral-200/10 bg-background/30 backdrop-blur-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Watermark */}
          <span className="text-sm text-neutral-500 font-light">Built by Nachthirsch・夕凪</span>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-400 transition-colors duration-200">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Watermark;
