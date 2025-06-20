import { useDarkMode } from './ThemeContext'

const DarkModeToggler = () => {

  const {isDark, setIsDark} = useDarkMode()

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <div
        className="bg-gray-200/80 dark:bg-slate-700/70 p-1.5 rounded-full cursor-pointer"
        onClick={toggleTheme}
        title="Toggle Theme"
      >
        <span className="flex items-center justify-center dark:text-white text-gray-700">
          {isDark ? (
            <i className="fa-solid fa-sun p-1 rounded-full w-6 h-6 transition-all hover:text-yellow-400/80 duration-200" />
          ) : (
            <i className="fa-solid fa-moon p-1 rounded-full w-6 h-6 transition-all hover:text-purple-800/80 duration-200" />
          )}
        </span>
      </div>
    </>
  )
}

export default DarkModeToggler