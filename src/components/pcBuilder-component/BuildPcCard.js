import React from 'react';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setBuild } from '@/redux/product/productSlice';
import { AiFillStar } from 'react-icons/ai';
const { Meta } = Card;
const BuildPcCard = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { query } = router;
  const handleAddToBuild = (product) => {
    dispatch(setBuild(product));
    router.push('/buildPC');
  };
  console.log(product);
  return (
    <div className="mx-auto rounded-lg shadow w-full bg-white   hover:shadow-lg">
      <div onClick={() => router.push(`/productDetails/${product?._id}`)}>
        <div className="p-6 mt-2 h-[200px] flex items-center">
          <Image
            width={200}
            height={150}
            alt=""
            src={product?.image}
            className="mx-auto hover:scale-[1.05] transition  duration-300 ease-in-out"
          ></Image>
        </div>
        <div>
          <h2 className="text-center  font-semibold uppercase">
            {product?.category == 'others'
              ? product?.subCategory
              : product?.category}
          </h2>
          <p className="text-center text-lg h-[60px] mx-2">{product?.name} </p>
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
          <p className=" font-semibold text-lg text-center">
            {' '}
            ${product?.price}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleAddToBuild(product)}
        className="w-full  font-medium py-3 bg-slate-800 text-white hover:text-sky-500 rounded-b-lg"
      >
        {' '}
        Add To Build
      </button>
    </div>
  );
};

export default BuildPcCard;
