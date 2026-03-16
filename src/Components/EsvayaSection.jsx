import { useRef } from "react";

const cards = [
  {
    num: "01",
    title: "Natural",
    body: <>Every ingredient in <span className="text-white/80">Esvaya</span> is sourced from Indian soil – chosen for what it does to your body, and not how it smells. No synthetics. No fillers. This is functional scent.</>,
  },
  {
    num: "02",
    title: "Science",
    body: "Built on the neuroscience of the olfactory-limbic pathway – the only sensory route that bypasses your brain's filter and arrives directly at the emotional brain. The calm is not imagined. It is chemistry.",
  },
  {
    num: "03",
    title: "Ritual",
    body: <>A ritual is intentional whereas a routine is mechanical. <span className="text-white/80">Esvaya</span> turns your <a href="#" className="text-white/75 underline underline-offset-3">two minute</a> rituals into a signal that your nervous system recognizes to start doing the work before you've even consciously begun.</>,
  },
];

const navItems = [
  { tag: "Architecture", label: "The Architecture", sub: "How it's built" },
  { tag: "Origin", label: "Origin of Esvaya", sub: "The story behind it" },
  { tag: "Ritual", label: "The Ritual", sub: "Your two minutes" },
];

export default function EsvayaSection() {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      {/* ── Dark section ── */}
      <div className="bg-[#0d0d0d] px-12 pt-14">
        <p className="text-[11px] font-light tracking-[.06em] uppercase text-white/50 pb-5 mb-10 border-b border-white/[0.08]">
          <span className="text-white border-b border-white/40 pb-px">Esvaya</span>{" "}
          believes emotional wellness should be preventive, accessible, and integrated in your daily routine
        </p>

        {/* Cards — joined grid */}
        <div className="grid grid-cols-3 divide-x divide-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group bg-[#141414] hover:bg-[#1a1a1a] px-8 py-9 flex flex-col gap-4
                         relative transition-colors duration-300"
            >
              {/* top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent
                              group-hover:bg-gradient-to-r group-hover:from-white/50
                              group-hover:to-transparent transition-all duration-300" />

              <span className="text-[11px] tracking-[.15em] text-white/20">{c.num}</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-[28px] font-medium text-white leading-tight tracking-tight">
                {c.title}
              </h3>
              <div className="w-6 h-px bg-white/20" />
              <p className="text-[13px] font-light text-white/55 leading-[1.9] tracking-wide">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── White nav section ── */}
      <div className="bg-white px-12">
        <p className="text-[10px] font-medium tracking-[.2em] uppercase text-neutral-400
                       py-5 border-b border-neutral-100">
          Explore Esvaya
        </p>
        <div className="grid grid-cols-3 divide-x divide-neutral-100">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href="#"
              className={`group flex flex-col gap-1.5 py-6 pb-8 border-t-2 border-transparent
                          hover:border-[#0d0d0d] transition-all duration-200
                          ${i !== 0 ? "pl-8" : ""} ${i !== navItems.length - 1 ? "pr-8" : ""}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-neutral-300 group-hover:text-[#0d0d0d]
                                  group-hover:translate-x-1 transition-all duration-200 inline-block">
                  →
                </span>
                <span className="text-[10px] font-medium tracking-[.12em] uppercase
                                  text-neutral-300 group-hover:text-neutral-500 transition-colors duration-200">
                  {item.tag}
                </span>
              </div>
              <span style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-xl font-medium text-[#0d0d0d] leading-tight">
                {item.label}
              </span>
              <span className="text-xs font-light text-neutral-400 tracking-wide">
                {item.sub}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}