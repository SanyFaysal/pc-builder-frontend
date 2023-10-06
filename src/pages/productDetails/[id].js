import Image from 'next/image';
import React from 'react';

const ProductDetails = ({ product }) => {
  console.log({ founded: product });
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-8 md:mb-0 h-[70vh] mt-10 ">
          <Image
            width={500}
            height={500}
            alt=""
            src={product?.image}
            className="mx-auto "
          ></Image>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{product?.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
          <ul className="  grid grid-cols-2 gap-2 mb-5">
            {Object.entries(product?.key_features).map(([key, value]) => (
              <li key={key} className="bg-white  p-3 rounded">
                <span className="font-semibold">{key}:</span> {value}
              </li>
            ))}
          </ul>

          <div className="flex items-center mb-4">
            <span className="text-4xl font-semibold mr-2">
              ${product?.price}
            </span>
            <span
              className={`px-2 py-1 rounded-2xl mt-2 ${
                product?.status === 'In Stock' ? 'bg-sky-500' : 'bg-red-500'
              } text-white`}
            >
              {product?.status}
            </span>
          </div>

          <div className="flex items-center mb-4">
            <span className="text-lg font-semibold mr-2">Ratings:</span>
            <span className="text-2xl">{product?.ratings}</span>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Reviews:</h2>
            <ul>
              {product?.reviews.map((review, index) => (
                <li key={index} className="mb-2">
                  {review}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    'https://pc-builder-server-gamma.vercel.app/products'
  );
  const { data: products } = await res.json();
  const paths = products?.map((product) => ({
    params: { id: product._id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://pc-builder-server-gamma.vercel.app/productDetails/${params.id}`
  );
  const product = await res.json();
  console.log({ productDetails: product });
  return {
    props: {
      product: product?.data,
    },
  };
}
export default ProductDetails;
