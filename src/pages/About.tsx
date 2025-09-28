import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Users, Target, Globe, Award } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Chen",
      position: "CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "David Lee",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      position: "Responsable Marketing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Michael Brown",
      position: "Responsable Commercial",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "Nous recherchons constamment des solutions nouvelles et créatives pour répondre aux besoins évolutifs de nos clients.",
    },
    {
      title: "Orientation Client",
      description:
        "Nous plaçons la réussite de nos clients au centre de nos priorités et nous nous efforçons de dépasser leurs attentes.",
    },
    {
      title: "Intégrité",
      description:
        "Nous respectons les normes éthiques les plus élevées dans toutes nos interactions et opérations.",
    },
    {
      title: "Efficacité",
      description:
        "Nous nous engageons à fournir des résultats rapidement et efficacement.",
    },
  ];

  const impact = [
    { number: "500+", label: "Clients servis" },
    { number: "1000+", label: "Projets réalisés" },
    { number: "10", label: "Années d'activité" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Notre Histoire */}
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Notre Histoire</h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Chez ASD Solutions, nous sommes animés par une passion pour l’innovation
                et un engagement envers l’excellence. Notre aventure a commencé avec une idée simple : 
                créer des technologies qui permettent aux entreprises de prospérer dans un monde en rapide évolution. 
                Aujourd’hui, nous sommes un leader mondial dans la fourniture de solutions de pointe qui transforment les industries et stimulent la croissance.
              </p>
            </div>
          </div>
        </section>

        {/* Notre Mission */}
        <section className="section-padding bg-corporate-gray-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Notre Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Notre mission est de permettre aux entreprises de réussir grâce à des solutions technologiques innovantes 
                  qui favorisent la croissance, l’efficacité et le succès. Nous croyons au pouvoir de la technologie 
                  pour transformer les industries et créer un avenir meilleur pour tous.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="p-8 bg-primary/10 rounded-3xl">
                  <Target className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rencontre avec l'Équipe */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Rencontrez l'Équipe
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-6 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="section-padding bg-corporate-gray-light">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nos Valeurs
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card-corporate">
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre Impact */}
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Notre Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impact.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                    {item.number}
                  </div>
                  <div className="text-lg text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rejoignez Notre Équipe */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez Notre Équipe
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Prêt à avoir un impact ? Nous recherchons des personnes talentueuses pour nous rejoindre.
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Voir les postes disponibles
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
