import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';

const Category = () => {
  const { query } = useRouter();

  return <div>THis is {query.category} Category Page :</div>;
};

export default Category;
