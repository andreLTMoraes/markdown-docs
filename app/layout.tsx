import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UpBar from "./components/UpBar";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Markdown Docs",
  description: "Documentação em markdown apresentada em jsx.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-300 dark:bg-gray-900">
      <body className={`${inter.className} bg-gray-300 dark:bg-gray-900`}>
        <UpBar/>
        <Navigation/>
        <div className="
          lg:pl-[20rem]
          xl:pl-[35rem]
        ">
          {children}
        </div>
      </body>
    </html>
  );
}
