import { Card } from "@/components/ui/card";
import { QRCodeSVG } from "qrcode.react";

interface BusinessCardProps {
  className?: string;
}

// Simple obfuscation component for contact details
const ObfuscatedText = ({ children }: { children: string }) => {
  return (
    <span 
      style={{ 
        unicodeBidi: 'bidi-override', 
        direction: 'rtl' 
      }}
      onCopy={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText(children);
      }}
    >
      {children.split('').reverse().join('')}
    </span>
  );
};

const BusinessCard = ({ className = "" }: BusinessCardProps) => {
  return (
    <Card className={`business-card p-6 md:p-8 max-w-2xl mx-auto aspect-[9/5] rounded-2xl shadow-lg ${className}`}>
      <div className="flex h-full items-center justify-between gap-8">
        {/* Left Block: Brand + Tagline + Services */}
        <div className="flex-1 space-y-4">
          {/* Brand Name */}
          <div className="space-y-2">
            <h1 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              PreForm IT
            </h1>
            {/* Accent line under brand name */}
            <div className="w-12 h-px bg-foreground/30"></div>
          </div>
          
          {/* Tagline */}
          <p className="font-display text-lg md:text-xl text-foreground/80 font-medium">
            Data & Forms
          </p>
          
          {/* Primary Person */}
          <p className="font-body text-sm text-muted-foreground">
            Ron Lund — Developer
          </p>
          
          {/* Services */}
          <div className="space-y-1">
            <ul className="font-body text-xs md:text-sm text-muted-foreground space-y-0.5 leading-tight">
              <li>• AEM Forms & Sites</li>
              <li>• Adobe LiveCycle</li>
              <li>• Frontend (Vue/React)</li>
              <li>• Digital Archiving</li>
            </ul>
          </div>
        </div>
        
        {/* Right Block: Contact Details + QR Code */}
        <div className="flex flex-col justify-between h-full min-w-0">
          {/* Contact Details */}
          <div className="space-y-2 text-right">
            <div className="font-body text-xs md:text-sm text-muted-foreground">
              <ObfuscatedText>079-076 66 94</ObfuscatedText>
            </div>
            <div className="font-body text-xs md:text-sm text-muted-foreground break-all">
              <ObfuscatedText>Ronlund@preformit.se</ObfuscatedText>
            </div>
          </div>
          
          {/* QR Code */}
          <div className="flex justify-end">
            <QRCodeSVG 
              value="https://www.preformit.se" 
              size={48}
              bgColor="transparent"
              fgColor="currentColor"
              className="text-muted-foreground/60"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BusinessCard;