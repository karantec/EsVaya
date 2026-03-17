import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../sanityClient'

const TEXTURES = [
  (accent) => `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#161616"/><circle cx="75%" cy="30%" r="90" fill="${accent}" opacity="0.09"/><circle cx="20%" cy="80%" r="60" fill="${accent}" opacity="0.06"/><line x1="0" y1="70%" x2="100%" y2="55%" stroke="${accent}" stroke-width="0.5" opacity="0.12"/></svg>`,
  (accent) => `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#161616"/><rect x="12%" y="12%" width="76%" height="76%" rx="6" fill="none" stroke="${accent}" stroke-width="0.5" opacity="0.14"/><circle cx="50%" cy="50%" r="35" fill="${accent}" opacity="0.07"/></svg>`,
  (accent) => `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#161616"/><path d="M0,80 Q80,20 160,80 T320,80" stroke="${accent}" stroke-width="0.6" fill="none" opacity="0.18" transform="translate(0,30)"/><circle cx="65%" cy="35%" r="50" fill="${accent}" opacity="0.07"/></svg>`,
  (accent) => `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#161616"/><line x1="15%" y1="0" x2="85%" y2="100%" stroke="${accent}" stroke-width="0.5" opacity="0.12"/><line x1="85%" y1="0" x2="15%" y2="100%" stroke="${accent}" stroke-width="0.5" opacity="0.08"/><circle cx="50%" cy="50%" r="40" fill="${accent}" opacity="0.06"/></svg>`
]

function BlogCard({ post, index }) {
  // Logic: Use Sanity Main Image if it exists, otherwise use SVG texture
  const renderHeader = () => {
    if (post.mainImage) {
      return (
        <div className="w-full h-[220px] relative overflow-hidden rounded-t-2xl">
          <img 
            src={post.mainImage} 
            alt={post.title} 
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent opacity-40" />
        </div>
      )
    }
    const svgContent = TEXTURES[index % TEXTURES.length](post.accent || '#ffffff')
    return (
      <div 
        className="w-full h-[220px] relative overflow-hidden rounded-t-2xl" 
        dangerouslySetInnerHTML={{ __html: svgContent }} 
      />
    )
  }

  return (
    <Link to={`/journal/${post.slug}`} className="group h-full block">
      <article className="flex-shrink-0 flex flex-col bg-[#141414] rounded-2xl overflow-hidden border border-white/[0.07] transition-all duration-500 hover:border-white/20 hover:-translate-y-2 h-full">
        {renderHeader()}
        
        <div className="flex flex-col flex-1 px-6 pt-6 pb-7 gap-3.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/[0.06] text-white border border-white/[0.07]">
              {post.tag}
            </span>
            <span className="text-[12px] text-white/40 font-['DM_Sans']">{post.read} read</span>
          </div>

          <h3 className="text-[20px] font-semibold text-white leading-tight font-['Playfair_Display'] group-hover:text-white/90">
            {post.title}
          </h3>

          <p className="text-[14px] italic text-white/40 font-['Playfair_Display'] line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 mt-auto border-t border-white/[0.06]">
            <span className="text-[12px] text-white/20 font-['DM_Sans']">{post.date}</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
               <svg width="10" height="10" viewBox="0 0 13 13" fill="none">
                 <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5.5M10.5 2.5V7.5" 
                       className="group-hover:stroke-black stroke-white/40" 
                       strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function BlogCarousel() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(4)

  useEffect(() => {
    // Fetch posts including the mainImage URL
    client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      title, tag, excerpt, accent, 
      "read": readTime, 
      "slug": slug.current, 
      "date": publishedAt,
      "mainImage": mainImage.asset->url
    }`).then(data => {
      setPosts(data.map(p => ({
        ...p,
        date: new Date(p.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      })))
      setLoading(false)
    })

    const update = () => {
      const w = window.innerWidth
      if (w < 640) setCardsPerPage(1)
      else if (w < 1024) setCardsPerPage(2)
      else setCardsPerPage(4)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalPages = Math.ceil(posts.length / cardsPerPage)
  const visiblePosts = posts.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)

  if (loading) return (
    <div className="bg-[#0c0c0c] py-32 text-center text-white/10 uppercase tracking-[0.4em] text-xs animate-pulse">
      Syncing Journal...
    </div>
  )

  return (
    <section className="bg-[#0c0c0c] py-20 px-10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-white/10 to-transparent" />

      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-center items-center mb-12 px-2">
          <div>
        
            <h2 className="text-3xl font-['Playfair_Display'] text-white uppercase ">Thoughts on rest, rhythm & the body</h2>
          </div>
          <div className="flex gap-4 mb-1">
             <button 
               onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
               disabled={currentPage === 0}
               className="text-white/20 hover:text-white disabled:opacity-0 transition-all text-2xl p-2"
             >‹</button>
             <button 
               onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
               disabled={currentPage >= totalPages - 1}
               className="text-white/20 hover:text-white disabled:opacity-0 transition-all text-2xl p-2"
             >›</button>
          </div>
        </div>

        <div className="grid gap-6 transition-all duration-500" style={{ gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))` }}>
          {visiblePosts.map((post, i) => (
            <BlogCard key={post.slug || i} post={post} index={currentPage * cardsPerPage + i} />
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="mt-16 flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`h-[1px] transition-all duration-500 ${i === currentPage ? 'w-12 bg-white/40' : 'w-4 bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}