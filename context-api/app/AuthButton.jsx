"use client";

import React from "react";
import { useAuth } from "./context";

function AuthButton() {
  const { user, login, logoff } = useAuth();

  const handleAuth = () => {
    if (user) {
      logoff();
    } else {
      login();
    }
  };

  return (
    <button
      onClick={handleAuth}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    >
      {user ? "Log Out" : "Log In"}
    </button>
  );
}

export default AuthButton;
