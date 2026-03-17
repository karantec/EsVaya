import { useState } from "react";

const faqs = [
  {
    num: "01",
    q: "How is Esvaya different from an aromatherapy product?",
    a: "Aromatherapy is about scent. Esvaya is about <strong>nervous system response</strong>. Every ingredient is chosen for what it does to your brain chemistry — not how it smells. The olfactory system has a direct pathway to the limbic brain, bypassing the thalamic filter that mediates every other sense. This is not an aesthetic experience. It is a physiological one.",
  },
  {
    num: "02",
    q: "How long before I feel something?",
    a: "The immediate effect — a shift in alertness with the Focus Roll-On, or a drop into calm with the Unwind Night Mist — can happen <strong>within minutes</strong> of first use. The deeper effect, where your body starts responding before you even apply the product, builds over <strong>25 to 30 days</strong> of consistent use. This is classical conditioning, not placebo. Repetition is the mechanism.",
  },
  {
    num: "03",
    q: "Do I use both products every day?",
    a: "Yes. The <strong>Focus Roll-On</strong> is your morning ritual — three seconds on your wrists or temples before you begin your day. The <strong>Unwind Night Mist</strong> is your evening ritual — two sprays on your pillow or linen before sleep. Both are designed to last exactly 30 days together. They run out at the same time. That is intentional.",
  },
  {
    num: "04",
    q: "Are the ingredients safe for daily use?",
    a: "All Esvaya ingredients are <strong>plant-based, non-toxic, paraben-free, and cruelty-free</strong>. Every ingredient is sourced entirely from India. We do not use synthetic fragrance compounds. Always do a patch test on your inner wrist before first use, particularly if you have sensitive skin.",
  },
  {
    num: "05",
    q: "Can I use Esvaya if I am pregnant?",
    a: "We recommend <strong>consulting your doctor</strong> before use during pregnancy. The Focus Roll-On contains peppermint and rosemary, which are generally advised with caution during pregnancy. The Unwind Night Mist contains lavender and vetiver, which are considered gentler — but medical advice specific to your situation always takes precedence over general guidance.",
  },
  {
    num: "06",
    q: "Where are the ingredients sourced from?",
    a: "Every drop is rooted in <strong>Indian soil</strong>. We work directly with the farms and cooperatives that grow our ingredients. We know where everything comes from.",
  },
  {
    num: "07",
    q: "What if it does not work for me?",
    a: "If your product arrives <strong>damaged or defective</strong>, we replace it — no questions asked. Contact us within 48 hours of delivery with a photograph and your order number. For questions about your ritual, your results, or how to get the most from your 30 days — write to us at <strong>support@esvaya.com</strong>. We respond within 24 hours on business days.",
  },
  {
    num: "08",
    q: "Is this a subscription?",
    a: "The Founder's Edition is an <strong>exclusive one-time purchase</strong>. There is no automatic subscription or recurring billing. Refill options — individual products at a lower price point — are available from Month 2 onward for customers who complete their 30 days and want to continue. The choice is always yours.",
  },
];

export default function EsvayaFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="bg-black text-white min-h-screen font-mono px-6 py-16 selection:bg-white selection:text-black">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase mb-4 font-sans">
          Esvaya Wellness
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight">
          Frequently asked
          <br />
          <span className="italic text-zinc-400">questions</span>
        </h1>
        <div className="w-8 h-px bg-zinc-700 mx-auto mt-8" />
      </div>

      {/* FAQ List */}
      <ul className="max-w-2xl mx-auto border-zinc-800">
        {faqs.map((item, i) => (
          <li
            key={i}
            className="border-t border-zinc-800 last:border-b border-zinc-800"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-start gap-5 py-8 text-left group focus:outline-none"
            >
              <span className="text-[10px] tracking-widest text-zinc-600 pt-1.5 min-w-[28px]">
                {item.num}
              </span>
              <span
                className={`font-serif text-[1.1rem] leading-snug flex-1 transition-colors duration-300 ${
                  openIndex === i ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                }`}
              >
                {item.q}
              </span>
              
              {/* Plus/Minus Icon */}
              <div className="relative w-4 h-4 mt-2 flex-shrink-0">
                <div className={`absolute inset-0 m-auto w-4 h-px bg-zinc-500 transition-transform duration-500 ${openIndex === i ? "rotate-180" : ""}`} />
                <div className={`absolute inset-0 m-auto h-4 w-px bg-zinc-500 transition-transform duration-500 ${openIndex === i ? "rotate-90 opacity-0" : "rotate-0"}`} />
              </div>
            </button>

            {/* Answer - Improved Transition */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div
                className="pb-8 pl-12 pr-4 text-[14px] leading-relaxed text-zinc-500 font-light [&_strong]:text-zinc-300 [&_strong]:font-medium"
                dangerouslySetInnerHTML={{ __html: item.a }}
              />
            </div>
          </li>
        ))}
      </ul>

      {/* Note */}
      <div className="max-w-2xl mx-auto mt-12 border border-zinc-900 px-8 py-6 text-[11px] text-zinc-600 leading-relaxed tracking-wider uppercase">
        Note: Always perform a patch test on your inner wrist before first use. 
        Consult a professional if you have specific medical concerns.
      </div>

      {/* Footer */}
      
    </div>
  );
}