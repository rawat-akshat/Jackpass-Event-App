import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {

    const [count, setCount] = useLocalStorage("count", 0);

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Home Page</h1>
        <p className="text-xl mb-4">Stored Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Increase Count
      </button>
      </div>
    );
  }
  