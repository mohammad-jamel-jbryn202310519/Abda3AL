const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const https = require('https');
const path = require('path');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function downloadImages() {
  const { data, error } = await supabase
    .from('specialties')
    .select('id, image_url, name');

  if (error) {
    console.error("Error:", error);
    return;
  }

  console.log(`Found ${data.length} images.`);
  
  if (!fs.existsSync('./tmp_images')){
      fs.mkdirSync('./tmp_images');
  }

  for (let spec of data) {
    if (spec.image_url) {
      const ext = spec.image_url.split('.').pop() || 'png';
      const filepath = path.join(__dirname, 'tmp_images', `${spec.id}.${ext}`);
      
      const file = fs.createWriteStream(filepath);
      https.get(spec.image_url, function(response) {
        response.pipe(file);
        file.on('finish', function() {
          file.close(() => {
            console.log(`Downloaded: ${filepath}`);
          });
        });
      });
    }
  }
}

downloadImages();
