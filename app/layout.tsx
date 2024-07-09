import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import UpBar from "./components/UpBar";
import Navigation from "./components/Navigation";
import ThemeProvider from "./providers/Theme";
import NavigationProvider from "./providers/Navigation";

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
      <html lang="en" className="dark:bg-gray-900">
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/theme-toggles@4.10.1/css/inner-moon.min.css"></link>
        </head>
        <body className={`${inter.className} bg-gray-300 dark:bg-gray-900`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
          >
            <NavigationProvider>
              <UpBar/>
              <div className="flex px-4 sm:px-6 md:px-8 2xl:px-56 bg-green-light dark:bg-green-dark">
                <Navigation/>
                {children}
              </div>
            </NavigationProvider>
          </ThemeProvider>
        </body>
      </html>
  );
}
