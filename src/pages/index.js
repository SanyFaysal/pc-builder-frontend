import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import { Button, Radio, Space, Divider } from 'antd';
import Banner from '@/components/home-component/Banner';

import CategoryCard from '@/components/category-component/CategoryCard';
import FeaturedProducts from '@/components/home-component/FeaturedProducts';
import FeaturedCategories from '@/components/home-component/FeaturedCategories';

export default function Home({ products }) {
  function getRandomProducts(products, count) {
    const shuffledProducts = products?.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
  }
  const randomProducts = getRandomProducts(products, 6);

  return (
    <main>
      <Banner />
      <FeaturedProducts randomProducts={randomProducts} />
      <FeaturedCategories />
    </main>
  );
}
export async function getStaticProps() {
  const res = await fetch('http://localhost:5000/products');
  const { data: products } = await res.json();
  return {
    props: {
      products,
    },
  };
}
