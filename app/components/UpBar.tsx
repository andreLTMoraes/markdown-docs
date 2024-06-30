import Image from "next/image";

const UpBar = () => {
    return (
        <div className="border-b border-gray-800">
          <div className="max-w-8xl mx-auto bg-gray-300 dark:bg-gray-900 h-14 px-4 sm:px-6 md:px-8">
            <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
              <Image
                  src="/logo.png"
                  alt="MD Docs"
                  className=""
                  width={100}
                  height={24}
                  priority
              />
            </div>
          </div>
        </div>
    );
}

export default UpBar;