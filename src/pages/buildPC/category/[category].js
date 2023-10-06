import BuildPcCard from '@/components/pcBuilder-component/BuildPcCard';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';

const Category = ({ products }) => {
  const { query } = useRouter();

  return (
    <div className="lg:px-28 px-6 my-12">
      <div>
        <h3 className="text-3xl text-center "> Choose Your Dream </h3>
        <h1 className="lg:text-6xl text-3xl kd text-center uppercase mb-8">
          {query.category === 'others'
            ? query?.category + ' Accessories'
            : query?.category}
        </h1>
      </div>
      <div className="grid lg:grid-cols-4  gap-5">
        {products.map((product, index) => (
          <BuildPcCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const res = await fetch(
    `https://pc-builder-server-0x6d.onrender.com/products/${query.category}`
  );
  const { data: products } = await res.json();

  return { props: { products } };
}

export default Category;
