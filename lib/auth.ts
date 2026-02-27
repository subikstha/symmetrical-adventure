import { headers } from 'next/headers';

import { getPayload } from 'payload';

import config from '@/payload.config';

/**
 * Checks if the current request is from an authenticated Payload CMS user.
 * Uses the Payload auth strategy by reading the JWT token from cookies.
 * Returns `true` if the user is logged in, `false` otherwise.
 */
export async function isPayloadUser(): Promise<boolean> {
  const payload = await getPayload({ config });

  try {
    const { user } = await payload.auth({ headers: await headers() });
    return !!user;
  } catch {
    return false;
  }
}
