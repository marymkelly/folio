import React from "react";
import Image from "next/image";

export default function WbsImageGroup() {
	return (
		<div className='flex h-auto w-full flex-col items-center justify-center justify-items-center self-center lg:flex-row'>
			<Image
				placeholder='blur'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Vg8AAlEBZ0IDjCQAAAAASUVORK5CYII='
				src='/images/words/wbs/wbs-example-gantpro.png'
				alt='Example using flow chart'
				className='h-auto w-[800px] lg:mr-20 lg:w-[500px]'
				width={500}
				height={500}
			/>
			<Image
				placeholder='blur'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Vg8AAlEBZ0IDjCQAAAAASUVORK5CYII='
				src='/images/words/wbs/wbs-excel.png'
				alt='Example using spreadsheet'
				className='h-full'
				width={650}
				height={550}
			/>
		</div>
	);
}
