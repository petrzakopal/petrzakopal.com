"use client";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

/**
 * @name ZoomImage
 * @param src - string of url of an image source or static import
 * @param alt - alt for an image
 * @returns Component with full width image which can be zoomed and zoom is canceled when scroll is invoked
 */

export const ZoomImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<Zoom
			zoomMargin={30}
			zoomImg={{
				src: src as string,
				alt: alt,
			}}
		>
			<Image
				src={src}
				alt={alt}
				width={0}
				height={0}
				className="w-full h-auto"
				sizes="100vw"
			/>
		</Zoom>
	);
};
