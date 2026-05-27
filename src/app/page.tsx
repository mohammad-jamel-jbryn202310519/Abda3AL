import React from 'react';

export default function Home() {
  return (
    <main className="main-content">
      <div className="bg-glow"></div>
      
      <div className="container">
        <h1 className="animate-fade-in text-gradient" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
          مرحباً بك في Abda3AL
        </h1>
        
        <p className="animate-fade-in delay-1" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          نحن في صدد بناء منصة قوية ومتكاملة باستخدام Next.js و Supabase. هذا مجرد تصميم أولي لعرض الإمكانيات.
        </p>
        
        <div className="animate-fade-in delay-2" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn btn-primary">
            البدء الآن
          </button>
          <button className="btn btn-secondary">
            استكشف المزيد
          </button>
        </div>

        <div className="animate-fade-in delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '5rem', textAlign: 'right' }}>
          <div className="card">
            <h3 className="text-gradient" style={{ fontSize: '1.5rem' }}>Next.js (App Router)</h3>
            <p style={{ color: 'var(--text-secondary)' }}>أداء فائق، تحسين لمحركات البحث (SEO)، وخوادم API مدمجة لضمان سرعة وموثوقية عالية.</p>
          </div>
          <div className="card">
            <h3 className="text-gradient" style={{ fontSize: '1.5rem' }}>Supabase</h3>
            <p style={{ color: 'var(--text-secondary)' }}>قاعدة بيانات PostgreSQL قوية وآمنة توفر ميزات مثل Authentication و Real-time subscriptions.</p>
          </div>
          <div className="card">
            <h3 className="text-gradient" style={{ fontSize: '1.5rem' }}>Vercel Deployment</h3>
            <p style={{ color: 'var(--text-secondary)' }}>نشر مستمر (CI/CD) لضمان أن كل تغيير في الكود ينعكس فوراً على الموقع بأعلى جودة ممكنة.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
