import { NextResponse } from 'next/server';
import { getCurrentPlayback } from '@/_lib/spotify/getCurrentPlayback';

export const revalidate = 1;

export async function GET() {
  try {
    const playbackData = await getCurrentPlayback();
    return NextResponse.json(playbackData);
  } catch (error) {
    console.log('here?');
    console.error('Error fetching current playback:', error);

    return NextResponse.json({ error: 'Failed to fetch current playback.' }, { status: 500 });
  }
}
