import { PaymentProvider } from './types';
import { StripePaymentProvider } from './stripe';
import { RazorpayPaymentProvider } from './razorpay';

export * from './types';
export * from './stripe';
export * from './razorpay';

export function getPaymentProvider(providerName: 'stripe' | 'razorpay'): PaymentProvider {
  switch (providerName) {
    case 'stripe':
      return new StripePaymentProvider();
    case 'razorpay':
      return new RazorpayPaymentProvider();
    default:
      throw new Error(`Unsupported payment provider: ${providerName}`);
  }
}
