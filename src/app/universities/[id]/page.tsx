import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ImageZoomViewer from '@/components/ImageZoomViewer'
import RegistrationModal from '@/components/RegistrationModal'

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
            <div style={{ color: 'var(--accent-primary)', opacity: 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              {university.type === 'public' ? (
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="10" rx="2" ry="2"/><path d="M12 10V4"/><path d="M8 4h8"/><path d="M4 22h16"/></svg>
              ) : (
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              )}
            </div>
          )}
        </div>
        <h1 className="text-gradient" style={{ marginBottom: '1rem' }}>{university.name}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px' }}>{university.description}</p>
        <span style={{ marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', fontWeight: 'bold' }}>
          الترتيب المحلي: #{university.ranking}
        </span>
      </div>

      {/* Specialties / Prices Section */}
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>التخصصات والأسعار</h2>
      
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
        <h3 className="text-gradient" style={{ marginBottom: '1rem' }}>هل ترغب بالتسجيل في هذه الجامعة؟</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem' }}>
          نحن في شركة إبداع الخليج نتكفل بجميع إجراءات قبولك وتسجيلك رسمياً.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <Link href="/requirements" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem', width: '100%', maxWidth: '400px' }}>
            عرض الوثائق المطلوبة للتسجيل
          </Link>
          
          <RegistrationModal 
            universities={[university]} 
            initialUniId={university.id}
            buttonText="أرغب في التسجيل بهذه الجامعة"
            buttonStyle={{
              fontSize: '1.2rem', 
              padding: '1rem 3rem', 
              width: '100%', 
              maxWidth: '400px', 
              backgroundColor: '#25D366', 
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
            }}
          />

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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            عرض موقع الجامعة على الخريطة
          </a>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link href={`/universities/list/${university.type}`} className="btn btn-secondary">&larr; العودة للقائمة</Link>
      </div>

    </main>
  )
}
