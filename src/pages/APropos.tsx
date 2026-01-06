import { Link } from "react-router-dom";
import { CheckCircle, Award, Users, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

import heroImage from "@/assets/hero-technician.jpg";

const values = [
  {
    icon: Target,
    title: "Réactivité",
    description: "Intervention rapide et solutions adaptées. Notre engagement : répondre à vos urgences en moins de 4 heures."
  },
  {
    icon: Award,
    title: "Expertise terrain",
    description: "15 ans d'expérience sur les chantiers de Normandie. Maîtrise des technologies fibre optique et courant fort."
  },
  {
    icon: Users,
    title: "Respect des délais",
    description: "Nous comprenons les contraintes des chantiers. Livraisons ponctuelles et coordination optimale avec vos équipes."
  }
];

const timeline = [
  {
    year: "2009",
    title: "Débuts chez Circet",
    description: "Formation et perfectionnement sur les réseaux télécom et fibre optique auprès des plus grands opérateurs."
  },
  {
    year: "2015",
    title: "Expertise FTTH",
    description: "Spécialisation sur les déploiements FTTH pour Orange, SFR et les opérateurs d'infrastructure."
  },
  {
    year: "2020",
    title: "Création PROXIE ENERGIES",
    description: "Lancement de l'entreprise pour offrir une expertise complète fibre et courant fort aux acteurs immobiliers normands."
  },
  {
    year: "2024",
    title: "500+ chantiers",
    description: "Plus de 500 chantiers réalisés en Normandie pour promoteurs, OI et syndics de copropriété."
  }
];

export default function APropos() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Équipe PROXIE ENERGIES" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">À Propos</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              15 ans d'expertise au service de vos projets
            </h1>
            <p className="text-white/80 text-lg">
              S.A PROXIE ENERGIES accompagne les professionnels de l'immobilier et des télécoms 
              en Normandie avec des solutions fiables et réactives.
            </p>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Direction</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Sallem EL IDRISSI
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Directeur Technique
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Fort de 15 années d'expérience chez Circet et auprès des grands opérateurs télécom (Orange, SFR), 
                Sallem a fondé PROXIE ENERGIES pour proposer une expertise de terrain aux acteurs de l'immobilier normand.
              </p>
              <p className="text-foreground leading-relaxed mb-8">
                Sa connaissance approfondie des réseaux FTTH et des installations électriques lui permet 
                d'accompagner efficacement les promoteurs immobiliers, opérateurs d'infrastructure et syndics 
                dans leurs projets les plus exigeants.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["Certification FTTH", "Habilitation électrique", "Formation sécurité", "Gestion de projet"].map((cert, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={heroImage} 
                  alt="Sallem EL IDRISSI - Directeur Technique" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-accent">
                <p className="font-heading text-3xl font-bold">15+</p>
                <p className="text-sm">ans d'expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Valeurs</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Ce qui nous anime
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card text-center"
              >
                <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Notre Parcours</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Une expertise construite sur le terrain
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-white font-bold text-sm">
                    {item.year.slice(2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-accent font-semibold text-sm">{item.year}</p>
                  <h3 className="font-heading text-lg font-bold text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Certifications & Qualifications
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Habilitation électrique B1V-BR-BC",
              "Formation FTTH Orange/SFR",
              "Certification soudure fusion",
              "Formation sécurité chantier",
              "CACES nacelle",
              "SST (Sauveteur Secouriste)"
            ].map((cert, i) => (
              <div 
                key={i}
                className="flex items-center gap-2 px-5 py-3 bg-card rounded-full border border-border shadow-sm"
              >
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="font-medium text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à travailler ensemble ?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Nous contacter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}