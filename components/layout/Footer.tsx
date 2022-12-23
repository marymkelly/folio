import { useRouter } from "next/router";
export default function Footer() {
	const router = useRouter();

	return (
		<footer className={`w-full flex flex-col justify-center items-center ${router.pathname === "/test" || router.pathname === "/about" ? "fixed bottom-0" : "relative"}`}>
			<p className='text-[11px] font-itc tracking-wide font-light mb-2 text-custom-gray-blue'>
				Mary Kelly © <span className='tracking-wide font-stolzl font-[300]'>2022</span>
			</p>
			<div className='w-full h-6 bg-custom-navy' />
		</footer>
	);
}
