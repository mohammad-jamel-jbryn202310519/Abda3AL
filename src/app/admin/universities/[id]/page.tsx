import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { uploadSpecialtyImage, deleteSpecialty, uploadUniversityLogo, updateSpecialtyName } from './actions'

export default async function AdminUniversityDetailPage({ params }: { params: Promise<{ id: string }> }) {
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
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Link href="/admin/universities" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>&larr; عودة للجامعات</Link>
        <h1 style={{ fontSize: '2rem' }}>إدارة تخصصات: {university.name}</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Logo Upload Form */}
          <div className="card" style={{ height: 'fit-content' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              شعار الجامعة
              {university.logo_url && <img src={university.logo_url} alt="Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '4px', backgroundColor: 'white', padding: '2px' }} />}
            </h2>
            
            <form action={uploadUniversityLogo} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="hidden" name="university_id" value={id} />
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>ارفع شعار الجامعة (صورة شفافة PNG يفضل)</label>
                <input type="file" name="image" accept="image/*" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>حفظ الشعار</button>
            </form>
          </div>

          {/* Upload Form */}
          <div className="card" style={{ height: 'fit-content' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>إضافة صورة تخصصات جديدة</h2>
            
            <form action={uploadSpecialtyImage} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="hidden" name="university_id" value={id} />
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>عنوان الصورة (مثال: تخصصات البكالوريوس)</label>
                <input type="text" name="name" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>ارفع صورة التخصصات والأسعار</label>
                <input type="file" name="image" accept="image/*" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>رفع الصورة</button>
            </form>
          </div>
          
        </div>

        {/* Existing Images */}
        <div className="card">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>صور التخصصات الحالية</h2>
          
          {specialties && specialties.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {specialties.map((spec) => (
                <div key={spec.id} style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.5rem', position: 'relative' }}>
                  <img src={spec.image_url} alt={spec.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem' }} />
                  
                  {/* Edit Title Form */}
                  <form action={updateSpecialtyName} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <input type="hidden" name="id" value={spec.id} />
                    <input type="hidden" name="university_id" value={id} />
                    <input type="text" name="name" defaultValue={spec.name} required style={{ flex: 1, padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '0.85rem' }} />
                    <button type="submit" style={{ padding: '0.25rem 0.5rem', backgroundColor: 'var(--accent-primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontSize: '0.85rem' }}>تعديل</button>
                  </form>
                  
                  {/* Delete form */}
                  <form action={deleteSpecialty.bind(null, spec.id, id)}>
                    <button type="submit" style={{ width: '100%', padding: '0.5rem', backgroundColor: 'rgba(255, 0, 0, 0.1)', color: '#ff4d4d', border: '1px solid rgba(255, 0, 0, 0.2)', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>
                      حذف الصورة
                    </button>
                  </form>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)', border: '1px dashed var(--border-color)', borderRadius: 'var(--radius-sm)' }}>
              لم تقم برفع أي صور تخصصات لهذه الجامعة بعد.
            </div>
          )}
        </div>
        
      </div>
    </div>
  )
}
