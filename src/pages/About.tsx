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
      position: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Michael Brown",
      position: "Head of Sales",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We constantly seek new and creative solutions to meet the evolving needs of our clients.",
    },
    {
      title: "Customer Focus",
      description:
        "We prioritize our customers' success and strive to exceed their expectations.",
    },
    {
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our interactions and operations.",
    },
    {
      title: "Efficiency",
      description:
        "We are committed to delivering results quickly and effectively.",
    },
  ];

  const impact = [
    { number: "500+", label: "Customers Served" },
    { number: "1000+", label: "Projects Completed" },
    { number: "10", label: "Years in Business" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Our Story */}
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Story</h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                At Innovate Solutions, we're driven by a passion for innovation
                and a commitment to excellence. Our journey began with a simple
                idea: to create technology that empowers businesses to thrive in
                a rapidly changing world. Today, we're a global leader in
                providing cutting-edge solutions that transform industries and
                drive growth.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="section-padding bg-corporate-gray-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to empower businesses with innovative technology
                  solutions that drive growth, efficiency, and success. We
                  believe in the power of technology to transform industries and
                  create a better future for all.
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

        {/* Meet the Team */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet the Team
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

        {/* Our Values */}
        <section className="section-padding bg-corporate-gray-light">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Values
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

        {/* Our Impact */}
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Our Impact</h2>
            
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

        {/* Join Our Team */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ready to make an impact? We're looking for talented individuals to
              join us.
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              View Open Positions
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;