import {useState, useEffect, createContext, useContext} from 'react'

const ThemeContext = createContext('light');

export const ThemeProvider = ({children}) => {

  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === "dark"
  )

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return(
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useDarkMode = () => useContext(ThemeContext);