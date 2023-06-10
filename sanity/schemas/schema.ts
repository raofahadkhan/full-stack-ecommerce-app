import { type SchemaTypeDefinition } from "sanity";
import product from "./product";
import { category } from "./category";
import author from "./author";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [product, category,author],
};
