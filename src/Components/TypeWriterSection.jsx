// TypewriterSection.jsx
import { useState, useEffect, useRef } from 'react'

const LINES = [
  { text: '"It\'s Sunday evening feeling like Monday morning."', italic: true },
  { text: '"By 3PM, you\'re not tired. You\'re completely depleted."', italic: true },
  { text: '"You\'re in bed. Your brain is still in the office."', italic: true },
  { text: 'Your nervous system was never given the signal that the day is actually over.', italic: false },
  { text: 'We built Esvaya for that specific, unnamed feeling —\nthe one nobody is talking about, but everyone is experiencing.', italic: false,  },
]

const TYPING_SPEED = 30
const GAP_BETWEEN = 3000

export default function TypewriterSection() {
  const [visibleLines, setVisibleLines] = useState([])
  const [typingLine, setTypingLine] = useState(null)
  const [typedCount, setTypedCount] = useState(0)
  const sectionRef = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) startSequence() },
      { threshold: 0.25 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const startSequence = () => {
    if (started.current) return
    started.current = true
    scheduleNext(0)
  }

  const scheduleNext = (index) => {
    if (index >= LINES.length) return
    setTimeout(() => {
      setTypingLine(index)
      setTypedCount(0)
    }, index === 0 ? 400 : GAP_BETWEEN)
  }

  useEffect(() => {
    if (typingLine === null) return
    const text = LINES[typingLine].text
    if (typedCount < text.length) {
      const t = setTimeout(() => setTypedCount(c => c + 1), TYPING_SPEED)
      return () => clearTimeout(t)
    }
    setVisibleLines(prev => [...prev, typingLine])
    setTypingLine(null)
    scheduleNext(typingLine + 1)
  }, [typingLine, typedCount])

  const getLineText = (index) => {
    if (visibleLines.includes(index)) return LINES[index].text
    if (typingLine === index) return LINES[index].text.slice(0, typedCount)
    return null
  }

  const isActive = (index) => typingLine === index || visibleLines.includes(index)

  // All colors tuned to the warm cream/linen palette
  const lineColors = [
    '#5a5248',   // line 0 — warm dark taupe (italic quotes)
    '#6b6158',   // line 1 — slightly warmer taupe
    '#7a7068',   // line 2 — muted mid taupe
    '#2c2825',   // line 3 — deep warm brown (bold statement)
    '#9e8c6e',   // line 4 — warm muted gold/sand accent
  ]

  const cursorColors = ['#9e8c6e', '#9e8c6e', '#9e8c6e', '#2c2825', '#9e8c6e']

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center px-6 md:px-16 py-24 overflow-hidden"
      style={{
        background: '#f0ede8', // warm linen — matches the screenshot exactly
        fontFamily: '"Playfair Display", Georgia, serif',
        minHeight: '70vh',
      }}
    >
      <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-8 z-10">
        {LINES.map((line, i) => {
          const displayed = getLineText(i)
          const active = isActive(i)
          const typing = typingLine === i
          const done = visibleLines.includes(i)

          return (
            <div
              key={i}
              className="w-full transition-opacity duration-500"
              style={{ opacity: active ? 1 : 0, minHeight: '1.2em' }}
            >
              {active && (
                <p
                  className={`leading-snug ${line.italic ? 'italic' : 'not-italic'}`}
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: line.accent
                      ? 'clamp(13px, 1.3vw, 15px)'
                      : i <= 2
                      ? 'clamp(18px, 2.2vw, 26px)'
                      : 'clamp(22px, 2.8vw, 34px)',
                    fontWeight: i <= 2 ? 400 : 700,
                    color: lineColors[i],
                    letterSpacing: i === 4 ? '0.02em' : '-0.01em',
                    whiteSpace: i === 4 ? 'pre-line' : 'normal',
                    transition: 'color 0.5s ease',
                  }}
                >
                  {displayed}

                  {/* Blinking cursor */}
                  {typing && (
                    <span
                      className="inline-block align-middle ml-0.5"
                      style={{
                        width: 2,
                        height: '0.75em',
                        background: cursorColors[i],
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        animation: 'blink 0.65s step-end infinite',
                      }}
                    />
                  )}
                </p>
              )}

              {/* Divider after line 3 */}
              {done && i === 3 && (
                <span
                  className="block mt-6 mx-auto h-px"
                  style={{
                    width: 240,
                    background: 'linear-gradient(to right, transparent, #c4b9a8, transparent)',
                  }}
                />
              )}
            </div>
          )
        })}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  )
}