import React, { useEffect, useRef } from "react";

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

  useEffect(() => {
    if (!ref.current) return;
    if (kind === "email") {
      const [local, domain, tld] = parts;
      const addr = `${local}@${domain}.${tld}`;
      ref.current.href = `mailto:${addr}`;
      ref.current.textContent = display;
      ref.current.setAttribute("aria-label", addr);
    } else {
      const tel = parts.join("").replace(/[\s-]/g, "");
      ref.current.href = `tel:${tel}`;
      ref.current.textContent = display;
      ref.current.setAttribute("aria-label", display);
    }
  }, [kind, parts, display]);

  return <a ref={ref} className={className} rel="nofollow noopener" />;
}

const BusinessCard = ({ className = "" }: BusinessCardProps) => {
  return (
    <div className={`min-h-screen w-full flex items-center justify-center p-4 ${className}`}>
      {/* Card wrapper with wider aspect ratio */}
      <div className="relative w-[95vw] max-w-[960px] aspect-[7/3.8]">
        <div className="absolute inset-0 bg-[#F7F6F4] ring-1 ring-neutral-300/60 shadow-[0_10px_30px_rgba(0,0,0,0.10)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.02] overflow-hidden">
          {/* Subtle paper texture */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_0%,#ffffff_0%,#f3f2f0_60%,#eeedeb_100%)] opacity-[0.9]" />
          <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none" style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0.6'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            backgroundSize: "220px 220px",
          }} />
          <div className="absolute inset-0 ring-1 ring-white/70 shadow-inner" />

          {/* Content */}
          <div className="relative h-full w-full px-10 md:px-16">
            {/* Top row */}
            <div className="pt-9 flex items-start justify-between">
              <ObfuscatedContact
                kind="tel"
                parts={["+46", "79", "076", "6694"]}
                display="079 076 66 94"
                className="font-serif text-[18px] tracking-[0.02em] text-neutral-900"
              />
              <div className="text-right">
                <div className="text-[22px] md:text-[24px] font-serif tracking-[0.12em] uppercase text-neutral-900">
                  PREFORM IT
                </div>
                <div className="mt-1 text-[12px] tracking-[0.32em] uppercase text-neutral-500">
                  Data and Form
                </div>
              </div>
            </div>

            {/* Center */}
            <div className="h-[55%] flex flex-col items-center justify-center text-center">
              <div className="font-serif text-[36px] md:text-[40px] leading-tight text-neutral-900 tracking-[0.06em]">
                RON LUND
              </div>
              <div className="mt-2 text-[13px] tracking-[0.38em] uppercase text-neutral-500">
                Developer
              </div>
            </div>

            {/* Bottom row */}
            <div className="pb-9 flex items-end justify-between">
              <div className="text-[11px] leading-5 tracking-[0.16em] text-neutral-500">
                DROTTNINGHOLMSVÄGEN 342, 168&nbsp;73 BROMMA • ORGNR: 559127-9640
              </div>
              <ObfuscatedContact
                kind="email"
                parts={["ronlund91", "hotmail", "com"]}
                display="ronlund91 [at] hotmail [dot] com"
                className="text-[12px] tracking-[0.14em] text-neutral-700 underline underline-offset-4 decoration-neutral-400/60 hover:decoration-neutral-700 transition"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;