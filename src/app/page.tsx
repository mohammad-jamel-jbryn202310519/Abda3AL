import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ paddingBottom: '4rem' }}>
      
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        marginTop: '-70px' // Offset navbar height to make background full screen
      }}>
        {/* Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/hero-bg-4.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 15%', // Adjusted to ensure the head is not cropped at the top
          zIndex: -2
        }}></div>
        {/* Lighter global overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.2)',
          zIndex: -1
        }}></div>

        {/* Hero Content */}
        <div className="container" style={{ zIndex: 1, color: 'white', paddingTop: '70px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '700px' }}>
            <h1 className="animate-fade-in" style={{ fontSize: '2.5rem', marginBottom: '1rem', textShadow: '0 2px 5px rgba(0,0,0,0.8)', color: 'white', lineHeight: '1.2' }}>
              مستقبلك يبدأ هنا
            </h1>
            <p className="animate-fade-in delay-1" style={{ fontSize: '1.1rem', marginBottom: '1.5rem', textShadow: '0 1px 3px rgba(0,0,0,0.8)', color: '#f0f0f0', lineHeight: '1.5' }}>
              في شركة إبداع الخليج، نحن نرعى التفوق الأكاديمي. نضمن لك قبولك الجامعي ونسهل عليك كافة الإجراءات لتبدأ رحلتك التعليمية في الأردن بكل ثقة.
            </p>
            
            <div className="animate-fade-in delay-2" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#universities" className="btn" style={{ 
                backgroundColor: 'white', 
                color: 'var(--text-primary)', 
                padding: '0.8rem 2rem', 
                fontSize: '1rem',
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
              }}>
                سجل الآن
              </a>
              <a href="#universities" className="btn" style={{ 
                backgroundColor: 'transparent', 
                color: 'white', 
                border: '2px solid white',
                padding: '0.8rem 2rem', 
                fontSize: '1rem'
              }}>
                اختار الجامعة
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About & Services Section */}
      <section id="about" className="container" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>عن شركة إبداع الخليج وخدماتنا</h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-primary)', margin: '0 auto', borderRadius: '2px' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* Card 1: الاستشارات والخدمات العامة */}
          <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>استشارات وخدمات عامة</h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>✅ استشارات مجانية للجميع.</li>
              <li style={{ marginBottom: '1rem' }}>✅ نفيدكم في جميع الاستشارات العامة حول الجامعات وأي خدمات مهما كانت.</li>
              <li style={{ marginBottom: '1rem' }}>✅ إنهاء جميع الإجراءات والخدمات داخل الجامعات عامة.</li>
            </ul>
          </div>

          {/* Card 2: الأبحاث والرسائل والواجبات */}
          <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>الأبحاث والرسائل الأكاديمية</h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>✅ قادرين على عمل أبحاث ومشاريع بكافة أنواعها وجميع التخصصات.</li>
              <li style={{ marginBottom: '1rem' }}>✅ رسائل دكتوراه (إنجليزي / عربي) لجميع التخصصات.</li>
              <li style={{ marginBottom: '1rem' }}>✅ رسائل ماجستير (إنجليزي / عربي) لجميع التخصصات مع تعديل كافة الرسائل مهما كانت اللغة.</li>
              <li style={{ marginBottom: '1rem' }}>✅ إنهاء وحل جميع الواجبات الدراسية خلال الفصل الدراسي مع أفضل الكوادر.</li>
            </ul>
          </div>

          {/* Card 3: التصديقات والأوراق الرسمية */}
          <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>التصديقات والأوراق الرسمية</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>نحن <strong>وكيل معتمد</strong> لكافة الأوراق الرسمية وتصديق المعاملات وإنهاء جميع تصديقات التقارير والوثائق الجامعية من:</p>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '0.5rem' }}>🔹 وزارة الخارجية</li>
              <li style={{ marginBottom: '0.5rem' }}>🔹 السفارة المعنية</li>
              <li style={{ marginBottom: '0.5rem' }}>🔹 التعليم العالي</li>
              <li style={{ marginBottom: '0.5rem' }}>🔹 الشهادة الثانوية</li>
              <li style={{ marginBottom: '0.5rem' }}>🔹 جنسية الطالب</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '1.5rem 3rem', border: '2px solid var(--accent-primary)', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-primary)', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>إدارة وتأسيس</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0, color: 'var(--accent-secondary)' }}>المستشار التعليمي / ثامر الحمايدة</p>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section id="universities" className="container" style={{ paddingTop: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
          اختر مسارك الأكاديمي
        </h2>

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
      </section>

    </main>
  );
}
