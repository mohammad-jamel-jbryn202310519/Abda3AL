'use client';

import React, { useState, useEffect } from 'react';

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
  
  // Form State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUni, setSelectedUni] = useState<any>(null);
  const [specialty, setSpecialty] = useState('');
  const [degree, setDegree] = useState('بكالوريوس');
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  // Handle Initial University (if embedded in a university details page)
  useEffect(() => {
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

  const defaultBtnStyle = { 
    backgroundColor: 'var(--accent-primary)', 
    color: 'white', 
    border: 'none',
    padding: '0.8rem 2rem', 
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: 'var(--radius-full)',
    boxShadow: 'var(--shadow-md)',
    transition: 'var(--transition-normal)'
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        style={{ ...defaultBtnStyle, ...buttonStyle }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        {buttonText}
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div className="glass-panel" style={{
            width: '100%',
            maxWidth: '600px',
            padding: '2.5rem',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0,0,0,0.05)',
                border: 'none',
                width: '36px', height: '36px',
                borderRadius: '50%',
                fontSize: '1.2rem',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'var(--transition-fast)'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
            >
              ✕
            </button>
            
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                نموذج التسجيل الجامعي
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                أدخل بياناتك وسيقوم المستشار التعليمي بالتواصل معك لاستكمال إجراءات القبول.
              </p>
            </div>
            
            <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              
              {/* Step 1: Select University */}
              {!initialUniId && (
                <div>
                  <label className="label-modern">الجامعة التي ترغب بالتسجيل فيها <span style={{color:'red'}}>*</span></label>
                  {!selectedUni ? (
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="text" 
                        placeholder="ابحث عن اسم الجامعة..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input-modern"
                      />
                      {searchTerm && (
                        <div style={{
                          position: 'absolute', top: '100%', left: 0, right: 0,
                          background: 'white', border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)', marginTop: '0.5rem',
                          maxHeight: '200px', overflowY: 'auto', zIndex: 10,
                          boxShadow: 'var(--shadow-lg)'
                        }}>
                          {filteredUniversities?.length === 0 ? (
                            <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-secondary)' }}>لا يوجد نتائج</div>
                          ) : (
                            filteredUniversities?.map(uni => (
                              <div 
                                key={uni.id}
                                onClick={() => { setSelectedUni(uni); setSearchTerm(''); }}
                                style={{ padding: '0.8rem 1rem', borderBottom: '1px solid var(--border-color)', cursor: 'pointer' }}
                              >
                                {uni.name}
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--accent-primary)' }}>
                      <span style={{ fontWeight: 'bold', color: 'var(--accent-secondary)' }}>{selectedUni.name}</span>
                      <button type="button" onClick={() => setSelectedUni(null)} style={{ background: 'none', border: 'none', color: 'red', textDecoration: 'underline', cursor: 'pointer' }}>تغيير</button>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="label-modern">الدرجة العلمية <span style={{color:'red'}}>*</span></label>
                  <select 
                    value={degree} 
                    onChange={(e) => setDegree(e.target.value)}
                    className="input-modern"
                  >
                    <option value="بكالوريوس">بكالوريوس</option>
                    <option value="ماجستير">ماجستير</option>
                    <option value="دكتوراه">دكتوراه</option>
                    <option value="دبلوم">دبلوم</option>
                  </select>
                </div>
                <div>
                  <label className="label-modern">التخصص المطلوب</label>
                  <input 
                    type="text" 
                    value={specialty} 
                    onChange={(e) => setSpecialty(e.target.value)} 
                    placeholder="مثال: الطب البشري، هندسة برمجيات" 
                    className="input-modern"
                  />
                </div>
              </div>

              <div>
                <label className="label-modern">الاسم الرباعي <span style={{color:'red'}}>*</span></label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="الاسم الكامل كما في الجواز" 
                  className="input-modern"
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="label-modern">الجنسية</label>
                  <input 
                    type="text" 
                    value={nationality} 
                    onChange={(e) => setNationality(e.target.value)} 
                    placeholder="مثال: أردني، سعودي..." 
                    className="input-modern"
                  />
                </div>
                <div>
                  <label className="label-modern">دولة الإقامة</label>
                  <input 
                    type="text" 
                    value={country} 
                    onChange={(e) => setCountry(e.target.value)} 
                    placeholder="مكان إقامتك الحالي" 
                    className="input-modern"
                  />
                </div>
              </div>

              <div>
                <label className="label-modern">رقم التواصل (مع رمز الدولة) <span style={{color:'red'}}>*</span></label>
                <input 
                  type="tel" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  placeholder="+962 7X XXX XXXX" 
                  className="input-modern"
                  required
                  dir="ltr"
                  style={{ textAlign: 'right' }}
                />
              </div>

              <button 
                type="submit"
                style={{
                  width: '100%',
                  padding: '1.2rem',
                  backgroundColor: '#25D366',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                  marginTop: '1rem',
                  transition: 'var(--transition-normal)'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                إرسال طلب التسجيل عبر واتساب
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
