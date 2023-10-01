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
const { Meta } = Card;
const BuildPcCard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { query } = router;
  const handleAddToBuild = () => {
    dispatch(
      setBuild({
        category: query.category,
        name: 'GIGABYTE B760M AORUS ELITE AX DDR5 13th and 12th Gen Intel mATX Motherboard',
        price: 7800,
        status: 'in-stock',
        ratings: 5,
      })
    );
    router.push('/buildPC');
  };
  return (
    <div className="mx-auto border w-full">
      <Image
        width={200}
        height={150}
        alt=""
        src="/assets/computer.avif"
        className="mx-auto"
      ></Image>
      <div>
        <p className="text-center text-lg font-semibold uppercase">
          {query.category}
        </p>
        <p className="text-center">
          G Skill Trident 16GB DDR5 RGB RAM Z5 Neo CL32-38-38-96
        </p>
      </div>
      <div className="flex justify-between my-4 px-5">
        <span className="text-sky-500 font-semibold">12500 TK</span>
        <span>In Stock</span>
      </div>
      <button
        onClick={handleAddToBuild}
        className="w-full bg-sky-100 font-medium py-3 hover:text-sky-600"
      >
        {' '}
        Add To Builder
      </button>
    </div>
  );
};

export default BuildPcCard;
