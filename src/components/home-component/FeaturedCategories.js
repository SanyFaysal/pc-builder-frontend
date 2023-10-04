import React from 'react';
import CategoryCard from '../category-component/CategoryCard';
import { categoriesData } from '@/data/categoriesData';

const FeaturedCategories = () => {
  return (
    <div className="lg:px-28 my-20">
      <h1 className="text-4xl text-center my-8">Featured Categories </h1>
      <div className="grid lg:grid-cols-3 gap-6 justify-between">
        {categoriesData?.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
