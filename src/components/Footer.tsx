import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="py-20 lg:py-28 border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Vamos transformar necessidade em{" "}
              <span className="text-gradient">talento</span>?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10">
              Agende um kick-off gratuito e descubra como podemos acelerar suas contratações tech.
            </p>
            <Button
              variant="hero"
              size="xl"
              className="shadow-glow"
              onClick={() => window.open("mailto:marcelo@tessait.com.br?subject=Quero agendar um kick-off", "_blank")}
            >
              Agendar Kick-off
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">T</span>
                </div>
                <span className="font-bold text-xl">TESSA IT</span>
              </div>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                Smart Sourcing as a Service. Conectamos empresas de tecnologia aos melhores talentos do mercado.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <a
                  href="mailto:marcelo@tessait.com.br"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  marcelo@tessait.com.br
                </a>
                <a
                  href="https://wa.me/5541996855782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (41) 99685-5782
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Redes</h4>
              <a
                href="https://linkedin.com/company/tessait"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} TESSA IT. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
