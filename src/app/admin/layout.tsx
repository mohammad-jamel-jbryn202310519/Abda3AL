import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-secondary)' }}>
      {/* Sidebar Navigation */}
      {user && (
        <aside style={{ width: '250px', backgroundColor: 'var(--bg-primary)', borderLeft: '1px solid var(--border-color)', padding: '2rem' }}>
          <h2 className="text-gradient" style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>إبداع الخليج<br/><span style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>لوحة التحكم</span></h2>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/admin/dashboard" style={{ color: 'var(--text-primary)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', textDecoration: 'none' }}>الرئيسية</Link>
            <Link href="/admin/universities" style={{ color: 'var(--text-primary)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', textDecoration: 'none' }}>إدارة الجامعات</Link>
            {/* Add logout button later */}
          </nav>
        </aside>
      )}

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  )
}
