import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  compatibility: 'strict',
  headers: {
    'OpenAI-Organization': process.env.OPEN_AI_ORGANIZATION || '',
    'OpenAI-Project': process.env.OPEN_AI_PROJECT || '',
  },
  project: 'Portfolio Editor',
  organization: 'Rydkvist Organization',
});

const PostSchema = z.object({
  prompt: z.string().min(1, 'Prompt must be a non-empty string'),
});

export async function POST(req: NextRequest) {
  try {
    if (!isValidRequest(req)) {
      return NextResponse.json({ error: 'Unauthorized request' }, { status: 400 });
    }

    const body = await req.json();
    const safeParsed = PostSchema.safeParse(body);

    if (!safeParsed.success) {
      console.error('Validation error:', safeParsed.error.format());
      return NextResponse.json({ error: 'Invalid request data', details: safeParsed.error.format() }, { status: 400 });
    }

    const { data } = safeParsed;

    const result = await generateText({
      model: openai('gpt-4-turbo'),
      prompt: data.prompt,
    });

    return NextResponse.json(result.text, { status: 200 });
  } catch (err) {
    console.error('edit-portfolio error:', err);
    return NextResponse.json({ error: 'failed' }, { status: 400 });
  }
}

const isValidRequest = (req: NextRequest) => {
  const referer = req.headers.get('referer');
  const passwordQuery = process.env.ADMIN_PASSWORD_QUERY;

  if (passwordQuery && referer?.endsWith(`/admin/${passwordQuery}`)) {
    return true;
  }

  return false;
};
