import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrementClick() {
    setCount(count + 1);
  }
  function handleDecrementClick() {
    setCount(count - 1);
  }

  return (
    <div className="w-full flex flex-col items-center">
      <p className="mb-8 text-2xl text-bold text-blue-900">{count}</p>
      <div className="flex gap-2">
        <button
          onClick={handleIncrementClick}
          className="font-bold rounded-full bg-green-800 text-2xl text-center p-3 w-16 h-16 text-white"
        >
          +
        </button>
        <button
          onClick={handleDecrementClick}
          className="font-bold rounded-full bg-red-800 text-2xl text-center p-3 w-16 h-16 text-white"
        >
          -
        </button>
      </div>
    </div>
  );
}
