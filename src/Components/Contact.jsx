// GetInTouch.jsx
import { useState } from 'react'

const values = [
  {
    num: '01',
    title: 'FUNCTION FIRST. FRAGRANCE SECOND.',
    desc: 'Every ingredient earns its place by what it does to the nervous system — not how it smells.',
  },
  {
    num: '02',
    title: 'RITUAL OVER ROUTINE.',
    desc: 'A routine is mechanical. A ritual is intentional. We design for the two minutes that change everything.',
  },
  {
    num: '03',
    title: 'SOIL TO SENSE.',
    desc: 'Every drop is rooted in Indian soil – grown, distilled, and carried here',
  },
  {
    num: '04',
    title: 'NO DEPENDENCY. EVER.',
    desc: "The goal is to make ourselves unnecessary. By Day 30, your body signals itself.",
  },

    {
    num: '05',
    title: 'Natural Entirely.',
    desc: "No Synthetic.Just plants extracts, distilled carefully , for a body that deserves better than chemicals",
  },
]

const contactInfo = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'esvayasocial@esvaya.com',
    note: 'We reply within 24 hours',
    href: 'mailto:hello@esvaya.com',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    label: 'WhatsApp Community',
    value: 'Join the Waitlist',
    note: 'Pre-launch · Ritual tips · Early access',
    href: '#',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Based In',
    value: 'New Delhi, India',
    note: 'Esvaya Wellness Pvt. Ltd.',
    href: null,
  },
]

export default function GetInTouch() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) setSent(true)
  }

  const inputStyle = (field) => ({
    background: 'transparent',
    fontFamily: 'Jost, sans-serif',
    fontSize: 13,
    letterSpacing: '0.04em',
    outline: 'none',
    borderBottom: `1px solid ${focused === field ? '#1a1a1a' : '#d1d1d1'}`,
    color: '#1a1a1a',
    transition: 'border-color 0.2s',
    width: '100%',
    padding: '10px 0',
  })

  return (
    <section
      className="px-6 md:px-16 py-24"
      style={{ background: '#FFFFFF', fontFamily: 'Jost, sans-serif' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top label */}
        <p
          className="uppercase text-gray-400 tracking-widest mb-16"
          style={{ fontSize: 20, letterSpacing: '0.35em' }}
        >
          Get In Touch
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-12">

            {/* Heading */}
            <div>
              <h2
                className="text-gray-900 font-light leading-tight mb-5"
                style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(30px, 3.5vw, 48px)' }}
              >
                We read every message.<br />
                <em className="italic">Every one.</em>
              </h2>
              <p className="text-gray-400 text-md leading-relaxed tracking-wide" style={{ maxWidth: 380 }}>
                Whether it’s a question about the ritual or just something you felt – we’re here. No ticketing system. No chatbot
              </p>
            </div>

            {/* Contact Form */}
            {sent ? (
              <div
                className="border border-gray-200 p-8 text-center"
                style={{ background: 'rgba(255,255,255,0.5)' }}
              >
                <p
                  className="italic text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: 24 }}
                >
                  We received your message.<br />We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                {/* Name + Email row */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <label
                      className="uppercase text-gray-400 tracking-widest"
                      style={{ fontSize: 15 }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Anika"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                      style={inputStyle('name')}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="uppercase text-gray-400 tracking-widest"
                      style={{ fontSize: 15 }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required
                      style={inputStyle('email')}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label
                    className="uppercase text-gray-400 tracking-widest"
                    style={{ fontSize: 15 }}
                  >
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what's on your mind..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    style={{
                      ...inputStyle('message'),
                      resize: 'none',
                      borderBottom: 'none',
                      border: `1px solid ${focused === 'message' ? '#1a1a1a' : '#d1d1d1'}`,
                      padding: '12px',
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="self-start uppercase tracking-widest text-xs px-8 py-4 border border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white transition-all duration-300"
                  style={{ fontFamily: 'Jost, sans-serif', letterSpacing: '0.25em' }}
                >
                  Send Message →
                </button>
              </form>
            )}

            {/* Contact Info */}
            <div className="flex flex-col border-t border-gray-200 pt-8 gap-6">
              {contactInfo.map(({ icon, label, value, note, href }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center shrink-0 rounded-full border border-gray-200 text-gray-400"
                    style={{ width: 36, height: 36 }}
                  >
                    {icon}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="uppercase text-gray-400 tracking-widest"
                      style={{ fontSize: 15 }}
                    >
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-800 hover:text-gray-500 transition-colors duration-200"
                        style={{ fontFamily: 'Playfair Display, serif', fontSize: 20 }}
                      >
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, color: '#1a1a1a' }}>
                        {value}
                      </span>
                    )}
                    <span className="text-gray-400 italic tracking-wide" style={{ fontSize: 11 }}>
                      {note}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT — Values ── */}
          <div className="flex flex-col">
            <p
              className="  tracking-widest mb-8 text-black italic "
              style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.3em, color:black',
                fontSize: 'clamp(30px, 3.5vw, 48px)'  }}
            >
              What We Stand For
            </p> 

            <div className="flex flex-col">
              {values.map(({ num, title, desc }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 py-6 border-b border-gray-200 group cursor-default"
                >
                  <span
                    className="shrink-0 font-light select-none transition-colors duration-300 group-hover:text-gray-400"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 26,
                      lineHeight: 1,
                      minWidth: 36,
                      color: '#e0ddd8',
                    }}
                  >
                    {num}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h4
                      className="text-gray-700 font-medium tracking-wider transition-colors duration-300 group-hover:text-gray-900"
                      style={{ fontSize: 15, letterSpacing: '0.18em' }}
                    >
                      {title}
                    </h4>
                    <p className="text-gray-400 text-md leading-relaxed tracking-wide">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA card */}
           
          </div>

        </div>
      </div>
    </section>
  )
}