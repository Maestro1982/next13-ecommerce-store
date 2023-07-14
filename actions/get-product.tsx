import { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const cacheBuster = new Date().getTime(); // Unique value for cache-busting
  const urlWithCacheBuster = `${URL}/${id}?_=${cacheBuster}`; // Append cache-buster to the URL

  const res = await fetch(urlWithCacheBuster, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });

  return res.json();
};

export default getProduct;
