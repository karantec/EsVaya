import { useState } from "react";

const faqs = [
  {
    num: "01",
    q: "How is Esvaya different from an aromatherapy product?",
    a: "Aromatherapy is about scent. Esvaya is about nervous system response. Every ingredient is chosen for what it does to your brain chemistry — not how it smells. The olfactory system has a direct pathway to the limbic brain, bypassing the thalamic filter that mediates every other sense. This is not an aesthetic experience. It is a physiological one.",
  },
  {
    num: "02",
    q: "How long before I feel something?",
    a: "The immediate effect — a shift in alertness with the Focus Roll-On, or a drop into calm with the Unwind Night Mist — can happen within minutes of first use. The deeper effect, where your body starts responding before you even apply the product, builds over 25 to 30 days of consistent use. This is classical conditioning, not placebo. Repetition is the mechanism..",
  },
  {
    num: "03",
    q: "Do I use both products every day?",
    a: "Yes. The Focus Roll-On is your morning ritual — three seconds on your wrists or temples before you begin your day. The Unwind Night Mist is your evening ritual — two sprays on your pillow or linen before sleep. Both are designed to last exactly 30 days together. They run out at the same time. That is intentional.",
  },
  {
    num: "04",
    q: "Are the ingredients safe for daily use?",
    a: "All Esvaya ingredients are plant-based, non-toxic, paraben-free, and cruelty-free. Every ingredient is sourced entirely from India. We do not use synthetic fragrance compounds. Always do a patch test on your inner wrist before first use, particularly if you have sensitive skin.",
  },
  {
    num: "05",
    q: "Can I use Esvaya if I am pregnant?",
    a: "We recommend consulting your doctor before use during pregnancy. The Focus Roll-On contains peppermint and rosemary, which are generally advised with caution during pregnancy. The Unwind Night Mist contains lavender and vetiver, which are considered gentler — but medical advice specific to your situation always takes precedence over general guidance.",
  },
  {
    num: "06",
    q: "Where are the ingredients sourced from?",
    a: "Every drop is rooted in Indian soil. Peppermint from the Barabanki belt of Uttar Pradesh. Rosemary from the highlands of Himachal Pradesh. Lavender from Jammu. Vetiver from Rajasthan — 18-month aged roots, distilled slowly. We work directly with the farms that grow our ingredients. We know exactly where everything comes from..",
  },
  {
    num: "07",
    q: "Is this a subscription?",
    a: "The Founder's Edition is a one-time purchase. There is no automatic subscription or recurring billing. Refill options — individual products at a lower price point — are available from Month 2 onward for customers who complete their 30 days and want to continue. The choice is always yours..",
  },
  {
    num: "08",
    q: "What exactly does the Focus Roll-On do?",
    a: "The Focus Roll-On is designed to give your nervous system a clear signal that it is time to begin. The peppermint and rosemary blend activates the trigeminal nerve and increases cerebral blood flow — producing measurable improvements in alertness, working memory, and cognitive clarity within minutes. It does not replace sleep or nutrition. It works with your body's existing morning chemistry to sharpen what is already there."
  },
   {
    num: "09",
    q: "When should I apply the Focus Roll-On?",
    a: "Apply it as the first intentional act of your morning — after washing your face, before your first meeting or commute. Three seconds on your inner wrists or temples. Inhale slowly for one breath. That is the complete ritual. Consistency of timing matters more than the time itself — your nervous system learns the sequence."
  },
    {
    num: "10",
    q: "Can I use the Focus Roll-On during the day — not just mornings?",
    a: "Yes. The Focus Roll-On also works as a mid-day reset — particularly effective during the 2:30 to 4 PM window when cortisol naturally dips and focus dissolves. Apply to the inner wrist, take one slow inhale, and give yourself 60 seconds before returning to the task. It is not a stimulant. It is a signal."
  }

  , {
    num: "11",
    q: "Why does the Focus Roll-On contain peppermint and rosemary specifically ?",
    a: "Peppermint's active compound — menthol — stimulates the trigeminal nerve and has documented effects on alertness and working memory in multiple controlled studies. Rosemary contains 1,8-cineole, a compound specifically studied for its effects on cognitive performance and speed of memory recall. Both are sourced from Indian farms chosen for their altitude and growing conditions, which produce a higher concentration of these active compounds than commercially standard sources.."
  }

  , {
    num: "12",
    q: "Is the Focus Roll-On safe to apply directly on skin?",
    a: "Yes, when used as directed — applied to inner wrists or temples. The formulation uses jojoba as a carrier base, which dilutes the essential oils to a skin-safe concentration. Do not apply to broken or irritated skin. Avoid contact with eyes. Always do a patch test on your inner wrist 24 hours before first full use."
  }

   , {
    num: "13",
    q: "What exactly does the Unwind Night Mist do?",
    a: "The Unwind Night Mist is designed to give your nervous system the signal it has been waiting for since morning — that the day is actually over. The lavender and vetiver blend activates the parasympathetic nervous system, lowers cortisol, and prepares the body for genuine rest. It does not sedate you. It removes the physiological resistance to sleep that accumulates over a full day of sympathetic activation."
  }
   , {
    num: "14",
    q: "When and how do I use the Unwind Night Mist?",
    a: "Two sprays on your pillow or linen, 10 to 15 minutes before you intend to sleep. You do not need to inhale deeply or follow any specific breathing instruction — though a single slow exhale after spraying deepens the effect. The ritual is the signal. Keep it brief, keep it consistent, and let the scent do the work."
  }

   , {
    num: "15",
    q: "I have tried lavender products before and they did not help me sleep. Why would this be different?",
    a: "Most lavender products are fragrance products — they contain synthetic lavender compounds designed to smell like lavender, not to act like it. The functional compounds in lavender — linalool and linalyl acetate — are present in meaningful concentrations only in genuine essential oil from the right source. Our lavender comes from the Jammu highlands and has a linalool profile closer to the research variety used in sleep studies than the commercially dominant Bulgarian lavender. Concentration and source origin are everything.."
  },
   {
    num: "16",
    q: "What is vetiver and why is it in the Unwind Night Mist?",
    a: "Vetiver — known in India as khus — is a grass whose roots produce one of the most complex essential oils in the world. It contains khusimol, which interacts with GABA receptors — the same neurological pathway targeted by pharmaceutical sleep aids, without the dependency or side effects. Our vetiver is sourced from Rajasthan and aged in the ground for 18 months before distillation. That timeline is not a marketing claim. It is the only way to develop the full chemical complexity that makes vetiver functionally effective."
   },

    {
    num: "17",
    q: "Can I use the Unwind Night Mist if I struggle with anxiety, not just sleep?",
    a: " Yes. The Unwind Night Mist works on the same nervous system pathway whether the presenting symptom is sleep difficulty, evening anxiety, or the inability to mentally leave work. The lavender-vetiver blend activates parasympathetic response — the physiological opposite of anxiety. Many customers find the evening ritual as useful for unwinding from a difficult day as for improving sleep onset specifically.."
   },
 {
    num: "18",
    q: "Will the Unwind Night Mist leave stains on my pillow or linen?",
    a: " No. The formulation is a water-based mist — it dries within seconds and leaves no oil residue on fabric. It is safe for all standard linen and pillow materials. If you have very delicate or dry-clean-only bedding, spray on the inside of the pillow cover rather than the surface."
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
                  openIndex === i ? "text-white" : "text-white "
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
      <div className="max-w-2xl mx-auto mt-12 border border-zinc-900 px-8 py-6 text-[14px] text-white leading-relaxed tracking-wider ">
        Note: A gentle note — always do a patch test before first use, or consult an aromatherapist if you have sensitive skin or a medical condition.
      </div>

      {/* Footer */}
      
    </div>
  );
}