import "./App.css";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import Profile from "./components/profile";
import "./assets/style.sass";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/phones")
      .then((phones) => setPhones(phones.data))
      .catch((err) => console.log(err));
  }, []);
  if (isAuthenticated) {
    return (
      <div>
        {phones.map((phone) => {
          return <h1>{phone.title}</h1>;
        })}
      </div>
    );
  } else if (!isAuthenticated) {
    return (
      <div className="centered">
        <LoginButton />
      </div>
    );
  }
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
