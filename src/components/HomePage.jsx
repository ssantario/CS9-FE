// Simplified Home Page Component

import React from "react";
import Navbar from "./Navbar";

// --color-pinkish: #ef9273;
// --color-whiteish: #fef9f8;
// --color-blackish: #0d0d0d;


export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fef9f8]">
      <Navbar></Navbar>
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Homepage</h1>
        <p className="text-lg text-gray-600 mt-2">
          This is a simple homepage created with React.
        </p>
      </header>
      <main className="mt-10">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Get Started
        </button>
      </main>
    </div>
  );
}