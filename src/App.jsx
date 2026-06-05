import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    // Added pt-24 here to account for the fixed header's height
    <div className="bg-black text-white font-sans min-h-screen selection:bg-red-600/30 selection:text-red-200 antialiased pt-[76px]">
      
      {/* ==========================================
          FIXED HEADER (Bypasses all overflow traps)
          ========================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Identity */}
          <div className="flex-shrink-0">
            <span className="text-xl sm:text-2xl font-black tracking-widest text-white flex items-center gap-2">
              NEXUS ENTERPRISE KE
              <span className="flex gap-0.5">
                <span className="w-1.5 h-3 bg-red-600 rounded-full"></span>
                <span className="w-1.5 h-3 bg-green-600 rounded-full"></span>
              </span>
            </span>
          </div>
          
          {/* Desktop Capsule Menu */}
          <nav className="hidden md:flex items-center gap-2 bg-white/[0.02] border border-white/[0.08] p-1.5 rounded-2xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`px-6 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeTab === item.name
                    ? 'bg-gradient-to-b from-slate-900 to-black text-white border border-white/[0.1] shadow-[0_0_20px_rgba(220,38,38,0.15)] ring-1 ring-red-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* Premium Call to Action */}
            <a
              href="#contact"
              onClick={() => setActiveTab('Contact')}
              className="ml-2 px-6 py-2 rounded-xl text-sm font-bold tracking-wide text-white bg-red-600 border border-red-400/20 shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 hover:bg-red-500 hover:scale-[1.02]"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-400 hover:text-white p-2 rounded-xl bg-white/[0.03] border border-white/[0.08]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-slate-950 border border-white/[0.08] rounded-2xl p-3 space-y-1.5">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)} 
                className="block text-base font-medium px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.05]"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-center w-full mt-4 px-5 py-3 rounded-xl bg-red-600 text-white font-bold"
            >
              Contact Us
            </a>
          </div>
        )}
      </header>

      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <section id="home" className="relative min-h-[calc(100vh-76px)] flex items-center justify-center bg-gradient-to-b from-slate-950 via-black to-slate-950 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-70 pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none"></div>
        
        <div className="max-w-4xl text-center z-10 mx-auto px-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-white/[0.03] text-red-400 border border-white/[0.08] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            SILICON SAVANNAH DIGITAL INFRASTRUCTURE
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 leading-[1.15] bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Powering Enterprise Technology Across East Africa
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Accelerate your scaling frameworks with customized technical architecture, local financial integrations, and world-class performance engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-all shadow-lg text-center">
              View Portfolio
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border border-white/[0.1] text-white font-semibold hover:bg-white/[0.04] transition-all text-center">
              Let's Talk Shop &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          SERVICES SECTION
          ========================================== */}
      <section id="services" className="py-28 bg-black border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Core Competencies</h2>
            <p className="text-slate-400 text-base sm:text-lg">Tailored strategies and industrial execution configurations designed to run your workloads at absolute peak performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.05] hover:border-red-500/30 transition-all duration-300 group shadow-2xl">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Fintech Integration</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Custom high-availability B2B payment systems, secure core wallet architecture, and optimized multi-ledger standardizations across African economies.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.05] hover:border-red-500/30 transition-all duration-300 group shadow-2xl">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Enterprise Cloud</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Microservice pipelines maximizing processing speeds while keeping regional enterprise data isolated inside high-performance, compliant hosting environments.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.05] hover:border-red-500/30 transition-all duration-300 group shadow-2xl">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Data Ecosystem Automation</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Streamlined processing layers making unstructured localized logistics data readable for real-time internal automated telemetry visualization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PORTFOLIO SECTION
          ========================================== */}
      <section id="portfolio" className="py-28 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Case Studies</h2>
              <p className="text-slate-400">A targeted selection of regional enterprise networks optimized for structural precision.</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-red-400 border-b border-red-500/30 pb-1 cursor-pointer hover:text-red-300 hover:border-red-400 transition-colors inline-flex items-center gap-1">
                All Case Studies &rarr;
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white/[0.01] rounded-2xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 shadow-2xl">
              <div className="h-60 sm:h-72 bg-gradient-to-br from-red-950 to-black flex items-center justify-center relative overflow-hidden border-b border-white/[0.05]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/10 to-transparent opacity-60 group-hover:scale-110 transition-transform duration-500"></div>
                <span className="z-10 text-white font-black text-xl tracking-widest bg-black/40 px-6 py-3 rounded-xl border border-white/[0.05] backdrop-blur-md text-center mx-4">
                  RIFT LOGISTICS PLATFORM
                </span>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">Supply Chain Real-Time Analytics</span>
                <h3 className="text-xl font-bold mt-2 mb-3">East African Freight Management Hub</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Reconfigured multi-country distribution assets tracking into localized data structures, reducing regional system delay processing lines significantly.</p>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'GraphQL', 'AWS Elastic', 'TypeScript'].map(tag => (
                    <span key={tag} className="text-xs bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded-lg text-slate-300 font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group bg-white/[0.01] rounded-2xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 shadow-2xl">
              <div className="h-60 sm:h-72 bg-gradient-to-br from-slate-900 to-black flex items-center justify-center relative overflow-hidden border-b border-white/[0.05]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 to-transparent opacity-60 group-hover:scale-110 transition-transform duration-500"></div>
                <span className="z-10 text-white font-black text-xl tracking-widest bg-black/40 px-6 py-3 rounded-xl border border-white/[0.05] backdrop-blur-md text-center mx-4">
                  SAVANNAH CORE WALLET
                </span>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-green-400">Fintech Infrastructure</span>
                <h3 className="text-xl font-bold mt-2 mb-3">High-Volume B2B Settlement Gateway</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Architected an ultra-low latency mobile money and banking bridge API handling ledger accounts concurrently with zero data discrepancies.</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'].map(tag => (
                    <span key={tag} className="text-xs bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded-lg text-slate-300 font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CONTACT US SECTION
          ========================================== */}
      <section id="contact" className="py-28 bg-black border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">Let's build something exceptional.</h2>
              <p className="text-slate-400 mb-10 max-w-md text-base leading-relaxed">
                Have a specialized engineering problem requiring modern system optimization? File your parameters here. An engineering lead will review it within 24 hours.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-red-400 shadow-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-sm font-medium text-slate-300 tracking-wide">solutions@nexusenterprise.co.ke</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-red-400 shadow-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <span className="text-sm font-medium text-slate-300 tracking-wide">Regional Headquarters &bull; Westlands, Nairobi</span>
                </div>
              </div>
            </div>

            {/* Premium Input Dashboard */}
            <div className="p-8 sm:p-10 bg-slate-950/40 border border-white/[0.06] rounded-2xl shadow-2xl relative">
              <div className="absolute top-0 right-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>
              
              {formSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-14 h-14 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/20 shadow-[0_0_20px_rgba(220,38,38,0.1)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Project Brief Received</h3>
                  <p className="text-sm text-slate-400 max-w-xs mx-auto">Our systems architecture group will evaluate your scope data parameters shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">Corporate Representative Name</label>
                    <input required type="text" className="w-full bg-black/60 border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/20 transition-all text-sm" placeholder="Alex Mercer" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">Work Email Address</label>
                    <input required type="email" className="w-full bg-black/60 border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/20 transition-all text-sm" placeholder="representative@company.co.ke" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">System Requirement / Project Scope</label>
                    <textarea required rows="4" className="w-full bg-black/60 border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/20 transition-all text-sm resize-none" placeholder="Detail your current application parameters..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 font-bold transition-all tracking-wider text-xs uppercase shadow-lg shadow-red-600/20 hover:shadow-red-600/40 active:scale-[0.99]">
                    Submit Project Brief
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-10 text-center border-t border-white/[0.03] text-xs text-slate-500 tracking-wide">
        <p>&copy; {new Date().getFullYear()} Nexus Enterprise Kenya. All technical design models secure.</p>
      </footer>

    </div>
  );
}