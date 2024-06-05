import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";

const Login = () => {
  async function handleLogin(ev) {
    ev.preventDefault();
    // const username = ev.target.username.value;
    // const password = ev.target.password.value;
    // console.log(username, password);

    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
