export function getBaseUrl(): string {
  // Client-side: use relative path
  if (typeof window !== 'undefined') {
    return '';
  }

  // Explicitly configured public base URL wins
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  // Vercel provides the deployment URL without protocol
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Fallback for local dev server
  return 'http://localhost:3000';
}  


