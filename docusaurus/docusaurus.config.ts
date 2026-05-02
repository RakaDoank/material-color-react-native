import type * as Preset from "@docusaurus/preset-classic"

import type {
	Config,
} from "@docusaurus/types"

import {
	themes as prismThemes,
} from "prism-react-renderer"

const title = "Material Color React Native"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title,
	tagline: "Bring Material color utilities to React Native app",
	favicon: "img/favicon.ico",

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	markdown: {
		emoji: true,
	},

	// Set the production url of your site here
	url: "https://oss.sufeni.id",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/material-color-react-native/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "RakaDoank", // Usually your GitHub org/user name.
	projectName: "material-color-react-native", // Usually your repo name.

	onBrokenLinks: "throw",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl: "https://github.com/RakaDoank/material-color-react-native/tree/main/docusaurus/",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					editUrl: "https://github.com/RakaDoank/material-color-react-native/tree/main/docusaurus/",
					// Useful options to enforce blogging best practices
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		colorMode: {
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: title.replace(" React Native", ""),
			logo: {
				alt: title,
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "SIDEBAR_DOCUMENTATION",
					position: "left",
					label: "Documentation",
				},
				{
					type: "docSidebar",
					sidebarId: "SIDEBAR_DEFINITIONS",
					position: "left",
					label: "Definitions",
				},
				// { to: "/blog", label: "Blog", position: "left" },
				{
					href: "https://github.com/RakaDoank/material-color-react-native",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Introduction",
							to: "/docs/introduction",
						},
						{
							label: "Getting Started",
							to: "/docs/getting-started",
						},
						{
							label: "Material Color",
							to: "/docs/material-color",
						},
						{
							label: "Android Dynamic Color",
							to: "/docs/android-dynamic-color",
						},
						{
							label: "Theming with React Native Paper",
							to: "/docs/theming-with-react-native-paper",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Source code at GitHub",
							href: "https://github.com/RakaDoank/material-color-react-native",
						},
						{
							label: "Instagram",
							href: "https://instagram.com/rakadoank_",
						},
					],
				},
				{
					title: "Other Libraries",
					items: [
						{
							label: "carbon-react-native",
							to: "https://github.com/RakaDoank/carbon-react-native",
						},
						{
							label: "ping-react-native",
							to: "https://github.com/RakaDoank/ping-react-native",
						},
						{
							label: "react-native-android-finish",
							href: "https://github.com/RakaDoank/react-native-android-finish",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Material Color React Native`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,

	plugins: [
		[
			"docusaurus-plugin-typedoc",
			{
				entryPoints: [
					"../package/src/index.ts",
					"../package/src/subpaths/react-native-paper/index.ts",
				],
				out: "./docs/definitions",
				tsconfig: "../package/tsconfig.json",
				excludeExternals: true,
				readme: "none",
				groupOrder: [
					"alphabetical",
				],
			},
		],
	],
};

export default config;
