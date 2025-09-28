import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pret pour propulser votre entreprise ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
           Ici on s'occupe de tous.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contactez nous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;