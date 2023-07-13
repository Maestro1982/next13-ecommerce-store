import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const cacheBuster = new Date().getTime(); // Unique value for cache-busting
  const urlWithCacheBuster = `${URL}?_=${cacheBuster}`; // Append cache-buster to the URL

  const res = await fetch(urlWithCacheBuster, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });

  return res.json();
};

export default getCategories;
