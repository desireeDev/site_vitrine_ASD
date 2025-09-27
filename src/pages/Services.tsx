import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Database,
  Cloud,
  Shield,
  BarChart3,
  Users,
  MessageSquare,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Customer Relationship Management (CRM)",
      description:
        "Streamline sales, enhance customer interactions, and improve overall satisfaction.",
      features: [
        "Lead Management",
        "Sales Pipeline Tracking",
        "Customer Analytics",
        "Automated Follow-ups",
      ],
    },
    {
      icon: BarChart3,
      title: "Enterprise Resource Planning (ERP)",
      description:
        "Integrate and automate core business processes like finance, HR, and supply chain.",
      features: [
        "Financial Management",
        "Inventory Control",
        "HR Management",
        "Supply Chain Optimization",
      ],
    },
    {
      icon: Database,
      title: "Business Intelligence (BI)",
      description:
        "Gain valuable insights from your data for data-driven decision-making and improved performance.",
      features: [
        "Data Visualization",
        "Real-time Analytics",
        "Custom Dashboards",
        "Predictive Analysis",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description:
        "Leverage our secure and scalable cloud solutions, including IaaS, PaaS, and SaaS.",
      features: [
        "Cloud Migration",
        "Infrastructure as a Service",
        "Platform as a Service",
        "Software as a Service",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Protect your business from cyber threats with comprehensive threat detection, prevention, and response.",
      features: [
        "Threat Detection",
        "Security Audits",
        "Data Encryption",
        "Incident Response",
      ],
    },
  ];

  const customSolution = {
    title: "Custom Solutions",
    description:
      "Need something more specific? We build custom solutions tailored to your unique business needs.",
    cta: "Contact Us",
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container-custom text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Our Enterprise Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive suite of solutions designed to address
              your business challenges and drive growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="card-corporate hover:scale-[1.02] transition-transform duration-300 group"
                  >
                    <div className="mb-6 flex items-start justify-between">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="btn-primary w-full group-hover:shadow-lg">
                      Learn More
                    </Button>
                  </div>
                );
              })}
            </div>

            {/* Custom Solutions */}
            <div className="text-center">
              <div className="card-corporate max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {customSolution.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {customSolution.description}
                </p>
                <Button variant="outline" className="btn-outline">
                  {customSolution.cta}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Transform your business with our enterprise solutions. Contact us
              today to discuss your specific needs.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Our Team
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;