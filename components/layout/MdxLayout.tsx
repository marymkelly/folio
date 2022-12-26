import React from "react";

interface MdxProps {
	children: JSX.Element;
	meta?: {
		title: string;
		author?: string;
		date?: string;
		comment?: string;
		css?: string;
	};
}

export default function MdxLayout<T extends MdxProps>({ children }: T) {
	return (
		<div className='w-full h-full relative flex flex-col items-center py-20'>
			<main className='w-10/12 prose xl:prose-xl'>{children}</main>
		</div>
	);
}
