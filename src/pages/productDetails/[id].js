import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
  const { query } = useRouter();

  return <div>this is query</div>;
};

export default ProductDetails;
