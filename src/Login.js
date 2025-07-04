import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";

function Login() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in user:", user.displayName);
      alert("Welcome, " + user.displayName);
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>🔐 Login to Job Referral Tool</h2>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Login;
