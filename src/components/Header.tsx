import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import tessaLogo from "@/assets/tessa-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={tessaLogo} 
              alt="TESSA - Teams as a Service" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground leading-tight">TESSA</span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Teams as a Service</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("methodology")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Metodologia
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Investimento
            </button>
            <button
              onClick={() => scrollToSection("case")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Cases
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="cta"
              size="default"
              onClick={() => scrollToSection("contact")}
            >
              Falar com Especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-fade-in bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("methodology")}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left py-2"
              >
                Metodologia
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left py-2"
              >
                Investimento
              </button>
              <button
                onClick={() => scrollToSection("case")}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left py-2"
              >
                Cases
              </button>
              <Button
                variant="cta"
                size="default"
                onClick={() => scrollToSection("contact")}
                className="mt-2"
              >
                Falar com Especialista
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;