import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';

import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

// prevents data to being cached
export const revalidation = 0;

const HomePage = async () => {
  const billboard = await getBillboard('db758204-3638-482c-b73f-091cdc6d1e30');
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  );
};
export default HomePage;
