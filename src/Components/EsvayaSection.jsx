import { useNavigate } from "react-router-dom";

const cards = [
  {
    icon: "✦",
    title: "Natural",
    body: "Every ingredient in Esvaya is sourced from Indian soil – chosen for what it does to your body, and not how it smells. No synthetics. No fillers. This is functional scent.",
  },
  {
    icon: "◎",
    title: "Science",
    body: "Built on the neuroscience of the olfactory-limbic pathway – the only sensory route that bypasses your brain's filter and arrives directly at the emotional brain. The calm is not imagined. It is chemistry.",
  },
  {
    icon: "◇",
    title: "Regulation",
    body: "A ritual is intentional whereas a routine is mechanical. Esvaya turns your two minute rituals into a signal that your nervous system recognizes to start doing the work before you've even consciously begun.",
  },
];

const navItems = [
  {
    tag: "Architecture",
    title: "The Architecture",
    sub: "Designed around a single insight",
    desc: "Your nervous system responds to signals. Learn how every element of the kit is architected to deliver them.",
    href: "/thearchitecture",
  },
  {
    tag: "Origin",
    title: "Origin of Esvaya",
    sub: "It started with a feeling",
    desc: "Not in a lab — but with the quiet depletion of someone performing fine at everything, and present in none of it.",
    href: "/story",
  },
  {
    tag: "Ritual",
    title: "The Ritual",
    sub: "Your two minutes",
    desc: "Specific, repeated, consistent signals. You are not just using a product — you are teaching your nervous system.",
    href: "/ritual",
  },
];

export default function EsvayaSection() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      {/* ── Dark hero band ── */}
      <div className="bg-[#080808] relative overflow-hidden px-5 pt-10 sm:px-8 sm:pt-12 md:px-[52px] md:pt-16">
        {/* subtle radial glow */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/[0.02] pointer-events-none" />

        {/* ── Hero statement ── */}
        <div className="mb-12 pb-10 border-b border-white/[0.06]">
          {/* Eyebrow label */}
          <p className="text-[20px] tracking-[.35em] uppercase text-white font-semibold mb-6 text-center">
            Our belief
          </p>

          {/* Main headline */}
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-center mx-auto max-w-5xl leading-[1.15] tracking-tight"
          >
            <span className=" text-[28px]  font-light italic text-white/90">
            Esvaya believes emotional wellness should be preventive, accessible, and integrated in your daily routine
            </span>
           
          </h2>

          {/* Subtext */}
         

          {/* Thin divider accent */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-12 bg-white/10" />
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div className="h-px w-12 bg-white/10" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="group relative hover:bg-white/[0.02] transition-colors duration-400 cursor-default overflow-hidden"
              style={{
                padding: "32px 24px 40px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderRight:
                  i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="flex justify-center mb-6">
                <div className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-[13px] text-white/20 group-hover:border-white/25 group-hover:text-white/50 transition-all duration-300">
                  {c.icon}
                </div>
              </div>

              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-[32px] sm:text-[36px] font-light italic text-white tracking-tight leading-none mb-5 text-center"
              >
                {c.title}
              </h3>

              <div className="h-px bg-white/15 mb-5 mx-auto w-5 group-hover:w-10 group-hover:bg-white/35 transition-all duration-400 ease-out" />

              <p className="text-[12.5px] font-light text-white/45 leading-[1.95] tracking-wide text-center">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── White nav ── */}
      <div className="bg-white py-16 px-5 sm:px-8 md:px-[52px]">
        <div className="flex items-center justify-center py-5 border-b border-neutral-100">
          <span className="text-[28px] font-bold tracking-[.22em] uppercase text-black">
            Explore Esvaya
          </span>
        </div>

        {/* Nav cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-8 gap-5">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.href);
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white hover:border-neutral-400 transition-all duration-300 p-7 pb-8 shadow-sm hover:shadow-md"
            >
              {/* Top row: tag + arrow */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] tracking-[.2em] uppercase text-black font-semibold">
                  {item.tag}
                </span>
                <div className="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center text-xs text-neutral-400 group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-250">
                  ↗
                </div>
              </div>

              {/* Title */}
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-[30px] text-[#0d0d0d] font-bold tracking-tight leading-tight mb-2"
              >
                {item.title}
              </span>

              {/* Sub */}
              <span className="text-[11px] uppercase tracking-[.15em] text-black font-semibold mb-4">
                {item.sub}
              </span>

              {/* Animated divider */}
              <div className="w-8 h-px bg-neutral-200 mb-4 group-hover:w-14 transition-all duration-300" />

              {/* Description */}
              <span className="text-[13px] text-black font-bold leading-relaxed font-normal">
                {item.desc}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}