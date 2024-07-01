import fs from "fs"
import path from "path"
import { MDXRemote } from "next-mdx-remote/rsc"

const docsDir = path.join(process.cwd(), "docs")

export default function getDoc(slug: string) {
    const fileName = slug + ".mdx"
    const filePath = path.join(docsDir, fileName)
    const fileContent = fs.readFileSync(filePath, "utf8")
    return (
        <MDXRemote source={fileContent} />
    )
}