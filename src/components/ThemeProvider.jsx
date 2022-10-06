import React from "react";

export const ThemeContext = React.createContext();
export const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeContext);
export const useThemeToggle = () => React.useContext(ThemeToggleContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") {
        document.documentElement.classList.add("dark");
        return "dark";
      } else {
        document.documentElement.classList.remove("dark");
        return "light";
      }
    });
  };
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeToggleContext.Provider value={toggleTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
