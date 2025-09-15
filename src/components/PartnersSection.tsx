interface PartnersSectionProps {
  className?: string;
}

const PartnersSection = ({ className = "" }: PartnersSectionProps) => {
  return (
    <section className={`text-center ${className}`}>
      <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-4">
        Partners
      </p>
      <div className="flex items-center justify-center space-x-8">
        <a 
          href="https://www.adobe.com/home"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-foreground tracking-wide hover:text-primary transition-colors"
        >
          Adobe
        </a>
        <div className="w-px h-4 bg-border"></div>
        <a 
          href="https://www.microsoft.com/sv-se/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-foreground tracking-wide hover:text-primary transition-colors"
        >
          Microsoft
        </a>
      </div>
    </section>
  );
};
export default PartnersSection;