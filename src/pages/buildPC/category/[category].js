import BuildPcCard from '@/components/pcBuilder-component/BuildPcCard';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';

const Category = ({ products }) => {
  const { query } = useRouter();

  return (
    <div className="px-28 my-12">
      <div>
        <h3 className="text-3xl text-center "> Choose Your Dream </h3>
        <h1 className="text-6xl text-center uppercase mb-8">
          {query.category === 'others'
            ? query?.category + ' Accessories'
            : query?.category}
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {products.map((product, index) => (
          <BuildPcCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const res = await fetch(`http://localhost:5000/products/${query.category}`);
  const { data: products } = await res.json();

  return { props: { products } };
}

export default Category;
