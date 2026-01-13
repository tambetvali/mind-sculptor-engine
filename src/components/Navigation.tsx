import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#foundation", label: "Foundation", colorClass: "text-[hsl(var(--nav-foundation))] hover:text-[hsl(var(--nav-foundation))]" },
    { href: "#basics", label: "AI Basics", colorClass: "" },
    { href: "#practical", label: "Practical AI", colorClass: "" },
    { href: "#training", label: "Training", colorClass: "" },
    { href: "#appendix", label: "Appendix", colorClass: "text-[hsl(var(--nav-appendix))] hover:text-[hsl(var(--nav-appendix))]" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-lg">L</span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Laegna AI
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.colorClass || "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://spireason.neocities.org/Programming/chatdoc"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Documentation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
