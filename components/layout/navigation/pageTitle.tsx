export const PageTitle = ({ title }: { title: string }) => {
	return (
		<>
			<h1 className="text-start text-4xl md:text-5xl font-bold mt-8">
				{title}
			</h1>
		</>
	);
};
