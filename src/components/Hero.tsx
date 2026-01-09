import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="foundation"
      className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Engineering Skills for the Fifth Element
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            From Four Elements to the
            <span className="text-gradient-gold block mt-2">Spirit of Matter</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up font-serif" style={{ animationDelay: "0.2s" }}>
            We naturally know simple primitives to engineer from four elements—the material realm. 
            Here, we master the Perceptron: engineering with the fifth element, the spirit of matter.
          </p>

          {/* Philosophy */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-elevated max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg text-foreground leading-relaxed">
              Yet unconscious, but working with spirit. Once we understand the Perceptron, we grasp 
              the <span className="text-primary font-semibold">possibilities</span>, <span className="text-primary font-semibold">limits</span>, 
              and <span className="text-primary font-semibold">methods</span> within the realm of more advanced architectures—all 
              built upon this essential foundation.
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="#basics" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm">Explore the Journey</span>
              <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
                <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
