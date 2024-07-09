import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const UpBar = () => {
    return (
        <div className="border-b border-gray-400 dark:border-gray-800">
          <div className="flex align-middle justify-between h-14 px-4 sm:px-6 md:px-8 2xl:px-56 bg-green-light dark:bg-green-dark">
                <Image
                    src="/logo.png"
                    alt="MD Docs"
                    className="object-contain"
                    width={100}
                    height={24}
                    priority
                />
                <ThemeToggle/>
          </div>
        </div>
    );
}

export default UpBar;