import TweemojiHandler from "@/components/scripts/tweemojihandler";
import "./../styles/globals.css";
import "@/styles/note-body.css";
import { IBM_Plex_Sans } from "next/font/google";
import { SpaceY } from "@/components/misc/space";

const IBMPlexSans = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
});

export const metadata = {
	metadataBase: new URL("https://petrzakopal.com"),
	alternates: {
		canonical: "/",
		// languages: {
		// 	cs_CZ: "",
		// },
	},
	icons: {
		icon: [
			{ url: "/favicons/favicon.ico" },
			{
				url: "/favicons/favicon-128x128.png",
				sizes: "128x128",
				type: "image/png",
			},
			{ url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
			{
				url: "/favicons/favicon-196x196.png",
				sizes: "196x196",
				type: "image/png",
			},
		],
		apple: [{ url: "/favicons/apple-icon.png" }],
		other: [
			{
				rel: "apple-touch-icon-precomposed",
				url: "/favicons/apple-touch-icon-152x152.png",
				sizes: "152x152",
			},
			{
				rel: "apple-touch-icon-precomposed",
				url: "/favicons/apple-touch-icon-76x76.png",
				sizes: "76x76",
			},
			{
				rel: "apple-touch-icon-precomposed",
				url: "/favicons/apple-touch-icon-120x120.png",
				sizes: "120x120",
			},
			{
				rel: "apple-touch-icon-precomposed",
				url: "/favicons/apple-touch-icon-60x60.png",
				sizes: "60x60",
			},
			{
				rel: "apple-touch-icon-precomposed",
				url: "/favicons/apple-touch-icon-144x144.png",
				sizes: "144x144",
			},
			{
				rel: "apple-touch-icon-precomposed",
				url: "/favicons/apple-touch-icon-72x72.png",
				sizes: "72x72",
			},
			{
				rel: "apple-touch-icon-precomposed",
				url: "/favicons/apple-touch-icon-114x114.png",
				sizes: "114x114",
			},
			{
				rel: "apple-touch-icon-precomposed",
				url: "/favicons/apple-touch-icon-57x57.png",
				sizes: "57x57",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<meta name="theme-color" content={"#fafafa"} id="theme-color" />
			<body className={IBMPlexSans.className}>
				<TweemojiHandler />
				<main>
					<div
						className={`flex w-full flex-col items-center min-h-screen overflow-auto ${IBMPlexSans.className} px-5 bg-[#fafafa]`}
					>
						<div className="w-full lg:w-inside-full flex flex-col">
							{children}
						</div>
						<SpaceY mt={"lg:mt-24 mt-14"} />
					</div>
				</main>
			</body>
		</html>
	);
}
