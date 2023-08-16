"use client";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
	const { setTheme } = useTheme();
	return (
		<div className="w-full flex flex-col cursor-pointer">
			<div
				className="text-black dark:text-white"
				onClick={() => {
					setTheme("light");
				}}
			>
				light
			</div>
			<div
				className="text-black dark:text-white cursor-pointer"
				onClick={() => {
					setTheme("dark");
				}}
			>
				dark
			</div>
			<div
				className="text-black dark:text-white cursor-pointer"
				onClick={() => {
					setTheme("system");
				}}
			>
				system
			</div>
		</div>
	);
};
