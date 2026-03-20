import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { client } from '../sanityClient'
import { PortableText } from '@portabletext/react'
import BlogCarousel from './Blog'

export default function BlogDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    /* 1. Updated query to fetch the Featured Image URL */
    const query = `*[_type == "post" && slug.current == $slug][0] {
      title,
      tag,
      "date": publishedAt,
      "read": readTime,
      "mainImage": mainImage.asset->url,
      content,
      accent
    }`
    
    client.fetch(query, { slug }).then((data) => {
      setPost(data)
      setLoading(false)
      window.scrollTo(0, 0)
    })
  }, [slug])

  if (loading) return (
    <div className="h-screen bg-[#0c0c0c] flex items-center justify-center">
      <div className="text-white/20 uppercase tracking-[0.4em] text-xs animate-pulse font-['DM_Sans']">
        Entering Ritual...
      </div>
    </div>
  )
  
  if (!post) return <div className="h-screen bg-[#0c0c0c] text-white p-20 font-['DM_Sans']">Entry not found.</div>

  return (
    <div className="bg-[#0c0c0c] min-h-screen text-white font-['DM_Sans'] selection:bg-white selection:text-black">
      {/* Subtle Nav */}
      <nav className="p-8 border-b border-white/5 flex justify-between items-center sticky top-0 bg-[#0c0c0c]/90 backdrop-blur-md z-50">
        <Link to="/blog" className="text-[10px] tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-all">
          ← Return to Journal
        </Link>
        <span className="font-['Playfair_Display'] italic opacity-60 text-lg">Esvaya</span>
      </nav>

      <article className="pb-32">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 text-[15px] uppercase tracking-[0.2em] mb-8 text-white">
            {post.tag}
          </div>
          <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-semibold leading-[1.1] mb-12 tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-[11px] tracking-widest uppercase text-white border-y border-white/5 py-6 mb-16">
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span>{post.read} Read</span>
          </div>
        </header>

        {/* 2. Featured Hero Image with Mask */}
        {post.mainImage && (
          <div className="w-full max-w-5xl mx-auto px-4 mb-24">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/5">
              <img 
                src={post.mainImage} 
                alt={post.title}
                className="w-full h-full object-cover opacity-80"
              />
              {/* Subtle gradient overlay to blend into the site depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        )}

        {/* 3. Long Story Content Area */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="prose prose-invert max-w-none 
            text-white/70 leading-[1.8] text-lg font-light
            prose-headings:font-['Playfair_Display'] prose-headings:text-white prose-headings:font-semibold
            prose-p:mb-10
            prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-8
            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
            prose-blockquote:border-l-white/20 prose-blockquote:italic prose-blockquote:text-white/40 prose-blockquote:bg-white/[0.02] prose-blockquote:p-8 prose-blockquote:rounded-r-xl
            prose-strong:text-white prose-strong:font-medium
            prose-img:rounded-xl prose-img:border prose-img:border-white/10">
            
            <PortableText 
              value={post.content} 
              components={{
                /* Custom renderers for images inside the story content */
                types: {
                  image: ({ value }) => (
                    <img 
                      src={client.imageUrlBuilder?.image(value).url()} 
                      alt="Story visual" 
                      className="my-12 rounded-xl border border-white/5" 
                    />
                  )
                }
              }}
            />
          </div>

          <footer className="mt-32 pt-16 border-t border-white/5 text-center">
            <Link to="/" className="group inline-flex flex-col items-center">
              <span className="text-xs tracking-[0.4em] text-white mb-4 transition-colors">End of entry</span>
              <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </Link>
          </footer>

         
        </div>
         <BlogCarousel/>
      </article>
    </div>
  )
}