import { ThemeSwitch } from "@/components/ui/themeSwitch";
import Link from "next/link";
import { ctw } from "@/lib/ctwHelper";
import { SpaceY } from "@/components/utils/space";
import { FooterNavigation } from "./footerNavigation";

const linkArray = [
	{ href: "https://x.com/petr_zakopal", text: "X", separator: "·" },
	{ href: "https://github.com/petrzakopal", text: "GitHub", separator: "·" },
	// {
	// 	href: "https://www.instagram.com/petr.zakopal/",
	// 	text: "Instagram",
	// 	separator: "·",
	// },
	{
		href: "https://www.linkedin.com/in/petr-zakopal",
		text: "LinkedIn",
		separator: "·",
	},
	{
		href: "imessage://petr.zakopal@gmail.com", // change to a new iMessage acc via settings described on this page https://discussions.apple.com/thread/8010901
		text: "iMessage",
		separator: "·",
	},
	{
		href: "mailto:info@petrzakopal.cz",
		text: "info@petrzakopal.cz",
		separator: "",
	},
];

export const Footer = () => {
	return (
		<footer className="lg:w-inside-full w-full flex flex-col items-center relative mx-auto">
			<div className="relative w-full h-[2px] bg-zinc-200 dark:bg-neutral-800 rounded-lg" />
			<div className="w-full relative flex flex-row items-start justify-start mt-6">
				<FooterNavigation />
			</div>
			<SpaceY mt={"mt-24"} />
			<div className="relative flex w-full flex-row text-sm">
				{linkArray.map((item) => {
					return (
						<span key={item.text}>
							<Link
								target={"_blank"}
								href={item.href}
								className={ctw(
									{
										"text-dark-black dark:text-light-white dark:hover:text-zinc-300 hover:text-neutral-700 transition-colors ease-in-out underline underline-offset-4 decoration-2 decoration-dark-black dark:decoration-light-white dark:hover:decoration-zinc-300 hover:decoration-neutral-700":
											true,
									},
									{
										"text-dark-black dark:text-light-white  dark:hover:bg-neutral-800  hover:bg-zinc-200 transition-colors ease-in-out px-2 py-0.5 rounded-lg":
											false,
										"dark:bg-neutral-900 bg-zinc-100": false,
									}
								)}
							>
								{item.text}
							</Link>
							<span className="mx-0.5 font-light ">{item.separator}</span>
						</span>
					);
				})}
			</div>
			<SpaceY mt={"mt-3"} />
			<div className="w-full relative flex flex-row items-center">
				<div className=" w-full flex flex-col">
					<div className="w-full relavive flex flex-row">
						<span className="text-xs text-neutral-600">
							Content licensed under{" "}
							<Link
								href="https://creativecommons.org/licenses/by-nc/4.0/"
								rel="external"
								target="_blank"
								className="decoration-wavy underline text-light cursor-help"
							>
								CC BY-NC 4.0
							</Link>
							, code under{" "}
							<Link
								href="https://choosealicense.com/licenses/mit/"
								rel="external"
								target="_blank"
								className="decoration-wavy underline text-light cursor-help"
							>
								MIT
							</Link>
							.
						</span>
					</div>
				</div>
				<ThemeSwitch />
			</div>
		</footer>
	);
};
