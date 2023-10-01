import BuildPcCard from '@/components/pcBuilder-component/BuildPcCard';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';

const Category = () => {
  const { query } = useRouter();

  return (
    <div className="px-28 my-12">
      <div>
        <h3 className="text-3xl text-center "> Choose Your Dream </h3>
        <h1 className="text-6xl text-center uppercase mb-8">
          {query.category}
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {[1, 1, 0, 1, 1, 11, 1, 1].map((i, index) => (
          <BuildPcCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Category;
