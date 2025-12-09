import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight, Linkedin } from "lucide-react";
import tessaLogo from "@/assets/tessa-logo.jpg";
const Footer = () => {
  return (
    // Alterado de bg-card para bg-background (#072355)
    <footer id="contact" className="bg-background">
      {/* CTA Section */}
      

      {/* Contact Info */}
      {/* Mantido bg-background ou removido para ficar uniforme com o container pai */}
      <div className="py-12 lg:py-16 bg-background">
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
              <p className="text-muted-foreground text-sm leading-relaxed">
                Smart Sourcing as a Service. Conectamos empresas de tecnologia aos melhores talentos do mercado.
              </p>
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