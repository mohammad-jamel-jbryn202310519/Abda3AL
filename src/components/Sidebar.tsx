'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header Area */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, zIndex: 10 }}>
        
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
          <img src="/logo.svg" alt="شعار إبداع الخليج" style={{ height: '60px', width: '60px', objectFit: 'contain' }} />
          <h1 className="text-gradient" style={{ fontSize: '1.5rem', margin: 0 }}>إبداع الخليج</h1>
        </Link>

        {/* Hamburger Menu Icon */}
        <button 
          onClick={() => setIsOpen(true)} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px' }}
        >
          <div style={{ width: '30px', height: '3px', backgroundColor: 'var(--text-primary)', borderRadius: '3px' }}></div>
          <div style={{ width: '30px', height: '3px', backgroundColor: 'var(--text-primary)', borderRadius: '3px' }}></div>
          <div style={{ width: '30px', height: '3px', backgroundColor: 'var(--text-primary)', borderRadius: '3px' }}></div>
        </button>
      </header>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 40, backdropFilter: 'blur(5px)' }}
        ></div>
      )}

      {/* Sidebar Content */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: isOpen ? 0 : '-100%',
        width: '100%',
        maxWidth: '400px',
        height: '100vh',
        backgroundColor: 'var(--bg-primary)',
        borderLeft: '1px solid var(--border-color)',
        zIndex: 50,
        transition: 'right 0.3s ease',
        overflowY: 'auto',
        padding: '2rem'
      }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 className="text-gradient">حول الشركة</h2>
          <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', fontSize: '2rem', cursor: 'pointer' }}>&times;</button>
        </div>

        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <h3 style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>من نحن</h3>
          <p style={{ marginBottom: '2rem' }}>
            شركة إبداع الخليج هي وكيل معتمد لكافة الأوراق الرسمية والجامعات في المملكة الأردنية الهاشمية. نهدف إلى تقديم أفضل الخدمات الاستشارية والأكاديمية للطلاب من داخل وخارج الأردن.
          </p>

          <h3 style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>خدماتنا</h3>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>•</span> استشارات مجانية للجميع وفي كافة المجالات الجامعية.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>•</span> قادرون على عمل أبحاث ومشاريع مهما كانت.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>•</span> تعديل كافة رسائل الماجستير والدكتوراة مهما كانت اللغة.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>•</span> إنهاء جميع الإجراءات والخدمات داخل الجامعات العامة.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>•</span> إنهاء وحل جميع الواجبات الدراسية مع أفضل الكوادر.</li>
            
            <li style={{ marginTop: '1rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>نساعدك وبقوة في:</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#fbbf24', fontSize: '1.2rem' }}>•</span> رسائل دكتوراه (إنجليزي / عربي) جميع التخصصات.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#fbbf24', fontSize: '1.2rem' }}>•</span> رسائل ماجستير (إنجليزي / عربي) جميع التخصصات.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#fbbf24', fontSize: '1.2rem' }}>•</span> أبحاث لجميع التخصصات.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#fbbf24', fontSize: '1.2rem' }}>•</span> المساعدة في حل الواجبات.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#fbbf24', fontSize: '1.2rem' }}>•</span> إنهاء جميع تصديقات التقارير والوثائق الجامعية.</li>
          </ul>

          <h3 style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginTop: '2rem', marginBottom: '1rem' }}>وكيل معتمد لتصديق المعاملات</h3>
          <ul style={{ listStyleType: 'disc', paddingRight: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>وزارة الخارجية</li>
            <li>السفارة المعنية</li>
            <li>التعليم العالي</li>
            <li>الشهادة الثانوية</li>
            <li>جنسية الطالب</li>
          </ul>
        </div>

      </div>
    </>
  );
}
