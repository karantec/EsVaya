// Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Product",  to: "/thearchitecture"  },
   { label: "Ritual",  to: "/ritual"      },
      { label: "Journal",  to: "/blog"      },
  { label: "Our Story", to: "/story" },
 
  
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location                = useLocation();

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (window.scrollY > 60) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/90 backdrop-blur-xl border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="no-underline text-white font-bold">
 <div className="flex items-center gap-3 font-bold text-4xl">
  Esvaya
</div>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative font-serif tracking-widest text-[20px] transition-colors duration-200 no-underline
                 after:absolute after:bottom-[-3px] after:left-0 after:h-px after:bg-white
                 after:transition-all after:duration-300
                 ${isActive
                   ? "text-black after:w-full"
                   : "text-white hover:text-white after:w-0 hover:after:w-full"
                 }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Grid icon */}
          <button className="w-8 h-8 border border-white/15 rounded-sm flex items-center justify-center hover:border-white/45 hover:bg-white/5 transition-all duration-200">
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
          {/* Live dot */}
          <span className="w-[5px] h-[5px] rounded-full bg-lime-400 animate-pulse" />

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <span
              className="block h-px w-[18px] bg-white/60 transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(3px)" : "none" }}
            />
            <span
              className="block h-px bg-white/60 transition-all duration-300"
              style={{ width: "12px", opacity: menuOpen ? 0 : 1, marginLeft: "-3px" }}
            />
            <span
              className="block h-px w-[18px] bg-white/60 transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-3px)" : "none" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-5 animate-[fadeDown_0.35s_ease_forwards]">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-serif tracking-[0.25em] text-md transition-colors duration-200 no-underline
                 py-1 border-b border-white/5 pb-4
                 ${isActive ? "text-white" : "text-white/55 hover:text-white"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}