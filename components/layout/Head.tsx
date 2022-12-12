import Head from "next/head";

export default function PageHead() {
	return (
		<Head>
			<title>Mary Kelly&apos;s Porfolio Site</title>
			<meta name='description' content='Mary Kelly Porfolio' />
			<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
			<link rel='icon' media='(prefers-color-scheme: light)' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
			<link rel='icon' media='(prefers-color-scheme: light)' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
			<link rel='icon' media='(prefers-color-scheme: dark)' type='image/png' sizes='32x32' href='/favicon/favicon_dark/favicon-32x32.png' />
			<link rel='icon' media='(prefers-color-scheme: dark)' type='image/png' sizes='16x16' href='/favicon/favicon_dark/favicon-16x16.png' />
			<link rel='manifest' href='/favicon/site.webmanifest' />
		</Head>
	);
}
