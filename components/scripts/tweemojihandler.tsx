"use client";

import Script from "next/script";
import { useEffect } from "react";

/**
 * Documentation for component TwemojiParser
 * Comment: Used for parsing Twemoji emoji images instead of the system emojis.
 * -------------------------------------------------------------------------------
 */

function TweemojiParser() {
	useEffect(() => {
		// @ts-expect-error
		if (document.readyState == "1") {
			// @ts-expect-error
			twemoji.parse(document.body, {
				folder: "svg",
				ext: ".svg",
			});
		} else {
			// @ts-expect-error
			twemoji.parse(document.body, {
				folder: "svg",
				ext: ".svg",
			});
		}
	});
}

/**
 * Documentation for component TwemojiHandler
 * Comment: Handling changing system emojis with Twemoji.
 * -------------------------------------------------------------------------------
 */

function TweemojiHandler() {
	TweemojiParser();

	return (
		<>
			<Script
				id="tweemoji"
				src="https://unpkg.com/twemoji@latest/dist/twemoji.min.js"
				strategy="beforeInteractive"
			/>
		</>
	);
}

export default TweemojiHandler;
