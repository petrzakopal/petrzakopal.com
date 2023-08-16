import Link from "next/link";
import { allNotes, Note } from "@/.contentlayer/generated";
import { NoteCard } from "@/components/notes/noteCard";
import { SpaceY } from "@/components/utils/space";

// export const generateStaticParams = async () =>
// 	allNotes.map((post: any) => ({ slug: post._raw.flattenedPath }));

const Page = () => {
	console.log(allNotes);

	return (
		<div className="w-full flex flex-col py-8">
			<h1 className="text-start text-4xl md:text-7xl font-bold">Notes</h1>
			<SpaceY mt={"mt-8"} />
			<div className="w-full flex flex-col space-y-3">
				{allNotes.map((note: any, index: number) => (
					<NoteCard note={note} key={index} />
				))}
			</div>
		</div>
	);
};

export default Page;
