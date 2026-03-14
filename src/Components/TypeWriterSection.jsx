// TypewriterSection.jsx
import { useState, useEffect, useRef } from 'react'

const LINES = [
  {
    text: '"Sunday evening that already feels like Monday morning. By 3 PM, you are not tired but completely depleted. You\'re in bed but your mind is still in the office."',
    italic: true,
  },
  {
    text: 'Your nervous system was never given the signal that the day is actually over.',
    italic: false,
  },
  {
    text: 'We built Esvaya for that specific, unnamed feeling —\nthe one nobody is talking about, but everyone is experiencing.',
    italic: false,
  },
]

const TYPING_SPEED = 40
const GAP_BETWEEN = 2500

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

  const lineStyles = [
    { color: '#5a5248', fontSize: 'clamp(16px, 1.8vw, 22px)', fontWeight: 400 }, // line 0 — italic quote
    { color: '#2c2825', fontSize: 'clamp(18px, 2vw, 26px)',   fontWeight: 700 }, // line 1 — nervous system (smaller, single line)
    { color: '#2c2825', fontSize: 'clamp(18px, 2vw, 26px)',   fontWeight: 700 }, // line 2 — We built Esvaya (black, same size)
  ]

  const cursorColors = ['#9e8c6e', '#2c2825', '#2c2825']

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center px-6 md:px-16 py-24 overflow-hidden"
      style={{
        background: '#f0ede8',
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
          const style = lineStyles[i]

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
                    fontSize: style.fontSize,
                    fontWeight: style.fontWeight,
                    color: style.color,
                    letterSpacing: '-0.01em',
                    whiteSpace: i === 2 ? 'pre-line' : 'normal',
                    transition: 'color 0.5s ease',
                  }}
                >
                  {displayed}
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

              {done && i === 1 && (
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