'use client';

import { IoCartOutline } from 'react-icons/io5';
import { SimpleWidget } from './SimpleWidget';
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        label="Counter"
        title={count.toString()}
        subTitle="Products in the cart"
        href="/dashboard/counter"
        icon={<IoCartOutline size={50} className="text-blue-500" />}
      />
    </div>
  );
};
