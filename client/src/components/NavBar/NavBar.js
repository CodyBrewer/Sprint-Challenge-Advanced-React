import React from "react";
import { useDarkMode } from "../../hooks/useDarkMode";

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Women's Soccer Players Searches from the World Cup</h1>
      <div className="dark-mode__toggle">
        <div
          data-testid="dark-mode-toggle"
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default NavBar;
