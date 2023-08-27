"use client";
import { useEffect, useState } from "react";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/ui-library/command";

import { useTheme } from "next-themes";

import { useRouter } from "next/navigation";
import { ThemeSwitch } from "../ui/themeSwitch";
/**
 *
 * @name CommandMenu
 * @description Uses wrapper around CMD K from paco and uses dialog from radix UI.
 */

export function CommandMenu() {
	const { setTheme } = useTheme();

	// State for opening and closing the Dialog
	const [open, setOpen] = useState(false);

	// Getting the next-auth session in a client component

	// Event listener for pressing opening command
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	// Router is used to change pages
	const router = useRouter();

	return (
		<CommandDialog open={open} onOpenChange={setOpen}>
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Pages">
					<CommandItem
						onSelect={() => {
							setOpen(false);
							router.push("/");
						}}
					>
						Home
					</CommandItem>
					<CommandItem
						onSelect={() => {
							setOpen(false);
							router.push("/notes");
						}}
					>
						Notes
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Set Theme">
					<ThemeCommandSwitch setOpen={setOpen} />
					<CommandItem
						onSelect={async () => {
							setTheme("system");

							setOpen(false);
						}}
					>
						System
					</CommandItem>
				</CommandGroup>
			</CommandList>
			<CommandSeparator />
			<CommandList>
				<CommandGroup>
					<div className="flex w-full py-1 justify-end">
						<button
							className="w-fit flex relative"
							onClick={() => {
								setOpen(false);
							}}
						>
							<div className="relative flex flex-row px-2.5 py-1 space-x-2 items-center hover:bg-zinc-100 hover:dark:bg-neutral-800 transition-all ease-in-out rounded-md">
								<span className="text-xs text-muted-foreground">Commands</span>
								<kbd className="w-5 h-5 p-1 relative flex bg-zinc-100 dark:bg-neutral-800 items-center justify-center rounded-sm">
									⌘
								</kbd>
								<kbd className="w-5 h-5 text-xs p-1 relative flex bg-zinc-100 dark:bg-neutral-800 items-center justify-center rounded-sm">
									K
								</kbd>
							</div>
						</button>
					</div>
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	);
}

const ThemeCommandSwitch = ({ setOpen }: { setOpen: any }) => {
	let theme = localStorage.getItem("theme");
	const { setTheme } = useTheme();
	switch (theme) {
		case "light": {
			return (
				<CommandItem
					onSelect={async () => {
						setTheme("dark");
						setOpen(false);
					}}
				>
					Dark
				</CommandItem>
			);
		}
		case "dark": {
			return (
				<CommandItem
					onSelect={async () => {
						setTheme("light");
						setOpen(false);
					}}
				>
					Light
				</CommandItem>
			);
		}
		case "system": {
			return (
				<>
					<CommandItem
						onSelect={async () => {
							setTheme("dark");
							setOpen(false);
						}}
					>
						Dark
					</CommandItem>
					<CommandItem
						onSelect={async () => {
							setTheme("light");
							setOpen(false);
						}}
					>
						Light
					</CommandItem>
				</>
			);
		}
	}
};
