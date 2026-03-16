import { useNavigate } from "react-router-dom";

const cards = [
  {
    icon: "✦",
    title: "Natural",
    body: (
      <>
        Every ingredient in Esvaya is sourced from Indian soil – chosen for
        what it does to your body, and not how it smells. No synthetics. No
        fillers. This is functional scent.
      </>
    ),
  },
  {
    icon: "◎",
    title: "Science",
    body: "Built on the neuroscience of the olfactory-limbic pathway – the only sensory route that bypasses your brain's filter and arrives directly at the emotional brain. The calm is not imagined. It is chemistry.",
  },
  {
    icon: "◇",
    title: "Ritual",
    body: (
      <>
        A ritual is intentional whereas a routine is mechanical. Esvaya turns
        your{" "}
        <a
          href="/ritual"
          className="text-white/65 underline underline-offset-3 decoration-white/20"
        >
          two minute
        </a>{" "}
        rituals into a signal that your nervous system recognizes to start doing
        the work before you've even consciously begun.
      </>
    ),
  },
];

const navItems = [
  {
    tag: "Architecture",
    title: "The Architecture",
    sub: "How it's built",
    href: "/architecture",
  },
  {
    tag: "Origin",
    title: "Origin of Esvaya",
    sub: "The story behind it",
    href: "/our-story",
  },
  {
    tag: "Ritual",
    title: "The Ritual",
    sub: "Your two minutes",
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

        {/* Top row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8 sm:mb-12 pb-6 border-b border-white/[0.06]">
          <p className="text-[25px]  font-light text-white/45 leading-[1.8] tracking-wide max-w-8xl">
            
            
            <br />
            Believes emotional wellness should be preventive, accessible, and integrated in your daily routine
            
            
          </p>
          <div className="self-start text-[10px] font-light tracking-[.18em] uppercase text-white/25 border border-white/10 px-4 py-2 whitespace-nowrap">
            Emotional Wellness · Since 2023
          </div>
        </div>

        {/* Cards — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="group relative hover:bg-white/[0.02] transition-colors duration-400 cursor-default overflow-hidden"
              style={{
                padding: "32px 24px 40px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderRight:
                  i < 2
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
              }}
            >
              {/* On mobile remove right border */}
              <style>{`
                @media (max-width: 639px) {
                  .card-border-right { border-right: none !important; }
                }
              `}</style>

              {/* bottom shimmer on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Icon centered */}
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
      <div className="bg-white px-5 sm:px-8 md:px-[52px]">
        <div className="flex items-center justify-between py-5 border-b border-neutral-100">
          <span className="text-[10px] font-medium tracking-[.22em] uppercase text-neutral-300">
            Explore Esvaya
          </span>
          <a
            href="/all"
            className="text-[11px] font-light tracking-wide text-neutral-400 hover:text-neutral-800 transition-colors flex items-center gap-2"
          >
            View all sections &nbsp;→
          </a>
        </div>

        {/* Nav items — stack on mobile, 3 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-neutral-100">
          {navItems.map((item, i) => (
            <a
              key={item.title}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.href);
              }}
              className="group relative flex flex-col overflow-hidden border-t-[1.5px] border-transparent hover:border-[#0d0d0d] transition-all duration-250 py-6 pb-8 sm:pb-9 border-b border-neutral-100 sm:border-b-0"
              style={{
                paddingLeft: i !== 0 ? "0" : "0",
              }}
            >
              {/* bg fill on hover */}
              <div className="absolute inset-0 bg-neutral-50 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 z-0" />

              <div className="relative z-10 flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center text-xs text-neutral-400 group-hover:bg-[#0d0d0d] group-hover:border-[#0d0d0d] group-hover:text-white group-hover:rotate-45 transition-all duration-250">
                  ↗
                </div>
                <span className="text-[10px] font-medium tracking-[.15em] uppercase text-neutral-300 group-hover:text-neutral-500 transition-colors duration-250">
                  {item.tag}
                </span>
              </div>

              <span
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="relative z-10 text-[22px] font-normal text-[#0d0d0d] tracking-tight leading-tight mb-1.5"
              >
                {item.title}
              </span>
              <span className="relative z-10 text-[11.5px] font-light text-neutral-400 tracking-wide">
                {item.sub}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}