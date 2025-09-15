import { Card } from "@/components/ui/card";

interface BusinessCardProps {
  className?: string;
}

const BusinessCard = ({ className = "" }: BusinessCardProps) => {
  return (
    <Card className={`business-card p-8 md:p-12 max-w-md mx-auto ${className}`}>
      <div className="text-center space-y-6">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-primary-foreground rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-primary-foreground rounded-sm"></div>
            </div>
          </div>
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
            <div className="text-xs font-medium text-foreground tracking-wide">
              Adobe
            </div>
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