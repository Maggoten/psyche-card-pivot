import Navigation from "@/components/Navigation";
import PartnersSection from "@/components/PartnersSection";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="hide-on-mobile-landscape pt-8 md:pt-12">
        <Navigation className="mb-4 md:mb-6" />
      </header>

      {/* About Us Section */}
      <section className="px-4 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/20">
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-6 text-center">
              About Us
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                We are dedicated to driving digitalisation in data capture—whether the information originates from digital forms or traditional paper documents. Our mission is to transform unstructured data into well-organized, accessible formats that make it effortless for both organizations and their customers to interact and exchange services. Success for us means enabling seamless access to information and improving the customer experience.
              </p>
              <p>
                Over the years, we have partnered with leading institutions such as The Swedish Social Insurance Agency, The Swedish Tax Agency, The Swedish Police, Handelsbanken, and SPP, delivering reliable solutions for forms management and web-based data collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="hide-on-mobile-landscape">
            <PartnersSection />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;