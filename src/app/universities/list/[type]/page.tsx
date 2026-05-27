import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'

export default async function PublicUniversitiesPage({ params }: { params: Promise<{ type: string }> }) {
  const resolvedParams = await params;
  const type = resolvedParams.type;
  
  if (type !== 'public' && type !== 'private') {
    return <div style={{ padding: '4rem', textAlign: 'center' }}>مسار غير صحيح.</div>
  }

  const supabase = await createClient()

  const { data: universities, error } = await supabase
    .from('universities')
    .select('*')
    .eq('type', type)
    .order('ranking', { ascending: true })

  const title = type === 'public' ? 'الجامعات الحكومية الأردنية' : 'الجامعات الخاصة الأردنية'
  const icon = type === 'public' ? '🏛️' : '🎓'

  return (
    <main className="container" style={{ padding: '4rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <span>{icon}</span> {title}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          اختر الجامعة التي تناسب طموحك، ونحن في شركة إبداع الخليج سنتكفل بكافة إجراءات القبول والتسجيل الخاصة بك.
        </p>
      </div>

      {error ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#ff4d4d', backgroundColor: 'rgba(255, 0, 0, 0.1)', borderRadius: 'var(--radius-md)' }}>
          حدث خطأ أثناء جلب قائمة الجامعات. الرجاء المحاولة لاحقاً.
        </div>
      ) : universities?.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-secondary)', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-color)' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>لم يتم إضافة أي جامعات في هذا القسم بعد.</p>
          <p>سيقوم فريق إبداع الخليج بإضافتها قريباً عبر لوحة التحكم.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {universities?.map((uni) => (
            <Link key={uni.id} href={`/universities/${uni.id}`} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, padding: '0.5rem 1rem', backgroundColor: 'var(--accent-primary)', color: 'white', fontWeight: 'bold', borderBottomRightRadius: 'var(--radius-md)' }}>
                  #{uni.ranking}
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px', marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                  {uni.logo_url ? (
                    <img src={uni.logo_url} alt={`شعار ${uni.name}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  ) : (
                    <div style={{ fontSize: '4rem', opacity: 0.5 }}>{icon}</div>
                  )}
                </div>
                
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center', flexGrow: 1 }}>{uni.name}</h3>
                
                <div style={{ textAlign: 'center' }}>
                  <span style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: 'bold' }}>عرض التفاصيل والتخصصات &larr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link href="/" className="btn btn-secondary" style={{ textDecoration: 'none' }}>&larr; العودة للرئيسية</Link>
      </div>
    </main>
  )
}
