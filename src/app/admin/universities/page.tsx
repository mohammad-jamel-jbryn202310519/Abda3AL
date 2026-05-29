import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { deleteUniversity } from './actions'

export default async function UniversitiesPage() {
  const supabase = await createClient()
  
  // Fetch universities
  const { data: universities, error } = await supabase
    .from('universities')
    .select('*')
    .order('ranking', { ascending: true })

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>إدارة الجامعات</h1>
        <Link href="/admin/universities/new" className="btn btn-primary">
          + إضافة جامعة جديدة
        </Link>
      </div>

      {error && (
        <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 0, 0, 0.1)', color: '#ff4d4d', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
          حدث خطأ أثناء جلب البيانات. الرجاء التأكد من تشغيل كود SQL في Supabase.
        </div>
      )}

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>الترتيب</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>الجامعة</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>النوع</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {universities?.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                  لا توجد جامعات مضافة بعد.
                </td>
              </tr>
            ) : (
              universities?.map((uni) => (
                <tr key={uni.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem' }}>{uni.ranking}</td>
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>{uni.name}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.5rem', 
                      borderRadius: 'var(--radius-full)', 
                      fontSize: '0.85rem',
                      backgroundColor: uni.type === 'public' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(139, 92, 246, 0.2)',
                      color: uni.type === 'public' ? '#818cf8' : '#a78bfa'
                    }}>
                      {uni.type === 'public' ? 'حكومية' : 'خاصة'}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Link href={`/admin/universities/${uni.id}`} className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.9rem' }}>تعديل</Link>
                    <form action={deleteUniversity} style={{ margin: 0 }}>
                      <input type="hidden" name="id" value={uni.id} />
                      <button type="submit" style={{ padding: '0.25rem 0.5rem', fontSize: '0.9rem', backgroundColor: 'rgba(255, 0, 0, 0.1)', color: '#ff4d4d', border: '1px solid rgba(255, 0, 0, 0.2)', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>حذف</button>
                    </form>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
