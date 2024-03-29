/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	async rewrites() {
		return {
			fallback: [
				{
					source: "/resume",
					destination:
						"https://storage.googleapis.com/portsite-b008f.appspot.com/public/Mary_Kelly-Resume_2024.pdf",
				},
			],
		};
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
