interface FooterProps {
	isFixed: boolean;
	color: string;
}

export default function Footer<T extends FooterProps>(props: T) {
	return (
		<footer
			className={`flex w-full flex-col items-center justify-center pt-2 text-custom-gray-blue ${
				props.isFixed ? "fixed bottom-0" : "relative"
			} ${props.color}`}>
			<p className='mb-2 font-itc text-[11px] font-light tracking-wide'>
				Design & Code by Mary Kelly ©{" "}
				<span className='font-stolzl font-[300] tracking-wide'>2023</span>
			</p>
			<div className='h-6 w-full bg-custom-navy' />
		</footer>
	);
}
