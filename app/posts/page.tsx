import Link from "next/link";
import { allNotes, Note } from "@/.contentlayer/generated";

const PostCard = (note: Note) => {
	return (
		<div className="mb-8">
			<h2 className="mb-1 text-xl">
				<Link
					href={note.url}
					className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
				>
					{note.title}
				</Link>
			</h2>
			<time dateTime={note.date} className="mb-2 block text-xs text-gray-600">
				{note.date}
			</time>
			<div
				className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
				dangerouslySetInnerHTML={{ __html: note.body.html }}
			/>
		</div>
	);
};

const Page = () => {
	return (
		<div className="mx-auto max-w-xl py-8">
			<h1 className="mb-8 text-center text-2xl font-black">
				Next.js + Contentlayer Example
			</h1>
			{allNotes.map((post: any, idx: any) => (
				<PostCard key={idx} {...post} />
			))}
		</div>
	);
};

export default Page;
