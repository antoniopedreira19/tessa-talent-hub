import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Zap, Timer } from "lucide-react";
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-40">
      {/* --- DYNAMIC TECH BACKGROUND START --- */}

      {/* 1. Base Deep Navy */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[hsl(218,85%,15%)] via-[hsl(218,90%,10%)] to-[hsl(218,90%,8%)] z-0" />

      {/* 2. Animated AI/Data Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{
        animationDelay: "2s"
      }} />
      </div>

      {/* 3. Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
      backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
      backgroundSize: "50px 50px",
      maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)"
    }} />

      {/* 4. Floating Neural Network Lines */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30 animate-float">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L20 80 L40 90 L60 70 L80 80 L100 60" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-accent" />
          <path d="M0 80 L30 50 L50 60 L80 30 L100 40" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-accent" />
          <circle cx="20" cy="80" r="0.5" className="fill-accent animate-pulse" />
          <circle cx="60" cy="70" r="0.5" className="fill-accent animate-pulse" style={{
          animationDelay: "1s"
        }} />
          <circle cx="50" cy="60" r="0.5" className="fill-accent animate-pulse" style={{
          animationDelay: "0.5s"
        }} />
          <circle cx="80" cy="30" r="0.5" className="fill-accent animate-pulse" style={{
          animationDelay: "1.5s"
        }} />
        </svg>
      </div>

      {/* --- DYNAMIC TECH BACKGROUND END --- */}

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* TÍTULO PRINCIPAL - TESSA */}
          <h1 className="text-7xl md:text-9xl font-extrabold text-foreground tracking-tighter mb-8 animate-slide-up drop-shadow-2xl">
            TESSA
          </h1>

          {/* ACRÔNIMO - LINHA ÚNICA (T - E - S - S - A) */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-lg md:text-2xl font-bold tracking-widest uppercase mb-16 animate-slide-up" style={{
          animationDelay: "0.1s"
        }}>
            {/* T */}
            <div className="flex items-center gap-1">
              <span className="text-accent text-3xl md:text-4xl">T</span>
              <span className="text-muted-foreground">ALENT</span>
            </div>
            <span className="text-accent/30 hidden md:inline">•</span>

            {/* E */}
            <div className="flex items-center gap-1">
              <span className="text-accent text-3xl md:text-4xl">E</span>
              <span className="text-muted-foreground">XPERTS</span>
            </div>
            <span className="text-accent/30 hidden md:inline">•</span>

            {/* S */}
            <div className="flex items-center gap-1">
              <span className="text-accent text-3xl md:text-4xl">S</span>
              <span className="text-muted-foreground">MART</span>
            </div>
            <span className="text-accent/30 hidden md:inline">•</span>

            {/* S */}
            <div className="flex items-center gap-1">
              <span className="text-accent text-3xl md:text-4xl">S</span>
              <span className="text-muted-foreground">OURCING</span>
            </div>
            <span className="text-accent/30 hidden md:inline">•</span>

            {/* A */}
            <div className="flex items-center gap-1">
              <span className="text-accent text-3xl md:text-4xl">A</span>
              <span className="text-muted-foreground">S A SERVICE</span>
            </div>
          </div>

          {/* Subtítulo Descritivo (Texto Ajustado) */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up leading-relaxed" style={{
          animationDelay: "0.2s"
        }}>
            Entregamos <span className="text-foreground font-medium">talentos calibrados</span> ao contexto e às
            necessidades reais do seu negócio.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 animate-slide-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button variant="hero" size="xl" onClick={scrollToContact} className="shadow-glow-strong min-w-[200px]">
              Falar com Especialista
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="ghost" size="xl" className="text-foreground hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/20" onClick={() => document.getElementById("services")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Conhecer Serviços
            </Button>
          </div>

          {/* Stats */}
          
        </div>
      </div>
    </section>;
};
export default HeroSection;