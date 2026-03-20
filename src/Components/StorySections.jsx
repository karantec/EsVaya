import { useState, useEffect, useRef } from "react";

/*
  ─────────────────────────────────────────────────────────────
  SETUP REQUIRED
  ─────────────────────────────────────────────────────────────

  1. Google Fonts — add to index.html <head>:
     <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,900;1,9..144,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

  2. tailwind.config.js — extend theme:
     fontFamily: {
       fraunces: ['Fraunces', 'Georgia', 'serif'],
       dm:       ['DM Sans', 'sans-serif'],
     },
     keyframes: {
       fadeUp:  { from:{ opacity:'0', transform:'translateY(30px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
       shimmer: { '0%':{ backgroundPosition:'-300% center' }, '100%':{ backgroundPosition:'300% center' } },
     },
     animation: {
       fadeUp:  'fadeUp 0.6s ease-out both',
       shimmer: 'shimmer 5s linear infinite',
     },

  3. Global CSS (index.css / globals.css):
     .shimmer-text {
       background: linear-gradient(90deg,#000 0%,#555 25%,#000 50%,#777 75%,#000 100%);
       background-size: 300% auto;
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
       background-clip: text;
       animation: shimmer 5s linear infinite;
     }
     @keyframes shimmer { 0%{background-position:-300% center} 100%{background-position:300% center} }
     @keyframes fadeUp  { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
     .fade-up-1 { animation: fadeUp 0.6s ease-out 0.05s both; }
     .fade-up-2 { animation: fadeUp 0.6s ease-out 0.2s both; }
     .fade-up-3 { animation: fadeUp 0.6s ease-out 0.35s both; }
     .fade-up-4 { animation: fadeUp 0.6s ease-out 0.5s both; }
  ─────────────────────────────────────────────────────────────
*/

const useInView = (threshold = 0.06) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const chapters = [
  {
    // number: "01",
    title: "The Search",
    body: "I tried everything the market offered. Nothing worked — not because I was broken, but because they were built for a different problem.",
    grid: [
      { label: "Meditation Apps",      reason: "Needs 20 min of stillness you don't have" },
      { label: "Sleep Gummies",        reason: "Averse to ingesting chemicals every night" },
      { label: "Ayurvedic Oils",       reason: "Overclaims or works too slowly to feel" },
      { label: "Fragrances",           reason: "Beautiful smell. No functional outcome." },
      { label: "Stress Supplements",   reason: "Pills feel clinical. Not a ritual." },
      { label: "Generic Aromatherapy", reason: "No system. No intention. Just scent." },
    ],
  },
  {
    // number: "02",
    title: "The Discovery",
    body: "The olfactory system is the only sense with a direct pathway to the emotional brain. Essential oil blends, chosen for chemistry not for fragrance, applied consistently, could become the signal for the nervous system. ESVAYA was built around that one insight. Natural. Functional. Two minutes. Every day.",
  },
];

function RejectionCard({ item, i, inView }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: inView ? `${220 + i * 60}ms` : "0ms",
        transition: "all 0.3s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(12px)",
      }}
      className={[
        "relative overflow-hidden rounded-2xl p-5 cursor-default border",
       
      ].join(" ")}
    >
      <div className={[
        "absolute top-0 left-0 h-[3px] transition-all duration-400",
        hovered ? "w-full bg-red-500" : "w-0 bg-red-500",
      ].join(" ")} style={{ transition: "width 0.4s ease" }} />

      <p className={[
        "font-dm text-1xl font-bold mb-1.5 transition-colors duration-200",
      ].join(" ")}>{item.label}</p>
      <p className={[
        " text-1xl leading-snug transition-colors duration-200 text-black",
      
      ].join(" ")}>{item.reason}</p>
    </div>
  );
}

function ChapterCard({ chapter, index }) {
  const [ref, inView] = useInView(0.05);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={[
        "relative rounded-3xl overflow-hidden mb-8 bg-white border border-neutral-200",
        "transition-all duration-500",
        inView ? "opacity-100 translate-y-0 shadow-lg" : "opacity-0 translate-y-8",
      ].join(" ")}
    >
      {/* Bold left border accent */}
      <div
        style={{ transitionDelay: `${index * 60 + 250}ms` }}
        className={[
          "absolute left-0 top-0 w-1 bg-neutral-950 transition-all duration-600 origin-top",
          inView ? "h-full" : "h-0",
        ].join(" ")}
      />

      <div className="pl-8 pr-6 sm:pl-12 sm:pr-10 lg:pl-16 lg:pr-14 xl:pl-24 xl:pr-20 py-12 lg:py-16 xl:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-start">

          {/* Title column */}
          <div className={`flex flex-col gap-4 ${isEven ? "md:order-1" : "md:order-2"}`}>
            <span
              style={{ transitionDelay: `${index * 60 + 100}ms` }}
              className={[
                "font-fraunces text-6xl lg:text-9xl font-black text-neutral-100 leading-none select-none",
                "transition-all duration-500",
                inView ? "opacity-100" : "opacity-0",
              ].join(" ")}
            >
              {chapter.number}
            </span>

           <h3
  style={{ transitionDelay: `${index * 60 + 160}ms` }}
  className={[
    "font-fraunces font-black leading-[1.0] text-neutral-950 -mt-2 sm:-mt-4 md:-mt-6",
    "text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
    "transition-all duration-500",
    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3",
  ].join(" ")}
>
  {chapter.title}
</h3>

            <div
              style={{ transitionDelay: `${index * 60 + 350}ms` }}
              className={[
                "h-[3px] w-14 bg-neutral-950 origin-left transition-all duration-600",
                inView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
              ].join(" ")}
            />
          </div>

          {/* Content column */}
          <div className={`flex flex-col gap-6 ${isEven ? "md:order-2" : "md:order-1"}`}>
            <p
              style={{ transitionDelay: `${index * 60 + 240}ms` }}
              className={[
                "font-dm text-xl md:text-2xl lg:text-3xl leading-[1.65] text-neutral-900 font-normal",
                "transition-all duration-500",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
            >
              {chapter.body}
            </p>

            {chapter.grid && (
              <div
                style={{ transitionDelay: `${index * 60 + 300}ms` }}
                className={[
                  "grid grid-cols-2 lg:grid-cols-3 gap-3 transition-opacity duration-400",
                  inView ? "opacity-100" : "opacity-0",
                ].join(" ")}
              >
                {chapter.grid.map((item, i) => (
                  <RejectionCard key={i} item={item} i={i} inView={inView} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

function CtaBlock() {
  const [ref, inView] = useInView(0.12);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      className={[
        "rounded-3xl overflow-hidden mt-4 bg-neutral-950 transition-all duration-500",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
    >
      <div className="h-[3px] w-full bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-800" />
      <div className="px-8 sm:px-14 lg:px-24 xl:px-32 py-16 lg:py-24 text-center">
        <p className="font-dm text-xs font-bold tracking-[0.35em] uppercase text-neutral-500 mb-6">
          Sensory Wellness
        </p>
        <h3 className="font-fraunces text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-[1.0]">
          This is{" "}
          <span className="shimmer-text italic">Esvaya.</span>
        </h3>
        <p className="font-dm text-neutral-400 text-lg lg:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          For people who already know what they need — they just need it to work.
        </p>
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={[
            "font-dm rounded-2xl px-10 py-5 text-sm font-bold tracking-widest uppercase cursor-pointer transition-all duration-300",
            hovered
              ? "bg-neutral-200 text-neutral-950 scale-105 shadow-2xl"
              : "bg-white text-neutral-950 scale-100",
          ].join(" ")}
        >
          Explore Products →
        </button>
      </div>
    </div>
  );
}

export default function EsvayaStory() {
  return (
    <div className="min-h-screen w-full bg-[#f9f7f3] font-dm overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 pt-16 sm:pt-20 lg:pt-28 pb-14 lg:pb-20">
    <div className="flex items-center justify-center w-full">
  <div className="inline-flex items-center justify-center mt-14 px-8   rounded-lg">
    <h2 className=" fade-up-2 font-fraunces text-6xl sm:text-7xl lg:text-8xl xl:text-[9rem] font-black leading-[1.0] text-neutral-950">
      Origin of Esvaya
    </h2>
  </div>
</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 xl:gap-28 items-start mt-20">
  
          {/* Left */}
          <div className="md:sticky md:top-8">
            

            <h1 className="fade-up-2 text-6xl sm:text-7xl lg:text-8xl xl:text-[9rem]  leading-[1.0] text-neutral-950">
              Built from
              <br />
              <em className="fade-up-2 font-fraunces text-6xl sm:text-7xl lg:text-8xl xl:text-[9rem] font-black leading-[1.0] text-neutral-950">Experience.</em>
            </h1>

            
          </div>

          {/* Right */}
          <div className="fade-up-3 pt-0 md:pt-4">
            <p className="font-dm text-xl md:text-2xl lg:text-3xl text-neutral-900 leading-[1.6] font-normal">
              It started with a feeling that most urban achievers know but nobody names.
            </p>
            <p className="font-dm text-lg md:text-xl lg:text-2xl text-neutral-700 leading-[1.7] mt-6 font-normal">
              Not burnout – burnout sounds dramatic – but something quieter. The 3AM
              wake-up with a mind fixed on next morning's meeting. The 3PM crash that
              no amount of coffee could fix, or the anxiety that never allowed to settle.
              The morning alarm that felt like an accusation, because cortisol levels
              were permanently elevated.
            </p>

            <div className="fade-up-4 mt-10 pl-6 border-l-4 border-neutral-950">
              <p className="font-fraunces italic text-2xl lg:text-3xl xl:text-4xl text-neutral-950 font-normal leading-snug">
                "Something had to change. Not lifestyle. The signal."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mb-10">
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-neutral-300" />
          <span className="font-dm text-xs tracking-[0.35em] uppercase text-neutral-500 font-bold whitespace-nowrap">The Journey</span>
          <div className="flex-1 h-px bg-neutral-300" />
        </div>
      </div>

      {/* ── CHAPTERS ── */}
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 pb-32">
        {chapters.map((ch, i) => (
          <ChapterCard key={i} chapter={ch} index={i} />
        ))}
    
      </section>

    </div>
  );
}