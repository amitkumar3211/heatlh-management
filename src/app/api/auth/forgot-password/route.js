import { NextResponse } from 'next/server';
import { createSupabaseServerClient, getPasswordResetRedirectUrl } from '@/lib/supabase/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const email = String(body.email ?? '').trim();

    if (!email) {
      return NextResponse.json({ ok: false, error: 'Email is required' }, { status: 400 });
    }

    const supabase = createSupabaseServerClient();
    const redirectTo = getPasswordResetRedirectUrl(request.url);

    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true, message: 'Reset link sent (if the email exists).' });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? 'Server error' },
      { status: 500 },
    );
  }
}
