import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/dashboard">Dashboard</Link> | 
      <Link to="/profile/john">Profile</Link> | 
      <button onClick={toggleTheme}>Switch to {theme === "light" ? "Dark" : "Light"} Mode</button>
    </nav>
  );
};

export default Navbar;
