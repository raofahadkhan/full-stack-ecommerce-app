import { defineType, defineField } from "sanity";

export const category = defineType({
	name: "category",
	title: "Category",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Category Name",
			type: "string",
			options: {
				list: ["New-Release", "Fiction", "Non-Fiction"],
			},
		}),
	],
});
