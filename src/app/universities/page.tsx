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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'center' }}>
        
        <Link href="/universities/list/private" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎓</div>
            <h3 className="text-gradient" style={{ fontSize: '1.8rem' }}>الجامعات الخاصة</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>تعرف على أفضل الجامعات الخاصة الرائدة والمميزة في الأردن.</p>
          </div>
        </Link>

        <Link href="/universities/list/public" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏛️</div>
            <h3 className="text-gradient" style={{ fontSize: '1.8rem' }}>الجامعات الحكومية</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>استكشف أعرق الجامعات الحكومية الأردنية والتخصصات المتاحة فيها.</p>
          </div>
        </Link>

        <Link href="/requirements" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📄</div>
            <h3 className="text-gradient" style={{ fontSize: '1.8rem' }}>الوثائق المطلوبة</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>تعرف على متطلبات التسجيل لمرحلتي البكالوريوس والماجستير.</p>
          </div>
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link href="/" className="btn btn-secondary" style={{ textDecoration: 'none' }}>&larr; العودة للرئيسية</Link>
      </div>
    </main>
  );
}
