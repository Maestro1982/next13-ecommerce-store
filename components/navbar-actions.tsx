'use client';

import { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';

import Button from '@/components/ui/button';

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // to prevent a hydration error
  if (!isMounted) {
    return null;
  }

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Button className='flex items-center rounded-full bg-[#2292A4] px-4 py-2'>
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-sm font-semibold text-white'>0</span>
      </Button>
    </div>
  );
};
export default NavbarActions;
