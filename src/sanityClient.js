import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "mck3a7uk", // Get this from sanity.config.ts
  dataset: "production",

  useCdn: false,
  apiVersion: "2024-03-17",
});
