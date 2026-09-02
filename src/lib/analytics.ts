import posthog from 'posthog-js';

export const initAnalytics = () => {
  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

  if (typeof window !== 'undefined' && apiKey) {
    posthog.init(apiKey, {
      api_host: apiHost,
      loaded: (ph) => {
        if (process.env.NODE_ENV === 'development') ph.opt_out_capturing();
      },
    });
  }
};

export { posthog };
