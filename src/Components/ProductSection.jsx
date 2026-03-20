import { useState, useRef } from "react";

import { GiChemicalDrop, GiPlantWatering } from "react-icons/gi";
import { GrTest } from "react-icons/gr";
import { LiaRecycleSolid } from "react-icons/lia";
import { MdOutlineCrueltyFree } from "react-icons/md";
import { TbBiohazardOff } from "react-icons/tb";
import SingleImage from "./ProdImageCrousel";

const products = [
  {
    time: "MORNING",
    italic: "Focus",
    rest: " Ritual",
    steps: [
      "Apply on wrist or temple",
      "One slow inhale through the nose",
      "Hold the breath for four counts",
      "Built with Lavender, Clary Sage, Vetiver"
    ],
    signal: "Your brain receives the signal: begin.",
  },
  {
    time: "EVENING",
    italic: "Unwind",
    rest: " Night Ritual",
    steps: [
      "Two sprays on your linen or pillow",
      "Five slow breaths through your nose",
      "No screens for the next fifteen minutes",
      "Built with Rosemary, Peppermint, Basil, Frankincense"
    ],
    signal: "Your brain receives the signal: it is over.",
  },
];

const badges = [
  { icon: <GrTest />,   label: "LAB TESTED" },
  { icon: <TbBiohazardOff /> ,     label: "NON TOXIC" },
  { icon: <MdOutlineCrueltyFree />,     label: "CRUELTY FREE" },
  { icon: <GiPlantWatering />,    label: "NATURAL INGREDIENTS" },
  { icon: <GiChemicalDrop />,label: "PLANT BASED" },
  { icon: <LiaRecycleSolid />,   label: "INDIAN ORIGIN" },
  // { icon: <FaAtom />,    label: "PARABEN FREE" },
];

function WaitlistButton() {
  const [phase, setPhase] = useState("idle");
  const [ripples, setRipples] = useState([]);
  const [mouse, setMouse] = useState({ x: "50%", y: "50%" });
  const btnRef = useRef(null);
  const rippleCount = useRef(0);

  const handleMouseMove = (e) => {
    const r = btnRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const handleClick = (e) => {
    if (phase !== "idle") return;
    const r = btnRef.current.getBoundingClientRect();
    const id = rippleCount.current++;
    setRipples((prev) => [...prev, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setRipples((prev) => prev.filter((rp) => rp.id !== id)), 750);
    setPhase("loading");
    setTimeout(() => setPhase("done"), 1700);
  };

  return (
    <>
      <style>{`
        @keyframes ev-ripple {
          from { transform: scale(0); opacity: 0.35; }
          to   { transform: scale(5); opacity: 0; }
        }
        @keyframes ev-spin { to { transform: rotate(360deg); } }
        @keyframes ev-check {
          from { stroke-dashoffset: 22; opacity: 0; }
          to   { stroke-dashoffset: 0;  opacity: 1; }
        }
        @keyframes ev-slidein {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ev-march {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .ev-marching { position: relative; border-color: transparent !important; color: rgba(255,255,255,0.35) !important; }
        .ev-marching::before {
          content: "";
          position: absolute; inset: -1px;
          background: linear-gradient(90deg, #fff, #555, #fff, #333, #fff);
          background-size: 200% 100%;
          animation: ev-march 2s linear infinite;
          border-radius: inherit; z-index: 0;
        }
        .ev-marching::after {
          content: "";
          position: absolute; inset: 0px;
          background: #080808;
          border-radius: inherit; z-index: 1;
        }
        .ev-marching > * { position: relative; z-index: 2; }
      `}</style>

      <div className="flex flex-col items-center gap-3 mt-4">
        <button
          ref={btnRef}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          disabled={phase === "loading"}
          className={`relative overflow-hidden px-14 py-4 text-[10px] tracking-[0.22em] font-medium transition-all duration-300 select-none
            ${phase === "loading" ? "ev-marching border border-transparent cursor-default" : ""}
            ${phase === "done"    ? "border border-white/50 text-white" : ""}
            ${phase === "idle"    ? "border border-white/20 text-white/60 hover:border-white/50 hover:text-white" : ""}
          `}
          style={phase === "idle" ? {
            background: `radial-gradient(circle 55px at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.06) 0%, transparent 70%)`,
          } : {}}
        >
          {ripples.map((rp) => (
            <span
              key={rp.id}
              style={{
                position: "absolute", pointerEvents: "none",
                left: rp.x, top: rp.y,
                width: 60, height: 60,
                marginLeft: -30, marginTop: -30,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                animation: "ev-ripple 0.75s ease-out forwards",
              }}
            />
          ))}

          <span className="flex items-center justify-center gap-2.5 h-[14px]">
            {phase === "idle" && (
              <span  className="font-bold" style={{fontSize:"bold"   }}>JOIN THE WAITLIST</span>
            )}
            {phase === "loading" && (
              <>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                  style={{ animation: "ev-spin 0.85s linear infinite", flexShrink: 0 }}>
                  <circle cx="6.5" cy="6.5" r="5" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <path d="M6.5 1.5 A5 5 0 0 1 11.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>RESERVING YOUR KIT…</span>
              </>
            )}
            {phase === "done" && (
              <>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M2 7 L5 10 L11 3.5"
                    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="22"
                    style={{ animation: "ev-check 0.4s ease forwards" }}
                  />
                </svg>
                <span style={{ animation: "ev-slidein 0.3s ease" }}>YOU'RE ON THE LIST</span>
              </>
            )}
          </span>
        </button>

        
      </div>
    </>
  );
}

function ProductCard({ product }) {
  return (
    <div className="flex flex-col pt-1">
      <p className="text-[11px] tracking-[0.28em] text-white mb-4 flex items-center gap-3">
        {product.time}
        <span className="inline-block w-10 h-px bg-white/15" />
      </p>
      <h2 className="font-serif text-4xl leading-tight text-white mb-6">
        <em className="italic font-semibold">{product.italic}</em>
        {product.rest}
      </h2>
      <div>
        {product.steps.map((step, i) => (
          <div key={i} className="py-3 border-b border-white/[0.07]">
            <p className="text-white/90 text-sm leading-relaxed">{step}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-white/70 text-[15px] italic font-serif leading-relaxed">
        {product.signal}
      </p>
    </div>
  );
}

function CenterImage() {
  return (
    <div className="flex flex-col items-center pt-8 px-8">
      <div className="relative w-96 flex-shrink-0 rounded-sm overflow-hidden border border-white/[0.08]"
       >
        <img
          src="https://res.cloudinary.com/dgfxvpxbr/image/upload/v1773753065/WhatsApp_Image_2026-03-17_at_8.57.25_AM_hpzpd4.jpg"
          alt="Esvaya Ritual Kit"
          className="w-full h-[300px] "
        />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
      
    </div>
  );
}

function ArchitectureSection() {
  return (
    <section className="px-10 text-center max-w-3xl mx-auto">
      <div className="w-px h-16 bg-white/10 mx-auto mb-12" />
      <p className="text-[11px] tracking-[0.28em] font-semibold text-white mb-8">THE ARCHITECTURE</p>
      <h2 className="font-serif text-5xl md:text-6xl leading-tight text-white mb-6">
        Two Products.<br />30 days Ritual.<br />One System
      </h2>
      <p className="text-white text-xl font-semibold tracking-widest leading-relaxed py-8">
        Exclusive Access to Founder's Edition<br />
      </p>
    </section>
  );
}

function RitualKitSection() {
  return (
    <section className="py-20 px-10">
      <div className="max-w-2xl mx-auto text-center">
        <div className="border-t border-white/[0.07] pt-12">
          <p className="text-[12px] tracking-[0.25em] text-white mb-4">
            FOUNDER'S EDITION · 150 KITS ONLY
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-3">
            The Esvaya Ritual Kit
          </h2>
          {/* <p className="font-serif text-5xl text-white mb-2">1,199</p> */}
          {/* <p className="text-[11px] tracking-widest text-white/50 mb-8">
            INCL. ALL TAXES · FREE SHIPPING
          </p> */}
          <WaitlistButton />
        </div>
      </div>
    </section>
  );
}

function BadgesSection() {
  return (
    <section className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-12">

        {badges.map((b) => (
          <div
            key={b.label}
            className="flex flex-col items-center gap-2 sm:gap-3 w-1/3 sm:w-auto"
          >

            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-black/20 flex items-center justify-center text-black/55 text-sm sm:text-base hover:border-black/60 hover:text-black transition-colors duration-200 cursor-default">
              {b.icon}
            </div>

            <p className="text-[8px] sm:text-[9px] tracking-[0.22em] text-black font-bold text-center">
              {b.label}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}


export default function EsvayaProductSection() {
  return (

    <>
  
   
    <div className="bg-[#000000] min-h-screen py-20" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
      `}</style>
       
      {/* Intro */}
      <section className="pt-16 pb-0  px-10 text-center max-w-3xl mx-auto">
        <p className="font-serif text-xl md:text-2xl text-white/85 italic leading-relaxed">
          We heard you, and built something you can use in two minutes. Integrated in your daily
          routine to help you in deep sleep and strong focus.
        </p>
      </section>

      {/* Architecture */}
      <ArchitectureSection />

      {/* Products — 3 column: card | image | card */}
      <section className="px-10 pb-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0">
        <ProductCard product={products[0]} />
        <CenterImage />
        <ProductCard product={products[1]} />
      </section>

      {/* Kit CTA */}
      <RitualKitSection />

      {/* Badges */}
      <BadgesSection />
    </div>
     </>
  );
}