import React from "react";
import "../assets/style.sass";
import LogoutButton from "../components/logout";
import { useAuth0 } from "@auth0/auth0-react";
const NavBar = () => {
  const { user } = useAuth0();

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          GRAPE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <img className="pfp" src={user.picture} alt={user.name} />
            </li>
            <p className="">{user.name}</p>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <LogoutButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
