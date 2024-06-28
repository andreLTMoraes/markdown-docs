import fs from "fs";

class TreeNode {
    public path : string;
    public children: Array<TreeNode>;
    public isFolder: boolean;
    public title: string;
    public level: number;

    constructor(path: string, isFolder: boolean, level?: number, title?: string) {
        this.path = path;
        this.children = [];
        this.isFolder = isFolder;
        this.title = title || "";
        this.level = level || 0;
    }
}

type Props = {
    rootPath: string
}

const buildTree = (rootPath: string, level?: number) => {
    const root = new TreeNode(rootPath, true, level);

    const stack = [root];

    while (stack.length) {
        const currentNode = stack.pop();

        if(currentNode) {
            const children = fs.readdirSync(currentNode.path);

            for (let child of children) {
                const childPath = `${currentNode.path}/${child}`;
                const childNode =  new TreeNode(
                    childPath,
                    false,
                    root.level + 1,
                    `${child}`
                );
                currentNode.children.push(childNode);

                if(fs.statSync(childNode.path).isDirectory()) {
                    childNode.isFolder = true;
                    stack.push(childNode);
                }
            }
        }
    }

    console.log(root.children);
    return root.children;
}

const BuildMenu = (props: Props, level?: number) => {
    return (
        <>{
        buildTree(props.rootPath, level).map((child) => {
            return (
            <div key={child.title}>
                {child.isFolder && 
                <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">{child.title}</h5>
                }
                {!child.isFolder && 
                <ul><li><a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="#">{child.title}</a></li></ul>
                }
                {
                    child.isFolder && BuildMenu({rootPath:child.path}, child.level)
                }
            </div>
            );
        })
        }</>
        )
    ;
}

export default BuildMenu;