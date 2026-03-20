import React, { useState } from 'react';
import { Shield, FileText, RefreshCcw, Mail, MessageSquare, ChevronRight } from 'lucide-react';

const EsvayaPolicies = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const navItems = [
    { id: 'privacy', label: 'Privacy Policy', icon: <Shield size={18} /> },
    { id: 'terms', label: 'Terms & Conditions', icon: <FileText size={18} /> },
    { id: 'refunds', label: 'Refund & Returns', icon: <RefreshCcw size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      <main className="max-w-5xl mx-auto px-6 py-36">
        <div className="flex flex-col md:flex-row gap-12">

          {/* Sidebar Navigation */}
          <aside className="md:w-64 flex-shrink-0">
            <nav className="flex flex-col gap-2 sticky top-24">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all ${
                    activeTab === item.id
                      ? 'bg-zinc-900 text-white'
                      : 'text-zinc-500 hover:bg-zinc-100'
                  }`}
                >
                  {item.icon}
                  {item.label}
                  {activeTab === item.id && <ChevronRight size={14} className="ml-auto" />}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <div className="flex-1 space-y-12">

            {/* Privacy Policy */}
            {activeTab === 'privacy' && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold mb-2">Privacy Policy</h2>
                <p className="text-zinc-500 text-sm mb-8 italic">Applies to: esvaya.com and all Esvaya digital touchpoints</p>

                <div className="space-y-8 text-sm leading-relaxed text-zinc-700">

                  <div className="bg-zinc-50 p-6 border-l-4 border-zinc-900">
                    <h3 className="font-bold text-zinc-900 mb-2">1. Who We Are</h3>
                    <p>
                      Esvaya Wellness Pvt. Ltd. ("Esvaya", "we", "our", or "us") is a direct-to-consumer wellness brand registered in New Delhi, India. We operate esvaya.com and sell through our website, WhatsApp, and third-party marketplaces.
                    </p>
                    <p className="mt-2">Privacy queries: <span className="font-semibold text-zinc-900">support@esvaya.com</span></p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">2. What Information We Collect</h3>
                    <p className="mb-3 font-medium text-zinc-800">Information you provide directly:</p>
                    <ul className="space-y-2 mb-4">
                      {[
                        'Name, email address, phone number, and delivery address when you place an order or join our waitlist',
                        'Payment information — processed securely through Razorpay or other PCI-DSS compliant gateways. We do not store card details on our servers.',
                        'WhatsApp number if you opt into our community or pre-launch communications',
                        'Messages, feedback, or correspondence you send us directly',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 rounded-full flex-shrink-0" />{item}</li>
                      ))}
                    </ul>
                    <p className="mb-3 font-medium text-zinc-800">Information collected automatically:</p>
                    <ul className="space-y-2">
                      {[
                        'Browser type, device type, IP address, and pages visited',
                        'Referring URLs and session duration',
                        'Cookies and similar tracking technologies (see Section 6)',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 rounded-full flex-shrink-0" />{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">3. How We Use Your Information</h3>
                    <ul className="space-y-2">
                      {[
                        'Process and fulfil your orders and send order confirmations and shipping updates',
                        'Communicate with you about your purchase, including returns and refunds',
                        'Send pre-launch updates, ritual guides, and product communications if you have opted in',
                        'Improve our website, products, and customer experience',
                        'Comply with legal obligations under Indian law, including the Information Technology Act, 2000',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 rounded-full flex-shrink-0" />{item}</li>
                      ))}
                    </ul>
                    <p className="mt-4 font-medium text-zinc-900">We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">4. How We Share Your Information</h3>
                    <p className="mb-3">We share your information only with:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        { title: 'Logistics Partners', desc: 'Name, address, phone only — to fulfil your order' },
                        { title: 'Payment Processors', desc: 'To securely process transactions' },
                        { title: 'WhatsApp Business API', desc: 'For community and order communications if opted in' },
                        { title: 'Analytics Providers', desc: 'In anonymised, aggregated form only' },
                      ].map((item, i) => (
                        <div key={i} className="p-4 border border-zinc-100">
                          <p className="font-semibold text-zinc-900 mb-1">{item.title}</p>
                          <p className="text-xs text-zinc-500">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-zinc-500">All third-party providers are contractually required to handle your data in accordance with applicable privacy laws and are not permitted to use it for their own purposes.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">5. Data Retention</h3>
                    <p>We retain your personal information for as long as necessary to fulfil the purposes described in this policy. Order information is typically retained for <strong>7 years</strong> in accordance with Indian tax and accounting regulations. You may request deletion at any time by writing to support@esvaya.com, subject to our legal retention obligations.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">6. Cookies</h3>
                    <p>We use cookies and similar technologies to enhance your browsing experience and analyse website traffic. You may disable cookies through your browser settings, though this may affect certain functionality. By continuing to use our website, you consent to our use of cookies.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">7. Your Rights</h3>
                    <ul className="space-y-2">
                      {[
                        'Access the personal information we hold about you',
                        'Request correction of inaccurate or incomplete information',
                        'Request deletion of your personal information, subject to legal retention requirements',
                        'Opt out of marketing at any time by replying STOP to any WhatsApp message or clicking unsubscribe in any email',
                        'Lodge a complaint with the appropriate regulatory authority',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 rounded-full flex-shrink-0" />{item}</li>
                      ))}
                    </ul>
                    <p className="mt-3">To exercise any of these rights, contact <strong>support@esvaya.com</strong>. We will respond within 30 days.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">8. Security</h3>
                    <p>We implement appropriate technical and organisational measures to protect your personal information. All payment transactions are encrypted using SSL technology. However, no method of internet transmission is 100% secure.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">9. Children's Privacy</h3>
                    <p>Our products and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has provided us with personal information, please contact us and we will delete it promptly.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">10. Changes to This Policy</h3>
                    <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website or sending a communication. Your continued use of our services after such changes constitutes acceptance of the updated policy.</p>
                  </div>
                </div>
              </section>
            )}

            {/* Terms & Conditions */}
            {activeTab === 'terms' && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold mb-2">Terms & Conditions</h2>
                <p className="text-zinc-500 text-sm mb-8 italic">Applies to: esvaya.com and all Esvaya purchases</p>

                <div className="space-y-8 text-sm leading-relaxed text-zinc-700">

                  <div className="bg-zinc-50 p-6 border-l-4 border-zinc-900">
                    <h3 className="font-bold text-zinc-900 mb-2">1. Acceptance of Terms</h3>
                    <p>By accessing our website or purchasing our products, you agree to be bound by these Terms & Conditions. These terms constitute a legally binding agreement between you and Esvaya Wellness Pvt. Ltd.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">2. Products</h3>
                    <div className="border border-zinc-900 p-6">
                      <p className="mb-3">Esvaya products are functional wellness products containing essential oils and/or other natural products. Our products are:</p>
                      <ul className="space-y-2">
                        {[
                          'Intended for external use only',
                          'Not intended to diagnose, treat, cure, or prevent any medical condition',
                          'Not a substitute for professional medical advice, diagnosis, or treatment',
                        ].map((item, i) => (
                          <li key={i} className="flex gap-2 font-medium text-zinc-900"><span className="mt-1.5 w-1.5 h-1.5 bg-zinc-900 rounded-full flex-shrink-0" />{item}</li>
                        ))}
                      </ul>
                      <p className="mt-3 text-xs text-zinc-500">If you have a medical condition, are pregnant, nursing, or taking medication, please consult a qualified healthcare professional before use. Discontinue use if irritation occurs.</p>
                    </div>
                    <p className="mt-3 text-xs text-zinc-500">Product images on our website are for illustrative purposes. Actual product appearance may vary slightly due to photography and screen calibration.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">3. Orders and Pricing</h3>
                    <ul className="space-y-2">
                      {[
                        'All prices are listed in Indian Rupees (₹) and are inclusive of applicable GST',
                        'We reserve the right to modify prices at any time without prior notice. Price changes will not affect already confirmed orders.',
                        'We reserve the right to refuse or cancel any order at our discretion, including in cases of suspected fraud, pricing errors, or stock unavailability. A full refund will be issued promptly.',
                        'Order confirmation is sent via email/WhatsApp/SMS upon successful payment, forming a binding contract.',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 rounded-full flex-shrink-0" />{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">4. Shipping and Delivery</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-zinc-900 mb-3">Delivery Details</h4>
                        <ul className="space-y-2">
                          {[
                            'Pan-India delivery (international shipping not available)',
                            'Standard delivery: 5–7 business days from dispatch',
                            'Dispatch within 2 business days of order confirmation',
                            'Shipping charges displayed at checkout before payment',
                          ].map((item, i) => (
                            <li key={i} className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 rounded-full flex-shrink-0" />{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 mb-3">Tracking & Issues</h4>
                        <ul className="space-y-2">
                          {[
                            'Tracking number provided via email/WhatsApp/SMS upon dispatch',
                            'Contact us within 7 days of expected delivery for delivery issues',
                            'We are not responsible for delays caused by courier partners or events beyond our reasonable control',
                          ].map((item, i) => (
                            <li key={i} className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 rounded-full flex-shrink-0" />{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">5. Intellectual Property</h3>
                    <p>All content on our website — including text, images, graphics, logos, product formulations, and brand identity — is the exclusive property of Esvaya Wellness Pvt. Ltd. and is protected under applicable Indian and international intellectual property laws. You may not reproduce, distribute, modify, or use any of our content for commercial purposes without our prior written consent.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">6. User Conduct</h3>
                    <p className="mb-3">By using our website, you agree not to:</p>
                    <ul className="space-y-2">
                      {[
                        'Use our website for any unlawful purpose',
                        'Attempt to gain unauthorised access to any part of our systems',
                        'Post or transmit any harmful, offensive, or misleading content',
                        'Impersonate Esvaya or its representatives',
                        'Use automated tools to scrape or extract data from our website',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 rounded-full flex-shrink-0" />{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">7. Limitation of Liability</h3>
                    <p className="mb-2">To the fullest extent permitted by applicable law, Esvaya Wellness Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our products or website.</p>
                    <p>Our total liability for any claim shall not exceed the amount you paid for the product giving rise to the claim.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">8. Governing Law</h3>
                    <p>These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">9. Contact</h3>
                    <p>For any queries regarding these terms, please contact us at <strong>support@esvaya.com</strong> or write to: Esvaya Wellness Pvt. Ltd., New Delhi, India.</p>
                  </div>
                </div>
              </section>
            )}

            {/* Refund & Returns */}
            {activeTab === 'refunds' && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold mb-2">Refund & Returns Policy</h2>
                <p className="text-zinc-500 text-sm mb-2 italic">Fairness for you, fairness for us.</p>
                <p className="text-sm text-zinc-600 mb-8">Because our products are consumable wellness items, we cannot accept returns of opened or used products for hygiene and safety reasons, except in cases of product defect or damage.</p>

                <div className="space-y-8 text-sm leading-relaxed text-zinc-700">

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">1. Damaged or Defective Products</h3>
                    <p className="mb-3">If your product arrives damaged, defective, or significantly different from what was described, you are entitled to a <strong className="text-zinc-900">full replacement</strong>. To initiate a claim:</p>
                    <ul className="space-y-2">
                      {[
                        'Contact us within 48 hours of delivery at support@esvaya.com or on WhatsApp',
                        'Share your order number and clear photographs of the damaged or defective product',
                        'We will review your claim within 2 business days',
                        'Upon approval, we will dispatch a replacement within 5–7 business days',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 rounded-full flex-shrink-0" />{item}</li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs text-zinc-500">We reserve the right to request the return of the damaged product before processing a replacement, in which case return shipping will be arranged and paid for by Esvaya.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">2. Wrong Product Delivered</h3>
                    <p>If you receive a product different from what you ordered, please contact us within <strong className="text-zinc-900">48 hours of delivery</strong> with your order number and a photograph. We will arrange for the correct product to be dispatched and the incorrect product to be collected, at no cost to you.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">3. Non-Delivery</h3>
                    <p className="mb-3">If your order has not arrived within <strong className="text-zinc-900">10 business days</strong> of the expected delivery date, please contact us. We will investigate with our courier partner and either:</p>
                    <ul className="space-y-2">
                      <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 rounded-full flex-shrink-0" />Arrange a replacement shipment, or</li>
                      <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-zinc-400 rounded-full flex-shrink-0" />Issue a full refund if the shipment cannot be recovered</li>
                    </ul>
                    <p className="mt-3 text-xs text-zinc-500">Please ensure your delivery address is accurate at the time of ordering. We are not responsible for non-delivery due to an incorrect address provided by the customer.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">4. Change of Mind</h3>
                    <p>We do not accept returns or issue refunds for change of mind on delivered, opened, or used products.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">5. Subscription and Refill Orders</h3>
                    <p>Subscription orders may be cancelled before the next dispatch date. Cancellation requests must be submitted at least <strong className="text-zinc-900">48 hours before</strong> the scheduled dispatch. Refunds for already-dispatched subscription orders will not be entertained.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 uppercase tracking-wide border-b pb-2 mb-4">6. Refund Processing</h3>
                    <p className="mb-4">All approved refunds are processed to the original payment method:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { method: 'Credit / Debit Card', time: '5–7 business days after approval' },
                        { method: 'UPI / Net Banking', time: '3–5 business days after approval' },
                        { method: 'Wallet Payments', time: '1–3 business days after approval' },
                      ].map((item, i) => (
                        <div key={i} className="p-4 border border-zinc-200">
                          <p className="font-bold text-xs uppercase text-zinc-900 mb-1">{item.method}</p>
                          <p className="text-xs text-zinc-500">{item.time}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-zinc-500">Refund timelines are subject to your bank or payment provider's processing schedule, which is beyond our control.</p>
                  </div>

                  <div className="bg-zinc-900 text-white p-8 text-center">
                    <h3 className="text-lg font-medium mb-2">Need to initiate a return or refund?</h3>
                    <p className="text-zinc-400 text-xs mb-5">Include your order number in all correspondence.</p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                      <a href="mailto:support@esvaya.com" className="flex items-center gap-2 hover:opacity-80">
                        <Mail size={16} /> support@esvaya.com
                      </a>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <MessageSquare size={16} /> WhatsApp Community
                      </div>
                    </div>
                    <p className="text-zinc-500 text-xs mt-4">We respond within 24 hours on business days.</p>
                  </div>

                  <p className="text-xs text-zinc-400">These policies are governed by the Consumer Protection Act, 2019, the Information Technology Act, 2000, and other applicable Indian laws. Esvaya Wellness Pvt. Ltd. reserves the right to update these policies at any time. The latest version will always be available at esvaya.com.</p>
                </div>
              </section>
            )}

          </div>
        </div>
      </main>
    </div>
  );
};

export default EsvayaPolicies;