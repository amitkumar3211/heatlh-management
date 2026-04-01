import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const email = String(body.email ?? '').trim();

    if (!email) {
      return NextResponse.json({ ok: false, error: 'Email is required' }, { status: 400 });
    }

    const supabase = createSupabaseServerClient();
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
    });

    if (error) {
      const msg = error.message?.toLowerCase?.() ?? '';
      if (msg.includes('rate limit') || msg.includes('too many requests')) {
        return NextResponse.json(
          { ok: false, error: 'Email rate limit exceeded. Please wait and try again.' },
          { status: 429 },
        );
      }
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true, message: 'Verification email sent.' });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? 'Server error' },
      { status: 500 },
    );
  }
}

