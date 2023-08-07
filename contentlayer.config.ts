import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Note = defineDocumentType(() => ({
	name: "Note",
	filePathPattern: `**/*.md`,
	fields: {
		title: { type: "string", required: true },
		date: { type: "date", required: true },
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (note) => `/posts/${note._raw.flattenedPath}`,
		},
	},
}));

export default makeSource({ contentDirPath: "notes", documentTypes: [Note] });
