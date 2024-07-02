import BuildMenu from "../utils/FilesTree";

const Navigation = () => {
    return (
      <div className="w-[19rem] pb-10 pl-8 pr-6">
        <nav className="lg:text-sm lg:leading-6 relative">
          <ul>
            <BuildMenu rootPath="docs"/>
          </ul>
        </nav>
      </div>
    );
}

export default Navigation;