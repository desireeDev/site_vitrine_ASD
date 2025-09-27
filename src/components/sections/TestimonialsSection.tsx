import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, TechForward",
      content:
        "Innovate Solutions transformed our operations. Their expertise and dedication are unmatched. We've seen a significant ROI since partnering with them.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      position: "Marketing Director, Growth Inc",
      content:
        "The team at Innovate Solutions is incredibly responsive and knowledgeable. They delivered a product that exceeded our expectations on time and within budget.",
      rating: 5,
    },
    {
      name: "Samuel Green",
      position: "COO, MarketCorp",
      content:
        "Working with Innovate has been a game-changer. Their strategic insights helped us navigate a complex market and achieve our growth targets.",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to have partnered with a diverse range of clients,
            delivering results that speak for themselves.
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