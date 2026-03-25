/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type {
	ReactNode,
} from "react";

import Heading from "@theme/Heading";
import clsx from "clsx";

import styles from "./_styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: ReactNode;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Easy to Use",
		Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
		description: (
			<>
				Material Color React Native was designed from the ground up to be easily used and got the color system from the Material Design foundation.
			</>
		),
	},
	{
		title: "Focus on What Matters",
		Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
		description: (
			<>
				No random guides or additional installation step ahead. Get the Material color straight from a source color and a source image.
			</>
		),
	},
	{
		title: "Powered by React Native",
		Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>
				Using the Turbo Native Module in the new architecture of React Native.
			</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={ clsx("col col--4") }>
			<div className="text--center">
				<Svg className={ styles.featureSvg } role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export function HomepageFeatures(): ReactNode {
	return (
		<section className={ styles.features }>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={ idx } { ...props } />
					))}
				</div>
			</div>
		</section>
	);
}
