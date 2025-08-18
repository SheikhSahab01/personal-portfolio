import { headers } from 'next/headers';

export function getBaseUrl(): string {
  // Client-side: use relative path so requests go to the same origin
  if (typeof window !== 'undefined') {
    return '';
  }

  // On the server, prefer reconstructing the origin from headers
  try {
    const h = headers();
    const protocol = h.get('x-forwarded-proto') ?? 'https';
    const host = h.get('x-forwarded-host') ?? h.get('host');
    if (host) {
      return `${protocol}://${host}`;
    }
  } catch (_) {
    // headers() not available (e.g., during build); fall back to envs below
  }

  // Explicitly configured base URL variables (add your own domain here)
  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL;
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL as string;
  if (process.env.SITE_URL) return process.env.SITE_URL as string;
  if (process.env.URL) return process.env.URL as string;

  // Vercel provides the deployment URL without protocol
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  // Fallback for local dev
  return 'http://localhost:3000';
}


