import { Link } from "react-router-dom";
import { Cable, Zap, Phone, Mail, MapPin, Clock, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 gradient-accent rounded-lg" />
                <div className="relative flex items-center justify-center">
                  <Cable className="w-5 h-5 text-white absolute -left-0.5" />
                  <Zap className="w-4 h-4 text-white absolute right-0 top-0" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight text-white">PROXIE</span>
                <span className="font-heading text-xs font-semibold text-accent tracking-wider">ENERGIES</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Spécialiste fibre optique et courant fort en Normandie depuis 15 ans. 
              Interventions pour promoteurs immobiliers, opérateurs d'infrastructure et syndics.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/fibre" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <Cable className="w-4 h-4" />
                  Fibre Optique
                </Link>
              </li>
              <li>
                <Link to="/services/courant-fort" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Courant Fort
                </Link>
              </li>
              <li>
                <Link to="/services/depannage" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  Dépannage Urgence
                </Link>
              </li>
              <li>
                <Link to="/services/sous-traitance" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  Sous-traitance
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">Caen, Normandie<br />Interventions toute la région</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+33771245355" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +33 7 71 24 53 55
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:contact@proxieenergies.fr" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  contact@proxieenergies.fr
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">Dépannage 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} S.A PROXIE ENERGIES. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-accent transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}