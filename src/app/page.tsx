import { createClient } from '@/utils/supabase/server';
import RegistrationModal from '@/components/RegistrationModal';
import Link from 'next/link';

export default async function Home() {
  const supabase = await createClient();
  // Fetch all universities for the RegistrationModal search
  const { data: universities } = await supabase.from('universities').select('id, name');

  return (
    <main style={{ height: '100vh', overflow: 'hidden', margin: 0, padding: 0 }}>
      
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/hero-bg-5.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 15%', // Adjusted to ensure the head is not cropped at the top
          zIndex: -2
        }}></div>
        {/* Lighter global overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.2)',
          zIndex: -1
        }}></div>

        {/* Hero Content */}
        <div className="container" style={{ zIndex: 1, color: 'white', paddingTop: '70px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '700px' }}>
            <h1 className="animate-fade-in" style={{ fontSize: '2rem', marginBottom: '1rem', textShadow: '0 2px 5px rgba(0,0,0,0.8)', color: 'white', lineHeight: '1.2' }}>
              مستقبلك يبدأ هنا
            </h1>
            <p className="animate-fade-in delay-1" style={{ fontSize: '1.1rem', marginBottom: '1.5rem', textShadow: '0 1px 3px rgba(0,0,0,0.8)', color: '#f0f0f0', lineHeight: '1.5' }}>
              في شركة إبداع الخليج، نحن نرعى التفوق الأكاديمي. نضمن لك قبولك الجامعي ونسهل عليك كافة الإجراءات لتبدأ رحلتك التعليمية في الأردن بكل ثقة.
            </p>
            
            <div className="animate-fade-in delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/about" className="btn" style={{ 
                  backgroundColor: 'transparent', 
                  color: 'white', 
                  border: '2px solid white',
                  padding: '0.8rem 2rem', 
                  fontSize: '1rem'
                }}>
                  من نحن
                </Link>
                <Link href="/universities" className="btn" style={{ 
                  backgroundColor: 'white', 
                  color: '#1a1a1a', 
                  border: 'none',
                  padding: '0.8rem 2rem', 
                  fontSize: '1rem',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }}>
                  اختار الجامعة
                </Link>
              </div>

              <RegistrationModal 
                universities={universities || []} 
                buttonText="أرغب في التسجيل الآن" 
                buttonStyle={{
                  width: '100%', 
                  maxWidth: '350px',
                  padding: '1rem',
                  fontSize: '1.1rem',
                  backgroundColor: 'var(--accent-primary)',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
