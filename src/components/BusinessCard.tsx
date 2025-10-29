import React, { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface BusinessCardProps {
  className?: string;
}

function ObfuscatedContact({
  kind,
  parts,
  display,
  className,
}: {
  kind: "email" | "tel";
  parts: string[];
  display: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isActivated, setIsActivated] = React.useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    // Decode base64 encoded parts
    const decodedParts = parts.map(p => atob(p));
    
    // Add delay to make it harder for bots to scrape
    const timer = setTimeout(() => {
      if (!ref.current) return;
      
      if (kind === "email") {
        const [local, domain, tld] = decodedParts;
        const addr = `${local}@${domain}.${tld}`;
        ref.current.textContent = display;
        ref.current.setAttribute("aria-label", addr);
        ref.current.setAttribute("data-contact", "email");
        
        // Only set href when activated (on interaction)
        if (isActivated) {
          ref.current.href = `mailto:${addr}`;
        }
      } else {
        const tel = decodedParts.join("").replace(/[\s-]/g, "");
        ref.current.textContent = display;
        ref.current.setAttribute("aria-label", display);
        ref.current.setAttribute("data-contact", "phone");
        
        // Only set href when activated (on interaction)
        if (isActivated) {
          ref.current.href = `tel:${tel}`;
        }
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [kind, parts, display, isActivated]);

  const handleInteraction = () => {
    setIsActivated(true);
  };

  return (
    <a 
      ref={ref} 
      className={className} 
      rel="nofollow noopener"
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction}
      onFocus={handleInteraction}
      data-obf="true"
    />
  );
}

function ObfuscatedText({
  parts,
  display,
  className,
  tag = "div",
}: {
  parts: string[];
  display: string;
  className?: string;
  tag?: "div" | "span";
}) {
  const ref = useRef<HTMLDivElement | HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.textContent = display;
  }, [parts, display]);

  if (tag === "span") {
    return <span ref={ref as React.RefObject<HTMLSpanElement>} className={className} />;
  }
  return <div ref={ref as React.RefObject<HTMLDivElement>} className={className} />;
}

const BusinessCard = ({ className = "" }: BusinessCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`${isMobile ? 'h-screen landscape:overflow-hidden' : 'h-screen overflow-hidden'} w-full flex ${isMobile ? 'items-start pt-8 landscape:items-center landscape:pt-2' : 'items-center'} justify-center ${isMobile ? 'px-4 py-2 landscape:py-2' : 'p-4'} ${className}`}>
      {/* Card wrapper with standard business card aspect ratio */}
      <div className={`relative ${isMobile ? 'w-[92vw] max-w-[92vw] max-h-[calc(100vh-120px)] landscape:scale-90' : 'w-[95vw] max-w-[840px]'} aspect-[7/4]`}>
        <div className={`absolute inset-0 bg-[#F0EEE2] ring-1 ring-neutral-300/60 shadow-[0_15px_40px_rgba(0,0,0,0.15)] ${!isMobile ? 'hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)] hover:scale-[1.02]' : ''} transition-all duration-300 overflow-hidden`}>
          {/* Subtle paper texture */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_0%,#ffffff_0%,#f3f2f0_60%,#eeedeb_100%)] opacity-[0.9]" />
          <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none" style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0.6'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            backgroundSize: "220px 220px",
          }} />
          <div className="absolute inset-0 ring-1 ring-white/70 shadow-inner" />

          {/* Content */}
          <div className="relative h-full w-full px-10 md:px-16 py-9 flex flex-col justify-between">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <ObfuscatedContact
                kind="tel"
                parts={["KzQ2", "Nzk=", "MDc2", "NjY5NA=="]}
                display="079 076 66 94"
                className={`font-didot ${isMobile ? 'text-[16px]' : 'text-[18px]'} tracking-[0.02em] text-neutral-900 ${isMobile ? 'min-h-[44px] flex items-center' : ''} ${!isMobile ? 'hover:text-neutral-700' : ''} transition-colors active:text-neutral-600`}
              />
              <div className="text-right">
                <ObfuscatedText
                  parts={["PREFORM", "IT"]}
                  display="PREFORM IT"
                  className={`${isMobile ? 'text-[20px]' : 'text-[22px] md:text-[24px]'} font-serif tracking-[0.12em] uppercase text-neutral-900`}
                />
                <ObfuscatedText
                  parts={["Data", "and", "Form"]}
                  display="Data and Form"
                  className={`mt-1 ${isMobile ? 'text-[14px]' : 'text-[15.5px]'} tracking-[0.24em] uppercase text-neutral-500`}
                />
              </div>
            </div>

            {/* Center */}
            <div className="flex flex-col items-center justify-center text-center">
              <ObfuscatedText
                parts={["RON", "LUND"]}
                display="RON LUND"
                className={`font-serif ${isMobile ? 'text-[32px]' : 'text-[36px] md:text-[40px]'} leading-tight text-neutral-900 tracking-[0.06em]`}
              />
              <ObfuscatedText
                parts={["Developer"]}
                display="Developer"
                className={`mt-2 ${isMobile ? 'text-[12px]' : 'text-[13px]'} tracking-[0.38em] uppercase text-neutral-500`}
              />
            </div>

            {/* Bottom row */}
            <div className="flex items-end justify-between">
              <ObfuscatedText
                parts={["DROTTNINGHOLMSVÄGEN", "342,", "168", "73", "BROMMA", "•", "ORGNR:", "559127-9640"]}
                display="DROTTNINGHOLMSVÄGEN 342, 168 73 BROMMA • ORGNR: 559127-9640"
                className={`${isMobile ? 'text-[10px]' : 'text-[11px]'} leading-none tracking-[0.16em] text-neutral-500`}
              />
              <ObfuscatedContact
                kind="email"
                parts={["cm9uLmx1bmQ=", "cHJlZm9ybWl0", "c2U="]}
                display="ron.lund [at] preformit [dot] se"
                className={`${isMobile ? 'text-[10px] min-h-[44px] flex items-center' : 'text-[11px]'} leading-none tracking-[0.14em] text-neutral-700 underline underline-offset-2 decoration-neutral-400/60 ${!isMobile ? 'hover:decoration-neutral-700' : ''} transition active:decoration-neutral-700`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;