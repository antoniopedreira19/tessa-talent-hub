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
      {/* NOVO BACKGROUND: Inspirado na Página 2 (Conexões/Tech) 
        Substituímos as bolhas por uma rede de conexões mais técnica.
      */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradiente de profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />

        {/* Rede Animada (Tech Network) */}
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

        {/* Glow Central sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-3xl z-0" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge Superior - Identidade TESSA */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">Talent Experts</span>
          </div>

          {/* Título Principal - Inspirado na CAPA DO PDF (Página 1) */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground tracking-tight leading-[0.9] mb-8 animate-slide-up">
            SMART SOURCING
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent mt-2">
              AS A SERVICE
            </span>
          </h1>

          {/* Subtítulo - Inspirado na Página 2 */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Não entregamos apenas pessoas. Entregamos{" "}
            <span className="text-foreground font-semibold">talentos calibrados</span> ao contexto e às necessidades
            reais do seu negócio.
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
          {/* Adicionado padding bottom extra na section e margin aqui para afastar da dobra */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border/30 pt-10 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Dado 1: Agilidade (Baseado no Case iForense - Pág 8) */}
            <div className="flex flex-col items-center">
              <div className="mb-2 p-2 rounded-lg bg-accent/10 text-accent">
                <Zap className="w-6 h-6" />
              </div>
              <p className="text-4xl font-bold text-foreground">5 Dias</p>
              <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wide font-medium">
                Recorde de Onboarding
              </p>
              <span className="text-xs text-accent/60 mt-1">(Ref. Case iForense)</span>
            </div>

            {/* Dado 2: Modelo Comercial (Baseado na Pág 6) */}
            <div className="flex flex-col items-center relative">
              {/* Separadores verticais apenas em desktop */}
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-border/50" />
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-border/50" />

              <div className="mb-2 p-2 rounded-lg bg-accent/10 text-accent">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-4xl font-bold text-foreground">Risco Zero</p>
              <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wide font-medium">
                Modelo Success Fee
              </p>
              <span className="text-xs text-accent/60 mt-1">(Pague apenas no sucesso)</span>
            </div>

            {/* Dado 3: Garantia (Baseado na Pág 6) */}
            <div className="flex flex-col items-center">
              <div className="mb-2 p-2 rounded-lg bg-accent/10 text-accent">
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
