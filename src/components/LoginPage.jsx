import React, { useState } from "react";

// --color-pinkish: #ef9273;
// --color-whiteish: #fef9f8;
// --color-blackish: #0d0d0d;


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fef9f8] shadow-sm">
      <div className="w-96 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          Dont have an account? <a href="/Register" className="underline cursor:pointers hover:text-[#ef9273] transform duration-300 ease-in-out hover:scale-105 hover:border-b-[#ef9273] "> Sign Up</a>
        </div>
      </div>
    </div>
  );
}