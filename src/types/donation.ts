export interface DonationPayload {
  identification: string;
  email: string;
  fullName: string;
  amount: number;
  currency: string;
  message: string;
}

export interface DonationApiDonation {
  id: string;
  amount: number;
  currency: string;
  message: string;
  stripeSessionId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  donor: {
    id: string;
    identification: string;
    email: string;
    fullName: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface DonationApiResponse {
  success: boolean;
  status: number;
  data: {
    donation: DonationApiDonation;
    paymentUrl: string;
  };
}
