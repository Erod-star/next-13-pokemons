import { Metadata } from 'next';
import { CartCounter } from '@/shopping-cart';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'A simple cart counter',
};

export default function CounterPage() {
  return (
    <div className=" flex flex-col items-center justify-center h-full">
      <span>Porductos en el carrito</span>

      <CartCounter value={20} />
    </div>
  );
}
