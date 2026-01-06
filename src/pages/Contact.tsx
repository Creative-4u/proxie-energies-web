import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 7 71 24 53 55",
    href: "tel:+33771245355"
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@proxieenergies.fr",
    href: "mailto:contact@proxieenergies.fr"
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Caen, Normandie",
    href: null
  },
  {
    icon: Clock,
    label: "Disponibilité",
    value: "Dépannage 24/7",
    href: null
  }
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-hero">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Contactez-nous
            </h1>
            <p className="text-white/80 text-lg">
              Un projet, une question ou une urgence ? Notre équipe est à votre écoute.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Demande de devis gratuit
              </h2>
              <p className="text-muted-foreground mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.fr"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service concerné *
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fibre">Fibre Optique</SelectItem>
                        <SelectItem value="courant-fort">Courant Fort</SelectItem>
                        <SelectItem value="depannage">Dépannage Urgence</SelectItem>
                        <SelectItem value="sous-traitance">Sous-traitance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Votre message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="font-semibold text-foreground hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Zone d'intervention */}
              <div className="bg-muted rounded-2xl p-6 mb-8">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                  Zone d'intervention
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nous intervenons sur toute la Normandie :
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {["Calvados (14)", "Seine-Maritime (76)", "Eure (27)", "Manche (50)", "Orne (61)"].map((dept, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>{dept}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-card h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410694685!2d-0.4192635!3d49.1829098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a42ac88713d45%3A0x4083b1eb5ca2dcd3!2sCaen!5e0!3m2!1sfr!2sfr!4v1704628800000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation PROXIE ENERGIES - Caen, Normandie"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 gradient-hero">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              Besoin d'une réponse rapide ?
            </h2>
            <p className="text-white/80 mb-8">
              Contactez-nous directement sur WhatsApp pour un échange instantané.
            </p>
            <a
              href="https://wa.me/33771245355?text=Bonjour, je souhaite obtenir un devis pour vos services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="xl">
                Contacter sur WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}