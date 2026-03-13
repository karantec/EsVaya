import { useState, useEffect, useRef } from "react";

/* ── Intersection observer hook ── */
const useInView = (threshold = 0.1) => {
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

/* ── Animated counter ── */
function Counter({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Rejection card with hover ── */
function RejectionCard({ item, i, inView }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-2xl p-5 cursor-default"
      style={{
        background: hovered ? "#f7f5f0" : "#ffffff",
        border: `1.5px solid ${hovered ? "#aaa" : "#ece9e3"}`,
        transform: inView
          ? hovered ? "translateY(-4px) scale(1.02)" : "translateY(0) scale(1)"
          : "translateY(20px)",
        opacity: inView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${300 + i * 80}ms`,
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.09)" : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center mb-3"
        style={{ background: hovered ? "#ffe4e4" : "#f0ede7", transition: "background 0.3s" }}
      >
        <span style={{ color: hovered ? "#e55" : "#aaa", fontSize: 13, fontWeight: 700 }}>✕</span>
      </div>
      <p className="text-sm font-semibold text-neutral-700 mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {item.label}
      </p>
      <p className="text-xs text-neutral-400 leading-snug" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {item.reason}
      </p>
    </div>
  );
}

/* ── Chapter data ── */
const chapters = [
  {
    num: "01", emoji: "🌿", title: "The Problem",
    body: "After a decade in high-pressure corporate environments — back to back meetings, calls that spill into evenings, the quiet normalisation of depletion — I noticed something nobody was talking about openly: the workday was ending, but the nervous system wasn't getting the memo.",
    quote: "I wasn't burnt out. Burnt out sounds dramatic. This was quieter — the kind of exhaustion where you're performing okay at everything and feeling nothing about any of it.",
  },
  {
    num: "02", emoji: "🔍", title: "The Search",
    body: "I tried everything the market offered. Nothing worked — not because I was broken, but because they were built for a different problem.",
    grid: [
      { label: "Meditation Apps", reason: "Needs 20 min of stillness you don't have" },
      { label: "Sleep Gummies", reason: "Averse to ingesting chemicals every night" },
      { label: "Ayurvedic Oils", reason: "Overclaims or works too slowly to feel" },
      { label: "Fragrances", reason: "Beautiful smell. No functional outcome." },
      { label: "Stress Supplements", reason: "Pills feel clinical. Not a ritual." },
      { label: "Generic Aromatherapy", reason: "No system. No intention. Just scent." },
    ],
  },
  {
    num: "03", emoji: "✨", title: "The Discovery",
    body: "The olfactory system is the only one of your five senses with a direct pathway to the limbic brain — the part that governs emotion, memory, and stress response. Every other sense has to pass through the thalamus first. Scent just arrives.",
    highlight: "Scent is the only sense that talks directly to your emotions — no middleman.",
  },
];

/* ── Chapter card ── */
function ChapterCard({ chapter, index }) {
  const [ref, inView] = useInView(0.08);
  return (
    <div
      ref={ref}
      className="relative rounded-3xl overflow-hidden mb-10"
      style={{
        background: "#ffffff",
        border: "1.5px solid #e0ddd8",
        boxShadow: inView ? "0 20px 60px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.04)" : "none",
        transform: inView ? "translateY(0) scale(1)" : "translateY(48px) scale(0.97)",
        opacity: inView ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Animated colour bar — B&W */}
      <div style={{
        height: 5,
        background: "linear-gradient(90deg, #1a1a1a, #888)",
        transform: inView ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 1s ease-out",
        transitionDelay: `${index * 80 + 400}ms`,
      }} />

      <div className="p-8 md:p-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{
              background: "#f4f2ed",
              border: "1.5px solid #e0ddd8",
              transform: inView ? "rotate(0deg) scale(1)" : "rotate(-15deg) scale(0.7)",
              opacity: inView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.34,1.56,0.64,1)",
              transitionDelay: `${index * 80 + 300}ms`,
            }}
          >
            {chapter.emoji}
          </div>
          <div>
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-0.5"
              style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
            >
              Chapter {chapter.num}
            </p>
            <h3
              className="text-3xl md:text-4xl font-black leading-tight"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                color: "#1a1a2e",
                transform: inView ? "translateX(0)" : "translateX(-20px)",
                opacity: inView ? 1 : 0,
                transition: "all 0.7s ease-out",
                transitionDelay: `${index * 80 + 250}ms`,
              }}
            >
              {chapter.title}
            </h3>
          </div>
        </div>

        {/* Body */}
        <p
          className="text-base md:text-lg leading-relaxed mb-8"
          style={{
            color: "#4a4a6a",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.7s ease-out",
            transitionDelay: `${index * 80 + 350}ms`,
          }}
        >
          {chapter.body}
        </p>

        {/* Quote */}
        {chapter.quote && (
          <div
            className="relative rounded-2xl p-6 mb-2"
            style={{
              background: "#f7f5f0",
              border: "1px solid #e0ddd8",
              transform: inView ? "translateX(0)" : "translateX(-24px)",
              opacity: inView ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
              transitionDelay: `${index * 80 + 500}ms`,
            }}
          >
            <div
              className="absolute top-3 left-5 text-5xl leading-none select-none"
              style={{ color: "#ccc", fontFamily: "Georgia, serif" }}
            >"</div>
            <p
              className="italic text-base md:text-lg leading-relaxed pt-4 pl-4"
              style={{ color: "#3a3a5a", fontFamily: "'Fraunces', Georgia, serif", fontWeight: 300 }}
            >
              {chapter.quote}
            </p>
          </div>
        )}

        {/* Grid */}
        {chapter.grid && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {chapter.grid.map((item, i) => (
              <RejectionCard key={i} item={item} i={i} inView={inView} />
            ))}
          </div>
        )}

        {/* Highlight */}
        {chapter.highlight && (
          <div
            className="inline-flex items-center gap-3 rounded-full px-6 py-3 mt-2"
            style={{
              background: "#f4f2ed",
              border: "1.5px solid #d8d4cc",
              transform: inView ? "scale(1)" : "scale(0.85)",
              opacity: inView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.34,1.56,0.64,1)",
              transitionDelay: `${index * 80 + 500}ms`,
            }}
          >
            <span className="text-lg">💡</span>
            <p className="text-sm font-semibold" style={{ color: "#333", fontFamily: "'DM Sans', sans-serif" }}>
              {chapter.highlight}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── CTA ── */
function CtaBlock() {
  const [ref, inView] = useInView(0.2);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      className="rounded-3xl p-10 text-center mt-6"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1e1e2e 100%)",
        transform: inView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.96)",
        opacity: inView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div className="text-4xl mb-4" style={{ display: "inline-block", animation: "spinSlow 8s linear infinite" }}>🌿</div>
      <h3
        className="text-3xl md:text-4xl font-black text-white mb-3"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        This is <span className="shimmer-mono italic">Esvaya.</span>
      </h3>
      <p className="text-neutral-400 text-base mb-8 max-w-sm mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        Sensory wellness for people who already know what they need — they just need it to work.
      </p>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-2xl px-8 py-4 text-sm font-bold tracking-wide"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: hovered ? "linear-gradient(135deg, #555, #222)" : "linear-gradient(135deg, #333, #111)",
          color: "white",
          transform: hovered ? "scale(1.05) translateY(-2px)" : "scale(1)",
          boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.35)" : "0 4px 12px rgba(0,0,0,0.2)",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        Explore Our Products →
      </button>
    </div>
  );
}

/* ── Main ── */
export default function EsvayaStory() {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ background: "linear-gradient(160deg,#fdfcf9 0%,#f9f6f0 50%,#fdfcf9 100%)", fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,900;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; }

        @keyframes heroFadeUp  { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmerMono {
          0%   { background-position: -300% center; }
          100% { background-position:  300% center; }
        }
        @keyframes pulseRing {
          0%   { transform:scale(1);   opacity:0.7; }
          100% { transform:scale(2.4); opacity:0;   }
        }
        @keyframes waveBar {
          0%,100% { transform:scaleY(0.4); }
          50%     { transform:scaleY(1);   }
        }
        @keyframes spinSlow {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        @keyframes floatOrb1 {
          0%,100% { transform:translate(0,0) scale(1); }
          40%     { transform:translate(22px,-28px) scale(1.06); }
          70%     { transform:translate(-14px,14px) scale(0.96); }
        }
        @keyframes floatOrb2 {
          0%,100% { transform:translate(0,0); }
          50%     { transform:translate(30px,-18px); }
        }

        .shimmer-mono {
          background: linear-gradient(90deg,#111 0%,#777 25%,#111 50%,#999 75%,#111 100%);
          background-size:300% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation: shimmerMono 5s linear infinite;
        }

        .h1 { animation: heroFadeUp 0.85s ease-out 0.05s both; }
        .h2 { animation: heroFadeUp 0.85s ease-out 0.25s both; }
        .h3 { animation: heroFadeUp 0.85s ease-out 0.45s both; }
        .h4 { animation: heroFadeUp 0.85s ease-out 0.65s both; }

        .wave-bar               { animation: waveBar 1.2s ease-in-out infinite; }
        .wave-bar:nth-child(2)  { animation-delay:0.12s; }
        .wave-bar:nth-child(3)  { animation-delay:0.24s; }
        .wave-bar:nth-child(4)  { animation-delay:0.36s; }
        .wave-bar:nth-child(5)  { animation-delay:0.48s; }
        .wave-bar:nth-child(6)  { animation-delay:0.60s; }
        .wave-bar:nth-child(7)  { animation-delay:0.72s; }
        .wave-bar:nth-child(8)  { animation-delay:0.84s; }
        .wave-bar:nth-child(9)  { animation-delay:0.96s; }
        .wave-bar:nth-child(10) { animation-delay:1.08s; }

        .orb1 { animation: floatOrb1 9s  ease-in-out infinite; }
        .orb2 { animation: floatOrb2 12s ease-in-out infinite; }
        .orb3 { animation: floatOrb1 15s ease-in-out infinite reverse; }
      `}</style>

      {/* Background orbs — neutral */}
      {/* <div className="orb1 absolute pointer-events-none rounded-full"
        style={{ width:320, height:320, background:"radial-gradient(circle,rgba(0,0,0,0.05) 0%,transparent 70%)", top:-90, right:-90 }} />
      <div className="orb2 absolute pointer-events-none rounded-full"
        style={{ width:220, height:220, background:"radial-gradient(circle,rgba(0,0,0,0.04) 0%,transparent 70%)", bottom:"12%", left:-60 }} />
      <div className="orb3 absolute pointer-events-none rounded-full"
        style={{ width:180, height:180, background:"radial-gradient(circle,rgba(0,0,0,0.04) 0%,transparent 70%)", top:"38%", right:"4%" }} /> */}

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 px-6 text-center max-w-4xl mx-auto">

        {/* Our Story pill — white on black */}
        <div
          className="h1 inline-flex items-center gap-2 rounded-full px-5 py-2 mb-10"
          style={{ background: "#111", border: "1.5px solid #333" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white"
              style={{ animation:"pulseRing 1.5s ease-out infinite", opacity: 0.6 }} />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span
            className="text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
          >
            Our Story
          </span>
        </div>

        {/* Headline */}
        <h1 className="h2 mb-4 leading-[1.05]" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
          <span className="block text-5xl md:text-7xl font-black" style={{ color: "#1a1a2e" }}>
            Built from experience.
          </span>
          <span className="block text-5xl md:text-7xl font-black italic shimmer-mono mt-1">
            Both kinds.
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="h3 text-lg md:text-xl text-neutral-500 max-w-lg mx-auto leading-relaxed mt-6 mb-10"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
        >
          A decade navigating urban India's corporate grind. Twelve years mastering essential oil
          formulation. Esvaya is what happens when those two lives meet.
        </p>

        {/* Sound-wave divider */}
        {/* <div className="h4 flex items-end justify-center gap-1" style={{ height: 36 }}>
          {[14,22,28,18,10,26,20,32,16,24].map((h, i) => (
            <div
              key={i}
              className="wave-bar rounded-full"
              style={{ width: 3.5, height: h, background: `hsl(0,0%,${55 + i * 4}%)` }}
            />
          ))}
        </div> */}
      </section>

      {/* ── CHAPTERS ── */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        {chapters.map((ch, i) => <ChapterCard key={i} chapter={ch} index={i} />)}
        <CtaBlock />
      </section>
    </div>
  );
}