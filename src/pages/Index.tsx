import { Link } from "react-router-dom";
import { Cable, Zap, Wrench, ArrowRight, Clock, Shield, CheckCircle, Star, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

import heroImage from "@/assets/hero-technician.jpg";
import fiberImage from "@/assets/fiber-optic.jpg";
import electricalImage from "@/assets/electrical-panel.jpg";
import emergencyImage from "@/assets/emergency-repair.jpg";

const services = [
  {
    title: "Fibre Optique",
    description: "Tirage, soufflage, épissurage et raccordement d'immeubles. Certification OTDR, DRO/DTI, déploiements FTTH.",
    icon: Cable,
    image: fiberImage,
    href: "/services/fibre",
    features: ["Tirage & Soufflage", "Épissurage fusion", "Raccordement FTTH"]
  },
  {
    title: "Courant Fort",
    description: "Tableaux divisionnaires, colonnes montantes, câblage électrique. Mise en conformité et normes NF C 15-100.",
    icon: Zap,
    image: electricalImage,
    href: "/services/courant-fort",
    features: ["Tableaux électriques", "Colonnes montantes", "Mise aux normes"]
  },
  {
    title: "Dépannage Urgence",
    description: "Intervention en moins de 4h. Recherche de pannes, remise en service, SAV promoteurs et astreintes 24/7.",
    icon: Wrench,
    image: emergencyImage,
    href: "/services/depannage",
    features: ["Intervention < 4h", "Astreinte 24/7", "SAV promoteurs"]
  }
];

const stats = [
  { value: "15+", label: "Années d'expertise", icon: Shield },
  { value: "<4h", label: "Intervention urgence", icon: Clock },
  { value: "500+", label: "Chantiers réalisés", icon: CheckCircle },
  { value: "100%", label: "Clients satisfaits", icon: Star },
];

const testimonials = [
  {
    name: "Jean-Marc D.",
    role: "Directeur Technique, Bouygues Immobilier",
    content: "Équipe réactive et professionnelle. Nos chantiers FTTH sont toujours livrés dans les délais grâce à PROXIE ENERGIES.",
    rating: 5
  },
  {
    name: "Sophie L.",
    role: "Responsable Syndic, Foncia Caen",
    content: "Le dépannage d'urgence est un vrai plus. Intervention rapide et efficace, nos résidents sont satisfaits.",
    rating: 5
  },
  {
    name: "Michel B.",
    role: "Chef de projet, Orange Business",
    content: "Partenaire fiable pour nos déploiements RIP en Normandie. Qualité d'épissurage irréprochable.",
    rating: 5
  }
];

export default function Index() {
  return (
    <Layout>
      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "S.A PROXIE ENERGIES",
          "description": "Spécialiste fibre optique et courant fort en Normandie. Dépannage urgence 24/7.",
          "url": "https://proxieenergies.fr",
          "telephone": "+33771245355",
          "email": "contact@proxieenergies.fr",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Caen",
            "addressRegion": "Normandie",
            "addressCountry": "FR"
          },
          "areaServed": "Normandie",
          "serviceType": ["Fibre optique", "Courant fort", "Dépannage électrique"]
        })
      }} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Technicien fibre optique sur chantier" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(231,81%,12%)]/95 via-primary/80 to-primary/60" />
        </div>

        {/* Electric Lines Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-px bg-gradient-to-l from-accent to-transparent opacity-50" />
          <div className="absolute top-1/3 right-20 w-72 h-px bg-gradient-to-l from-accent to-transparent opacity-30" />
          <div className="absolute bottom-1/4 left-0 w-80 h-px bg-gradient-to-r from-accent to-transparent opacity-40" />
        </div>

        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent mb-6 animate-fade-up">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Basé à Caen • Interventions Normandie</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-up stagger-1">
              Fibre optique<span className="text-accent"> • </span>
              Courant fort<span className="text-accent"> • </span>
              <span className="text-gradient">Dépannage 24/7</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed animate-fade-up stagger-2">
              15 ans d'expertise terrain au service des promoteurs immobiliers, 
              opérateurs d'infrastructure et syndics de copropriété.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Devis Gratuit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+33771245355">
                <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  <Phone className="w-5 h-5" />
                  07 71 24 53 55
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border relative -mt-16 z-20">
        <div className="container px-4">
          <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-3">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-1">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background" id="services">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Expertises</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Solutions complètes pour vos projets
            </h2>
            <p className="text-muted-foreground text-lg">
              De la fibre optique au courant fort, nous intervenons sur l'ensemble de vos besoins électriques et télécom.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden card-lift border-0 shadow-card hover:shadow-card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.href}
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Témoignages</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              La confiance de nos partenaires
            </h2>
            <p className="text-muted-foreground text-lg">
              Promoteurs, opérateurs et syndics nous font confiance pour leurs projets en Normandie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-0 shadow-card p-6">
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Un projet ? Une urgence ?<br />
              <span className="text-accent">Contactez-nous maintenant</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Devis gratuit sous 24h. Intervention d'urgence possible en moins de 4 heures.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Demander un devis
                </Button>
              </Link>
              <a 
                href="https://wa.me/33771245355"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="xl">
                  WhatsApp 24/7
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}