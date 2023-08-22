// @ts-nocheck

// Next.js route.ts documentation https://nextjs.org/docs/app/building-your-application/routing/router-handlers
import { getServerSideSitemap } from "next-sitemap";
import { allNotes } from "@/.contentlayer/generated";

/**
 *
 * @param request
 * @returns xmlFeed
 * @comment Returns XML Sitemap Feed for next-sitemap. Posts are fetched via Ghost CMS API.
 */

export async function GET(request: Request) {
	// Preparing plain array for JSON nodes
	var noteArray = [];

	// allNotes.length != 0
	// 	? allNotes.map((note) => {
	// 			console.log(note.url);
	// 	  })
	// 	: "";

	// Mapping evvery post slug to array of JSON nodes
	allNotes.length != 0
		? allNotes.map((note) => {
				noteArray.push({
					loc: process.env.NEXT_PUBLIC_SITE_URL + "/note/" + note.url,
					lastmod: new Date().toISOString(),
					changefreq: "daily",
				});
		  })
		: "";

	// Testing
	// console.log(noteArray);

	// Creating XML Sitemap from noteArray with mapped posts
	const xmlFeed = await getServerSideSitemap(noteArray);

	return xmlFeed;
}
