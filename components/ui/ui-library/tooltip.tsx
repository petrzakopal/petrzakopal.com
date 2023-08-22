"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { ctw } from "@/lib/ctwHelper";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset, alignOffset, ...props }, ref) => (
	<TooltipPrimitive.Content
		ref={ref}
		sideOffset={sideOffset}
		alignOffset={alignOffset}
		align="start"
		hideWhenDetached
		className={ctw(
			"z-50 overflow-hidden rounded-md border border-zinc-200 dark:border-neutral-900 bg-light-white dark:bg-dark-black px-3 py-1.5 text-sm text-dark-black dark:text-light-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out duration-0 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
			className
		)}
		{...props}
	/>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
