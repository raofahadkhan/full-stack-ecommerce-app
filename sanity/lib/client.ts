import { createClient } from "next-sanity";

// import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
	token: process.env.NEXT_SANITY_API_TOKEN,
	apiVersion: "2023-05-26",
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	projectId: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: true,
});
