import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import { Button, Radio, Space, Divider } from 'antd';
import Banner from '@/components/home-component/Banner';
import FeaturedProducts from '@/components/home-component/FeaturedProducts';

export default function Home() {
  return (
    <main>
      <Banner />
      <FeaturedProducts />
    </main>
  );
}
