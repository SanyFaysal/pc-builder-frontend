import React from 'react';
import CategoryProductCard from '../category-component/CategoryProductCard';

const FeaturedProducts = ({ randomProducts }) => {
  return (
    <div className="lg:px-28">
      <h1 className="text-4xl text-center my-8">Feature Products </h1>
      <div className="grid lg:grid-cols-3 gap-6  ">
        {randomProducts?.map((product, index) => (
          <CategoryProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
