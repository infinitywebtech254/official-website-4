import React, { useState } from 'react';

export default function Header() {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Professional configuration array
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.05] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="text-2xl font-black tracking-widest text-white">
          NEXUS<span className="text-blue-500">.</span>
        </div>

        {/* Desktop Navigation - Premium Capsule Design */}
        <nav className="hidden md:flex items-center gap-3 bg-white/[0.02] border border-white/[0.08] p-1.5 rounded-2xl backdrop-blur-md shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ${
                activeTab === item.name
                  ? 'bg-gradient-to-b from-slate-900 to-black text-white border border-white/[0.1] shadow-[0_0_20px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              {item.name}
            </a>
          ))}

          {/* Dedicated Contact Us Button */}
          <a
            href="#contact"
            onClick={() => setActiveTab('Contact')}
            className="ml-2 px-6 py-2.5 rounded-xl text-sm font-semibold tracking-wide text-white bg-blue-600 border border-blue-400/20 shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)]"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-400 hover:text-white p-2 rounded-xl bg-white/[0.03] border border-white/[0.08]"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-slate-950/90 border border-white/[0.08] rounded-2xl p-4 space-y-2 backdrop-blur-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl text-sm font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full mt-4 px-4 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-600/30"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}