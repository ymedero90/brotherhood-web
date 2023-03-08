import React from "react";
import "../../styles/globals.css";

function App() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-black via-black to-red-900 h-screen">
      <div className="flex flex-row justify-end items-center gap-2 py-4 absolute h-max w-full">
        <h4 className="text-red-700">Test 1</h4>
        <h4 className="text-red-700">Test 2</h4>
        <h4 className="text-red-700">Test 3</h4>
      </div>
      <div className="flex h-full py-2">
        <div className="flex flex-row  h-max items-center">
          <img
            src="/images/logo-no-back.png"
            alt="test"
            className="w-[450px] h-[400px]"
            object-fit="cover"
          />
          <h1 className="text-red-700 shadow-md text-5xl font-bold font-rock_salt">
            BROTHERHOOD DARK
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
