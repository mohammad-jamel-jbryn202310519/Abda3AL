export default function DashboardPage() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>مرحباً بك في لوحة تحكم إبداع الخليج</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div className="card">
          <h3 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>إجمالي الجامعات</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>0</p>
        </div>
        <div className="card">
          <h3 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>الجامعات الحكومية</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>0</p>
        </div>
        <div className="card">
          <h3 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>الجامعات الخاصة</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>0</p>
        </div>
      </div>
    </div>
  )
}
