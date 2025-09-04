import { getRateLimitStatus } from '@/lib/gemini-ai';
import { NextResponse } from 'next/server';

export async function GET() {
  const status = getRateLimitStatus();
  return NextResponse.json(status);
}