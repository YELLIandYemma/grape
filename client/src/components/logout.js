import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../assets/style.sass";
import "../assets/main.css";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
