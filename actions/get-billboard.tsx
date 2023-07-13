import { Billboard } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const cacheBuster = new Date().getTime(); // Unique value for cache-busting
  const urlWithCacheBuster = `${URL}/${id}?_=${cacheBuster}`; // Append cache-buster to the URL

  const res = await fetch(urlWithCacheBuster, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });

  return res.json();
};

export default getBillboard;
