import { useEffect, useRef } from "react";

const morningIngredients = ["Rosemary", "Peppermint", "Frankincense", "Lemon"];
const eveningIngredients = ["Lavender", "Vetiver", "Bergamot", "Clary Sage"];

const dayMilestones = [
  { day: "1",  desc: "You notice something pleasant" },
  { day: "10", desc: "You notice it working" },
  { day: "30", desc: "Your body asks for it before you remember" },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-6");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Pill({ label }) {
  return (
    <span className="text-[11px] px-3 py-1 rounded-full border border-black/20 text-black/60 bg-black/[0.03] tracking-wide">
      {label}
    </span>
  );
}

function RitualCard({ accentClass, tag, title, duration, hook, children }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 transition-all duration-700 ease-out flex gap-4 md:gap-8"
    >
      <div className={`w-px flex-shrink-0 ${accentClass}`} />
      <div className="flex-1 bg-white border border-black/10 rounded-xl p-5 sm:p-8 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-black/[0.02] translate-x-16 -translate-y-16 pointer-events-none" />
        <span className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase border border-black/20 text-black/50 px-3 py-1 rounded-full mb-4">
          {tag}
        </span>
        <h2
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-2xl sm:text-3xl md:text-[2rem] font-light text-black leading-snug mb-1"
        >
          {title}
        </h2>
        <p className="text-[11px] tracking-widest uppercase text-black/40 font-medium mb-4">
          {duration}
        </p>
        <p
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-base sm:text-[1.1rem] italic text-black/55 mb-4 leading-relaxed"
        >
          {hook}
        </p>
        {children}
      </div>
    </div>
  );
}

function ScienceCard() {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 transition-all duration-700 ease-out flex gap-4 md:gap-8"
    >
      <div className="w-px flex-shrink-0 bg-black/20" />
      <div className="flex-1 bg-white border border-black/10 rounded-xl p-5 sm:p-8 md:p-10">
        <span className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase border border-black/ text-black px-3 py-1 rounded-full mb-4">
          The 30-Day Science
        </span>
        <h2
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-2xl sm:text-3xl md:text-[2rem] font-light text-black leading-snug mb-4"
        >
          What happens when you commit
        </h2>
        <p className="text-sm md:text-base text-black leading-[1.8] mb-6 max-w-2xl">
          Your nervous system learns to respond before you've even opened the kit —
          classical conditioning, the same neurological mechanism that makes a song
          transport you before you've consciously registered it.
        </p>
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {dayMilestones.map(({ day, desc }) => (
            <div
              key={day}
              className="bg-[#F7F6F3] rounded-lg border border-black/[0.08] p-3 sm:p-5"
            >
              <p
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-4xl sm:text-5xl font-light text-black mb-1 leading-none"
              >
                {day}
              </p>
              <p className="text-[11px] sm:text-xs text-black leading-[1.5]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CTACard() {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 transition-all duration-700 ease-out"
    >
      <div className="bg-black rounded-xl p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div>
          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-2xl sm:text-[1.6rem] font-light text-white leading-snug"
          >
            Begin your 30-day rituals
          </p>
          <p className="text-[11px] tracking-widest uppercase text-white/40 font-medium mt-1">
            Join the waitlist · Limited kits available
          </p>
        </div>
        <button className="self-start sm:self-auto flex-shrink-0 bg-white text-black text-sm font-medium px-7 py-3 rounded-full hover:bg-white/90 active:scale-95 transition-all duration-150 cursor-pointer">
          Join Waitlist →
        </button>
      </div>
    </div>
  );
}

/* ─── Desktop two-column layout for Morning + Evening side by side ─── */
function RitualPair() {
  const refMorning = useReveal();
  const refEvening = useReveal();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Morning */}
      <div
        ref={refMorning}
        className="opacity-0 translate-y-6 transition-all duration-700 ease-out flex gap-4"
      >
        <div className="w-px flex-shrink-0 bg-black" />
        <div className="flex-1 bg-white border border-black/10 rounded-xl p-6 xl:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-black/[0.02] translate-x-12 -translate-y-12 pointer-events-none" />
          <span className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase border border-black/20 text-black px-3 py-1 rounded-full mb-4">
            Morning Ritual
          </span>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[1.65rem] xl:text-[1.9rem] font-light text-black leading-snug mb-1"
          >
            Focus Roll-on
          </h2>
          <p className="text-[11px] tracking-widest uppercase text-black font-medium mb-4">
            60 seconds · Wrists or temples
          </p>
          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[1rem] italic text-black mb-4 leading-relaxed"
          >
            After reaching your workplace. Before the first meeting. Before the first notification.
          </p>
          <p className="text-sm text-black leading-[1.8] mb-2">
            Three seconds on your wrists or temples. One slow inhale. One
            intention — not a to-do list, just the direction.
          </p>
          <p className="text-sm text-black leading-[1.8]">
            Scent reaches your limbic brain before your rational brain has
            processed the morning.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {morningIngredients.map((i) => <Pill key={i} label={i} />)}
          </div>
        </div>
      </div>

      {/* Evening */}
      <div
        ref={refEvening}
        className="opacity-0 translate-y-6 transition-all duration-700 delay-150 ease-out flex gap-4"
      >
        <div className="w-px flex-shrink-0 bg-black/40" />
        <div className="flex-1 bg-white border border-black/10 rounded-xl p-6 xl:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-black/[0.02] translate-x-12 -translate-y-12 pointer-events-none" />
          <span className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase border border-black/20 text-black px-3 py-1 rounded-full mb-4">
            Evening Ritual
          </span>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[1.65rem] xl:text-[1.9rem] font-light text-black leading-snug mb-1"
          >
            Unwind Night Mist
          </h2>
          <p className="text-[11px] tracking-widest uppercase text-black font-medium mb-4">
            60 seconds · Pillow or linen
          </p>
          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[1rem] italic text-black mb-4 leading-relaxed"
          >
            The workday ends. The nervous system does not get the memo.
          </p>
          <p className="text-sm text-black leading-[1.8] mb-2">
            Two sprays on your pillow or linen. One slow inhale and exhale.
            The signal your body has been waiting for since your last meeting or mail.
          </p>
          <p className="text-sm text-black leading-[1.8]">
            These botanicals interact with GABA receptors — the neurochemical
            pathway that tells your brain it is safe to slow down. Cortisol
            begins to drop and transition begins.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {eveningIngredients.map((i) => <Pill key={i} label={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EsvayaRituals() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Outfit:wght@300;400;500&display=swap');
      `}</style>

      <div
        style={{ fontFamily: "'Outfit', sans-serif" }}
        className="min-h-screen bg-[#F7F6F3] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 md:py-16 xl:py-20"
      >
        {/* Header row */}
        <div className="flex items-center justify-center mb-10 md:mb-14">
          <p className="text-[24px] text-center   text-black">
            A ritual is intentional. It tells your nervous system: something has shifted. A new state is beginning. <br/>The nervous system does not respond to instructions. It responds to signals.<br/> A ritual is how you give it one
          </p>
          
        </div>

        <div className="space-y-5 md:space-y-7">
          {/* Morning + Evening: side-by-side on lg+, stacked on mobile */}
          <RitualPair />

          {/* 30-Day Science: full width */}
          <ScienceCard />

          {/* CTA: full width */}
          <CTACard />
        </div>
      </div>
    </>
  );
}