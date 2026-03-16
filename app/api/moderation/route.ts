import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json();
  if (!['approve', 'reject', 'verify-user', 'remove-content'].includes(payload?.action)) {
    return NextResponse.json({ error: 'Unsupported moderation action.' }, { status: 400 });
  }
  return NextResponse.json({ message: `Moderation action '${payload.action}' applied.` });
}
