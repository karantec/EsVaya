import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (window.scrollY > 60) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes nav-drop {
          from { transform: translateY(-110%); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
        @keyframes mobile-menu-open {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes link-shimmer {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .scrolled-nav { animation: nav-drop 0.5s cubic-bezier(0.16,1,0.3,1) forwards; }
        .mobile-menu  { animation: mobile-menu-open 0.35s cubic-bezier(0.16,1,0.3,1) forwards; }
        .nav-link {
          position: relative;
          letter-spacing: 0.2em;
          font-size: 10px;
          color: rgba(255,255,255,0.55);
          transition: color 0.2s;
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 1px;
          background: white;
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-link:hover { color: rgba(255,255,255,0.95); }
        .nav-link:hover::after { width: 100%; }

        .live-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #a3e635;
          animation: live-pulse 2s ease-in-out infinite;
        }
        @keyframes live-pulse {
          0%,100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(163,230,53,0.5); }
          50%      { opacity: 0.8; transform: scale(1.2); box-shadow: 0 0 0 4px rgba(163,230,53,0); }
        }
      `}</style>

      {/* ── MAIN NAV ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? "scrolled-nav py-3 bg-black/90 backdrop-blur-xl border-b border-white/8"
          : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

          {/* Logo */}
          <div className="flex flex-col">
            <span className="font-serif text-white tracking-[0.3em] text-sm leading-none">ESVAYA</span>
            
          </div>

          {/* Desktop links */}
       <div className="hidden md:flex items-center gap-10 font-bold">
  {["PRODUCTS", "OUR STORY"].map((l) => (
    <a key={l} href="#" className="nav-link text-white font-bold text-2xl lg:text-3xl xl:text-4xl">
      {l}
    </a>
  ))}

            {/* Live indicator */}

            {/* Grid icon */}
            <button
              className="w-8 h-8 border border-white/15 rounded-sm flex items-center justify-center
                hover:border-white/45 hover:bg-white/5 transition-all duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="0.5" y="0.5" width="4" height="4" stroke="white" strokeOpacity="0.45" strokeWidth="0.8"/>
                <rect x="7.5" y="0.5" width="4" height="4" stroke="white" strokeOpacity="0.45" strokeWidth="0.8"/>
                <rect x="0.5" y="7.5" width="4" height="4" stroke="white" strokeOpacity="0.45" strokeWidth="0.8"/>
                <rect x="7.5" y="7.5" width="4" height="4" stroke="white" strokeOpacity="0.45" strokeWidth="0.8"/>
              </svg>
            </button>
          </div>

          {/* Mobile right side */}
          <div className="flex md:hidden items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="live-dot" />
             
            </div>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
              aria-label="Toggle menu"
            >
              <span
                className="block h-px bg-white/60 transition-all duration-300 origin-center"
                style={{
                  width: menuOpen ? "18px" : "18px",
                  transform: menuOpen ? "rotate(45deg) translateY(3px)" : "none",
                }}
              />
              <span
                className="block h-px bg-white/60 transition-all duration-300"
                style={{ width: "12px", opacity: menuOpen ? 0 : 1, marginLeft: "-3px" }}
              />
              <span
                className="block h-px bg-white/60 transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  transform: menuOpen ? "rotate(-45deg) translateY(-3px)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="mobile-menu md:hidden bg-black/95 backdrop-blur-xl border-t border-white/8 px-6 py-6 flex flex-col gap-5">
            {["PRODUCTS", "OUR STORY"].map((l) => (
              <a
                key={l}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-[14px] tracking-[0.25em] text-white/55 hover:text-white transition-colors py-1 border-b border-white/5 pb-4"
              >
                {l}
              </a>
            ))}
            
          </div>
        )}
      </nav>
    </>
  );
}

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <style>{`
        @keyframes bounce-y  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }
        @keyframes fade-up   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fade-up-2 { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes line-grow { from{width:0} to{width:3rem} }

        .hero-title { animation: fade-up   1.3s cubic-bezier(0.16,1,0.3,1) 0.35s both; }
        .hero-line  { animation: line-grow 0.8s ease 1.2s both; }
        .hero-sub   { animation: fade-up-2 1s ease 1s both; }
        .hero-sub2  { animation: fade-up-2 1s ease 1.25s both; }
        .hero-scroll{ animation: fade-up-2 1s ease 1.6s both; }
      `}</style>

      {/* Video */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="https://res.cloudinary.com/dgfxvpxbr/video/upload/Esvaya_Hero_Video_ynxfly.mp4"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/70" />
      <div className="absolute inset-0" style={{ background: "rgba(110,105,95,0.32)", mixBlendMode: "multiply" }} />
      {/* Vignette */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 select-none">
        {/* Eyebrow */}
        <div className="hero-sub flex items-center justify-center gap-3 mb-7">
          <span className="h-px w-10 bg-white/20" />
          <span className="text-[12px] tracking-[0.32em] text-black font-bold uppercase">Sensory Wellness House</span>
          <span className="h-px w-10 bg-white/20" />
        </div>

        {/* Main headline */}
        <h1 className="hero-title font-serif text-[clamp(2.6rem,7vw,5.5rem)]  text-white  leading-[1.12]"
          style={{ fontStyle: "italic" }}>
          Experience the Stillness
          in the Chaos
        </h1>

        {/* Divider line */}
        <div className="flex justify-center mt-6 mb-5">
          <span className="hero-line block h-px bg-white/25" />
        </div>

   
        
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-[7.5px] tracking-[0.28em] text-white/28 uppercase">Scroll</p>
        <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
          className="text-white/28"
          style={{ animation: "bounce-y 2.2s ease-in-out infinite" }}
        >
          <path d="M1 1L5.5 6L10 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </div>
    </section>
  );
}

export default function EsvayaHero() {
  return (
    <div className="bg-black font-sans">
      <Navbar />
      <Hero />
    </div>
  );
}