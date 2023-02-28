import React from "react";
import Link from "next/link";
import { articles } from "../../lib/data/projects";
import { Article } from "../../lib/data/projects";

interface MdxProps extends Article {
	children: JSX.Element;
}

export default function MdxLayout<T extends MdxProps>({ children, title }: T) {
	const articleIndex = articles.findIndex((article) => article.title === title);
	const prevArticle =
		articleIndex === 0 ? articles[articles.length - 1] : articles[articleIndex - 1];
	const nextArticle =
		articleIndex + 1 === articles.length ? articles[0] : articles[articleIndex + 1];

	return (
		<div className='relative flex h-fit w-full flex-col items-center pt-20 pb-12'>
			<main className='prose w-10/12 xl:prose-xl'>{children}</main>
			<div
				className={`l flex w-10/12 flex-col self-start px-8 pt-12 xs:w-full xs:flex-row xs:px-0 xs:pl-12 sm:w-[84%] sm:self-auto sm:px-0 sm:pl-0 md:w-[46%] md:min-w-[635px] lg:w-[50%] xl:w-[54%] xl:min-w-[800px] 2xl:w-[46%]`}>
				{articles.length > 2 && (
					<div className={`my-8 flex w-full flex-col xs:w-6/12 xs:pr-5 sm:my-12 xl:pr-8`}>
						<p className='mb-1 font-semibold tracking-[0.018em] text-slate-400'>
							Previous Article
						</p>
						<Link
							href={prevArticle.href}
							className='font-stolzl text-xl capitalize text-slate-800 hover:text-custom-orange/90 hover:underline hover:decoration-[1.2px] hover:underline-offset-2'>
							{prevArticle.title}
						</Link>
					</div>
				)}
				<div
					className={`my-8 flex w-full flex-col sm:my-12 ${
						articles.length > 2
							? "xs:w-6/12 xs:pl-5 xl:pl-8"
							: "xs:w-10/12 sm:w-8/12 xl:w-7/12"
					}`}>
					<p className='mb-1 font-semibold tracking-[0.018em] text-slate-400'>
						Next Article
					</p>
					<Link
						href={nextArticle.href}
						className='font-stolzl text-xl capitalize text-slate-800 hover:text-custom-orange/90 hover:underline hover:decoration-[1.2px] hover:underline-offset-2'>
						{nextArticle.title}
					</Link>
				</div>
			</div>
		</div>
	);
}
