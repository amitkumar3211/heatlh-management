import { createClient } from '@supabase/supabase-js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function mustEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

async function ensureUser(supabaseAdmin, { email, password, email_confirm = true, user_metadata }) {
  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm,
    user_metadata,
  });

  // If user already exists, Supabase may error. We'll try to fetch and continue.
  if (error) {
    // Common message: "A user with this email address has already been registered"
    const { data: listData, error: listError } = await supabaseAdmin.auth.admin.listUsers();
    if (listError) throw error;
    const existing = listData?.users?.find((u) => u.email?.toLowerCase() === email.toLowerCase());
    if (!existing) throw error;
    return existing;
  }

  return data.user;
}

async function main() {
  const supabaseUrl = mustEnv('SUPABASE_URL');
  const serviceRoleKey = mustEnv('SUPABASE_SERVICE_ROLE_KEY');

  const adminEmail = mustEnv('SEED_ADMIN_EMAIL');
  const adminPassword = mustEnv('SEED_ADMIN_PASSWORD');
  const freelancerEmail = mustEnv('SEED_FREELANCER_EMAIL');
  const freelancerPassword = mustEnv('SEED_FREELANCER_PASSWORD');

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });

  const adminUser = await ensureUser(supabaseAdmin, {
    email: adminEmail,
    password: adminPassword,
    user_metadata: { fullName: 'Super Admin' },
  });
  const freelancerUser = await ensureUser(supabaseAdmin, {
    email: freelancerEmail,
    password: freelancerPassword,
    user_metadata: { fullName: 'Seeded Freelancer' },
  });

  // Upsert roles in public.profiles (table created by migration + trigger)
  await prisma.profile.upsert({
    where: { id: adminUser.id },
    create: {
      id: adminUser.id,
      fullName: 'Super Admin',
      role: 'admin',
      isSuperadmin: true,
    },
    update: { role: 'admin', isSuperadmin: true },
  });

  await prisma.profile.upsert({
    where: { id: freelancerUser.id },
    create: {
      id: freelancerUser.id,
      fullName: 'Seeded Freelancer',
      role: 'freelancer',
      isSuperadmin: false,
    },
    update: { role: 'freelancer', isSuperadmin: false },
  });

  console.log('Seed complete.');
  console.log(`Admin: ${adminEmail}`);
  console.log(`Freelancer: ${freelancerEmail}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

