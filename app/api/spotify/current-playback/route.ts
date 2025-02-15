import { getCurrentPlayback } from '@/features/spotify/server/getCurrentPlayback';
import { NextResponse } from 'next/server';

export const revalidate = 1;

export async function GET() {
  try {
    const playbackData = await getCurrentPlayback();
    return NextResponse.json(playbackData);
  } catch (error) {
    console.error('Error fetching current playback:', error);

    return NextResponse.json({ error: 'Failed to fetch current playback.' }, { status: 500 });
  }
}
