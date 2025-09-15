import { Card } from "@/components/ui/card";
import PreFormITLogo from "@/assets/PreFormITLogo_noText.svg";

interface BusinessCardProps {
  className?: string;
}

const BusinessCard = ({ className = "" }: BusinessCardProps) => {
  return (
    <Card className={`business-card p-8 md:p-12 max-w-md mx-auto landscape:max-w-2xl landscape:aspect-[1.75/1] ${className}`}>
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