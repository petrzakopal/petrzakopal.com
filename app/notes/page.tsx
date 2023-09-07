import Link from "next/link";
import { Note, allNotes } from "@/.contentlayer/generated";
import { NoteCard } from "@/components/notes/noteCard";
import { SpaceY } from "@/components/utils/space";
import { PageTitle } from "@/components/layout/navigation/pageTitle";

// export const generateStaticParams = async () =>
// 	allNotes.map((post: any) => ({ slug: post._raw.flattenedPath }));

export const metadata = {
	title: "Notes – Petr Zakopal",
	description: "Notes of an engineering student.",
	metadataBase: new URL("https://petrzakopal.com"),
	alternates: {
		canonical: "/",
		// languages: {
		// 	cs_CZ: "",
		// },
	},
	openGraph: {
		title: "Petr Zakopal",
		description: "Notes of an engineering student.",
		url: "https://petrzakopal.com",
		siteName: "Petr Zakopal",
		images: [
			{
				url: `/og/general?slug=&title=Notes of an engineering student.`,
				width: 1686,
				height: 882,
			},
		],
		locale: "cs_CZ",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Petr Zakopal – Notes of an engineering student.",
		description: "Notes of an engineering student.",
		creator: "@petr_zakopal",
		images: [`/og/general?slug=&title=Notes of an engineering student.`],
	},
};

const Page = () => {
	// console.log(allNotes);

	return (
		<>
			<PageTitle title={"Notes"} />
			<SpaceY mt={"mt-8"} />
			<div className="w-full flex flex-col space-y-3">
				{allNotes.map((note: Note, index: number) =>
					note.visible ? <NoteCard note={note} key={index} /> : ""
				)}
			</div>
		</>
	);
};

export default Page;
