// Hero.jsx
export default function HeroBlog() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <style>{`
        @keyframes bounce-y  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }
        @keyframes fade-up   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fade-up-2 { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes line-grow { from{width:0} to{width:3rem} }

        .hero-title  { animation: fade-up   1.3s cubic-bezier(0.16,1,0.3,1) 0.35s both; }
        .hero-line   { animation: line-grow 0.8s ease 1.2s both; }
        .hero-sub    { animation: fade-up-2 1s ease 1s both; }
        .hero-sub2   { animation: fade-up-2 1s ease 1.25s both; }
        .hero-scroll { animation: fade-up-2 1s ease 1.6s both; }
      `}</style>

      {/* Video */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="https://res.cloudinary.com/dg3djpzq2/video/upload/v1773638092/WhatsApp_Video_2026-03-16_at_10.44.02_AM_zkzuie.mp4"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/70" />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(110,105,95,0.32)", mixBlendMode: "multiply" }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 select-none">
        <h1
          className="hero-title font-serif text-[clamp(2.6rem,7vw,3.5rem)] text-white leading-[1.12]"
          style={{ fontStyle: "italic" ,fontWeight:"bold" }}
        >
         Science that should have been told to you a long time ago
        </h1>
      
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-[7.5px] tracking-[0.28em] text-white/28 uppercase">Scroll</p>
        <svg
          width="11" height="8" viewBox="0 0 11 8" fill="none"
          className="text-white/28"
          style={{ animation: "bounce-y 2.2s ease-in-out infinite" }}
        >
          <path d="M1 1L5.5 6L10 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}