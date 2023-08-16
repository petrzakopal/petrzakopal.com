import { ThemeSwitch } from "@/components/ui/themeSwitch";
import Link from "next/link";

export const metadata = {
	title: "Petr Zakopal",
	description: "I should make myself a website.",
	metadataBase: new URL("https://petrzakopal.com"),
	alternates: {
		canonical: "/",
		// languages: {
		// 	cs_CZ: "",
		// },
	},
	openGraph: {
		title: "Petr Zakopal",
		description: "I should make myself a website.",
		url: "https://petrzakopal.com",
		siteName: "Petr Zakopal",
		images: [
			{
				url: "https://petrzakopal.com/assets/images/seo/og-image.png",
				width: 800,
				height: 600,
			},
		],
		locale: "cs_CZ",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Petr Zakopal – I should make myself a website.",
		description: "I should make myself a website.",
		creator: "@petr_zakopal",
		images: ["https://petrzakopal.com/assets/images/seo/og-image.png"],
	},
};

const Page = () => {
	return (
		<>
			<div className="w-full h-screen items-center justify-center flex flex-col text-center text-black dark:text-white">
				<small className="md:text-5xl text-2xl font-thin">
					I should make myself a website.
				</small>
				<span className="md:mt-10 mt-3">
					For now you can follow me at{" "}
					<span className="font-mono hover:underline transition-all ease-in-out">
						<Link href={"https://twitter.com/petr_zakopal"}>@petr_zakopal</Link>
					</span>
					.
				</span>
			</div>
			<ThemeSwitch />
		</>
	);
};

export default Page;
