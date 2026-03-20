import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../sanityClient'

const TEXTURES = [
  (accent) => `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#161616"/><circle cx="75%" cy="30%" r="90" fill="${accent}" opacity="0.09"/><circle cx="20%" cy="80%" r="60" fill="${accent}" opacity="0.06"/><line x1="0" y1="70%" x2="100%" y2="55%" stroke="${accent}" stroke-width="0.5" opacity="0.12"/></svg>`,
  (accent) => `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#161616"/><rect x="12%" y="12%" width="76%" height="76%" rx="6" fill="none" stroke="${accent}" stroke-width="0.5" opacity="0.14"/><circle cx="50%" cy="50%" r="35" fill="${accent}" opacity="0.07"/></svg>`,
  (accent) => `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#161616"/><path d="M0,80 Q80,20 160,80 T320,80" stroke="${accent}" stroke-width="0.6" fill="none" opacity="0.18" transform="translate(0,30)"/><circle cx="65%" cy="35%" r="50" fill="${accent}" opacity="0.07"/></svg>`,
  (accent) => `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#161616"/><line x1="15%" y1="0" x2="85%" y2="100%" stroke="${accent}" stroke-width="0.5" opacity="0.12"/><line x1="85%" y1="0" x2="15%" y2="100%" stroke="${accent}" stroke-width="0.5" opacity="0.08"/><circle cx="50%" cy="50%" r="40" fill="${accent}" opacity="0.06"/></svg>`
]

function CardImage({ post, index }) {
  // Logic: Use Sanity Main Image if it exists, otherwise use SVG texture
  if (post.mainImage) {
    return (
      <div className="w-full h-[240px] relative overflow-hidden rounded-t-2xl flex-shrink-0 border-b border-white/5">
        <img 
          src={post.mainImage} 
          alt={post.title} 
          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-40" />
      </div>
    )
  }

  const svgContent = TEXTURES[index % TEXTURES.length](post.accent || '#ffffff')
  return (
    <div
      className="w-full h-[240px] relative overflow-hidden rounded-t-2xl flex-shrink-0 border-b border-white/5"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}

function BlogCard({ post, index }) {
  return (
    <Link to={`/journal/${post.slug}`} className="group h-full block">
      <article className="flex-shrink-0 flex flex-col bg-[#141414] rounded-2xl overflow-hidden border border-white/[0.07] transition-all duration-500 ease-out hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/80 cursor-pointer h-full">
        
        <CardImage post={post} index={index} />
        
        <div className="flex flex-col flex-1 px-7 pt-7 pb-8 gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-white/[0.03] text-white/50 border border-white/5 font-['DM_Sans']">
              {post.tag}
            </span>
            <span className="text-[11px] text-white/30 font-['DM_Sans'] uppercase tracking-widest">{post.read} read</span>
          </div>

          <h3 className="text-[22px] font-semibold text-white/90 leading-[1.3] tracking-tight font-['Playfair_Display'] group-hover:text-white transition-colors">
            {post.title}
          </h3>

          <p className="text-[15px] italic text-white/40 leading-[1.6] flex-1 font-['Playfair_Display'] line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-5 mt-2 border-t border-white/[0.05]">
            <span className="text-[11px] text-white/20 uppercase tracking-tighter font-['DM_Sans']">{post.date}</span>
            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:border-white transition-all duration-500">
              <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5.5M10.5 2.5V7.5" 
                      className="group-hover:stroke-black stroke-white/30 transition-colors" 
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function BlogSection() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(4)
  const [animState, setAnimState] = useState('visible')
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const fetchPosts = async () => {
      // Added mainImage.asset->url to the query
      const query = `*[_type == "post"] | order(publishedAt desc) {
        tag, title, excerpt, accent,
        "read": readTime,
        "date": publishedAt,
        "slug": slug.current,
        "mainImage": mainImage.asset->url
      }`
      try {
        const data = await client.fetch(query)
        setPosts(data.map(p => ({
          ...p,
          date: new Date(p.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        })))
      } catch (err) { console.error("Sanity Error:", err) }
      finally { setLoading(false) }
    }
    fetchPosts()

    const update = () => {
      const w = window.innerWidth
      if (w < 640) setCardsPerPage(1)
      else if (w < 1100) setCardsPerPage(2)
      else if (w < 1400) setCardsPerPage(3)
      else setCardsPerPage(4)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalPages = Math.ceil(posts.length / cardsPerPage)
  const visiblePosts = posts.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)

  const navigate = (dir) => {
    const next = currentPage + dir
    if (next < 0 || next >= totalPages) return
    setDirection(dir); setAnimState('exit')
    setTimeout(() => {
      setCurrentPage(next); setAnimState('enter')
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimState('visible')))
    }, 250)
  }

  if (loading) return (
    <div className="h-[700px] flex items-center justify-center bg-[#0c0c0c]">
      <div className="text-white/10 tracking-[0.6em] uppercase text-[10px] animate-pulse font-['DM_Sans']">Syncing Rituals</div>
    </div>
  )

  return (
    <section className="bg-[#0c0c0c] py-28 border-t border-white/5">
      <div className="text-center mb-20 px-6">
        <p className="text-[18px] font-bold tracking-[0.5em] text-white uppercase mb-5 font-['DM_Sans']">
          The Journal
        </p>
         <h2 className="text-3xl font-['Playfair_Display'] text-white uppercase ">Thoughts on rest, rhythm & the body</h2>
        <div className="mx-auto w-16 h-px bg-white/10" />
      </div>

      <div className="relative px-8 md:px-20 max-w-[1700px] mx-auto">
        {/* Navigation Buttons */}
        <button onClick={() => navigate(-1)} disabled={currentPage === 0} 
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/5 text-white/20 hover:bg-white hover:text-black hover:border-white disabled:opacity-0 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">‹</button>
        
        <button onClick={() => navigate(1)} disabled={currentPage >= totalPages - 1} 
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/5 text-white/20 hover:bg-white hover:text-black hover:border-white disabled:opacity-0 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">›</button>

        {/* The Grid */}
        <div style={{
          display: 'grid',
          gap: '32px',
          gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          opacity: animState === 'visible' ? 1 : 0,
          transform: animState === 'exit' ? `translateY(10px)` : animState === 'enter' ? `translateY(-10px)` : 'none'
        }}>
          {visiblePosts.map((post, i) => (
            <BlogCard key={post.slug || i} post={post} index={currentPage * cardsPerPage + i} />
          ))}
        </div>
      </div>

      {/* Progress Bar / Pagination */}
      <div className="flex flex-col items-center gap-8 mt-20">
        <div className="flex gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button 
              key={i} 
              onClick={() => {
                setDirection(i > currentPage ? 1 : -1)
                setAnimState('exit')
                setTimeout(() => { setCurrentPage(i); setAnimState('enter'); setTimeout(() => setAnimState('visible'), 50)}, 250)
              }}
              className={`h-[2px] transition-all duration-700 ${i === currentPage ? 'w-12 bg-white/60' : 'w-4 bg-white/10 hover:bg-white/30'}`} 
            />
          ))}
        </div>
        
        <button className="group flex flex-col items-center gap-3">
            <span className="text-[10px]  tracking-[0.4em] text-white  transition-colors duration-500">View All Entries</span>
            <div className="w-px h-8 bg-white/10 group-hover:h-12 transition-all duration-500" />
        </button>
      </div>
    </section>
  )
}