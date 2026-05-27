import { login } from './actions'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const resolvedSearchParams = await searchParams;
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-primary)' }}>
      <div className="card" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>تسجيل دخول الإدارة</h2>
        
        {resolvedSearchParams?.error && (
          <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 0, 0, 0.1)', color: '#ff4d4d', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', textAlign: 'center' }}>
            البريد الإلكتروني أو كلمة المرور غير صحيحة
          </div>
        )}

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>البريد الإلكتروني</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'white' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>كلمة المرور</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'white' }}
            />
          </div>

          <button formAction={login} className="btn btn-primary" style={{ marginTop: '1rem' }}>
            دخول
          </button>
        </form>
      </div>
    </div>
  )
}
