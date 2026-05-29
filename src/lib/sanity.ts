import { createClient } from "@sanity/client";

const PROJECT_ID = "nfoygs8u";
const DATASET = "production";
const API_VERSION = "2024-01-01";

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  useCdn: true, // Use CDN for faster response
  perspective: "published", // Only published documents
  stega: false,
});

export async function sanityFetch<T>(query: string): Promise<T> {
  return await client.fetch<T>(query);
}

export function imageUrl(ref: string): string {
  const parts = ref.replace("image-", "").split("-");
  const format = parts.pop();
  const rest = parts.join("-");
  return `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${rest}.${format}`;
}
