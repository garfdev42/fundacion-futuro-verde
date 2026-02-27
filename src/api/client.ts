const BASE_URL = import.meta.env.VITE_API_URL ?? '';

function getHeaders(): HeadersInit {
  return {
    'Content-Type': 'application/json',
  };
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    let message = text || `HTTP ${res.status}`;
    try {
      const body = JSON.parse(text) as { message?: string; error?: string; statusCode?: number };
      if (body.message) message = body.message;
      else if (body.error) message = body.error;
    } catch {
      /* use raw text */
    }
    throw new Error(message);
  }
  return res.json() as Promise<T>;
}
