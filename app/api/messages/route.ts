import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json();
  if (!payload?.conversationId || !payload?.message) {
    return NextResponse.json({ error: 'conversationId and message are required.' }, { status: 400 });
  }
  return NextResponse.json({ message: 'Message sent securely.' });
}
