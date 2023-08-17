import { defineDocumentType, makeSource } from "contentlayer/source-files";
// import rehypePrism from "rehype-prism-plus";
// import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

import { Theme } from "./styles/rehype/theme";

export const Note = defineDocumentType(() => ({
	name: "Note",
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		date: { type: "date", required: true },
		tags: { type: "list", of: { type: "string" } },
		description: { type: "string", required: false },
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (note) => `/notes/${note._raw.flattenedPath}`,
		},
	},
}));

export default makeSource({
	contentDirPath: "notes",
	documentTypes: [Note],
	mdx: {
		rehypePlugins: [
			// rehypeCodeTitles,
			// rehypePrism
			[rehypePrettyCode, { theme: Theme }],
			rehypeSlug,
			[rehypeAutolinkHeadings, { behaviour: "wrap" }],
		],
	},
});
