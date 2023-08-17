import { SpaceY } from "@/components/utils/space";
import { Note, allNotes } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

// Imports which were used with rehype-prism and rehype-code-titles
// import "@/styles/rehype/rehype-prism.css";
// import "@/styles/rehype/prism-theme.css";
// import "@/styles/rehype/code-titles.css";
import type { MDXComponents } from "mdx/types";
import { ZoomImage } from "../utils/imageZoom";
import { Tweet } from "react-tweet";
import { ExternalLink } from "../utils/externalLink";
import Pre from "./pre";

const mdxComponents: MDXComponents = {
	Image: ({ src, alt }: { src: string; alt: string }) => (
		<ZoomImage src={src} alt={alt} />
	),

	ImageGrid: ({ children }: { children: React.ReactNode }) => (
		<div className="w-full grid grid-cols-3 gap-5">{children}</div>
	),

	Tweet: ({ id }: { id: any }) => (
		<div className="w-fit mx-auto">
			<Tweet id={id} />
		</div>
	),

	ExternalLink: ({
		href,
		text,
		rel,
		target,
	}: {
		href: string;
		text: any;
		rel: string;
		target: string;
	}) => <ExternalLink href={href} text={text} rel={rel} target={target} />,

	pre: Pre,
};

// Main Single Note Page
export const NoteContent = ({ params }: { params: { slug: string } }) => {
	const note = allNotes.find(
		(note: Note) => note._raw.flattenedPath === params.slug
	);

	if (!note) throw new Error(`Note not found for slug: ${params.slug}`);

	const datePublished = new Date(note.date).toLocaleDateString("cs-CZ", {
		timeZone: "UTC",
	});

	console.log(note);

	const MDXContent = useMDXComponent(note.body.code);
	return (
		<article className="w-full flex flex-col justify-center py-8">
			<div className="w-full text-start flex md:flex-row flex-col md:space-x-2">
				<h1 className="text-start text-3xl md:text-4xl font-bold">
					{note.title}
				</h1>
				<time
					dateTime={note.date}
					className="text-zinc-400 text-start min-w-fit"
				>
					<sup className="hidden md:flex text-sm">{datePublished}</sup>
					<span className="md:hidden flex">{datePublished}</span>
				</time>
			</div>
			<SpaceY mt={"mt-8"} />
			{/* <div
				className="space-y-5 leading-7 text-justify note-body"
				dangerouslySetInnerHTML={{ __html: note.body.html }}
			/> */}
			<div className="space-y-5 leading-7 text-justify note-body">
				<MDXContent components={mdxComponents} />
			</div>
		</article>
	);
};
