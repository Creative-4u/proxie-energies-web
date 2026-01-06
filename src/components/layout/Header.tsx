import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, Zap, Cable, Phone, Wrench, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Logo = () => (
  <Link to="/" className="flex items-center gap-2 group">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 gradient-accent rounded-lg opacity-90 group-hover:opacity-100 transition-opacity" />
      <div className="relative flex items-center justify-center">
        <Cable className="w-5 h-5 text-white absolute -left-0.5" />
        <Zap className="w-4 h-4 text-white absolute right-0 top-0" />
      </div>
    </div>
    <div className="flex flex-col">
      <span className="font-heading font-bold text-lg leading-tight text-primary">PROXIE</span>
      <span className="font-heading text-xs font-semibold text-accent tracking-wider">ENERGIES</span>
    </div>
  </Link>
);

const services = [
  { name: "Fibre Optique", href: "/services/fibre", icon: Cable, desc: "FTTH, tirage, épissurage" },
  { name: "Courant Fort", href: "/services/courant-fort", icon: Zap, desc: "Tableaux, colonnes montantes" },
  { name: "Dépannage Urgence", href: "/services/depannage", icon: Wrench, desc: "Intervention < 4h" },
  { name: "Sous-traitance", href: "/services/sous-traitance", icon: Building2, desc: "Promoteurs & OI" },
];

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Réalisations", href: "/realisations" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="container mx-auto flex items-center justify-between h-20 px-4">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setShowServices(true)}
              onMouseLeave={() => link.hasDropdown && setShowServices(false)}
            >
              <Link
                to={link.href}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-200",
                  location.pathname === link.href || (link.hasDropdown && location.pathname.startsWith("/services"))
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-accent/5"
                )}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className={cn("w-4 h-4 transition-transform", showServices && "rotate-180")} />
                )}
              </Link>

              {/* Services Dropdown */}
              {link.hasDropdown && showServices && (
                <div className="absolute top-full left-0 pt-2 w-72 animate-fade-in">
                  <div className="bg-card rounded-xl shadow-xl border border-border p-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <service.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                          <span className="font-semibold text-foreground block">{service.name}</span>
                          <span className="text-sm text-muted-foreground">{service.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+33771245355" className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span>07 71 24 53 55</span>
          </a>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Devis Gratuit
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="container px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => !link.hasDropdown && setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors",
                    location.pathname === link.href ? "bg-accent/10 text-accent" : "hover:bg-muted"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <service.icon className="w-4 h-4" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-2">
              <Button variant="accent" className="w-full">
                Devis Gratuit
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}