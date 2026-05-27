import { createUniversity } from './actions'
import Link from 'next/link'

export default function NewUniversityPage() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Link href="/admin/universities" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>&larr; عودة</Link>
        <h1 style={{ fontSize: '2rem' }}>إضافة جامعة جديدة</h1>
      </div>

      <div className="card" style={{ maxWidth: '800px' }}>
        <form action={createUniversity} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>اسم الجامعة</label>
              <input type="text" name="name" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'white' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>نوع الجامعة</label>
              <select name="type" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'white' }}>
                <option value="public">حكومية</option>
                <option value="private">خاصة</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>الترتيب (الأردن)</label>
              <input type="number" name="ranking" required min="1" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'white' }} />
              <small style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>رقم الترتيب للجامعة محلياً (مثال: 1, 2, 3...)</small>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>شعار الجامعة (Logo)</label>
              <input type="file" name="logo" accept="image/*" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'white' }} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>نبذة عن الجامعة</label>
            <textarea name="description" rows={4} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'white', resize: 'vertical' }}></textarea>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary">حفظ الجامعة</button>
          </div>
        </form>
      </div>
    </div>
  )
}
