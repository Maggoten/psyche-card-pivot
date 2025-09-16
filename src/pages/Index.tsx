import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="hide-on-mobile-landscape pt-8 md:pt-12">
        <Navigation className="mb-4 md:mb-6" />
      </header>

      {/* Hero Section */}
      <section className="px-4 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-border/20 mb-8">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
              Digital Transformation
              <span className="block text-muted-foreground">Made Simple</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-8 max-w-2xl mx-auto">
              We specialize in digitizing data capture processes, transforming unstructured information into organized, accessible formats that streamline operations and enhance customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="font-body text-sm uppercase tracking-widest px-8 py-3 h-auto rounded-sm">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="font-body text-sm uppercase tracking-widest px-8 py-3 h-auto rounded-sm">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/20">
              <h3 className="font-display text-xl font-medium tracking-tight text-foreground mb-4">
                Forms Management
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Convert complex paper forms into streamlined digital workflows, reducing processing time and eliminating errors.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/20">
              <h3 className="font-display text-xl font-medium tracking-tight text-foreground mb-4">
                Data Collection
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Web-based solutions for efficient data gathering, ensuring accuracy and compliance with modern standards.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/20">
              <h3 className="font-display text-xl font-medium tracking-tight text-foreground mb-4">
                System Integration
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Seamlessly connect your existing systems with new digital processes for optimal efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
