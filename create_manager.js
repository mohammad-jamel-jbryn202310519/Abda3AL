const { createClient } = require('@supabase/supabase-js');

// Must use Service Role Key to bypass RLS and create users
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function createAdmin() {
  console.log("Creating new manager user...");
  const { data, error } = await supabase.auth.admin.createUser({
    email: 'manager@abda3al.com',
    password: 'zxcvbnmAB07811223',
    email_confirm: true
  });

  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Admin user created successfully!");
    console.log("Email: manager@abda3al.com");
    console.log("Password: zxcvbnmAB07811223");
  }
}

createAdmin();
