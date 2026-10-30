#!/usr/bin/env bun

import * as node_childProcess from "node:child_process"
import * as node_fs from "node:fs"
import * as node_path from "node:path"

import SemverPrerelease from "semver/functions/prerelease.js"

import packageJson from "../package/package.json" with { type: "json" }

const
	rootDir =
		node_path.join(import.meta.dirname, ".."),

	packageDir =
		node_path.join(rootDir, "package")

// build the package
node_childProcess.execSync(
	"bun run package-builder",
	{
		cwd: rootDir,
		stdio: "inherit",
	},
)

// create tarball file
{
	// copy the LICENSE from the root
	node_fs.cpSync(
		node_path.join(rootDir, "LICENSE"),
		node_path.join(packageDir, "LICENSE"),
	)

	node_childProcess.execSync(
		"bun pm pack",
		{
			cwd: node_path.join(rootDir, "package"),
			stdio: "inherit",
		},
	)

	let publishCommand =
		"bunx npm publish"
			+ ` ./${packageJson.name}-${packageJson.version}.tgz`
			+ " --access public --dry-run"

	const prereleaseTag = SemverPrerelease(packageJson.version)
	if(typeof prereleaseTag?.[0] == "string") {
		publishCommand += ` --tag ${prereleaseTag[0]}`
	}

	node_childProcess.execSync(
		publishCommand,
		{
			cwd: packageDir,
			stdio: "inherit",
		},
	)
}
