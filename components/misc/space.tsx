interface SpaceProps {
	mt: String;
}

export const SpaceY = ({ mt }: SpaceProps) => {
	return <span aria-hidden={"true"} className={`spacer ${mt}`}></span>;
};
