"use client";
import { SpaceY } from "../../utils/space";
import Link from "next/link";
import { ActiveLink, ActiveLinkGroup } from "./activeLink";
import { LayoutGroup } from "framer-motion";
export const Navbar = () => {
	return (
		<>
			<SpaceY mt={"md:mt-32 mt-12"} />
			<div className="w-full flex flex-row item-center">
				<Link
					className="text-dark-black dark:text-light-white text-base py-0.5"
					href="/"
				>
					Petr Zakopal
				</Link>

				<div className="w-fit flex flex-row space-x-3 ml-auto ">
					{/* <ActiveLink href="/" text={"Home"} className={"text-lg"} />
						<ActiveLink href="/notes" text={"Notes"} className={"text-lg"} /> */}
					<ActiveLinkGroup />
				</div>
			</div>
		</>
	);
};
