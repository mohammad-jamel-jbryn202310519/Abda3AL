const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const Tesseract = require('tesseract.js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function analyzeAndUpdate() {
  console.log("Initializing Tesseract OCR for Arabic...");
  const worker = await Tesseract.createWorker('ara');
  
  const files = fs.readdirSync('./tmp_images');
  console.log(`Starting analysis of ${files.length} images...`);

  let count = 0;
  for (let file of files) {
    count++;
    const id = file.split('.')[0];
    const filepath = path.join('./tmp_images', file);
    
    console.log(`[${count}/${files.length}] Analyzing image ${id}...`);
    if (file.endsWith('.pdf')) {
      console.log(`Skipping PDF file: ${file}`);
      continue;
    }
    
    try {
      const { data: { text } } = await worker.recognize(filepath);
      
      let title = 'الرسوم الجامعية';
      if (text.includes('ماجستير') || text.includes('الماجستير')) {
        title = 'رسوم الماجستير';
      } else if (text.includes('بكالوريوس') || text.includes('البكالوريوس')) {
        title = 'رسوم البكالوريوس';
      } else if (text.includes('دكتوراه') || text.includes('الدكتوراه')) {
        title = 'رسوم الدكتوراه';
      } else if (text.includes('دبلوم') || text.includes('الدبلوم')) {
        title = 'رسوم الدبلوم';
      }

      console.log(`Result for ${id}: ${title}`);
      
      // Update database
      await supabase
        .from('specialties')
        .update({ name: title })
        .eq('id', id);
        
    } catch (err) {
      console.error(`Error analyzing ${file}:`, err.message);
    }
  }

  await worker.terminate();
  console.log("Analysis and database update complete!");
}

analyzeAndUpdate();
