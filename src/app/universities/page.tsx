import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'الجامعات | إبداع الخليج',
  description: 'اختر مسارك الأكاديمي وتعرف على أفضل الجامعات الخاصة والحكومية في الأردن',
};

export default function UniversitiesHubPage() {
  return (
    <main className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: 'var(--text-primary)' }}>
        اختر مسارك الأكاديمي
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', maxWidth: '500px', margin: '0 auto' }}>
        
        <Link href="/universities/list/private" style={{ textDecoration: 'none', width: '100%' }}>
          <div className="card" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎓</div>
            <h3 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>الجامعات الخاصة</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>أفضل الجامعات الخاصة الرائدة والمميزة.</p>
          </div>
        </Link>

        <Link href="/universities/list/public" style={{ textDecoration: 'none', width: '100%' }}>
          <div className="card" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🏛️</div>
            <h3 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>الجامعات الحكومية</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>أعرق الجامعات الأردنية وتخصصاتها.</p>
          </div>
        </Link>

        <div style={{ width: '80%', height: '2px', backgroundColor: 'var(--border-color)', margin: '1rem 0' }}></div>

        <Link href="/requirements" style={{ textDecoration: 'none', width: '100%' }}>
          <div className="card" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', backgroundColor: 'var(--bg-secondary)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📄</div>
            <h3 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>الوثائق المطلوبة</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>متطلبات التسجيل للبكالوريوس والماجستير.</p>
          </div>
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link href="/" className="btn btn-secondary" style={{ textDecoration: 'none' }}>&larr; العودة للرئيسية</Link>
      </div>
    </main>
  );
}
