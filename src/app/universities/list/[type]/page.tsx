import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import UniversitiesSearchGrid from '@/components/UniversitiesSearchGrid'

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
  const icon = type === 'public' ? (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }}><rect x="4" y="10" width="16" height="10" rx="2" ry="2"/><path d="M12 10V4"/><path d="M8 4h8"/><path d="M4 22h16"/></svg>
  ) : (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  )

  return (
    <main className="container" style={{ padding: '4rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="text-gradient" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          {icon} {title}
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
        <UniversitiesSearchGrid universities={universities || []} icon={icon} />
      )}

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link href="/" className="btn btn-secondary" style={{ textDecoration: 'none' }}>&larr; العودة للرئيسية</Link>
      </div>
    </main>
  )
}
