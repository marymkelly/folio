/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	async rewrites() {
		return [
			{
				source: "/resume",
				destination: process.env.RESUME_URL,
			},
		];
	},
};

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		providerImportSource: "@mdx-js/react",
	},
});

module.exports = withMDX(nextConfig);
