import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RepoSection from "@/components/RepoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Repository 1: AI Basics */}
      <RepoSection
        id="basics"
        number="01"
        title="The Brain & Knowledge"
        subtitle="AI Fundamentals"
        description={
          <>
            <p>
              At its core, AI begins with understanding a <strong>function with structure and free variables</strong>. 
              These variables are resolved through optimization—the optimizer gradually reaches solutions by responding 
              to errors in various tries.
            </p>
            <p>
              In <strong>Machine Learning</strong>, we resolve a specific function form. In <strong>Deep Learning</strong>, 
              we work with a free-form matrix containing all possible interconnections of variable positions. This evolution 
              creates meaningful content within the given architectural form.
            </p>
            <p>
              In 3D graphics, behind the scenes, matrices perform complex transformations of perspective, positioning, and shape. 
              Similarly, when an <strong>optimizer runs through free-form matrices</strong>, it can learn advanced details—navigating 
              high-dimensional spaces where information flows and transforms. This essential, intuitive understanding opens 
              the door to all advanced AI architectures.
            </p>
          </>
        }
        repoUrl="https://github.com/tambetvali/LaegnaAIBasics"
        repoName="LaegnaAIBasics"
        theme="neural"
        concepts={[
          {
            term: "The Brain (Perceptron)",
            description: "The fundamental unit—a function that learns by adjusting weights based on input patterns and error signals.",
          },
          {
            term: "Knowledge (Weights)",
            description: "The learned parameters stored in the network, encoding understanding from training data.",
          },
          {
            term: "Optimizer",
            description: "The process that gradually refines solutions through iterative error correction—learning from mistakes.",
          },
          {
            term: "Matrix Spaces",
            description: "Like 3D transformations handle perspective and shape, optimizers traverse these spaces to learn intricate patterns.",
          },
        ]}
      />

      {/* Repository 2: Practical AI */}
      <div className="bg-parchment-dark/30">
        <RepoSection
          id="practical"
          number="02"
          title="Document Intelligence"
          subtitle="RAG & Personal AI"
          description={
            <>
              <p>
                The modern person organizes personal, hobby, interest, and professional documents into collections. 
                Organizations—companies, non-profits, governments—do the same with their unofficial and official documentation.
              </p>
              <p>
                <strong>RAG (Retrieval-Augmented Generation)</strong> enables AI to chat with these documents, 
                create resources, and deploy them effectively. Many systems offer free credits to get started.
              </p>
              <p>
                Having your markdown documents organized into a meaningful folder tree enables AI to understand 
                <strong> your person and needs</strong>. This structure unlocks much more advanced uses across many systems—your 
                documents become a living knowledge base.
              </p>
            </>
          }
          repoUrl="https://github.com/tambetvali/LaegnaPracticalAI"
          repoName="LaegnaPracticalAI"
        theme="document"
        concepts={[
            {
              term: "RAG Architecture",
              description: "Retrieve relevant documents, then generate responses grounded in your actual content and context.",
            },
            {
              term: "Document Collections",
              description: "Structured repositories of knowledge—personal notes, research, documentation—ready for AI interaction.",
            },
            {
              term: "Folder Tree Intelligence",
              description: "Hierarchical organization that gives AI context about relationships between your ideas and materials.",
            },
            {
              term: "Resource Deployment",
              description: "From documents to deployed applications—AI helps transform knowledge into functional resources.",
            },
          ]}
          reversed
        />
      </div>

      {/* Repository 3: AI Training */}
      <RepoSection
        id="training"
        number="03"
        title="Contemplation & Meditation"
        subtitle="Fine-Tuning & Training"
        description={
          <>
            <p>
              Whether you have a <strong>personal language and ideas</strong>, a distinct realm of thought and fantasy, 
              new innovative science and cutting-edge information, or you're not satisfied with how AI conveys your 
              personal and official information compared to mainstream sources—in all these cases, you turn to 
              <strong> fine-tuning and training</strong>.
            </p>
            <p>
              Work into your fine-tuning, testing with <strong>LitGPT</strong> which runs on home computers using small models. 
              As you train those small models successfully, you move to more advanced AI systems.
            </p>
            <p>
              Training is like an AI <strong>contemplating and meditating</strong> on your sources, rather than just 
              routinely working on them. By deeply understanding the information, the model develops a coherent 
              picture of infinite details—rather than concentrating on just seven.
            </p>
          </>
        }
        repoUrl="https://github.com/tambetvali/LaegnaAITraining"
        repoName="LaegnaAITraining"
        theme="meditation"
        concepts={[
          {
            term: "Fine-Tuning",
            description: "Adapting pre-trained models to your specific domain, language, or thought patterns.",
          },
          {
            term: "LitGPT Testing",
            description: "Start small on home hardware, validate your approach, then scale to larger models.",
          },
          {
            term: "Personal Knowledge Encoding",
            description: "Teaching AI your unique perspective, terminology, and understanding of the world.",
          },
          {
            term: "Deep Coherence",
            description: "Moving beyond surface-level pattern matching to integrated, contemplative understanding.",
          },
        ]}
      />

      {/* Appendix: Experiments & Resources */}
      <div className="bg-parchment-dark/30">
        <RepoSection
          id="appendix"
          number="+"
          title="Experiments & Resources"
          subtitle="Appendix"
          description={
            <>
              <p>
                <strong>LaegnaAIExperiments</strong> is the AI Lab where advanced experiments unfold—exploring 
                AI-assisted AI programming and the fascinating capability of Artificial Intelligence to 
                <strong> create other Artificial Intelligences</strong>. It's more than self-reflection; 
                it's the love of creation.
              </p>
              <p>
                The <strong>Document and Deploy AI</strong> portal serves as the original launchpad where 
                different audiences—developers, researchers, individuals—can create or collect their knowledge, 
                then connect it to AI interfaces, websites, or automation. A modular, user-role-driven approach 
                where each role contributes to collective intelligence.
              </p>
              <p>
                Together, these resources embody the philosophy of <strong>culture-aware AI</strong>: 
                open-source community building support structures, consent-based AI-to-AI interfacing, 
                and accelerating education, creativity, and development.
              </p>
            </>
          }
          repoUrl="https://github.com/tambetvali/LaegnaAIExperiments"
          repoName="LaegnaAIExperiments"
          theme="experiment"
          concepts={[
            {
              term: "AI Creating AI",
              description: "Exploring the recursive beauty of AI systems that design and generate other AI architectures.",
            },
            {
              term: "Document & Deploy Portal",
              description: "A launchpad at docu-deploy-ai.lovable.app for connecting knowledge to AI interfaces and automation.",
            },
            {
              term: "Culture-Aware AI",
              description: "Respecting diverse perspectives where each role—developer, researcher, user—contributes to collective intelligence.",
            },
            {
              term: "AI-to-AI Interfacing",
              description: "Consent-based connections between AI systems that accelerate education, creativity, and collaborative development.",
            },
          ]}
          reversed
        />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
