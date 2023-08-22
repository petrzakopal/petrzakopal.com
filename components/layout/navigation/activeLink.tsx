"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ctw } from "@/lib/ctwHelper";
import { LayoutGroup, motion } from "framer-motion";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/ui-library/tooltip";
import { useMouse } from "@/lib/useMouse";
import { useState } from "react";

/**
 * @name ActiveLink
 * @description Only checks for path and renders the link
 */
export const ActiveLink = ({
	href,
	text,
	className,
}: {
	href: string;
	text: string;
	className: string;
}) => {
	let pathname = usePathname();
	if (pathname.includes("/notes/")) {
		pathname = "/notes";
	}
	const isActive = pathname === href;

	return (
		<>
			<Link
				className={ctw(
					"",
					className,
					isActive
						? "text-primary-accent underline underline-offset-2"
						: "text-dark-black dark:text-light-white transition-colors ease-in-out"
				)}
				href={href}
			>
				{text}
			</Link>
		</>
	);
};

/**
 * @name ActiveLinkGroup
 * @description Renders navItems and framer motion underline div with motion. Checks if the pathname of url is the actual pathname and stylizes the link.
 */
const navItems = [
	{ text: "Home", href: "/", visible: true },
	{ text: "Notes", href: "/notes", visible: true },
	{ text: "Projects", href: " ", visible: false },
];

export const ActiveLinkGroup = ({}: {}) => {
	// For checking if the url pathname is the current pathname
	let pathname = usePathname();
	if (pathname.includes("/notes/")) {
		pathname = "/notes";
	}
	if (pathname.includes("/projects/")) {
		pathname = "/projects";
	}

	return (
		<>
			<LayoutGroup>
				{navItems.map((item) => {
					if (item.visible === true) {
						return (
							<Link
								className={ctw(
									"",
									pathname === item.href
										? "text-primary-accent underline-offset-2 relative"
										: "text-dark-black dark:text-light-white dark:hover:text-zinc-300 hover:text-neutral-700"
								)}
								href={item.href}
								key={item.text}
							>
								{item.text}
								{item.href === pathname ? (
									<motion.div
										className="absolute h-[2px] top-6 inset-0 bg-primary-accent rounded-lg z-[1] w-full"
										layoutId="navbar"
										transition={{
											type: "spring",
											stiffness: 350,
											damping: 30,
										}}
									/>
								) : null}
							</Link>
						);
					} else {
						// Opening and closing tooltip
						const [isOpen, setIsOpen] = useState(false);

						// Custom react hook for getting the x and y position of a mouse on an element which is refferenced by ref={ref}
						const { ref, x, y } = useMouse();
						return (
							<TooltipProvider delayDuration={0} key={item.text}>
								<Tooltip open={isOpen} onOpenChange={setIsOpen}>
									<TooltipTrigger
										ref={ref}
										className="items-start flex"
										onClick={() => {
											setIsOpen(true);
										}}
									>
										<Link
											className={ctw(
												"",
												pathname === item.href
													? "text-primary-accent  underline-offset-2 relative"
													: "text-dark-black dark:text-light-white dark:hover:text-zinc-300 hover:text-neutral-700",

												"hover:line-through cursor-not-allowed"
											)}
											href={item.href}
										>
											{item.text}
										</Link>
									</TooltipTrigger>
									{/* On a phone */}
									<TooltipContent
										alignOffset={x - 100}
										sideOffset={-y + 10}
										className="md:hidden flex"
									>
										<span>In process.</span>
									</TooltipContent>
									{/* On a desktop */}
									<TooltipContent
										alignOffset={x}
										sideOffset={-y + 10}
										className="hidden md:flex"
									>
										<span>In process.</span>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						);
					}
				})}
			</LayoutGroup>
		</>
	);
};
