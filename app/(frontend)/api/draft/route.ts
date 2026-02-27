import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const url = searchParams.get('url');

  // Validate the secret to prevent unauthorized access
  if (secret !== process.env.DRAFT_MODE_SECRET) {
    return new Response('Invalid secret', { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  // Redirect to the provided URL or fallback to homepage
  redirect(url || '/');
}
