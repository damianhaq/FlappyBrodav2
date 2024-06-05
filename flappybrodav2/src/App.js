import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase.js";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user.email);
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("user is signed out");
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="App">
      asd
      {!user ? (
        <Login />
      ) : (
        <button onClick={() => auth.signOut()}>Logout</button>
      )}
    </div>
  );
}

export default App;
