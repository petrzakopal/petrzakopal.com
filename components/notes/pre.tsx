"use client";
import React from "react";
import { cn } from "@/lib/cnHelper";
import { Copy, Check } from "lucide-react";

interface IPre extends React.HTMLAttributes<HTMLPreElement> {
	className?: string;
}

// Component inspired by https://ekomenyong.com/insights/redesign-next-js-13-blog-contentlayer-typescript
// Edited for using another animations, cleaned the code

const Pre = ({ className, ...props }: IPre) => {
	const textInput = React.useRef<HTMLDivElement>(null);
	const [copied, setCopied] = React.useState(false);

	const onCopy = () => {
		if (textInput.current !== null) {
			setCopied(true);
			navigator.clipboard.writeText(textInput.current.textContent!);
			setTimeout(() => {
				setCopied(false);
			}, 2000);
		}
	};
	return (
		<div ref={textInput} className="relative">
			<button
				aria-label="Copy code"
				type="button"
				className={cn(
					"absolute w-fit h-fit right-6 -top-8 z-50 p-2 items-center justify-center",
					copied ? "text-primary-accent" : "text-light-white"
				)}
				onClick={onCopy}
			>
				<>
					<Check
						className={cn(
							"absolute top-0 left-0 w-5 h-5 transition-all ease-in-out",
							copied ? "scale-100" : "scale-0"
						)}
					/>
					<Copy
						className={cn(
							"absolute top-0 left-0 w-5 h-5 transition-all ease-in-out",
							copied ? "scale-0" : "scale-100"
						)}
					/>
				</>
			</button>
			<pre
				className={cn(
					"pre overflow-x-auto rounded-lg px-3 py-4 font-mono",
					className
				)}
				{...props}
			/>
		</div>
	);
};

export default Pre;
