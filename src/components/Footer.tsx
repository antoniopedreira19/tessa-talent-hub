import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MessageCircle, Calendar, Search, UserCheck } from "lucide-react";
import tessaLogo from "@/assets/tessa-logo.jpg";
const nextSteps = [{
  icon: Calendar,
  title: "1. Kick-off",
  text: "Agendamos uma conversa estratégica"
}, {
  icon: Search,
  title: "2. Mapeamento",
  text: "Entendemos sua necessidade real"
}, {
  icon: UserCheck,
  title: "3. Hunting",
  text: "Iniciamos a busca do talento ideal"
}];
const Footer = () => {
  return (
    // Fundo #072355 (bg-background)
    <footer id="contact" className="bg-background border-t border-border/30">
      {/* Seção Unificada: Passos + CTA */}
      <div className="py-20 lg:py-28 relative overflow-hidden">
        {/* Elemento decorativo de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Visualização dos Próximos Passos */}
            <div className="mb-16">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-8 block">
                Próximos Passos
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {nextSteps.map((step, index) => <div key={index} className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center mb-4 group-hover:border-accent/50 group-hover:shadow-glow transition-all duration-300">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.text}</p>

                    {/* Seta conectora (apenas desktop, entre itens) */}
                    {index < 2 && <div className="hidden md:block absolute w-24 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent top-[4.5rem] ml-[60%]" />}
                  </div>)}
              </div>
            </div>

            {/* Chamada Final */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Vamos transformar necessidade em <span className="text-gradient">talento</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Fale diretamente conosco no WhatsApp para agendar seu kick-off ou tirar dúvidas.
            </p>

            {/* CORREÇÃO: Uso de asChild com tag <a> para evitar bloqueio do navegador */}
            <Button asChild variant="hero" size="xl" className="shadow-glow-strong group cursor-pointer">
              <a href="https://wa.me/5541996855782" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
                <MessageCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info & Copyright */}
      <div className="py-12 bg-card/30 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={tessaLogo} alt="TESSA" className="h-12 w-12 rounded-lg object-cover" />
                <div>
                  <span className="font-bold text-xl text-foreground block">TESSA</span>
                  <span className="text-xs text-muted-foreground tracking-wider">TEAMS AS A SERVICE</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">Conectamos empresas de tecnologia aos melhores talentos do mercado.</p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
              <div className="space-y-3">
                <a href="mailto:marcelo@tessait.com.br" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  marcelo@tessait.com.br
                </a>
                <a href="https://wa.me/5541996855782" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  (41) 99685-5782
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Redes</h4>
              <a href="https://linkedin.com/company/tessait" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border/30 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} TESSA IT. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;