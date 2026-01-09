import { ExternalLink, GitBranch } from "lucide-react";
import { ReactNode } from "react";

interface ConceptItem {
  term: string;
  description: string;
}

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
}

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
}: RepoSectionProps) => {
  return (
    <section id={id} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-start`}>
          {/* Content */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl font-serif font-bold text-primary/20">{number}</span>
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
              className="inline-flex items-center gap-3 px-5 py-3 bg-card rounded-xl shadow-soft hover:shadow-gold transition-all group element-glow"
            >
              <GitBranch className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{repoName}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Concepts grid */}
          <div className="flex-1 w-full">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-elevated">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Key Concepts</h3>
              <div className="space-y-4">
                {concepts.map((concept, index) => (
                  <div
                    key={concept.term}
                    className="p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="font-semibold text-foreground mb-1">{concept.term}</h4>
                    <p className="text-sm text-muted-foreground">{concept.description}</p>
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
