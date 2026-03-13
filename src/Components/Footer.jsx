// Footer.jsx
import { useState } from 'react'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Rituals', href: '#rituals' },
  { label: 'Journal', href: '#journal' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/esvaya',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    href: 'https://pinterest.com/esvaya',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.38 1.27-5.38s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.4-2.02 3.4-4.95 0-2.59-1.86-4.4-4.52-4.4-3.08 0-4.88 2.31-4.88 4.69 0 .93.36 1.92.8 2.46.09.11.1.2.07.31-.08.34-.26 1.09-.3 1.24-.05.2-.16.24-.38.15-1.42-.66-2.31-2.76-2.31-4.44 0-3.61 2.62-6.93 7.56-6.93 3.97 0 7.06 2.83 7.06 6.6 0 3.94-2.48 7.1-5.93 7.1-1.16 0-2.25-.6-2.62-1.31l-.71 2.67c-.26.99-.95 2.23-1.41 2.98.57.17 1.16.26 1.78.26 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/esvaya',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer
      className="border-t border-gray-900"
      style={{ background: '#0a0a0a', fontFamily: 'Jost, sans-serif' }}
    >
      {/* Top 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-16 py-16 border-b border-gray-900">

        {/* Column 1 — Brand */}
        <div className="flex flex-col gap-6">
          <div>
            <p
              className="font-bold tracking-widest text-gray-100 mb-1"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, letterSpacing: '0.35em' }}
            >
              ESVAYA
            </p>
            <p className="text-gray-600 uppercase tracking-widest" style={{ fontSize: 8 }}>
              Sensory Wellness House
            </p>
          </div>

          <p
            className="text-gray-500 leading-relaxed italic"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 14, maxWidth: 220 }}
          >
            Two minutes a day. Until your nervous system learns to do it without you.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-1">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 border border-gray-800 text-gray-600 hover:border-gray-300 hover:text-gray-300 transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Navigation */}
        <div className="flex flex-col">
          <span
            className="text-gray-700 uppercase tracking-widest mb-6 block"
            style={{ fontSize: 8 }}
          >
            Navigate
          </span>

          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="flex justify-between items-center py-3 border-b border-gray-900 text-gray-500 hover:text-gray-200 transition-colors duration-200 text-sm tracking-wider"
            >
              {label}
              <span className="text-gray-700 text-xs">↗</span>
            </a>
          ))}
        </div>

        {/* Column 3 — Newsletter */}
        <div className="flex flex-col gap-4">
          <span
            className="text-gray-700 uppercase tracking-widest block"
            style={{ fontSize: 8 }}
          >
            The Ritual Letter
          </span>

          <p className="text-gray-500 text-sm leading-relaxed tracking-wide">
            Slow notes on scent, sleep, and the nervous system. Once a month, nothing more.
          </p>

          {subscribed ? (
            <div className="border border-gray-800 p-4 text-gray-500 text-sm italic tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              You're in. Expect silence, then something worth reading.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="bg-transparent border border-b-0 border-gray-800 px-4 py-3 text-xs text-gray-200 tracking-wider outline-none focus:border-gray-600 placeholder-gray-700 transition-colors duration-200"
                style={{ fontFamily: 'Jost, sans-serif' }}
              />
              <button
                type="submit"
                className="border border-gray-800 px-4 py-3 text-gray-500 uppercase tracking-widest text-xs hover:bg-gray-100 hover:text-black hover:border-gray-100 transition-all duration-200 bg-transparent cursor-pointer"
                style={{ fontFamily: 'Jost, sans-serif' }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 px-6 md:px-16 py-5 flex-wrap">
        <span className="text-gray-700 uppercase tracking-widest text-xs">
          © 2025 Esvaya Wellness Pvt. Ltd. · New Delhi, India
        </span>

        <span
          className="text-gray-700 italic text-xs tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Your nervous system. Finally heard.
        </span>

        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Refunds'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-gray-400 uppercase tracking-widest text-xs transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}