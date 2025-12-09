import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight, Linkedin } from "lucide-react";
import tessaLogo from "@/assets/tessa-logo.jpg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card">
      {/* CTA Section */}
      <div className="py-20 lg:py-28 border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Vamos transformar necessidade em{" "}
              <span className="text-gradient">talento</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Agende um kick-off gratuito e descubra como podemos acelerar suas contratações tech.
            </p>
            <Button
              variant="hero"
              size="xl"
              className="shadow-glow-strong"
              onClick={() => window.open("mailto:marcelo@tessait.com.br?subject=Quero agendar um kick-off", "_blank")}
            >
              Agendar Kick-off
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={tessaLogo} 
                  alt="TESSA" 
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div>
                  <span className="font-bold text-xl text-foreground block">TESSA</span>
                  <span className="text-xs text-muted-foreground tracking-wider">TEAMS AS A SERVICE</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Smart Sourcing as a Service. Conectamos empresas de tecnologia aos melhores talentos do mercado.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
              <div className="space-y-3">
                <a
                  href="mailto:marcelo@tessait.com.br"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  marcelo@tessait.com.br
                </a>
                <a
                  href="https://wa.me/5541996855782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (41) 99685-5782
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Redes</h4>
              <a
                href="https://linkedin.com/company/tessait"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
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