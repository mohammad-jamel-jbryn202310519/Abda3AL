'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function RegistrationModal({ 
  universities, 
  initialUniId = null,
  buttonText = "أرغب في التسجيل",
  buttonStyle = {}
}: { 
  universities: any[], 
  initialUniId?: number | null,
  buttonText?: string,
  buttonStyle?: React.CSSProperties
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Form State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUni, setSelectedUni] = useState<any>(null);
  const [specialty, setSpecialty] = useState('');
  const [degree, setDegree] = useState('بكالوريوس');
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setMounted(true);
    if (initialUniId && universities?.length > 0) {
      const uni = universities.find(u => u.id === initialUniId);
      if (uni) setSelectedUni(uni);
    }
  }, [initialUniId, universities]);

  const filteredUniversities = universities?.filter(uni => 
    uni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUni || !name || !phone) {
      alert('يرجى تعبئة الحقول الأساسية (الجامعة، الاسم، رقم التواصل)');
      return;
    }

    const message = `*طلب تسجيل جديد 🎓*
-------------------------
*👤 معلومات الطالب:*
- الاسم: ${name}
- الجنسية: ${nationality || 'غير محدد'}
- دولة الإقامة: ${country || 'غير محدد'}
- رقم التواصل: ${phone}

*📚 التفاصيل الأكاديمية:*
- الجامعة المطلوبة: ${selectedUni.name}
- الدرجة العلمية: ${degree}
- التخصص المطلوب: ${specialty || 'غير محدد'}
-------------------------
مرحباً، أرغب بالتسجيل من خلال إبداع الخليج.`;

    const whatsappUrl = `https://wa.me/962795944359?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const defaultBtnStyle: React.CSSProperties = { 
    backgroundColor: 'var(--accent-primary)', 
    color: 'white', 
    border: 'none',
    padding: '0.8rem 2rem', 
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)'
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.8rem',
    fontSize: '0.95rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--border-color)',
    outline: 'none',
    backgroundColor: '#fff',
    color: '#000' // Ensure text is visible
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginBottom: '0.4rem',
    color: 'var(--text-secondary)'
  };

  const modalContent = isOpen ? (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)', // Lighter overlay
      backdropFilter: 'blur(5px)', // Add blur so it doesn't look like a solid black rectangle
      WebkitBackdropFilter: 'blur(5px)',
      zIndex: 99999, // Ensure it's on top of everything
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      animation: 'fadeIn 0.2s ease'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)', // Override white text from hero
        borderRadius: 'var(--radius-md)',
        width: '100%',
        maxWidth: '450px',
        padding: '2rem',
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-md)'
      }}>
        <button 
          type="button"
          onClick={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: 'var(--text-secondary)'
          }}
        >
          ✕
        </button>
        
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            طلب تسجيل
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            أدخل بياناتك وسيتواصل معك المستشار.
          </p>
        </div>
        
        <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              {/* Step 1: Select University */}
              {!initialUniId && (
                <div>
                  <label style={labelStyle}>الجامعة المطلوبة <span style={{color:'red'}}>*</span></label>
                  {!selectedUni ? (
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="text" 
                        placeholder="ابحث عن الجامعة..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={inputStyle}
                      />
                      {searchTerm && (
                        <div style={{
                          position: 'absolute', top: '100%', left: 0, right: 0,
                          background: 'white', border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-sm)', marginTop: '0.2rem',
                          maxHeight: '150px', overflowY: 'auto', zIndex: 10,
                          boxShadow: 'var(--shadow-sm)'
                        }}>
                          {filteredUniversities?.length === 0 ? (
                            <div style={{ padding: '0.8rem', textAlign: 'center', color: '#666' }}>لا يوجد</div>
                          ) : (
                            filteredUniversities?.map(uni => (
                              <div 
                                key={uni.id}
                                onClick={() => { setSelectedUni(uni); setSearchTerm(''); }}
                                style={{ padding: '0.6rem 0.8rem', borderBottom: '1px solid var(--border-color)', cursor: 'pointer', fontSize: '0.9rem', color: '#000' }}
                              >
                                {uni.name}
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.8rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '0.95rem', color: '#000' }}>{selectedUni.name}</span>
                      <button type="button" onClick={() => setSelectedUni(null)} style={{ background: 'none', border: 'none', color: 'red', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.85rem' }}>تغيير</button>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                <div>
                  <label style={labelStyle}>الدرجة العلمية <span style={{color:'red'}}>*</span></label>
                  <select 
                    value={degree} 
                    onChange={(e) => setDegree(e.target.value)}
                    style={inputStyle}
                  >
                    <option value="بكالوريوس">بكالوريوس</option>
                    <option value="ماجستير">ماجستير</option>
                    <option value="دكتوراه">دكتوراه</option>
                    <option value="دبلوم">دبلوم</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>التخصص المطلوب</label>
                  <input 
                    type="text" 
                    value={specialty} 
                    onChange={(e) => setSpecialty(e.target.value)} 
                    placeholder="مثال: طب، هندسة" 
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>الاسم الرباعي <span style={{color:'red'}}>*</span></label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="الاسم الكامل" 
                  style={inputStyle}
                  /* removed 'required' to prevent silent browser blocking */
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                <div>
                  <label style={labelStyle}>الجنسية</label>
                  <input 
                    type="text" 
                    value={nationality} 
                    onChange={(e) => setNationality(e.target.value)} 
                    placeholder="مثال: أردني" 
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>دولة الإقامة</label>
                  <input 
                    type="text" 
                    value={country} 
                    onChange={(e) => setCountry(e.target.value)} 
                    placeholder="دولة الإقامة" 
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>رقم التواصل <span style={{color:'red'}}>*</span></label>
                <input 
                  type="tel" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  placeholder="+962 7X XXX XXXX" 
                  style={{ ...inputStyle, textAlign: 'left', direction: 'ltr' }}
                  /* removed 'required' */
                />
              </div>

              <button 
                type="button"
                onClick={handleSend}
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: '#25D366',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginTop: '0.5rem',
                  zIndex: 99
                }}
              >
                إرسال عبر واتساب
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
              </button>
            </form>
          </div>
        </div>
  ) : null;

  return (
    <>
      <button 
        type="button"
        onClick={() => setIsOpen(true)}
        style={{ ...defaultBtnStyle, ...buttonStyle }}
      >
        {buttonText}
      </button>

      {mounted && typeof document !== 'undefined' && createPortal(
        modalContent,
        document.body
      )}
    </>
  );
}
