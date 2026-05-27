import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {specialties.map((spec) => (
            <div key={spec.id} className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{spec.name}</h3>
              {spec.image_url ? (
                <a href={spec.image_url} target="_blank" rel="noreferrer" style={{ width: '100%', cursor: 'zoom-in' }}>
                  <img src={spec.image_url} alt={spec.name} style={{ width: '100%', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }} />
                </a>
              ) : (
                <div style={{ padding: '2rem', color: 'var(--text-secondary)' }}>لا توجد صورة</div>
              )}
            </div>
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
        <Link href="/requirements" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
          عرض الوثائق المطلوبة للتسجيل
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link href={`/universities/${university.type}`} className="btn btn-secondary">&larr; العودة للقائمة</Link>
      </div>

    </main>
  )
}
