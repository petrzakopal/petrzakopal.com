"use client";
import { SpaceY } from "../../utils/space";
import Link from "next/link";
import { ActiveLink, ActiveLinkGroup } from "./activeLink";
import { LayoutGroup } from "framer-motion";
export const Navbar = () => {
	return (
		<>
			<SpaceY mt={"mt-32"} />
			<div className="w-full flex flex-row item-center">
				<span className="text-dark-black dark:text-light-white  text-lg">
					Petr Zakopal
				</span>

				<div className="w-fit flex flex-row space-x-3 ml-auto ">
					{/* <ActiveLink href="/" text={"Home"} className={"text-lg"} />
						<ActiveLink href="/notes" text={"Notes"} className={"text-lg"} /> */}
					<ActiveLinkGroup />
				</div>
			</div>
		</>
	);
};
