import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="main-content">
      <div className="bg-glow"></div>
      
      <div className="container">
        <h1 className="animate-fade-in text-gradient" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
          إبداع الخليج
        </h1>
        
        <p className="animate-fade-in delay-1" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          الوكيل المعتمد لجميع الجامعات في المملكة الأردنية الهاشمية. نساعدك في بدء رحلتك الأكاديمية بسهولة واحترافية.
        </p>
        
        <h2 className="animate-fade-in delay-2" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
          اختر مسارك الأكاديمي
        </h2>

        <div className="animate-fade-in delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem', textAlign: 'center' }}>
          
          <Link href="/universities/public" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏛️</div>
              <h3 className="text-gradient" style={{ fontSize: '2rem' }}>الجامعات الحكومية</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>استكشف أعرق الجامعات الحكومية الأردنية والتخصصات المتاحة فيها.</p>
            </div>
          </Link>

          <Link href="/universities/private" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎓</div>
              <h3 className="text-gradient" style={{ fontSize: '2rem' }}>الجامعات الخاصة</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>تعرف على أفضل الجامعات الخاصة الرائدة والمميزة في الأردن.</p>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}
