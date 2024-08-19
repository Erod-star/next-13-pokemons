'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  addOne,
  initCounterState,
  substractOne,
} from '@/store/counter/counterSlice';

interface CartCounterProps {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then((res) => res.json());
  return data as CounterResponse;
};

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(({ count }) => {
      dispatch(initCounterState(count));
    });
  }, [dispatch]);

  // ? Methodo sin llamada a la API
  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  return (
    <>
      <p className="text-8xl"> {count} </p>

      <div className="flex flex-row-reverse gap-3 mt-10">
        <button
          className="flex items-center justify-center p-2 rounded-md  border ronded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2 px-10"
          onClick={() => {
            dispatch(addOne());
          }}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-md  border ronded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2 px-10"
          onClick={() => {
            dispatch(substractOne());
          }}
        >
          -1
        </button>
      </div>
    </>
  );
};
