import { ImageResponse, NextRequest } from "next/server";
export const runtime = "edge";
import "@/styles/rehype/pretty-code.css";

/**
 * @name og/general
 * @description Exposes API route for generating general OG images via @vercel/og.
 * @comment Utilizes tailwind (experimental) and styled components. Loads fonts from @/fonts to display in an opengraph image.
 * */
async function handler(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const title = searchParams.get("title");
	const slug = searchParams.get("slug");

	const { pathname } = new URL(req.url);

	const ibmPlexSansRegular = await fetch(
		new URL(
			"../../../fonts/IBM_Plex_Sans/IBMPlexSans-Regular.ttf",
			import.meta.url
		)
	).then((res) => res.arrayBuffer());

	const ibmPlexSansSemiBold = await fetch(
		new URL(
			"../../../fonts/IBM_Plex_Sans/IBMPlexSans-SemiBold.ttf",
			import.meta.url
		)
	).then((res) => res.arrayBuffer());

	const ibmPlexMonoRegular = await fetch(
		new URL(
			"../../../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.ttf",
			import.meta.url
		)
	).then((res) => res.arrayBuffer());

	return new ImageResponse(
		(
			<div
				tw={`h-full w-full flex flex-col items-center justify-center bg-[#fafafa]`}
				style={{ fontFamily: "IBM Plex Sans Regular" }}
			>
				<span
					tw={"text-7xl mt-80 text-center"}
					style={{ fontFamily: "IBM Plex Sans SemiBold" }}
				>
					{title}
				</span>
				<span
					tw="text-3xl text-[#0A0A0A] mb-5 mt-auto"
					style={{ fontFamily: "IBM Plex Mono Regular" }}
				>
					petrzakopal.com<span tw={"text-zinc-400"}>{slug}</span>
				</span>
				<div
					tw="flex items-center justify-center right-12 bottom-12"
					style={{ position: "absolute" }}
				>
					{" "}
					<img
						alt="Vercel"
						src="https://petrzakopal.com/favicons/favicon-196x196.png"
						width={196}
						height={196}
					/>
				</div>
			</div>
		),
		{
			// width: 1200,
			// height: 630,
			width: 1686,
			height: 882,
			fonts: [
				{
					name: "IBM Plex Sans Regular",
					data: ibmPlexSansRegular,
					style: "normal",
				},
				{
					name: "IBM Plex Sans SemiBold",
					data: ibmPlexSansSemiBold,
					style: "normal",
				},
				{
					name: "IBM Plex Mono Regular",
					data: ibmPlexMonoRegular,
					style: "normal",
				},
			],
		}
	);
}

export { handler as GET, handler as POST };
