import { Card } from "@/components/ui/card";
import PreFormITLogo from "@/assets/PreFormITLogo_noText.svg";

interface BusinessCardProps {
  className?: string;
}

const BusinessCard = ({ className = "" }: BusinessCardProps) => {
  return (
    <Card className={`business-card p-8 md:p-12 max-w-4xl mx-auto landscape:max-w-5xl landscape:aspect-[9/5] ${className}`}>
      <div className="h-full flex flex-col justify-between">
        {/* Top Row */}
        <div className="flex justify-between items-center">
          {/* Phone Number - Left */}
          <div className="text-foreground font-body text-lg md:text-xl font-medium tracking-wide">
            0790766694
          </div>
          
          {/* Company Info - Right */}
          <div className="text-right">
            <h1 className="font-display text-xl md:text-2xl lg:text-3xl font-medium tracking-widest text-foreground">
              PREFORMIT
            </h1>
            <p className="font-body text-sm md:text-base lg:text-lg text-muted-foreground tracking-widest mt-1">
              DATA AND FORM
            </p>
          </div>
        </div>

        {/* Center Content */}
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide text-foreground">
            RON LUND
          </h2>
          <p className="font-body text-base md:text-lg lg:text-xl text-muted-foreground tracking-widest mt-2">
            DEVELOPER
          </p>
        </div>

        {/* Bottom Row */}
        <div className="text-center">
          <p className="font-body text-xs md:text-sm text-muted-foreground tracking-wide">
            DROTTNINGHOLMSVÄGEN 342, 168 73 BROMMA, ORGNR:559127-9640, GODKÄND FÖR F-SKATT
          </p>
        </div>
      </div>
    </Card>
  );
};

export default BusinessCard;