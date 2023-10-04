import React from 'react';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
const { Meta } = Card;
const CategoryCard = ({ category }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(category?.link)}
      className="mx-auto rounded-lg shadow w-full bg-white   hover:shadow-lg p-8"
    >
      <Image
        width={100}
        height={100}
        alt=""
        src={category?.image}
        className="mx-auto hover:scale-[1.05] transition  duration-300 ease-in-out"
      ></Image>
      <div>
        <p className="text-center text-lg font-semibold uppercase">
          {/* {query.category} */}
          {category?.title}
        </p>
        <p className="text-center">
          G Skill Trident 16GB DDR5 RGB RAM Z5 Neo CL32-38-38-96
        </p>
      </div>
      {/* <div className="flex justify-between my-4 px-5">
                <span className="text-sky-500 font-semibold">12500 TK</span>
                <span>In Stock</span>
              </div> */}
      {/* <button className="w-full bg-sky-100 font-medium py-3 hover:text-sky-600">
                {' '}
                Buy Now
              </button> */}
    </div>
  );
};

export default CategoryCard;
