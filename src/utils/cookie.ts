// src/utils/cookie.ts
export function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return;
  const cookies = document.cookie.split('; ');
  for (const pair of cookies) {
    const [key, value] = pair.split('=');
    if (key === name) return decodeURIComponent(value);
  }
}
