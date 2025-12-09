import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Timer } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-40 bg-background">
      {/* Background Tech Network (Mantido pois você gostou do movimento) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
        <div className="absolute inset-0 opacity-20 animate-pulse-slow">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0 100 L20 80 L40 90 L60 70 L80 80 L100 60"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-accent"
            />
            <path
              d="M0 80 L30 50 L50 60 L80 30 L100 40"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-accent/50"
            />
            <circle cx="20" cy="80" r="1" className="fill-accent" />
            <circle cx="60" cy="70" r="1" className="fill-accent" />
            <circle cx="50" cy="60" r="1" className="fill-accent" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-3xl z-0" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* TÍTULO PRINCIPAL - TESSA */}
          <h1 className="text-7xl md:text-9xl font-extrabold text-foreground tracking-tighter mb-6 animate-slide-up">
            TESSA
          </h1>

          {/* ACRÔNIMO - DESTAQUE VISUAL (Refletindo a Pág 1 do PDF) */}
          {/* Layout responsivo: quebra em mobile, linha única em desktop */}
          <div className="flex flex-col md:gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {/* Linha 1: T-E-S */}
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-lg md:text-2xl font-bold tracking-widest uppercase">
              <div className="flex items-center gap-1">
                <span className="text-accent text-3xl md:text-4xl">T</span>
                <span className="text-muted-foreground">ALENT</span>
              </div>
              <span className="text-accent/30 hidden md:inline">•</span>
              <div className="flex items-center gap-1">
                <span className="text-accent text-3xl md:text-4xl">E</span>
                <span className="text-muted-foreground">XPERTS</span>
              </div>
              <span className="text-accent/30 hidden md:inline">•</span>
              <div className="flex items-center gap-1">
                <span className="text-accent text-3xl md:text-4xl">S</span>
                <span className="text-muted-foreground">MART</span>
              </div>
            </div>

            {/* Linha 2: S-A */}
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-lg md:text-2xl font-bold tracking-widest uppercase mt-2 md:mt-0">
              <div className="flex items-center gap-1">
                <span className="text-accent text-3xl md:text-4xl">S</span>
                <span className="text-muted-foreground">OURCING</span>
              </div>
              <span className="text-accent/30 hidden md:inline">•</span>
              <div className="flex items-center gap-1">
                <span className="text-accent text-3xl md:text-4xl">A</span>
                <span className="text-muted-foreground">S A SERVICE</span>
              </div>
            </div>
          </div>

          {/* Subtítulo Descritivo (Pág 2) */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Não entregamos apenas pessoas. Entregamos{" "}
            <span className="text-foreground font-medium">talentos calibrados</span> ao contexto e às necessidades reais
            do seu negócio.
          </p>

          {/* Botões */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" onClick={scrollToContact} className="shadow-glow-strong min-w-[200px]">
              Falar com Especialista
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="text-foreground hover:text-accent hover:bg-accent/10"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conhecer Serviços
            </Button>
          </div>

          {/* Stats - Dados Corrigidos baseados no PDF (Pág 6 e 8) */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border/30 pt-12 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Dado 1: Agilidade */}
            <div className="flex flex-col items-center">
              <div className="mb-3 p-2 rounded-lg bg-accent/10 text-accent">
                <Zap className="w-6 h-6" />
              </div>
              <p className="text-4xl font-bold text-foreground">5 Dias</p>
              <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wide font-medium">
                Recorde de Onboarding
              </p>
              <span className="text-xs text-accent/60 mt-1">(Ref. Case iForense)</span>
            </div>

            {/* Dado 2: Modelo Comercial */}
            <div className="flex flex-col items-center relative">
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-border/50" />
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-border/50" />

              <div className="mb-3 p-2 rounded-lg bg-accent/10 text-accent">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-4xl font-bold text-foreground">Risco Zero</p>
              <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wide font-medium">
                Modelo Success Fee
              </p>
              <span className="text-xs text-accent/60 mt-1">(Pague apenas no sucesso)</span>
            </div>

            {/* Dado 3: Garantia */}
            <div className="flex flex-col items-center">
              <div className="mb-3 p-2 rounded-lg bg-accent/10 text-accent">
                <Timer className="w-6 h-6" />
              </div>
              <p className="text-4xl font-bold text-foreground">60 Dias</p>
              <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wide font-medium">
                Garantia de Reposição
              </p>
              <span className="text-xs text-accent/60 mt-1">(Segurança garantida)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
