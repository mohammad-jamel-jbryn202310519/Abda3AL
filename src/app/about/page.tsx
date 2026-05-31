import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'من نحن ؟ | إبداع الخليج',
  description: 'تعرف على شركة إبداع الخليج والخدمات الاستشارية والجامعية التي نقدمها',
};

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--accent-primary)' }}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);

export default function AboutPage() {
  return (
    <main className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>من نحن ؟</h1>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-primary)', margin: '0 auto', borderRadius: '2px' }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {/* Card 1: الاستشارات والخدمات العامة */}
        <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>استشارات وخدمات عامة</h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckIcon /> <span>استشارات مجانية للجميع.</span></li>
            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckIcon /> <span>نفيدكم في جميع الاستشارات العامة حول الجامعات وأي خدمات مهما كانت.</span></li>
            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckIcon /> <span>إنهاء جميع الإجراءات والخدمات داخل الجامعات عامة.</span></li>
          </ul>
        </div>

        {/* Card 2: الأبحاث والرسائل والواجبات */}
        <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>الأبحاث والرسائل الأكاديمية</h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckIcon /> <span>قادرين على عمل أبحاث ومشاريع بكافة أنواعها وجميع التخصصات.</span></li>
            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckIcon /> <span>رسائل دكتوراه (إنجليزي / عربي) لجميع التخصصات.</span></li>
            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckIcon /> <span>رسائل ماجستير (إنجليزي / عربي) لجميع التخصصات مع تعديل كافة الرسائل مهما كانت اللغة.</span></li>
            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckIcon /> <span>إنهاء وحل جميع الواجبات الدراسية خلال الفصل الدراسي مع أفضل الكوادر.</span></li>
          </ul>
        </div>

        {/* Card 3: التصديقات والأوراق الرسمية */}
        <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>التصديقات والأوراق الرسمية</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>نحن <strong>وكيل معتمد</strong> لكافة الأوراق الرسمية وتصديق المعاملات وإنهاء جميع تصديقات التقارير والوثائق الجامعية من:</p>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckIcon /> <span>وزارة الخارجية</span></li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckIcon /> <span>السفارة المعنية</span></li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckIcon /> <span>التعليم العالي</span></li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckIcon /> <span>الشهادة الثانوية</span></li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckIcon /> <span>جنسية الطالب</span></li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block', padding: '1.5rem 3rem', border: '2px solid var(--accent-primary)', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-primary)', boxShadow: 'var(--shadow-md)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>إدارة وتأسيس</h3>
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0 0 1rem 0', color: 'var(--accent-secondary)' }}>المستشار الأكاديمي / ثامر الحمايدة</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
            موقع الشركة: الأردن - عمان - أبو نصير - مقابل البنك العربي الإسلامي - مجمع حجازين الطابق 4
          </p>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link href="/" className="btn btn-secondary" style={{ textDecoration: 'none' }}>&larr; العودة للرئيسية</Link>
      </div>
    </main>
  );
}
