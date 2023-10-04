import React from 'react';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiFillStar } from 'react-icons/ai';
const { Meta } = Card;
const CategoryProductCard = ({ product }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/productDetails/${product?._id}`)}
      className="mx-auto rounded-lg shadow w-full bg-white   hover:shadow-lg"
    >
      <div className="p-4 h-[220px] flex items-center">
        <Image
          width={200}
          height={150}
          alt=""
          src={product?.image}
          className="mx-auto hover:scale-[1.05] transition  duration-300 ease-in-out"
        ></Image>
      </div>
      <div>
        <h2 className="text-center text-lg font-semibold uppercase">
          {product?.category}
        </h2>
        {/* <p className="text-center">{product?.name} </p> */}
      </div>

      <div className="flex justify-between items-center mb-2 px-12 mt-1">
        <p className=" font-semibold gap-1 flex items-center ">
          <AiFillStar className="text-orange-500" /> {product?.ratings}
        </p>

        <p
          className={`${
            product?.status === 'In Stock'
              ? 'bg-sky-50 text-sky-500 '
              : 'bg-red-50 text-red-500'
          }   px-4 text-sm py-1  rounded-xl`}
        >
          {product?.status}
        </p>
      </div>
      <div className="mb-2">
        <p className=" font-semibold text-lg text-center">${product?.price}</p>
      </div>
      <button className="w-full  font-medium py-3 bg-slate-800 text-white hover:text-sky-500 rounded-b-lg">
        {' '}
        Buy Now
      </button>
    </div>
  );
};

export default CategoryProductCard;
