import CategoryProductCard from '@/components/category-component/CategoryProductCard';
import BuildPcCard from '@/components/pcBuilder-component/BuildPcCard';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';

const Category = ({ products }) => {
  const { query } = useRouter();

  return (
    <div className="lg:px-28 px-6 my-12">
      <div>
        {/* <h3 className="text-4xl text-center "> Choose Your Dream </h3> */}
        <h1 className="lg:text-6xl text-2xl text-center uppercase mb-8">
          {query.category === 'others'
            ? query?.category + ' Accessories'
            : query?.category}
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <CategoryProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  const res = await fetch(
    'https://pc-builder-server-0x6d.onrender.com/products'
  );
  const { data: products } = await res.json();
  const paths = products?.map((product) => ({
    params: { category: product.category },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://pc-builder-server-0x6d.onrender.com/products/${params.category}`
  );
  const products = await res.json();

  return {
    props: {
      products: products?.data,
    },
  };
}
