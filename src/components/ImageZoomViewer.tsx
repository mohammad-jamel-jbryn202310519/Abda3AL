'use client'

import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function ImageZoomViewer({ imageUrl, altText }: { imageUrl: string, altText: string }) {
  const [showHint, setShowHint] = useState(true);

  return (
    <div 
      style={{ position: 'relative', width: '100%', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'column' }}
      onMouseEnter={() => setShowHint(false)}
      onTouchStart={() => setShowHint(false)}
      onClick={() => setShowHint(false)}
    >
      {/* Hint Overlay */}
      {showHint && (
        <div style={{
          position: 'absolute',
          top: '60px', left: 0, right: 0, bottom: 0, // Starts below the buttons
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
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>يمكنك تكبير الصورة لرؤية التفاصيل</p>
          <p style={{ fontSize: '1rem', opacity: 0.8 }}>استخدم الأزرار في الأعلى</p>
        </div>
      )}

      {/* Zoom Controls */}
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={4}
        centerOnInit={true}
        panning={{ disabled: true }} // Disable drag to pan
        pinch={{ disabled: true }}   // Disable pinch to zoom
        wheel={{ disabled: true }}   // Disable mouse wheel to zoom
        doubleClick={{ disabled: true }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <React.Fragment>
            {/* Buttons placed ABOVE the image, not overlaying it */}
            <div style={{ padding: '10px', backgroundColor: 'var(--bg-primary)', display: 'flex', justifyContent: 'center', gap: '1rem', borderBottom: '1px solid var(--border-color)', zIndex: 11 }}>
              <button onClick={() => zoomIn()} style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', backgroundColor: 'var(--accent-primary)', color: 'white', fontSize: '1.5rem', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}>+</button>
              <button onClick={() => zoomOut()} style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', backgroundColor: 'var(--accent-primary)', color: 'white', fontSize: '1.5rem', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}>-</button>
              <button onClick={() => resetTransform()} style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', backgroundColor: '#ddd', color: 'var(--text-primary)', fontSize: '1.2rem', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}>↺</button>
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
