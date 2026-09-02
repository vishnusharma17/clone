import Stripe from 'stripe';
import { CreatePaymentParams, PaymentOrder, PaymentProvider } from './types';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';

export const stripe = new Stripe(stripeSecretKey);

export class StripePaymentProvider implements PaymentProvider {
  async createOrder(params: CreatePaymentParams): Promise<PaymentOrder> {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: params.amount,
      currency: params.currency.toLowerCase(),
      description: params.description,
      metadata: params.metadata,
    });

    return {
      id: paymentIntent.id,
      provider: 'stripe',
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      status: paymentIntent.status,
      raw: paymentIntent,
    };
  }
}
