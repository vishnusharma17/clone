import { Meilisearch } from 'meilisearch';

const host = process.env.MEILISEARCH_HOST || 'http://127.0.0.1:7700';
const apiKey = process.env.MEILISEARCH_API_KEY || '';

export const meilisearch = new Meilisearch({
  host,
  apiKey,
});
