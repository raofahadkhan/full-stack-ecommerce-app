import { defineField, defineType } from "sanity";

export default defineType({
	name: "product",
	title: "Books",
	type: "document",
	fields: [
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			// type: "array",
			// of: [{ type: "image" }],
		}),
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "tagline",
			title: "Tag Line",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 90,
			},
		}),
		defineField({
			name: "price",
			title: "Price",
			type: "number",
		}),
		defineField({
			name: "details",
			title: "Details",
			type: "string",
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "reference",
			to: [
				{
					type: "category",
				},
			],
		}),
		defineField({
			name: "author",
			title: "Author",
			type: "reference",
			to: [
				{
					type: "author",
				},
			],
		}),
	],
});
