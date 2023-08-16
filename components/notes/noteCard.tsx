import { Note } from "@/.contentlayer/generated";
import { SpaceY } from "../utils/space";
import Link from "next/link";

/**
 * @name NoteCard
 * @description Component for displaying a "card" for a note in a list of notes on a notes page.
 * @param note - It is a Note from ContentLayer
 * @returns Renders a Component Note on a Notes page.
 */

export const NoteCard = ({ note }: { note: Note }) => {
	const datePublished = new Date(note.date).toLocaleDateString("cs-CZ", {
		timeZone: "UTC",
	});

	return (
		<>
			<Link
				href={note.url}
				className="w-full flex flex-col text-start items-start justify-start text-black transition-all ease-in-out px-3 p-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:text-light-white dark:bg-neutral-900 dark:hover:bg-neutral-800"
			>
				<div className="w-full flex flex-row items-center justify-start">
					<div className="w-full md:space-x-2 flex md:flex-row flex-row items-center justify-start">
						<h2 className="text-base md:text-lg font-bold md:min-w-fit w-full md:w-auto">
							{note.title}
						</h2>
						<time className="text-zinc-400 text-base text-start md:w-full min-w-fit">
							<sup className="min-w-fit md:flex hidden">{datePublished}</sup>
							<span className="md:hidden flex text-sm">{datePublished}</span>
						</time>
					</div>
					{/* <div className="ml-10 relative w-fit flex flex-row space-x-5">
							{note.tags?.map((tag) => (
								<span className="border-[#20CA3B] border-solid border-[1px] rounded-full px-3 py-0.5 text-[#20CA3B] text-xs">
									{tag}
								</span>
							))}
						</div> */}
				</div>

				{/* <SpaceY mt={"mt-2"} /> */}
				{/* <div className="relative w-fit flex flex-row space-x-5">
						{note.tags?.map((tag) => (
							<span className="text-zinc-400 text-xs">#{tag}</span>
						))}
					</div> */}
				{/* <div
						className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
						dangerouslySetInnerHTML={{ __html: note.body.html }}
					/> */}
			</Link>
		</>
	);
};
