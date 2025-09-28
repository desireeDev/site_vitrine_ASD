// src/components/sections/AboutSection.tsx

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            À propos de ASD Solutions
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Chez ASD Solutions, nous nous engageons à transformer les entreprises
              grâce à la technologie. Axés sur l’innovation et la réussite de nos clients, 
              nous proposons des solutions sur mesure qui répondent à vos défis et à vos opportunités. 
              Notre équipe d’experts apporte une connaissance approfondie du secteur et 
              une expertise technique à chaque projet, garantissant des résultats exceptionnels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
