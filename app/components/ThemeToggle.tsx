'use client';
import { useTheme } from "next-themes"
import { useState } from "react";

export default function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [isToggled, setToggle] = useState(theme == "dark");
    const changeTheme = () => {
        setTheme(isToggled ? "light" : "dark");
        setToggle(!isToggled);
    }

    return(
        <button
            className={`theme-toggle flex ${!isToggled && "theme-toggle--toggled"}`}
            type="button"
            title="Toggle theme"
            aria-label="Toggle theme"
            onClick={changeTheme}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width="1.5em"
                height="1.5em"
                fill="currentColor"
                className="theme-toggle__inner-moon self-center text-gray-500"
                viewBox="0 0 32 32"
            >
                <path d="M27.5 11.5v-7h-7L16 0l-4.5 4.5h-7v7L0 16l4.5 4.5v7h7L16 32l4.5-4.5h7v-7L32 16l-4.5-4.5zM16 25.4a9.39 9.39 0 1 1 0-18.8 9.39 9.39 0 1 1 0 18.8z" />
                <circle cx="16" cy="16" r="8.1" />
            </svg>
            </button>
    )
}