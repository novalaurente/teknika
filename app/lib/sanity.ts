import { createClient } from 'next-sanity';

const projectId = 'w4pj1lt4';
const dataset = 'production';
const apiVersion = '2023-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
