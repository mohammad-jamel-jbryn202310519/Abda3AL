'use client'

import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function ImageZoomViewer({ imageUrl, altText }: { imageUrl: string, altText: string }) {
  const [showHint, setShowHint] = useState(true);

  return (
    <div 
      style={{ position: 'relative', width: '100%', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: '#f0f0f0' }}
      onMouseEnter={() => setShowHint(false)}
      onTouchStart={() => setShowHint(false)}
    >
      {/* Hint Overlay */}
      {showHint && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          pointerEvents: 'none',
          animation: 'fadeIn 0.5s ease',
        }}>
          <span style={{ fontSize: '3rem', marginBottom: '1rem', animation: 'bounce 2s infinite' }}>🔍</span>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>استخدم إصبعين للتكبير والتصغير</p>
          <p style={{ fontSize: '1rem', opacity: 0.8 }}>أو استخدم عجلة الماوس للتقريب</p>
        </div>
      )}

      {/* Zoom Controls */}
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={4}
        centerOnInit={true}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <React.Fragment>
            <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 5, display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => zoomIn()} style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', backgroundColor: 'var(--accent-primary)', color: 'white', fontSize: '1.5rem', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}>+</button>
              <button onClick={() => zoomOut()} style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', backgroundColor: 'var(--accent-primary)', color: 'white', fontSize: '1.5rem', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}>-</button>
              <button onClick={() => resetTransform()} style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', backgroundColor: 'white', color: 'var(--text-primary)', fontSize: '1rem', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}>↺</button>
            </div>
            
            <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }} contentStyle={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <img 
                src={imageUrl} 
                alt={altText} 
                style={{ width: '100%', objectFit: 'contain', maxHeight: '80vh' }} 
              />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
}
