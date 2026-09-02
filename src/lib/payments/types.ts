export interface CreatePaymentParams {
  amount: number;
  currency: string;
  receipt?: string;
  description?: string;
  metadata?: Record<string, string>;
}

export interface PaymentOrder {
  id: string;
  provider: 'stripe' | 'razorpay';
  amount: number;
  currency: string;
  status: string;
  raw: unknown;
}

export interface PaymentProvider {
  createOrder(params: CreatePaymentParams): Promise<PaymentOrder>;
}
