import { Quote, Clock, CheckCircle2, Building2 } from "lucide-react";

const CaseSection = () => {
  return (
    <section id="case" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Case de Sucesso</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Resultados Reais
          </h2>
        </div>

        {/* Case Study Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-3xl p-8 lg:p-12 border border-border/30 shadow-xl relative overflow-hidden animate-fade-in">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 lg:top-12 lg:right-12">
              <Quote className="w-16 h-16 text-accent/20" />
            </div>

            {/* Company Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Building2 className="w-5 h-5 text-accent" />
              <span className="font-semibold text-foreground">iForense</span>
            </div>

            {/* Challenge */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-muted-foreground mb-3">O Desafio</h3>
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
                Hunting urgente de desenvolvedor híbrido (Backend Java + DevOps) para posição crítica com prazo apertado.
              </p>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">5 dias</p>
                  <p className="text-sm text-muted-foreground">Do kick-off ao onboarding</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/30">
                <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">1ª tentativa</p>
                  <p className="text-sm text-muted-foreground">Aprovação no primeiro candidato</p>
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div className="p-6 rounded-xl bg-card border border-border/30">
              <h4 className="font-semibold text-foreground mb-2">Resultado</h4>
              <p className="text-muted-foreground leading-relaxed">
                Profissional sênior identificado, validado tecnicamente e culturalmente, aprovado pelo cliente e integrado à equipe em tempo recorde. O desenvolvedor se adaptou rapidamente e continua na empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;