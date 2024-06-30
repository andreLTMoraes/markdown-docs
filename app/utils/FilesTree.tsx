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
    const nodes = buildTree(props.rootPath, level);
    console.log(`Nível ${level} - Tem ${nodes.length} filhos.`);
    return (
        <>{
        nodes.map((child) => {
            return (
                    child.isFolder ?
                    <li className={`${child.level == 1 && "mt-12 lg:mt-8"}`} key={child.title}>
                        {child.children.some((chld) => chld.title == "README.md")?
                            <h5 className={
                                `mb-8
                                lg:mb-3
                                ${child.level == 2 && "pl-2"}
                                font-semibold 
                                text-slate-900
                                dark:text-slate-200
                                `}>
                                <a href="#">{child.title}</a>
                            </h5> :
                            <h5 className={
                                `mb-8
                                lg:mb-3
                                ${child.level == 2 && "pl-2"}
                                font-semibold 
                                text-slate-900 
                                dark:text-slate-200
                                `}>
                                {child.title}</h5>
                        }
                        <ul className={
                            `space-y-6 
                            lg:space-y-2 
                            ${child.level == 1 && "border-l border-slate-100 dark:border-slate-800"}
                            `}>
                            {BuildMenu({rootPath:child.path}, child.level)}
                        </ul>
                    </li>
                    :
                    child.title == "README.md" ? 
                    <></> :
                    <li key={child.title}>
                        <a className={
                            `block 
                            border-l 
                            text- 
                            pl-4 
                            -ml-px 
                            border-transparent 
                            hover:border-slate-400 
                            dark:hover:border-slate-500 
                            text-slate-700 
                            hover:text-slate-900 
                            dark:text-slate-400 
                            dark:hover:text-slate-300`} href="#">
                                {child.title}
                        </a>
                    </li>
            )
        })
        }</>
        )
    ;
}

export default BuildMenu;