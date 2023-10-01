import { Avatar, List, Skeleton } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
const list = [
  {
    title: 'MotherBoard',
    link: '/category/motherboard',
    image: '/assets/motherboard.png',
  },
  {
    title: 'CPU / Processor',
    link: '/category/motherboard',
    image: '/assets/motherboard.png',
  },
  {
    title: 'Monitor',
    link: '/category/motherboard',
    image: '/assets/motherboard.png',
  },
  {
    title: 'RAM',
    link: '/category/motherboard',
    image: '/assets/motherboard.png',
  },
  {
    title: 'Power Supply Unit',
    link: '/category/motherboard',
    image: '/assets/motherboard.png',
  },
  {
    title: 'Storage Device',
    link: '/category/motherboard',
    image: '/assets/motherboard.png',
  },
];
const BuildPC = () => {
  return (
    <div className="lg:mx-28 my-12  ">
      {list.map((item, i) => (
        <div
          key={i}
          className="flex justify-between items-center px-4 py-2 mb-2 border hover:bg-gray-50"
        >
          <div className="flex items-center gap-2">
            <Image src={item.image} width={70} height={70} alt=""></Image>
            <div>
              <h4 className="font-medium text-lg">
                {item?.title} <span className="text-red-500 text-xl">*</span>
              </h4>
              <p>Select a {item?.title}</p>
            </div>
          </div>
          <Link
            href={item?.link}
            className="bg-sky-400 px-5 py-3 rounded hover:text-white flex items-center gap-2"
          >
            <AiOutlinePlus /> Select
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BuildPC;
