"use strict";

// next.config.js
var nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "https://storage.googleapis.com/portsite-b008f.appspot.com/public/Mary_Kelly_Resume-2022.pdf"
      }
    ];
  }
};
var withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react"
  }
});
module.exports = withMDX(nextConfig);
