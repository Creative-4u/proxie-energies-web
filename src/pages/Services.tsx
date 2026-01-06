import { useParams, Link } from "react-router-dom";
import { Cable, Zap, Wrench, Building2, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

import fiberImage from "@/assets/fiber-optic.jpg";
import electricalImage from "@/assets/electrical-panel.jpg";
import emergencyImage from "@/assets/emergency-repair.jpg";
import heroImage from "@/assets/hero-technician.jpg";

const servicesData = {
  fibre: {
    title: "Fibre Optique",
    subtitle: "Déploiements FTTH & raccordements immeubles",
    icon: Cable,
    image: fiberImage,
    description: "Spécialistes du déploiement fibre optique, nous intervenons sur l'ensemble de la chaîne : du tirage au raccordement final. Notre expertise FTTH garantit des installations conformes aux exigences des opérateurs.",
    features: [
      "Tirage et soufflage de câbles fibre optique",
      "Épissurage par fusion avec soudeuse dernière génération",
      "Installation DRO (Dispositif de Raccordement Optique)",
      "Pose DTI (Dispositif de Terminaison Intérieur)",
      "Mesures et certification OTDR",
      "Raccordement FTTH immeubles neufs et rénovation",
      "Colonne montante optique",
      "Tests et recettage conformes aux normes opérateurs"
    ],
    clients: ["Promoteurs immobiliers", "Opérateurs d'Infrastructure (OI)", "Bailleurs sociaux", "RIP Normandie"]
  },
  "courant-fort": {
    title: "Courant Fort",
    subtitle: "Installations électriques & mise en conformité",
    icon: Zap,
    image: electricalImage,
    description: "De la conception à la réalisation, nous assurons vos installations électriques dans le respect des normes NF C 15-100. Interventions pour immeubles collectifs, tertiaires et industriels.",
    features: [
      "Installation et rénovation de tableaux divisionnaires",
      "Câblage électrique tous locaux",
      "Colonnes montantes électriques",
      "Mise en conformité normes NF C 15-100",
      "Alimentation générale et distribution",
      "Raccordement TGBT",
      "Contrôles et vérifications réglementaires",
      "Diagnostics et audits électriques"
    ],
    clients: ["Promoteurs immobiliers", "Syndics de copropriété", "Bailleurs", "Collectivités"]
  },
  depannage: {
    title: "Dépannage Urgence",
    subtitle: "Intervention rapide < 4h",
    icon: Wrench,
    image: emergencyImage,
    description: "Service d'astreinte 24/7 pour les urgences électriques et fibre optique. Nous garantissons une intervention en moins de 4 heures pour limiter l'impact sur vos résidents et activités.",
    features: [
      "Intervention d'urgence en moins de 4 heures",
      "Recherche et diagnostic de pannes",
      "Remise en service immédiate",
      "SAV pour promoteurs immobiliers",
      "Contrats d'astreinte personnalisés",
      "Dépannage fibre optique",
      "Dépannage électrique courant fort",
      "Rapports d'intervention détaillés"
    ],
    clients: ["Promoteurs (SAV garantie)", "Syndics", "Gestionnaires immobiliers", "Entreprises"]
  },
  "sous-traitance": {
    title: "Sous-traitance",
    subtitle: "Partenaire de confiance pour vos chantiers",
    icon: Building2,
    image: heroImage,
    description: "Nous accompagnons les grands comptes et opérateurs d'infrastructure dans leurs déploiements en Normandie. Équipes formées, certifiées et disponibles pour vos projets d'envergure.",
    features: [
      "Déploiements pour promoteurs (Bouygues, Nexity, Kaufman...)",
      "Sous-traitance OI (Orange, SFR, Altitude...)",
      "Interventions RIP Normandie",
      "Équipes formées et certifiées",
      "Respect des cahiers des charges opérateurs",
      "Suivi qualité et reporting",
      "Capacité de montée en charge rapide",
      "Flexibilité et réactivité"
    ],
    clients: ["Bouygues Immobilier", "Nexity", "Orange", "SFR", "RIP Normandie"]
  }
};

export default function Services() {
  const { type } = useParams();
  const service = type ? servicesData[type as keyof typeof servicesData] : null;

  // Services overview page
  if (!service) {
    return (
      <Layout>
        <section className="py-24 bg-background">
          <div className="container px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Services</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
                Expertise complète en électricité et télécom
              </h1>
              <p className="text-muted-foreground text-lg">
                De la fibre optique au dépannage d'urgence, découvrez l'ensemble de nos prestations pour vos projets en Normandie.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(servicesData).map(([key, s]) => (
                <Link
                  key={key}
                  to={`/services/${key}`}
                  className="group"
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
                    <img 
                      src={s.image} 
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4">
                        <s.icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="font-heading text-2xl font-bold text-white mb-2">{s.title}</h2>
                      <p className="text-white/80 mb-4">{s.subtitle}</p>
                      <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                        Découvrir <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Specific service page
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mb-6 animate-fade-up">
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up stagger-1">
              {service.title}
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-up stagger-2">
              {service.subtitle}
            </p>
            <div className="flex gap-4 animate-fade-up stagger-3">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Demander un devis
                </Button>
              </Link>
              <a href="tel:+33771245355">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  <Phone className="w-4 h-4" />
                  Appeler
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Description */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Notre expertise
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {service.description}
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Nos prestations
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clients & CTA */}
            <div>
              <div className="bg-muted rounded-2xl p-8 mb-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Ils nous font confiance
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.clients.map((client, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              <div className="gradient-hero rounded-2xl p-8 text-white">
                <h3 className="font-heading text-xl font-bold mb-4">
                  Besoin d'un devis ?
                </h3>
                <p className="text-white/80 mb-6">
                  Contactez-nous pour une étude personnalisée de votre projet. Devis gratuit sous 24h.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="flex-1">
                    <Button variant="accent" className="w-full">
                      Demander un devis
                    </Button>
                  </Link>
                  <a 
                    href="https://wa.me/33771245355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="whatsapp" className="w-full">
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Nos autres services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(servicesData)
              .filter(([key]) => key !== type)
              .map(([key, s]) => (
                <Link
                  key={key}
                  to={`/services/${key}`}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl hover:shadow-card transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <s.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-semibold text-foreground">{s.title}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
