import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {

  const navigate = useNavigate();
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Superposition (overlay) */}
      <div className="absolute inset-0 gradient-hero"></div>

      {/* Contenu */}
      <div className="relative z-10 container-custom px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-float">
            Accompagner les entreprises avec{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              des solutions innovantes
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Nous offrons des technologies de pointe et des conseils stratégiques
            pour stimuler la croissance et améliorer l’efficacité de votre entreprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-hero"
                 onClick={() => navigate("/services")}>
              Découvrir nos services
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              onClick={() => navigate("/about")}
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
