import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

interface NavProps {
	isDark: boolean;
}

export default function Nav<T extends NavProps>(props: T) {
	const router = useRouter();

	return (
		<nav
			className={`z-[100] w-full text-sm font-itc font-light h-16 flex justify-between items-center fixed top-0 py-2 px-10 ${
				props.isDark ? "text-white" : "text-custom-black"
			}`}>
			<div>
				<Link href='/'>
					<Image src='/images/about/MK.svg' alt='MK Logo' height={50} width={50} />
				</Link>
			</div>
			<div className='flex items-center'>
				<Link
					href='/'
					className={`flex hover:text-logo-teal justify-center items-center p-2 bg-cyan-100/0 min-w-[80px] ml-4 ${
						router.asPath === "/" ? "font-medium text-custom-teal" : ""
					}`}>
					Home
				</Link>

				<Link
					href='/about'
					className={`flex hover hover:text-logo-teal justify-center items-center p-2 bg-cyan-100/0 min-w-[80px] ml-4 ${
						router.asPath === "/about" ? "font-medium text-custom-teal" : ""
					}`}>
					About
				</Link>
				{/* <div className='flex group justify-center items-center p-2 bg-cyan-100/0 min-w-[80px] ml-4'>
					<p className='group-hover:text-custom-teal'>Blog</p>
				</div> */}
			</div>
		</nav>
	);
}
