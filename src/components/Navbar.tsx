'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ 
      position: 'fixed', top: 0, left: 0, right: 0, 
      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
      backdropFilter: 'blur(10px)',
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
        <img src="/logo.png" alt="شعار إبداع الخليج" style={{ height: '50px', width: '50px', objectFit: 'contain', borderRadius: '50%', mixBlendMode: 'multiply' }} />
        <h1 className="text-gradient" style={{ fontSize: '1.2rem', margin: 0, fontWeight: 'bold' }}>إبداع الخليج</h1>
      </Link>

      {/* Desktop Links */}
      <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
        <Link href="/" style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}>الرئيسية</Link>
        <Link href="/about" style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}>عن الشركة</Link>
        <Link href="/universities" style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}>الجامعات</Link>
        <Link href="/requirements" style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}>التسجيل</Link>
      </div>

      {/* Social Icons & CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a href="https://wa.me/962795944359" target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', color: '#25D366', textDecoration: 'none' }} title="واتساب">
        </a>
        <a href="https://maps.app.goo.gl/Gs1AwQJNhAE4dET39?g_st=ac" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} title="موقع الشركة">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="موقع الشركة" style={{ width: '30px', height: '30px' }} />
        </a>
        <a href="https://www.snapchat.com/add/tamer_hmideh?share_id=C_-BCEk0s7U&locale=ar-JO" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} title="سناب شات">
          <img src="https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg" alt="سناب شات" style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#FFFC00' }} />
        </a>
        
        {/* Mobile Toggle (Hamburger Menu) - Now visible on all screens as requested */}
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
          <Link href="/" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none', padding: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>🏠 الرئيسية</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none', padding: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>🏢 عن الشركة</Link>
          <Link href="/universities" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none', padding: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>🎓 الجامعات</Link>
          <Link href="/requirements" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none', padding: '0.5rem' }}>📄 التسجيل</Link>
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
