'use client';

import { useState } from 'react';

interface CartCounterProps {
  value?: number;
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const [counter, setCounter] = useState<number>(value);

  return (
    <>
      <p className="text-8xl"> {counter} </p>

      <div className="flex flex-row-reverse gap-3 mt-10">
        <button
          className="flex items-center justify-center p-2 rounded-md  border ronded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2 px-10"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-md  border ronded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2 px-10"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -1
        </button>
      </div>
    </>
  );
};
