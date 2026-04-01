import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/requireAuth';
import { prisma } from '@/lib/prisma';

export async function GET(request) {
  const auth = await requireAuth(request);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  }

  const profile = await prisma.profile.findUnique({
    where: { id: auth.user.id },
    select: {
      id: true,
      fullName: true,
      role: true,
      isSuperadmin: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return NextResponse.json({ ok: true, profile });
}

