import Image from 'next/image';
import { IoCalculator, IoFootball, IoLogoReact } from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';

// ? Types
import { ISidebarMenuItem } from '@/interfaces';

export const Sidebar = () => {
  const menuItems: ISidebarMenuItem[] = [
    {
      icon: <IoLogoReact size={40} />,
      path: '/dashboard/main',
      title: 'Visualizacion',
    },
    {
      icon: <IoCalculator size={40} />,
      path: '/dashboard/counter',
      title: 'Counter client side',
    },
    {
      icon: <IoFootball size={40} />,
      path: '/dashboard/pokemons',
      title: 'Pokemons',
    },
  ];

  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 left-0 w-[400px]"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center  gap-1 text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>

        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Edson Van Halen
          </span>
        </a>
      </div>

      <div id="nav" className="flex flex-col gap-3 w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.path}
            icon={item.icon}
            path={item.path}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};
