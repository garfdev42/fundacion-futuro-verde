import type { DonationPayload, DonationApiResponse } from '../types';

function normalizePayload(payload: DonationPayload): Record<string, string | number> {
  return {
    identification: String(payload.identification).trim(),
    email: String(payload.email).trim(),
    fullName: String(payload.fullName).trim(),
    amount: Number(payload.amount),
    currency: payload.currency,
    message: String(payload.message).trim(),
  };
}

export async function createDonation(payload: DonationPayload): Promise<DonationApiResponse> {
  const { apiPost } = await import('./client');
  return apiPost<DonationApiResponse>('/donations/create', normalizePayload(payload));
}
