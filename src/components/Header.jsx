import React from 'react'
import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "2px solid #dda0dd",
    padding: "8px",
    width: "90%",
    margin: "auto",
    backgroundColor: '#e6e6fa',
    
  };

  return (
    <header>
      <h1>Portfolio</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/projects">
          <div>Projects</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
