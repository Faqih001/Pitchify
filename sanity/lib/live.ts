import "server-only";

import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";

// Export the sanity fetch and sanity live functions with the client
export const { sanityFetch, SanityLive } = defineLive({ client });
