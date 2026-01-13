import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isAppendix = location.pathname === "/appendix";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Main page links (Foundation through Training)
  const mainLinks = [
    { href: "#basics", label: "AI Basics" },
    { href: "#practical", label: "Practical AI" },
    { href: "#training", label: "Training" },
  ];

  // Appendix page links
  const appendixLinks = [
    { href: "#experiments", label: "Experiments" },
    { href: "#content", label: "Content" },
    { href: "#deploy", label: "Deploy" },
  ];

  const middleLinks = isAppendix ? appendixLinks : mainLinks;

  const handleNavigate = (e: React.MouseEvent, isAppendixLink: boolean) => {
    // If we're navigating to a different page, let the Link handle it
    // and scroll to top
    if ((isAppendixLink && !isAppendix) || (!isAppendixLink && isAppendix)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-lg">L</span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Laegna AI
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {/* Foundation link - always goes to main page */}
            <Link
              to="/#foundation"
              onClick={(e) => handleNavigate(e, false)}
              className={`text-sm font-medium transition-colors ${
                !isAppendix 
                  ? "text-[hsl(var(--nav-foundation))] hover:text-[hsl(var(--nav-foundation))]" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Foundation
            </Link>

            {/* Dynamic middle links based on current page */}
            {middleLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Appendix link - always goes to appendix page */}
            <Link
              to="/appendix#intro"
              onClick={(e) => handleNavigate(e, true)}
              className={`text-sm font-medium transition-colors ${
                isAppendix 
                  ? "text-[hsl(var(--nav-appendix))] hover:text-[hsl(var(--nav-appendix))]" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Appendix
            </Link>
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
