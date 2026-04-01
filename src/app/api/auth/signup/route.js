import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const email = String(body.email ?? '').trim();
    const password = String(body.password ?? '');
    const fullName = String(body.fullName ?? '').trim();

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, error: 'Email and password are required' },
        { status: 400 },
      );
    }

    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: fullName ? { fullName } : undefined,
      },
    });

    if (error) {
      const msg = error.message?.toLowerCase?.() ?? '';
      if (msg.includes('rate limit') || msg.includes('too many requests')) {
        return NextResponse.json(
          {
            ok: false,
            error:
              'Email rate limit exceeded. Please wait a bit and try again. Your account requires email verification before login.',
          },
          { status: 429 },
        );
      }
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      ok: true,
      user: data.user,
      session: data.session,
      message:
        'Account created. Please check your email to verify before accessing your profile.',
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? 'Server error' },
      { status: 500 },
    );
  }
}
