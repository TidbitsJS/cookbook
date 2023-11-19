import React from "react";
import AuthButton from "./AuthButton";

async function Server() {
  const response = await fetch(`http://localhost:8000/tweets`);
  const data = await response.json();

  return (
    <div className='container mx-auto max-w-5xl'>
      <div className='flex justify-end mb-10'>
        <AuthButton />
      </div>

      <h1 className='text-3xl font-semibold mb-4 text-black'>
        Hot Takes of Next.js
      </h1>
      <div className='flex flex-col gap-4'>
        {data.map((tweet) => (
          <div key={tweet.id} className='bg-white p-4 rounded shadow'>
            <p className='text-black mb-2'>{tweet.text}</p>
            <div className='flex items-center justify-between mt-5 text-sm'>
              <span className='text-gray-500'>{tweet.author}</span>
              <span className='text-gray-500'>
                {new Date(tweet.timestamp).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Server;
