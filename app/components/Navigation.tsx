import BuildMenu from "../utils/FilesTree";

const Navigation = () => {
    return (
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto">
          <nav className="lg:text-sm lg:leading-6 relative">
            <ul>
              <BuildMenu rootPath="docs"/>
            </ul>
          </nav>
        </div>
      </div>
    );
}

export default Navigation;