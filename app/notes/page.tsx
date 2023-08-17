import Link from "next/link";
import { allNotes, Note } from "@/.contentlayer/generated";
import { NoteCard } from "@/components/notes/noteCard";
import { SpaceY } from "@/components/utils/space";
import { PageTitle } from "@/components/layout/navigation/pageTitle";

// export const generateStaticParams = async () =>
// 	allNotes.map((post: any) => ({ slug: post._raw.flattenedPath }));

const Page = () => {
	console.log(allNotes);

	return (
		<>
			<PageTitle title={"Notes"} />
			<SpaceY mt={"mt-8"} />
			<div className="w-full flex flex-col space-y-3">
				{allNotes.map((note: any, index: number) => (
					<NoteCard note={note} key={index} />
				))}
			</div>
		</>
	);
};

export default Page;
