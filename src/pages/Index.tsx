import BusinessCard from "@/components/BusinessCard";
import Navigation from "@/components/Navigation";
import PartnersSection from "@/components/PartnersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="hide-on-mobile-landscape pt-8 md:pt-12">
        <Navigation className="mb-8 md:mb-12" />
      </header>

      {/* Main Content */}
      <main className="business-card-container px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Business Card - Always visible */}
            <div className="order-2 lg:order-1">
              <BusinessCard />
            </div>

            {/* Partners Section - Hidden on mobile landscape */}
            <div className="order-1 lg:order-2 hide-on-mobile-landscape">
              <PartnersSection />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="hide-on-mobile-landscape pb-8 text-center">
        <p className="text-xs text-muted-foreground font-body tracking-wide">
          Professional IT Solutions
        </p>
      </footer>
    </div>
  );
};

export default Index;
