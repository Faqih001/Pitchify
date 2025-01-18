import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Create a client with the project ID, dataset, API version, and CDN
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
