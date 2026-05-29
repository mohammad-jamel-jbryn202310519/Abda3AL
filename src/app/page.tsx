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
          backgroundImage: 'url(/hero-bg-4.png)',
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
            <h1 className="animate-fade-in" style={{ fontSize: '2.5rem', marginBottom: '1rem', textShadow: '0 2px 5px rgba(0,0,0,0.8)', color: 'white', lineHeight: '1.2' }}>
              مستقبلك يبدأ هنا
            </h1>
            <p className="animate-fade-in delay-1" style={{ fontSize: '1.1rem', marginBottom: '1.5rem', textShadow: '0 1px 3px rgba(0,0,0,0.8)', color: '#f0f0f0', lineHeight: '1.5' }}>
              في شركة إبداع الخليج، نحن نرعى التفوق الأكاديمي. نضمن لك قبولك الجامعي ونسهل عليك كافة الإجراءات لتبدأ رحلتك التعليمية في الأردن بكل ثقة.
            </p>
            
            <div className="animate-fade-in delay-2" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <RegistrationModal universities={universities || []} />
              <Link href="/universities" className="btn" style={{ 
                backgroundColor: 'transparent', 
                color: 'white', 
                border: '2px solid white',
                padding: '0.8rem 2rem', 
                fontSize: '1rem'
              }}>
                اختار الجامعة
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
