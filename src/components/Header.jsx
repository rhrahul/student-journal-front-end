import Icon from "./Icon";
import { Link } from "react-router-dom";
import { useTheme, useThemeToggle } from "./ThemeProvider.jsx";

import useWindowDimensions from "../hooks/windowResize";

import { motion } from "framer-motion";

const Header = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeToggle();
  const { height, width } = useWindowDimensions();

  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 py-4 sticky top-0">
      <div className="container flex items-center justify-between">
        <h1 className="text-3xl font-bold text-center">
          <Link to="/">{width >= 540 ? "studentJournal" : "sJ"}</Link>
        </h1>
        <nav className="flex items-center justify-center font-bold">
          <Link to="/entry" className="mr-5">
            Entries
          </Link>
          <Link
            className="p-3 px-5 mr-5 text-xs dark:text-slate-900 text-slate-50 shadow-sm bg-gradient-to-b from-green-500 to-green-600 dark:from-green-500 dark:to-green-600 rounded-md"
            to="/entry/create"
          >
            New Entry
          </Link>
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="px-2.5 py-0.5 dark:bg-slate-800 bg-slate-200 rounded-md flex items-center justify-center"
          >
            <Icon
              name={darkTheme === "dark" ? `br-eclipse-alt` : `br-eclipse`}
              className="text-slate-500 text-2xl mt-[6px]"
            />
          </motion.button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
