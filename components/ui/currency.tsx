'use client';

import { useEffect, useState } from 'react';

interface CurrencyProps {
  value?: string | number;
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
});

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // prevent a hydration error
  if (!isMounted) {
    return null;
  }

  return <div className='font-semibold'>{formatter.format(Number(value))}</div>;
};
export default Currency;
