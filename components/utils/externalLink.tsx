import Link from "next/link";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";

export const ExternalLink = ({
	href,
	text,
	rel,
	target,
}: {
	href: string;
	text: any;
	rel: string;
	target: string;
}) => {
	return (
		<>
			<Link
				href={href}
				rel={rel}
				target={target}
				className="relative flex flex-row hover:text-primary-accent transition-colors items-center"
			>
				{text}
				<ExternalLinkIcon className="ml-1 w-3 h-3" />
			</Link>
		</>
	);
};
