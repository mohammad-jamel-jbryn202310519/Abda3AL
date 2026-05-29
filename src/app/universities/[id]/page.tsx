import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ImageZoomViewer from '@/components/ImageZoomViewer'

export default async function PublicUniversityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const supabase = await createClient()

  // Fetch university
  const { data: university, error: uniError } = await supabase
    .from('universities')
    .select('*')
    .eq('id', id)
    .single()

  if (uniError || !university) {
    notFound()
  }

  // Fetch specialties (images)
  const { data: specialties } = await supabase
    .from('specialties')
    .select('*')
    .eq('university_id', id)
    .order('created_at', { ascending: true })

  return (
    <main className="container" style={{ padding: '4rem 1rem' }}>
      
      {/* University Header */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ width: '150px', height: '150px', marginBottom: '2rem', backgroundColor: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          {university.logo_url ? (
            <img src={university.logo_url} alt={university.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          ) : (
            <div style={{ fontSize: '5rem', lineHeight: '130px' }}>{university.type === 'public' ? '🏛️' : '🎓'}</div>
          )}
        </div>
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{university.name}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px' }}>{university.description}</p>
        <span style={{ marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', fontWeight: 'bold' }}>
          الترتيب المحلي: #{university.ranking}
        </span>
      </div>

      {/* Specialties / Prices Section */}
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>التخصصات والأسعار</h2>
      
      {specialties && specialties.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          {specialties.map((spec) => (
            <details key={spec.id} className="card" style={{ padding: '1.5rem', border: '1px solid var(--accent-primary)', borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease' }}>
              <summary style={{ cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-secondary)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', outline: 'none' }}>
                <span>{spec.name}</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>▼</span>
              </summary>
              
              <div style={{ marginTop: '1.5rem', textAlign: 'center', animation: 'fadeIn 0.5s ease' }}>
                {spec.image_url ? (
                  <ImageZoomViewer imageUrl={spec.image_url} altText={spec.name} />
                ) : (
                  <div style={{ padding: '2rem', color: 'var(--text-secondary)' }}>لا توجد صورة</div>
                )}
              </div>
            </details>
          ))}
        </div>
      ) : (
        <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
          <p style={{ fontSize: '1.2rem' }}>جاري تحديث صور التخصصات والأسعار لهذه الجامعة قريباً...</p>
        </div>
      )}

      {/* Action Area */}
      <div className="card" style={{ textAlign: 'center', backgroundColor: 'rgba(139, 92, 246, 0.05)', border: '1px solid var(--accent-secondary)' }}>
        <h3 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>هل ترغب بالتسجيل في هذه الجامعة؟</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem' }}>
          نحن في شركة إبداع الخليج نتكفل بجميع إجراءات قبولك وتسجيلك رسمياً.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <Link href="/requirements" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem', width: '100%', maxWidth: '400px' }}>
            عرض الوثائق المطلوبة للتسجيل
          </Link>
          
          <a 
            href={`https://wa.me/962795944359?text=${encodeURIComponent('مرحبا شركة ابداع الخليج اريد التسجيل في ' + university.name)}`} 
            target="_blank" 
            rel="noreferrer" 
            className="btn" 
            style={{ 
              fontSize: '1.2rem', 
              padding: '1rem 3rem', 
              width: '100%', 
              maxWidth: '400px', 
              backgroundColor: '#25D366', 
              color: 'white',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            التواصل عبر واتساب
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.297 1.263.475 1.694.608.712.221 1.36.19 1.872.115.576-.084 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          </a>

          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(university.name + ' الاردن')}`}
            target="_blank" 
            rel="noreferrer" 
            className="btn" 
            style={{ 
              fontSize: '1.2rem', 
              padding: '1rem 3rem', 
              width: '100%', 
              maxWidth: '400px', 
              backgroundColor: 'transparent', 
              color: 'var(--text-primary)',
              border: '2px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1rem'
            }}
          >
            📍 عرض موقع الجامعة على الخريطة
          </a>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link href={`/universities/list/${university.type}`} className="btn btn-secondary">&larr; العودة للقائمة</Link>
      </div>

    </main>
  )
}
