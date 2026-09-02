import Razorpay from 'razorpay';
import { CreatePaymentParams, PaymentOrder, PaymentProvider } from './types';

const keyId = process.env.RAZORPAY_KEY_ID || '';
const keySecret = process.env.RAZORPAY_KEY_SECRET || '';

export const razorpay = new Razorpay({
  key_id: keyId,
  key_secret: keySecret,
});

export class RazorpayPaymentProvider implements PaymentProvider {
  async createOrder(params: CreatePaymentParams): Promise<PaymentOrder> {
    const order = await razorpay.orders.create({
      amount: params.amount,
      currency: params.currency.toUpperCase(),
      receipt: params.receipt,
      notes: params.metadata,
    });

    return {
      id: order.id,
      provider: 'razorpay',
      amount: Number(order.amount),
      currency: order.currency,
      status: order.status,
      raw: order,
    };
  }
}
