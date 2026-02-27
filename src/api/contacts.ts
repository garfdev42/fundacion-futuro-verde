import type { ContactPayload } from '../types';

const CONTACTS_PATH = import.meta.env.VITE_CONTACTS_PATH ?? '/contacts';

export async function createContact(payload: ContactPayload): Promise<{ id: string }> {
  const { apiPost } = await import('./client');
  return apiPost<{ id: string }>(CONTACTS_PATH, payload);
}
