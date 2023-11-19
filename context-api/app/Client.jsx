"use client";

import AuthButton from "./AuthButton";
import { useAuth } from "./context";

function Client({ children }) {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        children
      ) : (
        <div className='bg-white p-8 rounded-md shadow-md max-w-md mx-auto'>
          <h1 className='text-2xl font-bold mb-4 text-black'>Next.js</h1>
          <p className='text-gray-600 mb-4'>Login to see the content</p>
          <AuthButton />
        </div>
      )}
    </div>
  );
}

export default Client;
