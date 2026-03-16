import { useState, useRef } from "react";

const products = [
  {
    time: "MORNING",
    italic: "Focus",
    rest: " Ritual",
    steps: [
      "Apply on wrist or temple",
      "One slow inhale through the nose",
      "Hold the breath for four counts",
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
    ],
    signal: "Your brain receives the signal: it is over.",
  },
];

const badges = [
  { icon: "✓", label: "LAB TESTED" },
  { icon: "☺", label: "NON TOXIC" },
  { icon: "⊞", label: "CRUELTY FREE." },
  { icon: "♦", label: "NATURAL INGREDIENTS" },
  { icon: "◎", label: "PLANT BASED" },
  { icon: "≡", label: "INDIAN ORIGIN" },
  { icon: "◉", label: "PARABEN FREE" },
];

function ProductCard({ product }) {
  return (
    <div className="flex gap-10 items-start">
      <div className="w-[200px] flex-shrink-0 aspect-[3/4] bg-[#111] rounded-sm border border-white/10" />
      <div className="flex-1 pt-1">
        <p className="text-[12px] tracking-[0.25em] text-white mb-4 flex items-center gap-3">
          {product.time}
          <span className="inline-block w-12 h-px bg-white/15" />
        </p>
        <h2 className="font-serif text-4xl leading-tight text-white mb-6">
          <em style={{ fontStyle: "italic" }} className="text-white font-bold">
            {product.italic}
          </em>
          {product.rest}
        </h2>
        <div className="space-y-0">
          {product.steps.map((step, i) => (
            <div key={i} className="flex gap-4 items-start py-3 border-b border-white/8">
              {/* <span className="text-[10px] text-white/20 mt-0.5 w-3">{i + 1}.</span> */}
              <p className="text-white text-md leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-white  text-md italic leading-relaxed">{product.signal}</p>
      </div>
    </div>
  );
}

function ArchitectureSection() {
  return (
    <section className=" px-10 text-center max-w-3xl mx-auto">
      <div className="w-px h-16 bg-white/10 mx-auto mb-12" />
      <p className="text-[28px] tracking-[0.25em] font-bold text-white mb-8">THE ARCHITECTURE</p>
      <h2 className="font-serif text-4xl md:text-6xl leading-tight text-white mb-8 mb-6">
        Two Products. <br/>30 days Ritual. <br/>One System{" "}
        
      </h2>
      <p className="text-white text-2xl mt-8 py-10 font-bold leading-relaxed ">
                       Exclusive Access to Founder’s Edition
                              The Esvaya Ritual Kit
                                     

      </p>
      
    </section>
  );
}

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
        @keyframes ev-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes ev-check {
          from { stroke-dashoffset: 22; opacity: 0; }
          to   { stroke-dashoffset: 0;  opacity: 1; }
        }
        @keyframes ev-slidein {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ev-border-march {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .ev-marching-border { position: relative; }
        .ev-marching-border::before {
          content: "";
          position: absolute;
          inset: -1px;
          background: linear-gradient(90deg, #fff, #555, #fff, #333, #fff);
          background-size: 200% 100%;
          animation: ev-border-march 2s linear infinite;
          border-radius: inherit;
          z-index: 0;
        }
        .ev-marching-border::after {
          content: "";
          position: absolute;
          inset: 0px;
          background: #000;
          border-radius: inherit;
          z-index: 1;
        }
        .ev-marching-border > * { position: relative; z-index: 2; }
      `}</style>

      <div className="flex flex-col items-center gap-3 mt-4">
        <button
          ref={btnRef}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          disabled={phase === "loading"}
          className={`relative overflow-hidden px-14 py-4 text-xs tracking-[0.2em] transition-colors duration-400 select-none
            ${phase === "loading" ? "ev-marching-border border-transparent text-white/40 cursor-default" : ""}
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
              <span style={{ animation: "ev-slidein 0.25s ease" }}>JOIN THE WAITLIST</span>
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

        <p className="text-[9px] tracking-[0.2em] text-white/12">
          LIMITED TO 150 KITS · SHIPPING BEGINS MONTH 1
        </p>
      </div>
    </>
  );
}

function RitualKitSection() {
  return (
    <section className="py-20 px-10">
      <div className="max-w-2xl mx-auto">
       
        <div className="border-t border-white/8 pt-12 text-center">
          <p className="text-[15px] tracking-[0.25em] text-white mb-4">
            FOUNDER'S EDITION · 150 KITS ONLY
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-3">The Esvaya Ritual Kit</h2>
         
          <div className="mb-8 justify-center ml-15">
            <span className="font-serif text-5xl text-white text-center ">₹1,199</span>
          </div>
           <span className="text-white text-[15px] tracking-widest ml-3">
              INCL. ALL TAXES · FREE SHIPPING
            </span>
          <WaitlistButton />
        </div>
      </div>
    </section>
  );
}

function BadgesSection() {
  return (
    <section className="py-14 px-10 bg-white">
      <div className="max-w-8xl mx-auto flex items-center justify-center gap-24 flex-wrap">
        {badges.map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black/60 text-lg hover:border-black/60 hover:text-black transition-colors duration-200">
              {b.icon}
            </div>
            <p className="text-[15px] tracking-[0.2em] text-black font-bold">{b.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function EsvayaProductSection() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <section className="pt-16 pb-16 px-10 text-center max-w-4xl mx-auto">
        <p className="font-serif text-xl md:text-2xl text-white italic leading-relaxed">
          We heard you, and built something you can use in two minute. Integrated in your daily routine to help you in deep sleep and strong focus
        </p>
        <ArchitectureSection />
      </section>

      <section className="px-10 pb-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        {products.map((p) => (
          <ProductCard key={p.time} product={p} />
        ))}
      </section>

      
      <RitualKitSection />
      <BadgesSection />
    </div>
  );
}