// StressorsSection.jsx
import { useEffect, useRef } from 'react'

const STRESSORS = [
  {
    number: '01',
    title: ['Back-to-back', 'meetings &', 'constant alerts'],
    desc: 'No pause between demands. The mind never gets to exhale.',
  },
  {
    number: '02',
    title: ['Productivity', 'loss & broken', 'sleep'],
    desc: 'Exhausted but wired. Output drops while effort keeps climbing.',
  },
  {
    number: '03',
    title: ['Cognitive', 'overload &', 'emotional fatigue'],
    desc: 'The weight of too many thoughts — with nowhere left to put them.',
  },
]

export default function StressorsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.esv-item')
    if (!items) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => el.classList.add('esv-item--visible'), i * 150)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white px-12 pt-[72px] pb-20 box-border"
      style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        .esv-item {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .esv-item--visible {
          opacity: 1;
          transform: translateY(0);
        }
        .esv-item-bg {
          position: absolute;
          inset: 0;
          background: rgba(196, 185, 168, 0.12);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .esv-item:hover .esv-item-bg {
          opacity: 1;
        }
      `}</style>

      {/* Headline — center aligned */}
      <p
        className="text-[28px] font-normal text-[#2c2825] leading-[1.45] tracking-[-0.01em] max-w-[800px] mx-auto mb-16 text-center"
        style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
      >
        Your nervous system is under constant, unrelenting pressure.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-3 border-t border-[#c4b9a8]">
        {STRESSORS.map((item, i) => (
          <div
            key={i}
            className={`esv-item relative text-left
              ${i === 0 ? 'pt-10 pr-8 pb-10 pl-0' : ''}
              ${i === 1 ? 'px-8 py-10 border-x border-[#c4b9a8]' : ''}
              ${i === 2 ? 'pt-10 pl-8 pb-10 pr-0' : ''}
            `}
          >
            <div className="esv-item-bg" />

            {/* Number */}
            <span
              className="text-[13px] font-light tracking-[0.2em] text-[#b0a492] block mb-5"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              {item.number}
            </span>

            {/* Title */}
            <p
              className="text-[clamp(24px,4vw,30px)] font-bold text-[#2c2825] mb-4"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              {item.title.map((line, j) => (
                <span key={j}>
                  {line}
                  {j < item.title.length - 1 && <br />}
                </span>
              ))}
            </p>

            {/* Description */}
            <p
              className="text-[24px] font-bold text-black leading-[1.7] m-0 italic"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              {item.desc}
            </p>

            {/* Rule */}
            <div className="w-7 h-px bg-[#c4b9a8] mt-5" />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-14 pt-8 border-t border-[#c4b9a8] flex items-center justify-center">
        <div
          className="flex-1 h-px mr-6"
          style={{ background: 'linear-gradient(to left, transparent, #c4b9a8)' }}
        />
        <div
          className="flex-1 h-px ml-6"
          style={{ background: 'linear-gradient(to right, transparent, #c4b9a8)' }}
        />
      </div>
    </section>
  )
}