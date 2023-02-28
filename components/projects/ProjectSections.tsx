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
		<div className='flex w-full flex-col'>
			<div
				className={
					props.classes
						? `${props.classes}`
						: `flex h-[75vh] w-full items-center justify-center md:min-h-[400px] lg:my-12 lg:h-[800px] lg:py-10`
				}>
				<div className='flex h-full w-full flex-col md:px-16 lg:px-0'>
					<div className='relative h-[100%] w-[100%]'>
						<Image
							src={props.path}
							className={
								props?.imgClasses
									? `${"object-contain-cover md:object-contain"}`
									: "object-contain"
							}
							fill
							alt='Image preview'
							priority
						/>
					</div>
					<div>
						{props.caption && (
							<p className='-mt-20 font-gothic text-xs'>{props.caption}</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export const InfoPoint = (props: { textClasses: string; title: string; text: string }) => {
	return (
		<div className='flex w-full flex-col items-center px-16 lg:px-0'>
			<div className='flex w-full max-w-[1100px] flex-col items-start'>
				<h5 className={`mt-10 mb-5 font-stolzl ${props.textClasses}`}>{props.title}</h5>
				<p className='font-gothic text-lg font-light leading-8 tracking-[0.02em]'>
					{props.text}
				</p>
			</div>
		</div>
	);
};

export const FeaturePoint = (props: { title: string; text: string }) => {
	return (
		<div className='flex w-full flex-col items-center px-16 lg:px-0'>
			<div className='flex w-full max-w-[1100px] flex-col items-start'>
				<h5 className='mb-5 mt-12 font-stolzl text-xl text-custom-black'>{props.title}</h5>
				<p className='font-gothic text-lg font-light leading-8 tracking-[0.02em]'>
					{props.text}
				</p>
			</div>
		</div>
	);
};
