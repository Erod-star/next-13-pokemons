// ? Components
import { WidgetsGrid } from '@/components/dashboard';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'The dashboard for the admin panel',
};

export default function MainPage() {
  return (
    <div className="p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">General information</span>

      <WidgetsGrid />
    </div>
  );
}
