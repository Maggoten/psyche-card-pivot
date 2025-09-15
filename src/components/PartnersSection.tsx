interface PartnersSectionProps {
  className?: string;
}

const PartnersSection = ({ className = "" }: PartnersSectionProps) => {
  return (
    <section className={`text-center ${className}`}>
      <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8 tracking-tight">
        Partners
      </h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Adobe */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <a 
            href="https://www.adobe.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-muted-foreground tracking-wide hover:text-primary transition-colors"
          >
            Adobe
          </a>
        </div>

        {/* Microsoft */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <a 
            href="https://www.microsoft.com/sv-se/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-muted-foreground tracking-wide hover:text-primary transition-colors"
          >
            Microsoft
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;