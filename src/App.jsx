import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'

const ritualSteps = {
  focus: [
    'Three seconds on wrists or temples',
    'One slow inhale through the nose',
    'Hold the breath for four counts',
  ],
  unwind: [
    'Two sprays on your linen or pillow',
    'Five slow breaths through your nose',
    'No screens for the next fifteen minutes',
  ],
}

function ProductCard({ time, italic, title, stepKey, cta, price, noBorder }) {
  const [added, setAdded] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`relative flex flex-col overflow-hidden ${noBorder ? '' : 'border-r border-gray-800'}`}
      style={{ padding: '72px 64px 96px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* White flood overlay */}
      <div
        className="absolute inset-0 bg-white z-0 transition-transform duration-500"
        style={{ transform: hovered ? 'translateY(0%)' : 'translateY(101%)', transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)' }}
      />

      {/* All content above overlay */}
      <div className="relative z-10 flex flex-col h-full">

        {/* Image */}
        <div className="mb-12" style={{ width: 90, height: 110 }}>
          <img
            src={heroImg}
            alt={`${italic} ${title}`}
            className="w-full h-full object-contain"
            style={{ filter: hovered ? 'grayscale(1) brightness(0.15)' : 'grayscale(1) brightness(0.85)', transition: 'filter 0.4s' }}
          />
        </div>

        {/* Time label */}
        <span
          className="block mb-5 uppercase font-light"
          style={{ fontSize: 9, letterSpacing: '0.35em', color: hovered ? '#555' : '#666' }}
        >
          {time} ——
        </span>

        {/* Product name */}
        <h2
          className="font-black leading-none mb-12"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(40px, 4.5vw, 58px)',
            color: hovered ? '#000' : '#f5f3f0',
            transition: 'color 0.3s',
          }}
        >
          <em className="block font-normal italic">{italic}</em>
          {title}
        </h2>

        {/* Steps */}
        <ol className="list-none mb-10" style={{ flex: 1 }}>
          {ritualSteps[stepKey].map((step, i) => (
            <li
              key={i}
              className="flex gap-5 py-4"
              style={{
                borderTop: i === 0 ? `1px solid ${hovered ? '#ccc' : '#1e1e1e'}` : 'none',
                borderBottom: `1px solid ${hovered ? '#ccc' : '#1e1e1e'}`,
                fontSize: 13,
                color: hovered ? '#444' : '#666',
                letterSpacing: '0.05em',
                lineHeight: 1.6,
                transition: 'all 0.3s',
              }}
            >
              <span
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 10,
                  color: hovered ? '#999' : '#555',
                  minWidth: 12,
                  paddingTop: 3,
                  opacity: 0.6,
                }}
              >
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        {/* CTA italic line */}
        <p
          className="italic mb-10"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 17,
            color: hovered ? '#555' : '#666',
            lineHeight: 1.6,
            transition: 'color 0.3s',
          }}
        >
          {cta}
        </p>

        {/* Button */}
        <button
          onClick={() => setAdded(a => !a)}
          className="self-start uppercase font-light transition-colors duration-200"
          style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: 9,
            letterSpacing: '0.3em',
            padding: '16px 32px',
            border: `1px solid ${hovered ? '#000' : '#f5f3f0'}`,
            color: hovered ? '#000' : '#f5f3f0',
            background: 'transparent',
            cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = hovered ? '#000' : '#f5f3f0'; e.currentTarget.style.color = hovered ? '#fff' : '#000' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = hovered ? '#000' : '#f5f3f0' }}
        >
          {added ? 'Added to ritual ✓' : `Add to ritual — $${price}`}
        </button>
      </div>
    </div>
  )
}

export default function App() {
  // Inject Google Fonts
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Jost:wght@200;300;400;500&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a', color: '#f5f3f0', fontFamily: 'Jost, sans-serif' }}>

      {/* NAV */}
      <nav
        className="flex justify-between items-center sticky top-0 z-50 border-b border-gray-800"
        style={{ padding: '32px 64px', background: '#0a0a0a' }}
      >
        <div className="flex flex-col" style={{ gap: 3 }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, letterSpacing: '0.35em', color: '#f5f3f0' }}>
            ESVAYA
          </span>
          <span style={{ fontSize: 8, letterSpacing: '0.3em', color: '#666', textTransform: 'uppercase' }}>
            Sensory Wellness House
          </span>
        </div>

        <div className="flex items-center" style={{ gap: 48 }}>
          {['Products', 'Our Story'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="transition-colors duration-200 relative"
              style={{ fontSize: 9, letterSpacing: '0.3em', color: '#666', textDecoration: 'none', textTransform: 'uppercase' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f5f3f0'}
              onMouseLeave={e => e.currentTarget.style.color = '#666'}
            >
              {link}
            </a>
          ))}
          <button className="transition-colors duration-200 p-1" style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto text-center" style={{ maxWidth: 900, padding: '100px 64px 80px' }}>
        <p
          className="font-normal italic leading-loose"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.6vw, 28px)', color: '#f5f3f0' }}
        >
          We took those ingredients and built something you can use in two minutes.{' '}
          <strong className="font-bold not-italic">Every single day.</strong>{' '}
          Until your nervous system learns to do it without you.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-gray-800" style={{ margin: '0 64px' }} />

      {/* PRODUCTS */}
      <section id="products" className="grid grid-cols-2">
        <ProductCard time="Morning" italic="Focus" title="Roll-On" stepKey="focus" cta="Your brain receives the signal: begin." price={48} noBorder={false} />
        <ProductCard time="Evening" italic="Unwind" title="Night Mist" stepKey="unwind" cta="Your brain receives the signal: it is over." price={52} noBorder={true} />
      </section>

      {/* DIVIDER */}
      <div className="border-t border-gray-800" style={{ margin: '0 64px' }} />

      {/* STORY */}
      <section id="our-story" className="flex justify-center" style={{ padding: '120px 64px' }}>
        <div className="text-center" style={{ maxWidth: 580 }}>
          <span className="block mb-8 uppercase" style={{ fontSize: 9, letterSpacing: '0.35em', color: '#666' }}>
            Our Story
          </span>
          <h3
            className="font-normal italic mb-7"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(30px,3.5vw,46px)', color: '#f5f3f0', lineHeight: 1.3 }}
          >
            Built from the inside out.
          </h3>
          <p className="font-light leading-loose" style={{ fontSize: 14, color: '#666', letterSpacing: '0.04em' }}>
            Every formula starts with a single question: what does the nervous system actually need?
            Not what smells nice. Not what markets well. What works — in two minutes, every day,
            until it becomes part of you.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex justify-between items-center border-t border-gray-800" style={{ padding: '40px 64px' }}>
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 700, letterSpacing: '0.35em', color: '#444' }}>
          ESVAYA
        </span>
        <span className="uppercase" style={{ fontSize: 9, letterSpacing: '0.2em', color: '#444' }}>
          © 2025 Esvaya. All rights reserved.
        </span>
      </footer>
    </div>
  )
}