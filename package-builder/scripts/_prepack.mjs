import node_fs from "node:fs"
import node_path from "node:path"

const
	workspacePath =
		node_path.join(import.meta.dirname, "..", ".."),

	packagePath =
		node_path.join(workspacePath, "package")

export function prepack() {

	node_fs.cpSync(
		node_path.join(workspacePath, "LICENSE"),
		node_path.join(packagePath, "LICENSE"),
	)

}
