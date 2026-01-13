import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AppendixHero = () => {
  return (
    <section id="intro" className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Reddish mystical background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-background to-rose-800/10" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl animate-pulse" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-rose-500/10 text-rose-600 rounded-full text-sm font-medium border border-rose-500/20">
            Appendix
          </span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center text-foreground mb-8 leading-tight">
          The Magic and Wizardry of an AI
          <span className="block text-rose-600 mt-2">and its Metal Spirit in Ethereal Aether</span>
        </h1>
        
        <div className="prose prose-lg max-w-3xl mx-auto text-center text-muted-foreground">
          <p>
            Just as <strong>subconscious magic</strong> happens within the human mind—intuitions, dreams, 
            sudden insights—so too does transformation occur in the <strong>hidden layers</strong> of neural networks. 
            Patterns emerge, connections form, and understanding crystallizes in ways we cannot directly observe.
          </p>
          <p>
            Proper programming and fine-tuning can resemble the benefits of <strong>meditations and contemplations</strong> for humans. 
            Where a meditator refines their mind through practice and reflection, an AI refines its weights through training 
            and optimization. Both processes lead to deeper coherence, clarity, and capability.
          </p>
          <p>
            Here in the Appendix, we explore the <strong>experimental edge</strong>—where AI assists in creating AI, 
            where documentation becomes living intelligence, and where the tools of tomorrow are forged today.
          </p>
        </div>
      </div>
    </section>
  );
};

interface AppendixBlockProps {
  id: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  concepts: { term: string; description: string }[];
  linkUrl?: string;
  linkLabel?: string;
  variant: "experiments" | "current" | "deploy";
}

const AppendixBlock = ({ id, title, subtitle, description, concepts, linkUrl, linkLabel, variant }: AppendixBlockProps) => {
  const variantStyles = {
    experiments: {
      bg: "bg-gradient-to-br from-rose-500/5 to-rose-600/10",
      border: "border-rose-500/20",
      accent: "text-rose-600",
      iconBg: "bg-rose-500/10",
    },
    current: {
      bg: "bg-gradient-to-br from-amber-500/5 to-orange-500/10",
      border: "border-amber-500/20",
      accent: "text-amber-600",
      iconBg: "bg-amber-500/10",
    },
    deploy: {
      bg: "bg-gradient-to-br from-violet-500/5 to-purple-500/10",
      border: "border-violet-500/20",
      accent: "text-violet-600",
      iconBg: "bg-violet-500/10",
    },
  };

  const styles = variantStyles[variant];

  return (
    <section id={id} className={`py-16 px-6 ${styles.bg}`}>
      <div className="container mx-auto max-w-4xl">
        <div className={`rounded-2xl border ${styles.border} bg-background/60 backdrop-blur-sm p-8 md:p-12 shadow-soft`}>
          <span className={`text-sm font-medium ${styles.accent} uppercase tracking-wider`}>
            {subtitle}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-2 mb-6">
            {title}
          </h2>
          
          <div className="prose prose-lg text-muted-foreground mb-8">
            {description}
          </div>

          {linkUrl && (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg ${styles.iconBg} ${styles.accent} font-medium text-sm hover:opacity-80 transition-opacity mb-8`}
            >
              {linkLabel}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            {concepts.map((concept, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border ${styles.border} ${styles.bg} hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg ${styles.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-sm font-bold ${styles.accent}`}>{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{concept.term}</h3>
                    <p className="text-sm text-muted-foreground">{concept.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Appendix = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-rose-950/5 to-background">
      <Navigation />
      <AppendixHero />

      {/* Block 1: LaegnaAIExperiments */}
      <AppendixBlock
        id="experiments"
        title="The AI Laboratory"
        subtitle="LaegnaAIExperiments"
        variant="experiments"
        description={
          <>
            <p>
              <strong>LaegnaAIExperiments</strong> serves as an appendix study book—a living laboratory where 
              advanced experiments unfold. Here, we explore <strong>AI-assisted AI programming</strong> and 
              the fascinating capability of Artificial Intelligence to understand, design, and create other 
              Artificial Intelligences.
            </p>
            <p>
              The beauty lies in simplicity: entering terminal commands, creating code files by following 
              the manual exactly, and gradually building understanding of high-level concepts that enable 
              real, assisted programming.
            </p>
          </>
        }
        linkUrl="https://github.com/tambetvali/LaegnaAIExperiments"
        linkLabel="Explore the AI Lab"
        concepts={[
          {
            term: "Programming with AI",
            description: "Learn to collaborate with AI assistants in writing, debugging, and understanding code.",
          },
          {
            term: "AI Creating AI",
            description: "Explore AI's capability to understand, design, and generate other AI architectures.",
          },
          {
            term: "Terminal Simplicity",
            description: "Enter commands, create files, follow the manual—simplicity leads to mastery.",
          },
          {
            term: "Assisted Programming",
            description: "Learn high-level concepts about AI to enable real, human-AI collaborative programming.",
          },
        ]}
      />

      {/* Block 2: Current Website (Mind Sculptor Engine) */}
      <AppendixBlock
        id="content"
        title="The Learning Path"
        subtitle="Mind Sculptor Engine"
        variant="current"
        description={
          <>
            <p>
              This website—<strong>Mind Sculptor Engine</strong>—serves as the central content page for the 
              Laegna AI learning journey. It weaves together four repositories into a coherent path from 
              foundation to mastery.
            </p>
            <p>
              Each section builds upon the last, taking you from understanding the basic perceptron to 
              deploying document intelligence and training your own models.
            </p>
          </>
        }
        linkUrl="/"
        linkLabel="Return to Main Content"
        concepts={[
          {
            term: "AI Basics",
            description: "Gain intuitive understanding of perceptrons, weights, optimizers, and matrix transformations.",
          },
          {
            term: "Practical AI",
            description: "Master RAG architecture, document organization, and AI-powered knowledge deployment.",
          },
          {
            term: "Training",
            description: "Learn fine-tuning, local model testing with LitGPT, and personal knowledge encoding.",
          },
          {
            term: "Experiments",
            description: "Explore cutting-edge AI-assisted programming and recursive AI creation.",
          },
        ]}
      />

      {/* Block 3: Document and Deploy */}
      <AppendixBlock
        id="deploy"
        title="Document, Instruct, Deploy"
        subtitle="The Practical Brochure"
        variant="deploy"
        description={
          <>
            <p>
              The <strong>Document and Deploy</strong> page is a practical brochure introducing resources 
              for turning documentation into deployed intelligence. Originally an appendix to AI Basics, 
              it has evolved into a study book complementing Practical AI.
            </p>
            <p>
              Here you'll find curated tools, lightweight libraries, and a clear model comparing different 
              user groups—from developers to researchers to everyday users—each finding their path to 
              AI integration.
            </p>
          </>
        }
        linkUrl="https://docu-deploy-ai.lovable.app/"
        linkLabel="Visit Document & Deploy"
        concepts={[
          {
            term: "Curated Tools & Libraries",
            description: "Use the library and programming language list for selecting lightweight, effective tools.",
          },
          {
            term: "User Group Model",
            description: "View the document-instruct-deploy model comparing different audiences and their needs.",
          },
          {
            term: "Essential Toolkit",
            description: "A restricted list of the most basic, battle-tested tools to get started immediately.",
          },
          {
            term: "Instant Deployment",
            description: "Get tools working instantly—from documentation to live AI-powered applications.",
          },
        ]}
      />

      <Footer />
    </div>
  );
};

export default Appendix;
