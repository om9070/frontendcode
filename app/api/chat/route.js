// ===== OR if using App Router (app/api/chat/route.js) =====

import { generateAIResponse } from '@/lib/gemini-ai';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({
        success: false,
        error: 'Message is required'
      }, { status: 400 });
    }

    const result = await generateAIResponse(message);
    return NextResponse.json(result);

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal server error',
      response: 'I apologize, but I\'m currently experiencing technical difficulties. Please try again later.'
    }, { status: 500 });
  }
}

