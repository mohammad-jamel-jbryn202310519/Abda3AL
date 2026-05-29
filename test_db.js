// Env loaded via CLI
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function testConnection() {
  console.log("Testing connection...");
  const { data, error } = await supabase.from('universities').select('*');
  
  if (error) {
    console.error("Error from Supabase:", error);
  } else {
    console.log("Success! Found universities:", data.length);
    if (data.length > 0) {
      console.log("First university:", data[0].name);
    }
  }
}

testConnection();
