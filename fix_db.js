const { Client } = require('pg');

const connectionString = 'postgresql://postgres:zxcvbnmAB07811223@db.dgnljkvzqrcqnhyhkduz.supabase.co:5432/postgres';

async function fixDb() {
  const client = new Client({ connectionString });
  try {
    await client.connect();
    console.log("Connected to Supabase PostgreSQL.");

    // Fix permissions
    const grants = [
      'GRANT ALL ON public.universities TO anon, authenticated, service_role;',
      'GRANT ALL ON public.specialties TO anon, authenticated, service_role;',
      'GRANT ALL ON public.required_documents TO anon, authenticated, service_role;',
      'GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;'
    ];

    for (const grant of grants) {
      await client.query(grant);
      console.log(`Executed: ${grant}`);
    }

    console.log("Permissions fixed successfully.");

    // Read the seed.sql file and execute it
    const fs = require('fs');
    const seedSql = fs.readFileSync('seed.sql', 'utf8');
    
    // We can clear the table first just in case
    await client.query('DELETE FROM public.universities;');
    
    await client.query(seedSql);
    console.log("Universities seeded successfully via direct SQL!");

  } catch (err) {
    console.error("Database error:", err);
  } finally {
    await client.end();
  }
}

fixDb();
