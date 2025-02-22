import "server-only";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "../env";

// Create a client with the project ID, dataset, API version, and CDN
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

// Throw an error if the write token is not found
if (!writeClient.config().token) {
  throw new Error("Write token not found.");
}
