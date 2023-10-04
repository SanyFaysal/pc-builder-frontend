import CategoryProductCard from '@/components/category-component/CategoryProductCard';

const OthersComponent = () => {
  return (
    <div className="px-28 my-12">
      <div>
        {/* <h3 className="text-4xl text-center "> Choose Your Dream </h3> */}
        <h1 className="text-5xl text-center uppercase mb-8">
          Others Accessories
        </h1>
      </div>
      <div className="">
        <h1 className="text-3xl text-start capitalized mb-8 border-b  border-b-4 border-b-blue-100 pb-2">
          Graphics Card
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {[1, 1, 0, 1].map((i, index) => (
          <CategoryProductCard key={index} />
        ))}
      </div>
      <div className="mt-16">
        <h1 className="text-3xl text-start capitalized mb-8 border-b  border-b-4  border-b-blue-100 pb-2">
          Speaker
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {[1, 1, 0, 1].map((i, index) => (
          <CategoryProductCard key={index} />
        ))}
      </div>
      <div className="mt-16">
        <h1 className="text-3xl text-start capitalized mb-8 border-b  border-b-4  border-b-blue-100 pb-2">
          Head Phone
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {[1, 1, 0, 1].map((i, index) => (
          <CategoryProductCard key={index} />
        ))}
      </div>
      <div className="mt-16">
        <h1 className="text-3xl text-start capitalized mb-8 border-b  border-b-4  border-b-blue-100 pb-2">
          UPS{' '}
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {[1, 1, 0, 1].map((i, index) => (
          <CategoryProductCard key={index} />
        ))}
      </div>
      <div className="mt-16">
        <h1 className="text-3xl text-start capitalized mb-8 border-b  border-b-4  border-b-blue-100 pb-2">
          Speaker
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {[1, 1, 0, 1].map((i, index) => (
          <CategoryProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default OthersComponent;
