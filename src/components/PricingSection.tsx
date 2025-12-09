import { Trophy, Ban, Shield, Coins } from "lucide-react";

const pricingFeatures = [
  {
    icon: Trophy,
    title: "Success Fee",
    description: "Pague apenas quando a contratação for efetivada. Zero risco para sua empresa.",
    highlight: "100% Success Fee",
  },
  {
    icon: Ban,
    title: "Sem Mensalidades",
    description: "Sem custos iniciais, taxas de setup ou cobranças ocultas. Transparência total.",
    highlight: "Zero custos ocultos",
  },
  {
    icon: Shield,
    title: "Garantia de 60 Dias",
    description: "Se o profissional sair nos primeiros 60 dias, fazemos a substituição sem custo adicional.",
    highlight: "1 substituição gratuita",
  },
  {
    icon: Coins,
    title: "Investimento Claro",
    description: "Valor correspondente a 1x o primeiro salário bruto do profissional contratado.",
    highlight: "1x salário bruto",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Modelo Comercial</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Transparência Total
          </h2>
          <p className="text-lg text-muted-foreground">
            Um modelo simples e justo: você só paga quando encontramos o talento certo para sua empresa.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className="w-20 h-20 mx-auto rounded-2xl bg-card border border-border/30 flex items-center justify-center mb-6 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-foreground group-hover:text-accent transition-colors duration-300" />
              </div>

              {/* Highlight Badge */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-semibold mb-4">
                {feature.highlight}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Quer entender melhor como funciona?
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-accent font-semibold hover:underline transition-all"
          >
            Agende uma conversa sem compromisso →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;