import React from "react";
import Image from "next/image";

export interface ImageSectionProps {
	path: string;
	classes?: string;
	imgClasses?: string;
	caption?: string;
}

export function ImageSection(props: ImageSectionProps) {
	return (
		<div className='flex flex-col w-full'>
			<div
				className={
					props.classes
						? `${props.classes}`
						: `h-[75vh] md:min-h-[400px] lg:h-[800px] w-full lg:my-12 lg:py-10 flex items-center justify-center`
				}>
				<div className='flex flex-col w-full h-full md:px-16 lg:px-0'>
					<div className='relative w-[100%] h-[100%]'>
						<Image
							src={props.path}
							className={props?.imgClasses ? `${"object-contain-cover md:object-contain"}` : "object-contain"}
							fill
							alt='Image preview'
							priority
						/>
					</div>
					<div>{props.caption && <p className='font-gothic text-xs -mt-20'>{props.caption}</p>}</div>
				</div>
			</div>
		</div>
	);
}

export const InfoPoint = (props: { textClasses: string; title: string; text: string }) => {
	return (
		<div className='flex flex-col w-full items-center px-16 lg:px-0'>
			<div className='max-w-[1100px] flex flex-col items-start w-full'>
				<h5 className={`font-stolzl mt-10 mb-5 ${props.textClasses}`}>{props.title}</h5>
				<p className='font-gothic font-light text-lg tracking-[0.02em] leading-8'>{props.text}</p>
			</div>
		</div>
	);
};

export const FeaturePoint = (props: { title: string; text: string }) => {
	return (
		<div className='flex flex-col w-full items-center px-16 lg:px-0'>
			<div className='max-w-[1100px] flex flex-col items-start w-full'>
				<h5 className='font-stolzl text-xl mb-5 mt-12 text-custom-black'>{props.title}</h5>
				<p className='font-gothic font-light text-lg tracking-[0.02em] leading-8'>{props.text}</p>
			</div>
		</div>
	);
};
