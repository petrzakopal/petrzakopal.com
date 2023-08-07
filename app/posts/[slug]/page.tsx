import { allNotes } from "contentlayer/generated";

export const generateStaticParams = async () =>
	allNotes.map((post: any) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	const note = allNotes.find(
		(note: any) => note._raw.flattenedPath === params.slug
	);
	if (!note) throw new Error(`note not found for slug: ${params.slug}`);
	return { title: note.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
	const note = allNotes.find(
		(note: any) => note._raw.flattenedPath === params.slug
	);
	if (!note) throw new Error(`Post not found for slug: ${params.slug}`);

	return (
		<article className="mx-auto max-w-xl py-8">
			<div className="mb-8 text-center">
				<time dateTime={note.date} className="mb-1 text-xs text-gray-600">
					{note.date}
				</time>
				<h1 className="text-3xl font-bold">{note.title}</h1>
			</div>
			<div
				className="[&>*]:mb-3 [&>*:last-child]:mb-0"
				dangerouslySetInnerHTML={{ __html: note.body.html }}
			/>
		</article>
	);
};

export default PostLayout;
