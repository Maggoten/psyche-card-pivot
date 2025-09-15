import BusinessCard from "@/components/BusinessCard";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="hide-on-mobile-landscape pt-8 md:pt-12">
        <Navigation className="mb-8 md:mb-12" />
      </header>

      {/* Main Content */}
      <main className="business-card-container h-full">
        <BusinessCard />
      </main>

    </div>
  );
};

export default Index;
