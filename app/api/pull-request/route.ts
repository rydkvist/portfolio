// TODO: Integrate with GitHub API to propose pull-requests.
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    return NextResponse.json({ hello: 'world!' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'failed' }, { status: 400 });
  }
}
