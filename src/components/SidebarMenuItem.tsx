'use client';
import { usePathname } from 'next/navigation';

// ? Types
import { ISidebarMenuItem } from '@/interfaces';

export const SidebarMenuItem = ({ icon, path, title }: ISidebarMenuItem) => {
  const pathname = usePathname();

  return (
    <a
      href={path}
      className={`rounded w-full px-2 inline-flex space-x-2 items-center py-3 hover:bg-white/5 transition ease-linear duration-150 ${
        pathname === path ? 'bg-blue-900' : ''
      }`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg text-slate-300 font-bold leading-5">
          {title}
        </span>
      </div>
    </a>
  );
};
