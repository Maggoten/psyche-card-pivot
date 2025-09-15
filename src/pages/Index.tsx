import BusinessCard from "@/components/BusinessCard";
import Navigation from "@/components/Navigation";

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
          <div className="flex justify-center">
            <BusinessCard />
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
