import React from "react";
import Image from "next/image";

export default function WbsImageGroup() {
	return (
		<div className='w-full self-center items-center flex flex-col justify-center justify-items-center lg:flex-row h-auto'>
			<Image src='/images/words/wbs/wbs-example-gantpro.png' alt='Example using flow chart' className='h-auto lg:mr-20 w-[800px] lg:w-[500px]' width={500} height={500} />
			<Image src='/images/words/wbs/wbs-excel.png' alt='Example using spreadsheet' className='h-full' width={650} height={550} />
		</div>
	);
}
