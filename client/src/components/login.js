import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../assets/style.sass";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="login-button" onClick={() => loginWithRedirect()}>
      Continue
    </button>
  );
};

export default LoginButton;
