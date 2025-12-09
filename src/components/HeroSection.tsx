import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Connection Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,400 Q300,200 600,400 T1200,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse-slow" />
          <path d="M0,500 Q400,300 800,500 T1200,300" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </svg>
      </div>

      {/* Floating Nodes */}
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-accent/60 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent/80 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Tech Recruiter & Headhunting</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Smart Sourcing
            <span className="block text-gradient mt-2">as a Service</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Não entregamos apenas pessoas. Entregamos{" "}
            <span className="text-foreground font-medium">talentos calibrados</span> ao contexto e às necessidades reais do seu negócio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Falar com um Especialista
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              Conhecer Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">5</p>
              <p className="text-sm text-muted-foreground mt-1">Dias médio de contratação</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Success Fee</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">60</p>
              <p className="text-sm text-muted-foreground mt-1">Dias de garantia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
