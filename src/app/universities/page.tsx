import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'الجامعات | إبداع الخليج',
  description: 'اختر مسارك الأكاديمي وتعرف على أفضل الجامعات الخاصة والحكومية في الأردن',
};

export default function UniversitiesHubPage() {
  return (
    <main className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem', color: 'var(--text-primary)' }}>
        اختر مسارك الأكاديمي
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', maxWidth: '500px', margin: '0 auto' }}>
        
        <Link href="/universities/list/private" style={{ textDecoration: 'none', width: '100%' }}>
          <div className="card" style={{ 
            cursor: 'pointer', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '2.5rem 1.5rem',
            backgroundImage: 'linear-gradient(to bottom, rgba(13,11,26,0.7), rgba(13,11,26,0.9)), url(/private_uni_cover.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid var(--accent-primary)'
          }}>
            <div style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white', fontWeight: 'bold' }}>الجامعات الخاصة</h3>
            <p style={{ color: '#cbd5e1', margin: 0, fontSize: '0.9rem' }}>أفضل الجامعات الخاصة الرائدة والمميزة.</p>
          </div>
        </Link>

        <Link href="/universities/list/public" style={{ textDecoration: 'none', width: '100%' }}>
          <div className="card" style={{ 
            cursor: 'pointer', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '2.5rem 1.5rem',
            backgroundImage: 'linear-gradient(to bottom, rgba(13,11,26,0.7), rgba(13,11,26,0.9)), url(/public_uni_cover.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid var(--accent-primary)'
          }}>
            <div style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="10" rx="2" ry="2"/><path d="M12 10V4"/><path d="M8 4h8"/><path d="M4 22h16"/></svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white', fontWeight: 'bold' }}>الجامعات الحكومية</h3>
            <p style={{ color: '#cbd5e1', margin: 0, fontSize: '0.9rem' }}>أعرق الجامعات الأردنية وتخصصاتها.</p>
          </div>
        </Link>

        <div style={{ width: '80%', height: '2px', backgroundColor: 'var(--border-color)', margin: '1rem 0' }}></div>

        <Link href="/requirements" style={{ textDecoration: 'none', width: '100%' }}>
          <div className="card" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', backgroundColor: 'var(--bg-secondary)' }}>
            <div style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <h3 className="text-gradient" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>الوثائق المطلوبة</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.85rem' }}>متطلبات التسجيل للبكالوريوس والماجستير.</p>
          </div>
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link href="/" className="btn btn-secondary" style={{ textDecoration: 'none' }}>&larr; العودة للرئيسية</Link>
      </div>
    </main>
  );
}
