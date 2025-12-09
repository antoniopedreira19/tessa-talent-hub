import { FileCheck, Receipt, CreditCard, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileCheck,
    title: "Contratação",
    description: "Profissional aprovado e aceita a proposta",
  },
  {
    number: "2",
    icon: Receipt,
    title: "NF Emitida",
    description: "1º dia de atividade do profissional",
  },
  {
    number: "3",
    icon: CreditCard,
    title: "Pagamento",
    description: "Até 5 dias corridos após emissão",
  },
];

const PaymentFlowSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Fluxo de Pagamento</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Processo Simples e Transparente
          </h2>
          <p className="text-lg text-muted-foreground">
            Entenda como funciona o fluxo de pagamento em apenas 3 etapas.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Line - Desktop */}
            <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
            
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Number Circle */}
                <div className="w-24 h-24 mx-auto rounded-full bg-background border-2 border-accent/50 flex items-center justify-center mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-2xl p-8 lg:p-10 border border-accent/30 shadow-lg animate-fade-in">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Proteção Garantida
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oferecemos <span className="text-foreground font-semibold">1 substituição gratuita</span> se o profissional se desligar em até 60 dias, exceto em casos de mudança de escopo, alteração de remuneração, reestruturação organizacional ou inadimplência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentFlowSection;