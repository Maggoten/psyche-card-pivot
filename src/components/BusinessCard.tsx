import { Card } from "@/components/ui/card";
import PreFormITLogo from "@/assets/PreFormITLogo_noText.svg";

interface BusinessCardProps {
  className?: string;
}

const BusinessCard = ({ className = "" }: BusinessCardProps) => {
  return (
    <Card className={`business-card p-8 md:p-12 max-w-md mx-auto ${className}`}>
      <div className="text-center space-y-6">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={PreFormITLogo} 
            alt="PreForm IT Logo" 
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Company Name */}
        <div className="space-y-3">
          <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            PreForm IT
          </h1>
          
          {/* Separator Line */}
          <div className="w-16 h-px bg-border mx-auto"></div>
        </div>

        {/* Description */}
        <p className="font-body text-sm md:text-base text-muted-foreground tracking-wide leading-relaxed">
          Professional IT Solutions
        </p>

        {/* Partners */}
        <div className="pt-6">
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
            <div className="text-xs font-medium text-foreground tracking-wide">
              Microsoft
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="pt-6 space-y-2">
          <div className="text-xs text-muted-foreground font-body tracking-wide">
            www.preformit.se
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BusinessCard;