import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">Naaya</h2>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Movies">All Movies</Link></li>
          <li><Link to="/Subscription">Contact</Link></li>
        </ul>
        <Link to="/login" className="btn-login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
