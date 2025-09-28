import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, TechForward",
      content:
        "ASD Solutions a transformé nos opérations. Leur expertise et leur engagement sont inégalés. Nous avons constaté un retour sur investissement significatif depuis notre collaboration.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      position: "Directrice Marketing, Growth Inc",
      content:
        "L'équipe d'ASD Solutions est extrêmement réactive et compétente. Ils ont livré un produit qui a dépassé nos attentes, dans les délais et le budget impartis.",
      rating: 5,
    },
    {
      name: "Samuel Green",
      position: "COO, MarketCorp",
      content:
        "Travailler avec ASD Solutions a été un véritable tournant. Leurs conseils stratégiques nous ont aidés à naviguer dans un marché complexe et à atteindre nos objectifs de croissance.",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous sommes fiers d’avoir collaboré avec une diversité de clients,
            en fournissant des résultats qui parlent d’eux-mêmes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-corporate hover:scale-105 transition-transform duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
