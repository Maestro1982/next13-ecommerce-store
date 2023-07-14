import qs from 'query-string';

import { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
    },
  });

  /*  const cacheBuster = new Date().getTime(); // Unique value for cache-busting
  const urlWithCacheBuster = `${url}?_=${cacheBuster}`; // Append cache-buster to the URL

  const res = await fetch(urlWithCacheBuster, {
    headers: {
      'Cache-Control': 'no-store',
    },
  }); */

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
