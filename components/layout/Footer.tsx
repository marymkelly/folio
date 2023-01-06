interface FooterProps {
	isFixed: boolean;
	color: string;
}

export default function Footer<T extends FooterProps>(props: T) {
	return (
		<footer className={`w-full flex flex-col justify-center pt-2 items-center text-custom-gray-blue ${props.isFixed ? "fixed bottom-0" : "relative"} ${props.color}`}>
			<p className='text-[11px] font-itc tracking-wide font-light mb-2'>
				Mary Kelly © <span className='tracking-wide font-stolzl font-[300]'>2023</span>
			</p>
			<div className='w-full h-6 bg-custom-navy'/>
		</footer>
	);
}
