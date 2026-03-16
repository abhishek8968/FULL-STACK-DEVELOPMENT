import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json();
  const required = ['petId', 'motivation', 'livingSituation', 'experience'];
  const missing = required.filter((field) => !payload?.[field]);
  if (missing.length) {
    return NextResponse.json({ error: `Missing fields: ${missing.join(', ')}` }, { status: 400 });
  }
  return NextResponse.json({ message: 'Adoption request submitted and sent to owner/shelter.' }, { status: 201 });
}
