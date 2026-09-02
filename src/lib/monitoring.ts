import * as Sentry from '@sentry/nextjs';

export const initMonitoring = () => {
  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
  if (dsn) {
    Sentry.init({
      dsn,
      tracesSampleRate: 1.0,
    });
  }
};

export { Sentry };
