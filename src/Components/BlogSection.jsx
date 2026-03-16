// BlogCarousel.jsx
// Requires: Tailwind CSS v3+
// Add to index.html:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

import { useState, useEffect } from 'react'

const POSTS = [
  {
    tag: 'Nervous System',
    title: "Why your body doesn't know the workday is over",
    excerpt: 'The lingering hum of cortisol long after you close the laptop — and what to do about it.',
    date: 'Mar 2025',
    read: '4 min',
    accent: '#c8b8a0',
  },
  {
    tag: 'Energy',
    title: 'The 3PM crash is not a caffeine problem',
    excerpt: 'Your cortisol system has been running since 9AM. The afternoon slump is a signal, not a weakness.',
    date: 'Mar 2025',
    read: '4 min',
    accent: '#a0b8c8',
  },
  {
    tag: 'Neuroscience',
    title: 'The science of scent: why smell bypasses your brain',
    excerpt: 'Every other sense waits at the gate. Scent walks straight to your emotional brain. Here is why.',
    date: 'Feb 2025',
    read: '6 min',
    accent: '#b0a8c8',
  },
  {
    tag: 'Habit Science',
    title: 'Why 21 days is a lie (and what actually takes 30)',
    excerpt: 'The most repeated claim in wellness is not backed by the research. Here is what actually is.',
    date: 'Feb 2025',
    read: '4 min',
    accent: '#a8c0b0',
  },
  {
    tag: 'Wellness',
    title: 'The problem with meditation apps',
    excerpt: 'Not an anti-meditation essay. An honest look at why the format fails a specific group of people.',
    date: 'Jan 2025',
    read: '4 min',
    accent: '#c8a8a8',
  },
  {
    tag: 'Ingredients',
    title: 'Fragrance and functional scent are not the same thing',
    excerpt: 'One is an aesthetic product. The other is biochemistry. Knowing the difference matters.',
    date: 'Jan 2025',
    read: '5 min',
    accent: '#c0b8a0',
  },
  {
    tag: 'Founder',
    title: 'The normalisation of depletion',
    excerpt: 'The sleeping commuters. The 11PM inbox checks. Nobody named it. We wanted to.',
    date: 'Dec 2024',
    read: '6 min',
    accent: '#a8b8c0',
  },
  {
    tag: 'Sourcing',
    title: 'Soil to sense: why we source every ingredient from India',
    excerpt: 'Indian land, Indian farmers, Indian knowledge — carried on Indian skin.',
    date: 'Dec 2024',
    read: '5 min',
    accent: '#b8c0a8',
  },
  {
    tag: 'Ritual',
    title: 'What is a nervous system ritual?',
    excerpt: 'The concept sounds like an Instagram caption. The mechanism is grounded in neuroscience.',
    date: 'Nov 2024',
    read: '5 min',
    accent: '#c0a8b8',
  },
]

const TEXTURES = [
  (accent) => `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#161616"/>
      <circle cx="75%" cy="30%" r="90" fill="${accent}" opacity="0.09"/>
      <circle cx="20%" cy="80%" r="60" fill="${accent}" opacity="0.06"/>
      <line x1="0" y1="70%" x2="100%" y2="55%" stroke="${accent}" stroke-width="0.5" opacity="0.12"/>
    </svg>
  `,
  (accent) => `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#161616"/>
      <rect x="12%" y="12%" width="76%" height="76%" rx="6" fill="none" stroke="${accent}" stroke-width="0.5" opacity="0.14"/>
      <circle cx="50%" cy="50%" r="35" fill="${accent}" opacity="0.07"/>
    </svg>
  `,
  (accent) => `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#161616"/>
      <path d="M0,80 Q80,20 160,80 T320,80" stroke="${accent}" stroke-width="0.6" fill="none" opacity="0.18" transform="translate(0,30)"/>
      <circle cx="65%" cy="35%" r="50" fill="${accent}" opacity="0.07"/>
    </svg>
  `,
  (accent) => `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#161616"/>
      <line x1="15%" y1="0" x2="85%" y2="100%" stroke="${accent}" stroke-width="0.5" opacity="0.12"/>
      <line x1="85%" y1="0" x2="15%" y2="100%" stroke="${accent}" stroke-width="0.5" opacity="0.08"/>
      <circle cx="50%" cy="50%" r="40" fill="${accent}" opacity="0.06"/>
    </svg>
  `,
]

function CardImage({ post, index }) {
  const svgContent = TEXTURES[index % TEXTURES.length](post.accent)
  return (
    <div
      className="w-full h-[220px] relative overflow-hidden rounded-t-2xl flex-shrink-0"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}

function BlogCard({ post, index }) {
  return (
    <article
      className="
        flex-shrink-0 flex flex-col
        bg-[#141414] rounded-2xl overflow-hidden
        border border-white/[0.07]
        transition-all duration-500 ease-out
        hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60
        group cursor-pointer
      "
    >
      <CardImage post={post} index={index} />

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-5" />

      <div className="flex flex-col flex-1 px-6 pt-6 pb-7 gap-3.5">

        <div className="flex items-center justify-between">
          <span
            className="text-[11px] font-medium tracking-[0.14em] uppercase px-3 py-1.5 rounded-full bg-white/[0.06] text-white border border-white/[0.07]"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {post.tag}
          </span>
          <span
            className="text-[12px] text-white"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {post.read} read
          </span>
        </div>

        <h3
          className="text-[20px] font-semibold text-white leading-[1.35] tracking-[-0.01em] group-hover:text-white transition-colors duration-300"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          {post.title}
        </h3>

        <p
          className="text-[14px] italic text-white leading-[1.75] flex-1 group-hover:text-white/50 transition-colors duration-300"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/[0.06]">
          <span
            className="text-[12px] text-white"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {post.date}
          </span>
          <div className="
            w-[34px] h-[34px] rounded-full flex items-center justify-center
            border border-white bg-transparent
            transition-all duration-300
            group-hover:bg-white group-hover:border-white
          ">
            <svg
              width="13" height="13" viewBox="0 0 13 13" fill="none"
              className="transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px"
            >
              <path
                d="M2.5 10.5L10.5 2.5M10.5 2.5H5.5M10.5 2.5V7.5"
                className="group-hover:[stroke:#000] transition-colors duration-300"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

      </div>
    </article>
  )
}

export default function BlogCarouselDetail() {
  const [currentPage, setCurrentPage] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(6)
  const [animState, setAnimState] = useState('visible')
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    function update() {
      const w = window.innerWidth
      if (w < 560) setCardsPerPage(1)
      else if (w < 900) setCardsPerPage(2)
      else setCardsPerPage(4)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalPages = Math.ceil(POSTS.length / cardsPerPage)
  const visiblePosts = POSTS.slice(currentPage * cardsPerPage, currentPage * cardsPerPage + cardsPerPage)

  function navigate(dir) {
    const next = currentPage + dir
    if (next < 0 || next >= totalPages) return
    setDirection(dir)
    setAnimState('exit')
    setTimeout(() => {
      setCurrentPage(next)
      setAnimState('enter')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimState('visible'))
      })
    }, 200)
  }

  function goToPage(i) {
    if (i === currentPage) return
    const dir = i > currentPage ? 1 : -1
    setDirection(dir)
    setAnimState('exit')
    setTimeout(() => {
      setCurrentPage(i)
      setAnimState('enter')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimState('visible'))
      })
    }, 200)
  }

  const slideStyle = {
    transition: animState === 'visible' ? 'opacity 0.25s ease, transform 0.25s ease' : 'none',
    opacity: animState === 'visible' ? 1 : 0,
    transform:
      animState === 'exit'
        ? `translateX(${direction > 0 ? '-24px' : '24px'})`
        : animState === 'enter'
        ? `translateX(${direction > 0 ? '24px' : '-24px'})`
        : 'translateX(0)',
  }

  return (
    <section className="bg-[#0c0c0c] py-16">

      {/* Header */}
      <div className="text-center mb-10 px-6 mt-14">
        <p
          className="text-[28px] tracking-[0.2em] text-white uppercase mb-3"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          From the journal Thoughts on rest, rhythm &amp; the body
        </p>
        <h2
          className="text-[clamp(26px,4vw,42px)] font-semibold text-white/90 tracking-tight leading-tight max-w-xl mx-auto mb-5"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
         
        </h2>
        <div className="mx-auto w-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Carousel */}
      <div className="relative px-11 md:px-14 max-w-full mx-auto">

        {/* Prev */}
        <button
          onClick={() => navigate(-1)}
          disabled={currentPage === 0}
          className="
            absolute left-0 top-1/2 -translate-y-1/2 z-10
            w-9 h-9 rounded-full
            border border-white/10 bg-white/[0.04]
            flex items-center justify-center
            text-white/40 text-xl
            transition-all duration-200
            hover:bg-white/10 hover:border-white/25 hover:text-white/70
            disabled:opacity-20 disabled:cursor-not-allowed
          "
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Grid */}
        <div
          style={{
            ...slideStyle,
            display: 'grid',
            gap: '18px',
            gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
          }}
        >
          {visiblePosts.map((post, i) => (
            <BlogCard
              key={`${currentPage}-${i}`}
              post={post}
              index={currentPage * cardsPerPage + i}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => navigate(1)}
          disabled={currentPage >= totalPages - 1}
          className="
            absolute right-0 top-1/2 -translate-y-1/2 z-10
            w-9 h-9 rounded-full
            border border-white/10 bg-white/[0.04]
            flex items-center justify-center
            text-white/40 text-xl
            transition-all duration-200
            hover:bg-white/10 hover:border-white/25 hover:text-white/70
            disabled:opacity-20 disabled:cursor-not-allowed
          "
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Dots + counter */}
      <div className="flex flex-col items-center gap-2.5 mt-7">
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === currentPage ? '22px' : '7px',
                height: '7px',
                background: i === currentPage ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.12)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
        <span
          className="text-[11px] text-white/18 tracking-widest"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {currentPage + 1} / {totalPages}
        </span>
      </div>

      {/* CTA */}
      <div className="text-center mt-6">
        <button
          className="
            px-6 py-2.5 rounded-full
            border border-white/10 text-white text-[12px]
            transition-all duration-300
          "
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          View all articles →
        </button>
      </div>

    </section>
  )
}