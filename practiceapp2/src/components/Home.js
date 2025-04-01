import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // Hook should be called here

  const navigateClick = () => {
    navigate("/about"); // Correct usage of navigate function
  }

  return (
    <div>
      <h1>Welcome to Our Startup</h1>
      <button onClick={navigateClick}>Move to About</button>
    </div>
  );
}

export default Home;
