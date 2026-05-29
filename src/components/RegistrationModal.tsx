'use client';

import React, { useState } from 'react';

export default function RegistrationModal({ universities }: { universities: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUni, setSelectedUni] = useState<any>(null);

  const filteredUniversities = universities?.filter(uni => 
    uni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSend = () => {
    if (!selectedUni) return;
    const message = `مرحباً، أريد التسجيل في جامعة ${selectedUni.name}`;
    const whatsappUrl = `https://wa.me/962795944359?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="btn" 
        style={{ 
          backgroundColor: 'transparent', 
          color: 'white', 
          border: '2px solid white',
          padding: '0.8rem 2rem', 
          fontSize: '1rem',
          cursor: 'pointer'
        }}
      >
        سجل الآن
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            borderRadius: 'var(--radius-lg)',
            width: '100%',
            maxWidth: '500px',
            padding: '2rem',
            position: 'relative',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <button 
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
            
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center' }}>
              يجب اختيار الجامعة أولاً
            </h2>
            
            {!selectedUni ? (
              <>
                <input 
                  type="text" 
                  placeholder="🔍 ابحث عن اسم الجامعة..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '2px solid var(--border-color)',
                    marginBottom: '1rem',
                    outline: 'none'
                  }}
                />

                <div style={{
                  flexGrow: 1,
                  overflowY: 'auto',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  maxHeight: '300px'
                }}>
                  {filteredUniversities?.length === 0 ? (
                    <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-secondary)' }}>لا يوجد نتائج</div>
                  ) : (
                    filteredUniversities?.map(uni => (
                      <div 
                        key={uni.id}
                        onClick={() => setSelectedUni(uni)}
                        style={{
                          padding: '1rem',
                          borderBottom: '1px solid var(--border-color)',
                          cursor: 'pointer',
                          backgroundColor: 'transparent',
                          color: 'var(--text-primary)',
                          transition: 'background-color 0.2s'
                        }}
                      >
                        {uni.name}
                      </div>
                    ))
                  )}
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', marginBottom: '2rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>الجامعة المختارة:</p>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>{selectedUni.name}</h3>
                <button onClick={() => setSelectedUni(null)} style={{ background: 'none', border: 'none', color: 'red', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.9rem' }}>تغيير الجامعة</button>
              </div>
            )}

            {selectedUni && (
              <button 
                onClick={handleSend}
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: '#25D366',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                إرسال والتحدث مع المستشار التعليمي
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
