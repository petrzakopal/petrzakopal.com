import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cnHelper";
import { SpaceY } from "@/components/utils/space";

export const Introduction = () => {
	return (
		<>
			<div className="relative w-full text-dark-black dark:text-light-white text-start justify-start flex flex-col">
				<p>I am an engineering student</p>
				<p className="relative space-y-3 text-base">
					at the
					<Link
						href="https://www.cvut.cz"
						className={cn(
							{
								"w-fit inline-flex items-center ml-2 rounded-lg dark:bg-neutral-900 dark:hover:bg-neutral-800 bg-zinc-100 hover:bg-zinc-200 transition-colors ease-in-out px-2 py-0.5 text-sm":
									true,
							},
							{
								"w-fit inline-flex items-center ml-2 rounded-lg  dark:hover:bg-neutral-800 hover:bg-zinc-200 transition-colors ease-in-out px-2 py-0.5 underline underline-offset-4 decoration-2 decoration-dark-black dark:decoration-light-white hover:no-underline text-sm":
									false,
							}
						)}
					>
						<span className="hidden md:flex">Czech Technical University</span>
						<span className="md:hidden flex">CTU</span>
						<Image
							src="/assets/images/misc/logo-cvut.svg"
							width={35}
							height={35}
							alt="Logo CVUT"
							className="ml-2"
							priority
						/>
					</Link>
					<Link
						href="https://fel.cvut.cz"
						className={cn(
							{
								"w-fit inline-flex items-center ml-2 rounded-lg dark:bg-neutral-900 dark:hover:bg-neutral-800 bg-zinc-100 hover:bg-zinc-200 transition-colors ease-in-out px-2 py-0.5 text-sm":
									true,
							},
							{
								"w-fit inline-flex items-center ml-2 rounded-lg  dark:hover:bg-neutral-800 hover:bg-zinc-200 transition-colors ease-in-out px-2 py-0.5 underline underline-offset-4 decoration-2 decoration-dark-black dark:decoration-light-white hover:no-underline text-sm":
									false,
							}
						)}
					>
						<span className="hidden md:flex">
							Faculty of Electrical Engineering
						</span>
						<span className="md:hidden flex">FEE</span>
						<Image
							src="/assets/images/misc/logo-cvut-fel.webp"
							width={20}
							height={20}
							alt="Logo CVUT FEL"
							className="ml-2"
							priority
						/>
					</Link>
					department of
					<Link
						href="https://motor.feld.cvut.cz/"
						className={cn(
							{
								"w-fit inline-flex items-center md:ml-2 ml-0 mr-2 rounded-lg dark:bg-neutral-900 dark:hover:bg-neutral-800 bg-zinc-100 hover:bg-zinc-200 transition-colors ease-in-out px-2 py-0.5 text-sm":
									true,
							},
							{
								"w-fit inline-flex items-center md:ml-2 ml-0 mr-2 rounded-lg dark:hover:bg-neutral-800 hover:bg-zinc-200 transition-colors ease-in-out px-2 py-0.5 underline underline-offset-4 decoration-2 decoration-dark-black dark:decoration-light-white hover:no-underline text-sm":
									false,
							}
						)}
					>
						<span className="hidden md:flex">Electric Drives and Traction</span>
						<span className="md:hidden flex">EDT</span>
						<Image
							src="/assets/images/misc/logo-k13114.webp"
							width={20}
							height={20}
							alt="Logo Department of Electirc Drives and Traction"
							className="ml-2"
							priority
						/>
					</Link>
					in Prague.
				</p>
			</div>
			<SpaceY mt={"mt-8"} />
			<div className="flex flex-col w-full relative space-y-5 text-start justify-start">
				<p className="text-dark-black dark:text-light-white">
					My research activities focus on using FPGA and Processors to control
					electric drives and test additional components via HiL Systems. In my
					free time I like to create web applications, manage linux VPS servers,
					search for investment opportunities (stocks, private debt) and to do
					photography.
				</p>
			</div>
		</>
	);
};
