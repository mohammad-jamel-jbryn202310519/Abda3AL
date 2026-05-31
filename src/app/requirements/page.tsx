import React from 'react';
import Link from 'next/link';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--accent-primary)' }}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);

export default function RequirementsPage() {
  return (
    <main className="container" style={{ padding: '4rem 1rem' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 className="text-gradient" style={{ marginBottom: '1rem' }}>شركة إبداع الخليج للخدمات الطلابية</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>للدراسة في أفضل الجامعات بكالوريوس - ماجستير - دكتوراه</p>
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-primary)' }}>متطلبات التقديم السفير لمرحلتي الماجستير والبكالوريوس</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* Bachelor Requirements */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>البكالوريوس</h3>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckIcon /> ملف لشهادة الثانوية أو المرحلة السابقة</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckIcon /> ملف لصورة الجواز</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckIcon /> ملف لصورة الهوية الوطنية</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckIcon /> ملف لصورة القبول الجامعي</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckIcon /> ملف لصورة الجدول الدراسي</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckIcon /> ملف لصورة ختم الجواز</li>
          </ul>
        </div>

        {/* Master Requirements */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="text-gradient" style={{ marginBottom: '1.5rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>الماجستير</h3>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckIcon /> ملف لشهادة البكالوريوس</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckIcon /> ملف لصورة الجواز</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckIcon /> ملف لصورة الهوية الوطنية</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckIcon /> ملف لصورة القبول الجامعي</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckIcon /> ملف لصورة الجدول الدراسي</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckIcon /> ملف لصورة ختم الجواز</li>
          </ul>
        </div>

      </div>

      <div className="card" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', backgroundColor: 'rgba(99, 102, 241, 0.05)', border: '1px solid var(--accent-primary)' }}>
        <h3 className="text-gradient" style={{ marginBottom: '1rem' }}>وكيل معتمد لكافة الأوراق الرسمية</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>تقوم شركة إبداع الخليج بتصديق كافة المعاملات من الجهات التالية:</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>وزارة الخارجية</span>
          <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>السفارة المعنية</span>
          <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>التعليم العالي</span>
          <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>الشهادة الثانوية</span>
          <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>جنسية الطالب</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link href="/" className="btn btn-primary" style={{ textDecoration: 'none' }}>العودة للرئيسية</Link>
      </div>

    </main>
  );
}
