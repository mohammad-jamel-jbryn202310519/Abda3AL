import { createClient } from '@/utils/supabase/server';
import RegistrationModal from '@/components/RegistrationModal';
import Link from 'next/link';

export default async function Home() {
  const supabase = await createClient();
  // Fetch all universities for the RegistrationModal search
  const { data: universities } = await supabase.from('universities').select('id, name');

  return (
    <main style={{ height: '100vh', overflow: 'hidden', margin: 0, padding: 0 }}>
      
      {/* Modern Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/hero-bg-5.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 15%',
          zIndex: -2,
          filter: 'brightness(0.9) contrast(1.1)'
        }}></div>
        
        {/* Modern Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.8))',
          zIndex: -1
        }}></div>

        {/* Hero Content */}
        <div className="container" style={{ zIndex: 1, color: 'white', paddingTop: '70px', display: 'flex', justifyContent: 'center' }}>
          <div className="glass-panel animate-fade-in" style={{ maxWidth: '800px', padding: '3rem 2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white', lineHeight: '1.3', fontWeight: '800' }}>
              مستقبلك الأكاديمي يبدأ من <span className="text-gradient">إبداع الخليج</span>
            </h1>
            <p className="delay-1" style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: '#e2e8f0', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              نحن نرعى التفوق الأكاديمي ونضمن لك قبولك الجامعي. نسهل عليك كافة الإجراءات لتبدأ رحلتك التعليمية في الأردن بكل ثقة واحترافية.
            </p>
            
            <div className="delay-2" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <RegistrationModal 
                universities={universities || []} 
                buttonText="أرغب في التسجيل الآن"
                buttonStyle={{
                  padding: '1rem 3rem',
                  fontSize: '1.2rem',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 10px 25px rgba(212, 175, 55, 0.4)'
                }}
              />
              <Link href="/universities" className="btn-glass" style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                color: 'white', 
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '1rem 3rem', 
                fontSize: '1.2rem',
                fontWeight: 'bold',
                borderRadius: 'var(--radius-full)',
                backdropFilter: 'blur(10px)',
                transition: 'var(--transition-normal)'
              }}>
                تصفح الجامعات
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
