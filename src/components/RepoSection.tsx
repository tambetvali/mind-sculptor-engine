import { ExternalLink, GitBranch } from "lucide-react";
import { ReactNode } from "react";

interface ConceptItem {
  term: string;
  description: string;
  icon?: React.ReactNode;
}

type ThemeVariant = "neural" | "document" | "meditation";

interface RepoSectionProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: ReactNode;
  repoUrl: string;
  repoName: string;
  concepts: ConceptItem[];
  reversed?: boolean;
  theme?: ThemeVariant;
}

const themeStyles = {
  neural: {
    accent: "from-violet-500/20 to-primary/20",
    border: "border-l-violet-500",
    icon: "bg-violet-500/10 text-violet-600",
    glow: "hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
  },
  document: {
    accent: "from-emerald-500/20 to-primary/20",
    border: "border-l-emerald-500",
    icon: "bg-emerald-500/10 text-emerald-600",
    glow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
  },
  meditation: {
    accent: "from-amber-500/20 to-primary/20",
    border: "border-l-amber-500",
    icon: "bg-amber-500/10 text-amber-600",
    glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
  },
};

const RepoSection = ({
  id,
  number,
  title,
  subtitle,
  description,
  repoUrl,
  repoName,
  concepts,
  reversed = false,
  theme = "neural",
}: RepoSectionProps) => {
  const styles = themeStyles[theme];

  return (
    <section id={id} className="py-24 md:py-32 relative">
      {/* Theme-specific decorative element */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.accent} opacity-30 pointer-events-none`} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-start`}>
          {/* Content */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className={`text-6xl font-serif font-bold bg-gradient-to-br ${styles.accent} bg-clip-text text-transparent`}>
                {number}
              </span>
              <div>
                <p className="text-sm font-medium text-primary uppercase tracking-wider">{subtitle}</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
              </div>
            </div>

            <div className="prose prose-lg text-muted-foreground mb-8 space-y-4">
              {description}
            </div>

            {/* Repository link */}
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-5 py-3 bg-card rounded-xl shadow-soft transition-all group element-glow ${styles.glow}`}
            >
              <GitBranch className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{repoName}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Concepts grid */}
          <div className="flex-1 w-full">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-elevated">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Key Concepts</h3>
              <div className="space-y-4">
                {concepts.map((concept, index) => (
                  <div
                    key={concept.term}
                    className={`p-4 bg-background rounded-xl border-l-4 ${styles.border} border border-border hover:border-primary/30 transition-all ${styles.glow}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg ${styles.icon} flex items-center justify-center text-sm font-bold shrink-0 mt-0.5`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{concept.term}</h4>
                        <p className="text-sm text-muted-foreground">{concept.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepoSection;
