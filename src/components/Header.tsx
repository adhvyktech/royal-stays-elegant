import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#location", label: "Location" },
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#tour", label: "Virtual Tour" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container-hotel section-padding py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-semibold text-foreground">
              Royal Inn Lodge
            </span>
            <span className="text-xs text-muted-foreground">
              Shivajinagar, Bangalore
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919900754180"
              className="hidden sm:flex btn-primary text-sm py-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">+91 99007 54180</span>
              <span className="md:hidden">Call</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919900754180"
                className="sm:hidden btn-primary text-sm py-2 mt-2 w-full"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
