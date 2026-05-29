'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function UniversitiesSearchGrid({ universities, icon }: { universities: any[], icon: string }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = universities?.filter(uni => 
    uni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}>
        <input 
          type="text" 
          placeholder="🔍 ابحث عن اسم الجامعة هنا..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ 
            width: '100%', 
            maxWidth: '600px', 
            padding: '1rem', 
            fontSize: '1.2rem',
            borderRadius: 'var(--radius-md)',
            border: '2px solid var(--accent-primary)',
            outline: 'none',
            boxShadow: 'var(--shadow-sm)'
          }}
        />
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', // Always 2 columns as requested
        gap: '1rem' 
      }}>
        {filteredUniversities?.map((uni) => (
          <Link key={uni.id} href={`/universities/${uni.id}`} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, padding: '0.2rem 0.6rem', backgroundColor: 'var(--accent-primary)', color: 'white', fontWeight: 'bold', borderBottomRightRadius: 'var(--radius-md)', fontSize: '0.8rem' }}>
                #{uni.ranking}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', marginBottom: '1rem', marginTop: '1rem' }}>
                {uni.logo_url ? (
                  <img src={uni.logo_url} alt={`شعار ${uni.name}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                ) : (
                  <div style={{ fontSize: '3rem', opacity: 0.5 }}>{icon}</div>
                )}
              </div>
              
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center', flexGrow: 1, lineHeight: '1.4' }}>{uni.name}</h3>
              
              <div style={{ textAlign: 'center' }}>
                <span style={{ color: 'var(--accent-secondary)', fontSize: '0.8rem', fontWeight: 'bold' }}>التفاصيل &larr;</span>
              </div>
            </div>
          </Link>
        ))}
        
        {filteredUniversities?.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
            لا يوجد جامعات تطابق بحثك.
          </div>
        )}
      </div>
    </div>
  );
}
