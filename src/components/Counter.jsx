import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(() => count + 1);
  }

  // handle decrement that cant be below 0
  function handleDecrement() {
    count > 0 && setCount(() => count - 1);
  }

  return (
    <>
      <div className="border-gray-300 border-2 p-5 rounded-xl shadow-xl w-50">
        <h1 className="flex mb-4 text-xl font-bold justify-center">Counter</h1>
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-4xl font-bold">{count}</h1>
          <div className="flex gap-2">
            <button
              className="bg-red-300 w-12 text-xl font-bold text-gray-800 hover:bg-red-400 cursor-pointer rounded-xl"
              onClick={handleDecrement}
            >
              -
            </button>
            <button
              className="bg-green-300 w-12 text-xl font-bold hover:bg-green-400 cursor-pointer rounded-xl"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
