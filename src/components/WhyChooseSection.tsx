import { Cpu, Settings, ShieldCheck, Handshake, ArrowRight, Calendar, Search, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Cpu,
    title: "Expertise em Tech",
    description: "Profundo conhecimento do mercado de tecnologia e das suas dinâmicas.",
  },
  {
    icon: Settings,
    title: "Customização Total",
    description: "Cada solução calibrada ao contexto real e cultura do seu negócio.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Risco",
    description: "Modelo success-based com garantia incluída e total transparência.",
  },
  {
    icon: Handshake,
    title: "Parceria Contínua",
    description: "Advisory estratégico e acompanhamento que vão além da contratação.",
  },
];

const nextSteps = [
  {
    icon: Calendar,
    text: "Agende um kick-off estratégico conosco",
  },
  {
    icon: Search,
    text: "Mapeamos profundamente as necessidades",
  },
  {
    icon: UserCheck,
    text: "Iniciamos a busca do talento ideal",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Por Que Escolher a TESSA?
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-6 rounded-2xl bg-card border border-border/30 hover:border-accent/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border/30 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Próximos Passos
              </h3>

              <div className="space-y-4 mb-10">
                {nextSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30 animate-slide-up"
                    style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground font-medium">{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  variant="hero"
                  size="xl"
                  className="shadow-glow-strong"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Agendar Kick-off
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;