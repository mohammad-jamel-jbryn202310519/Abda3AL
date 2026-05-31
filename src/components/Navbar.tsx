'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check local storage or system preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav style={{ 
      position: 'fixed', top: 0, left: 0, right: 0, 
      backgroundColor: 'var(--nav-bg)', 
      backdropFilter: 'blur(15px)',
      WebkitBackdropFilter: 'blur(15px)',
      borderBottom: '1px solid var(--border-color)', 
      zIndex: 100,
      padding: '0.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {/* Logo & Title */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
        <img src="/logo.png" alt="شعار إبداع الخليج" style={{ height: '40px', width: '40px', objectFit: 'contain', borderRadius: '50%', mixBlendMode: 'multiply' }} />
      </Link>

      {/* Desktop Links */}
      <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
        <Link href="/" style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}>الرئيسية</Link>
        <Link href="/about" style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}>من نحن ؟</Link>
        <Link href="/universities" style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}>الجامعات</Link>
        <Link href="/requirements" style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}>التسجيل</Link>
      </div>

      {/* Social Icons & Toggles */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <a href="https://wa.me/962795944359" target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', color: '#25D366', textDecoration: 'none' }} title="واتساب">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.297 1.263.475 1.694.608.712.221 1.36.19 1.872.115.576-.084 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
        </a>
        <a href="https://maps.app.goo.gl/Gs1AwQJNhAE4dET39?g_st=ac" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} title="موقع الشركة">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="موقع الشركة" style={{ width: '30px', height: '30px' }} />
        </a>
        <a href="https://www.snapchat.com/add/tamer_hmideh?share_id=C_-BCEk0s7U&locale=ar-JO" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} title="سناب شات">
          <img src="https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg" alt="سناب شات" style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#FFFC00' }} />
        </a>
        
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleTheme}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}
          title={theme === 'light' ? 'الوضع الليلي' : 'الوضع النهاري'}
        >
          {theme === 'light' ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          )}
        </button>

        {/* Mobile Toggle (Hamburger Menu) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ background: 'var(--accent-primary)', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '0.5rem', borderRadius: '4px', marginLeft: '0.5rem' }}
        >
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', borderRadius: '2px' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', borderRadius: '2px' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', borderRadius: '2px' }}></div>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'var(--bg-primary)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderBottom: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)', zIndex: 200 }}>
          <Link href="/" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none', padding: '0.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            الرئيسية
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none', padding: '0.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            من نحن ؟
          </Link>
          <Link href="/universities" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none', padding: '0.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            الجامعات
          </Link>
          <Link href="/requirements" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none', padding: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            التسجيل
          </Link>
        </div>
      )}

      {/* Basic Global Style */}
      <style>{`
        .desktop-menu { display: none !important; }
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
