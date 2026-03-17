import React, { useState } from 'react';
import { Shield, FileText, RefreshCcw, Mail, MessageSquare, MapPin, ChevronRight } from 'lucide-react';

const EsvayaPolicies = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const navItems = [
    { id: 'privacy', label: 'Privacy Policy', icon: <Shield size={18} /> },
    { id: 'terms', label: 'Terms & Conditions', icon: <FileText size={18} /> },
    { id: 'refunds', label: 'Refund & Returns', icon: <RefreshCcw size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Header */}
      <header className="border-b border-zinc-200 sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tighter uppercase">Esvaya Wellness</h1>
          <a href="mailto:support@esvaya.com" className="text-sm border border-zinc-900 px-4 py-1 hover:bg-zinc-900 hover:text-white transition-colors">
            Support
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
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
                <p className="text-zinc-500 text-sm mb-8 italic text-balance">Last Updated: 2025 • Applies to esvaya.com</p>
                
                <div className="prose prose-zinc max-w-none space-y-8">
                  <div className="bg-zinc-50 p-6 border-l-4 border-zinc-900">
                    <h3 className="font-bold mb-2">1. Who We Are</h3>
                    <p className="text-sm leading-relaxed">
                      Esvaya Wellness Pvt. Ltd. is a direct-to-consumer wellness brand registered in New Delhi, India. 
                      Contact: <span className="font-semibold underline">support@esvaya.com</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-4 uppercase tracking-wide border-b pb-2">2. Data Collection</h3>
                    <ul className="grid md:grid-cols-2 gap-4 text-sm list-none p-0">
                      <li className="p-4 border border-zinc-100"><strong>Direct:</strong> Name, email, phone, and delivery address.</li>
                      <li className="p-4 border border-zinc-100"><strong>Payment:</strong> Processed via Razorpay (PCI-DSS). We do not store card details.</li>
                      <li className="p-4 border border-zinc-100"><strong>Automated:</strong> IP address, device type, and cookies for site optimization.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold uppercase tracking-wide">3. Rights & Security</h3>
                    <p className="text-sm">Under the Information Technology Act, 2000, you hold the right to access, correct, or delete your data.</p>
                    <div className="grid grid-cols-1 gap-2">
                      {['Data retention for 7 years (Tax compliance)', 'SSL Encryption for all transactions', 'Opt-out of WhatsApp by replying STOP'].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                          <div className="w-1 h-1 bg-zinc-900 rounded-full" /> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Terms & Conditions */}
            {activeTab === 'terms' && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold mb-2">Terms & Conditions</h2>
                <p className="text-zinc-500 text-sm mb-8 italic">Legal binding agreement for Esvaya purchases.</p>
                
                <div className="space-y-8">
                  <div className="border border-zinc-900 p-6">
                    <h3 className="font-bold mb-3 uppercase text-sm">Product Disclaimer</h3>
                    <p className="text-sm leading-relaxed text-zinc-700">
                      Our products are for <strong>external use only</strong>. They are not intended to diagnose, treat, or cure medical conditions. 
                      Consult a healthcare professional if pregnant or nursing.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-sm uppercase mb-3">Shipping</h4>
                      <ul className="text-sm space-y-2 text-zinc-600">
                        <li>• Pan-India delivery (5–7 business days)</li>
                        <li>• Dispatch within 2 business days</li>
                        <li>• Tracking provided via WhatsApp/SMS</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase mb-3">Liability</h4>
                      <ul className="text-sm space-y-2 text-zinc-600">
                        <li>• Governing Law: Courts of New Delhi, India</li>
                        <li>• Liability capped at the product purchase price</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Refund & Returns */}
            {activeTab === 'refunds' && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold mb-2">Refund & Returns Policy</h2>
                <p className="text-zinc-500 text-sm mb-8 italic">Fairness for you, fairness for us.</p>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border border-zinc-200">
                      <h4 className="font-bold text-xs uppercase mb-2">Damaged Goods</h4>
                      <p className="text-xs text-zinc-600">Report within 48 hours with photos for a full replacement.</p>
                    </div>
                    <div className="p-4 border border-zinc-200">
                      <h4 className="font-bold text-xs uppercase mb-2">Change of Mind</h4>
                      <p className="text-xs text-zinc-600">Non-refundable once opened/used due to hygiene safety.</p>
                    </div>
                    <div className="p-4 border border-zinc-200">
                      <h4 className="font-bold text-xs uppercase mb-2">Refund Time</h4>
                      <p className="text-xs text-zinc-600">3–7 business days depending on original payment method.</p>
                    </div>
                  </div>

                  <div className="bg-zinc-900 text-white p-8 text-center">
                    <h3 className="text-lg font-medium mb-4">Need to initiate a return?</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                      <a href="mailto:support@esvaya.com" className="flex items-center gap-2 hover:opacity-80">
                        <Mail size={16} /> support@esvaya.com
                      </a>
                      <div className="flex items-center gap-2">
                        <MessageSquare size={16} /> WhatsApp Community
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 mt-20 py-12 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-sm tracking-widest uppercase">Esvaya Wellness Pvt. Ltd.</p>
            <p className="text-xs text-zinc-500 mt-1">Your nervous system, finally heard.</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <MapPin size={12} /> New Delhi, India
          </div>
          <p className="text-xs text-zinc-400 italic">© 2025 Esvaya Wellness. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EsvayaPolicies;