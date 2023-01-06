import React from "react";
import Link from "next/link";
import { articles } from "../../lib/data/projects";
import { Article } from "../../lib/data/projects";

interface MdxProps extends Article {
	children: JSX.Element;
	// meta?: {
	// 	title: string;
	// 	author?: string;
	// 	date?: string;
	// 	comment?: string;
	// 	css?: string;
	// };
}

export default function MdxLayout<T extends MdxProps>({ children, title }: T) {
	console.log("CHILDREN", children);
	const articleIndex = articles.findIndex((article) => article.title === title);
	const prevArticle = articleIndex === 0 ? articles[articles.length - 1] : articles[articleIndex - 1];
	const nextArticle = articleIndex + 1 === articles.length ? articles[0] : articles[articleIndex + 1];

	return (
		<div className='w-full h-fit relative flex flex-col items-center pt-20 pb-12'>
			<main className='w-10/12 prose xl:prose-xl'>{children}</main>
			<div
				className={`w-10/12 px-8 pt-12 xs:w-full xs:px-0 xs:pl-12 sm:pl-0 sm:w-[84%] sm:px-0 md:w-[46%] md:min-w-[635px] lg:w-[50%] xl:min-w-[800px] l xl:w-[54%] 2xl:w-[46%] flex flex-col xs:flex-row self-start sm:self-auto`}>
				{articles.length > 2 && (
					<div className={`w-full xs:w-6/12 flex flex-col my-8 sm:my-12 xs:pr-5 xl:pr-8`}>
						<p className='font-semibold tracking-[0.018em] mb-1 text-slate-400'>Previous Article</p>
						<Link
							href={prevArticle.href}
							className='text-xl capitalize text-slate-800 font-stolzl hover:text-custom-orange/90 hover:underline hover:underline-offset-2 hover:decoration-[1.2px]'>
							{prevArticle.title}
						</Link>
					</div>
				)}
				<div className={`w-full flex flex-col my-8 sm:my-12 ${articles.length > 2 ? "xs:w-6/12 xs:pl-5 xl:pl-8" : "xs:w-10/12 sm:w-8/12 xl:w-7/12"}`}>
					<p className='font-semibold tracking-[0.018em] mb-1 text-slate-400'>Next Article</p>
					<Link
						href={nextArticle.href}
						className='text-xl capitalize text-slate-800 font-stolzl hover:text-custom-orange/90 hover:underline hover:underline-offset-2 hover:decoration-[1.2px]'>
						{nextArticle.title}
					</Link>
				</div>
			</div>
		</div>
	);
}
