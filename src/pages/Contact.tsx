import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Formulaire de contact */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Contactez-nous
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Nous sommes là pour vous aider. Contactez-nous pour toute question ou demande d’assistance.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input
                        id="firstName"
                        placeholder="Entrez votre prénom"
                        className="rounded-xl border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input
                        id="lastName"
                        placeholder="Entrez votre nom"
                        className="rounded-xl border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Entrez votre adresse email"
                      className="rounded-xl border-border focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Entreprise</Label>
                    <Input
                      id="company"
                      placeholder="Entrez le nom de votre entreprise"
                      className="rounded-xl border-border focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Numéro de téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Entrez votre numéro de téléphone"
                      className="rounded-xl border-border focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Entrez votre message"
                      rows={6}
                      className="rounded-xl border-border focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>

                  <Button className="btn-primary w-full py-4 text-lg">
                    Envoyer
                  </Button>
                </form>
              </div>

              {/* Informations de contact */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Nos Localisations</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Rendez-nous visite dans nos bureaux ou contactez-nous par téléphone ou email.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        123 Rue de l’Innovation, Tech City, CA 90210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a
                        href="mailto:support@asdsoultions.com"
                        className="text-primary hover:underline"
                      >
                        support@asdsoultions.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Carte */}
                <div className="mt-12">
                  <div className="bg-corporate-gray-light rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Carte interactive bientôt disponible
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
