import { SpaceY } from "@/components/utils/space";
import { NoteContent } from "@/components/notes/noteContent";
import { Note, allNotes } from "contentlayer/generated";
import Link from "next/link";
import { ArrowLeft, ChevronLeft } from "lucide-react";

// export const generateStaticParams = async () =>
// 	allNotes.map((post: any) => ({ slug: post._raw.flattenedPath }));

// Generating Next.js SEO metadata in a server component
export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	const note = allNotes.find(
		(note: Note) => note._raw.flattenedPath === params.slug
	);
	if (!note) throw new Error(`note not found for slug: ${params.slug}`);

	const metadataObject = {
		metadataBase: new URL("https://petrzakopal.com/notes"),
		title: note.title,
		alternates: {
			canonical: note._raw.flattenedPath,
		},
		openGraph: {
			title: note.title,
			description: note.description,
			url: note._raw.flattenedPath,
			siteName: "Petr Zakopal",
			images: [
				{
					url: `/og/general?slug=/notes/${note._raw.flattenedPath}&title=${note.title}`,
					width: 1686,
					height: 882,
				},
			],
			locale: "en_GB",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: note.title,
			description: note.description,
			creator: "@petr_zakopal",
			images: [
				`/og/general?slug=/notes/${note._raw.flattenedPath}&title=${note.title}`,
			],
		},
	};

	return metadataObject;
};

// Main Single Note Page
const SingleNotePage = ({ params }: { params: { slug: string } }) => {
	return (
		<>
			<NoteContent params={params} />
			<SpaceY mt={"mt-14"} />
			<Link
				href="/notes"
				className="w-fit flex flex-row text-start items-center justify-start text-black transition-all ease-in-out px-3 p-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 font-semibold"
			>
				<ChevronLeft className="w-5 h-5 text-black mr-1.5" />
				<span>Back to Notes</span>
			</Link>
		</>
	);
};

export default SingleNotePage;
