import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import fiberImage from "@/assets/fiber-optic.jpg";
import electricalImage from "@/assets/electrical-panel.jpg";
import emergencyImage from "@/assets/emergency-repair.jpg";

const projects = [
  {
    image: project1,
    title: "Raccordement FTTH 48 logements",
    location: "Caen, Calvados",
    category: "Fibre Optique",
    description: "Déploiement complet fibre optique pour résidence neuve. Colonne montante, épissurage et raccordement des 48 logements."
  },
  {
    image: electricalImage,
    title: "Rénovation tableau électrique collectif",
    location: "Rouen, Seine-Maritime",
    category: "Courant Fort",
    description: "Mise en conformité NF C 15-100 et remplacement complet du tableau général pour copropriété de 32 lots."
  },
  {
    image: project2,
    title: "Épissurage 144 fibres optiques",
    location: "Le Havre, Seine-Maritime",
    category: "Fibre Optique",
    description: "Soudure par fusion de câble 144 FO pour raccordement immeuble tertiaire. Certification OTDR complète."
  },
  {
    image: project3,
    title: "Maintenance OTDR réseau RIP",
    location: "Eure, Normandie",
    category: "Sous-traitance",
    description: "Mesures réflectométriques et maintenance préventive sur réseau d'initiative publique RIP Normandie."
  },
  {
    image: emergencyImage,
    title: "Dépannage urgence SAV promoteur",
    location: "Caen, Calvados",
    category: "Dépannage",
    description: "Intervention d'urgence en 2h pour rétablissement fibre optique résidence Bouygues Immobilier."
  },
  {
    image: fiberImage,
    title: "Infrastructure télécom immeuble neuf",
    location: "Deauville, Calvados",
    category: "Fibre Optique",
    description: "Installation complète infrastructure télécom pour résidence de standing. Gaines, colonnes et raccordements."
  }
];

export default function Realisations() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-hero">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Nos Réalisations
            </h1>
            <p className="text-white/80 text-lg">
              Découvrez une sélection de nos chantiers récents en fibre optique, courant fort et dépannage d'urgence en Normandie.
            </p>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="relative max-w-5xl mx-auto">
            {/* Main Slider */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={projects[currentSlide].image}
                alt={projects[currentSlide].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full mb-3">
                  {projects[currentSlide].category}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                  {projects[currentSlide].title}
                </h2>
                <div className="flex items-center gap-2 text-white/80 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{projects[currentSlide].location}</span>
                </div>
                <p className="text-white/80 max-w-xl">
                  {projects[currentSlide].description}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Projet précédent"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Projet suivant"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 flex gap-3 justify-center flex-wrap">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all ${
                    currentSlide === index 
                      ? "ring-2 ring-accent ring-offset-2" 
                      : "opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Voir ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Slide Counter */}
            <div className="mt-4 text-center text-muted-foreground">
              {currentSlide + 1} / {projects.length}
            </div>
          </div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-12">
            Tous nos projets
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow cursor-pointer"
                onClick={() => setCurrentSlide(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <span className="text-accent text-sm font-semibold">{project.category}</span>
                  <h3 className="text-white font-bold">{project.title}</h3>
                  <p className="text-white/80 text-sm flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Votre projet mérite notre expertise
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour discuter de vos besoins en fibre optique ou courant fort.
            </p>
            <Button variant="accent" size="lg" asChild>
              <a href="/contact">Demander un devis</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}