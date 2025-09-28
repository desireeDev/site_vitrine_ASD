import { Settings, Trophy, Users } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: Settings,
      title: "Innovation",
      description:
        "Nous encourageons la créativité et la pensée avant-gardiste pour développer des solutions révolutionnaires.",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description:
        "Nous visons les plus hauts standards dans tout ce que nous entreprenons, en offrant une qualité et une valeur exceptionnelles.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Nous travaillons en étroite collaboration avec nos clients, favorisant des partenariats solides et atteignant des succès partagés.",
    },
  ];

  return (
    <section className="section-padding bg-corporate-gray-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Valeurs Fondamentales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous sommes guidés par un ensemble de valeurs fondamentales qui définissent notre approche et notre engagement envers nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="card-corporate text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
