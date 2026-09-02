import { Queue, Worker, Job } from 'bullmq';
import { redis } from '../redis';

export const defaultQueueName = 'default-queue';

export const queue = new Queue(defaultQueueName, {
  connection: redis,
});

export function createWorker<T = unknown, R = unknown>(
  queueName: string,
  processor: (job: Job<T, R, string>) => Promise<R>
) {
  return new Worker<T, R, string>(queueName, processor, {
    connection: redis,
  });
}
