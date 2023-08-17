"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/ui-library/dropdown-menu";
import { Button } from "./ui-library/button";

export const ThemeSwitch = () => {
	const { setTheme } = useTheme();
	return (
		<div className="w-fit flex relative">
			<DropdownMenu>
				<DropdownMenuTrigger asChild className="cursor-pointer">
					{/* <span className="text-base text-description">Theme</span> */}
					<DropdownMenuTrigger asChild>
						<Button size="icon">
							<Sun className="text-neutral-600 h-4 w-4 scale-100 dark:scale-0" />
							<Moon className="text-neutral-600 absolute h-4 w-4 scale-0 dark:scale-100" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem onClick={() => setTheme("light")}>
						Light
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme("dark")}>
						Dark
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme("system")}>
						System
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
