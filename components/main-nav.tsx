'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Category } from '@/types';

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'font-semibold text-base transition-colors hover:text-[#D96C06]',
            route.active ? 'text-[#D96C06]' : 'text-[#F5EFED]'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
