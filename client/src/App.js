import React, { useState, useEffect } from "react";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./assets/style.sass";
import NavBar from "./components/NavBar";
function App() {
  const { isAuthenticated, user } = useAuth0();
  const [phones, setPhones] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState(""); // New state for address

  useEffect(() => {
    if (isAuthenticated) {
      axios
        .get("http://localhost:3001/phones")
        .then((response) => setPhones(response.data))
        .catch((err) => console.log(err));
    }
  }, [isAuthenticated]);

  const collectData = async (e, phoneTitle) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/orders", {
        quantity,
        product: phoneTitle,
        address, // Include the address in the request
      });

      console.log("Order inserted successfully:", result.data);

      // Assuming you want to update the displayed orders after inserting
      axios
        .get("http://localhost:3001/phones")
        .then((response) => setPhones(response.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Failed to insert order:", error);
    }
  };

  if (isAuthenticated) {
    return (
      <>
        <NavBar />
        <div className="PhoneContainer" data-bs-theme="dark">
          <form>
            {phones.map((phone) => (
              <div key={phone._id} className="phoneCard">
                <h1>{phone.title}</h1>
                <h3>{phone.desc}</h3>
                <h3>{phone.price}</h3>

                <input
                  type="text"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <br />
                <br />
                <button
                  type="button"
                  onClick={(e) => collectData(e, phone.title)}
                >
                  Order {phone.title}
                </button>
              </div>
            ))}
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="centered">
          <LoginButton />
          <div></div>
        </div>
      </>
    );
  }
}

export default App;
