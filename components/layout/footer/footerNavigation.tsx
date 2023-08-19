"use client";
import Link from "next/link";
import { cn } from "@/lib/cnHelper";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/ui-library/tooltip";
import { useMouse } from "@/lib/useMouse";
import { useState } from "react";
import { SpaceY } from "@/components/utils/space";

const navItems = [
	{ text: "Notes", href: "/notes", visible: true },
	{ text: "Projects", href: " ", visible: false },
	{ text: "About", href: " ", visible: false },
];

export const FooterNavigation = () => {
	return (
		<>
			<div className="relative flex flex-col text-start">
				<span className="text-dark-black dark:text-light-white font-semibold text-base">
					Navigation
				</span>
				<SpaceY mt={"mt-6"} />
				<div className="relative flex flex-col text-start space-y-1">
					{navItems.map((item) => {
						if (item.visible === true) {
							return (
								<Link
									className={cn(
										"",

										"text-dark-black dark:text-light-white dark:hover:text-zinc-300 hover:text-neutral-700"
									)}
									href={item.href}
									key={item.text}
								>
									{item.text}
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
												className={cn(
													"",

													"text-dark-black dark:text-light-white dark:hover:text-zinc-300 hover:text-neutral-700",

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
				</div>
			</div>
		</>
	);
};
