import { useEffect, useState } from "react"
import { IconMoon } from "./IconMoon"
import { IconSun } from "./IconSun"

const LOCAL_STORAGE_KEYS = {
  THEME: "theme"
}

const DARK_THEME_CLASS = "dark"
const THEMES = {
  light: "light",
  dark: "dark"
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(THEMES.light)

  useEffect(() => {
    const theme = localStorage.getItem(LOCAL_STORAGE_KEYS.THEME)

    if (theme === THEMES.dark) {
      document.documentElement.classList.add(DARK_THEME_CLASS)
      setTheme(THEMES.dark)
    } else {
      document.documentElement.classList.remove(DARK_THEME_CLASS)
      setTheme(THEMES.light)
    }
  }, [])

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        onChange={event => {
          if (event.target.checked) {
            document.documentElement.classList.add(DARK_THEME_CLASS)
            localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, "dark")
            setTheme(THEMES.dark)
          } else {
            document.documentElement.classList.remove(DARK_THEME_CLASS)
            localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, "light")
            setTheme(THEMES.light)
          }
        }}
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={theme === THEMES.dark}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:[&>span]:translate-x-full peer-checked:[&>span]:border-white dark:border-gray-600">
        <span className="rounded-full h-5 w-5 transition-all content-[''] absolute top-[2px] left-[2px] flex items-center">
          {theme === THEMES.dark ? <IconMoon /> : <IconSun />}
        </span>
      </div>
    </label>
  )
}
