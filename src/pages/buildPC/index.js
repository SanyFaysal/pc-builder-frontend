import RequiredPartsRow from '@/components/pcBuilder-component/RequiredPartsRow';
import { subBuildPcCost } from '@/helpers/sumBuildPcCost';
import { clearBuild } from '@/redux/product/productSlice';
import { Avatar, List, Skeleton } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
const list = [
  {
    title: 'MotherBoard',
    category: 'motherboard',
    link: '/buildPC/category/motherboard',
    image: '/assets/motherboard.png',
  },
  {
    title: 'CPU / Processor',
    category: 'cpu_processor',
    link: '/buildPC/category/cpu_processor',
    image: '/assets/cpu_processor.png',
  },
  {
    title: 'Monitor',
    category: 'monitor',
    link: '/buildPC/category/monitor',
    image: '/assets/monitor.png',
  },
  {
    title: 'RAM',
    category: 'ram',
    link: '/buildPC/category/ram',
    image: '/assets/ram.png',
  },
  {
    title: 'Power Supply Unit',
    category: 'power_supply_unit',
    link: '/buildPC/category/power_supply_unit',
    image: '/assets/power_supply.png',
  },
  {
    title: 'Storage Device',
    category: 'storage_device',
    link: '/buildPC/category/storage_device',
    image: '/assets/storage_device.png',
  },
  {
    title: 'Others',
    category: 'others',
    link: '/buildPC/category/others',
    image: '/assets/others.png',
  },
];
const BuildPC = () => {
  const dispatch = useDispatch();
  const { parts, totalComponents } = useSelector(
    (state) => state.buildComponent
  );
  let total = subBuildPcCost(parts);
  const hanClearAll = () => {
    dispatch(clearBuild());
  };
  console.log({ totalComponents });
  return (
    <div className="lg:mx-28 my-12  ">
      <div className="mb-4 flex justify-between items-center ">
        <div>
          <h2 className="text-3xl mb-2">Build Your Dream Computer</h2>
          <p1 className="text-lg">
            Total Amount :{' '}
            <span className=" text-2xl">${total ? total : '00'}</span>
          </p1>
        </div>
        <div className="flex gap-4">
          <button
            onClick={hanClearAll}
            className="bg-red-500  px-5 py-2 text-white rounded"
          >
            Clear All
          </button>
          <button
            disabled={totalComponents !== 6}
            className="bg-sky-500  px-5 py-2 text-white rounded disabled:bg-sky-200 disabled:cursor-not-allowed "
            value={'Complete Build'}
          >
            Complete Build
          </button>
        </div>
      </div>
      <div>
        {list.map((item, i) => (
          <RequiredPartsRow key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BuildPC;
