import type {
	SidebarsConfig,
} from "@docusaurus/plugin-content-docs"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	SIDEBAR_DOCUMENTATION: [
		"INTRODUCTION",
		"GETTING_STARTED",
		{
			type: "category",
			label: "Guides",
			collapsed: false,
			link: {
				type: "generated-index",
				title: "Guides",
				description: "Learn how to build and get Material color",
			},
			items: [
				"guides/MATERIAL_COLOR",
				"guides/ANDROID_DYNAMIC_COLOR",
				"guides/THEMING_WITH_REACT_NATIVE_PAPER",
			],
		},
	],

	SIDEBAR_DEFINITIONS: [
		{
			type: "doc",
			label: "Overview",
			id: "definitions/index",
		},
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		require("./docs/definitions/typedoc-sidebar.cjs")[0].items,
		{
			type: "category",
			label: "Subpaths",
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
			items: require("./docs/definitions/typedoc-sidebar.cjs")[1].items,
		},
	],

	// But you can create a sidebar manually
	/*
	tutorialSidebar: [
		'intro',
		'hello',
		{
		type: 'category',
		label: 'Tutorial',
		items: ['tutorial-basics/create-a-document'],
		},
	],
	*/
};

export default sidebars;
