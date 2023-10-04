import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import SelectedPartsCard from './SelectedPartsCard';

const RequiredPartsRow = ({ item }) => {
  const { parts } = useSelector((state) => state.buildComponent);

  return (
    <div className="grid grid-cols-12 px-4 py-2 mb-3  hover:shadow hover:shadow-gray-400 border bg-white rounded-lg">
      <div className="grid grid-cols-11 gap-2 col-span-11 mr-2">
        <div className="col-span-1">
          <Image src={item.image} width={70} height={70} alt=""></Image>
        </div>
        <div className="col-span-10">
          <h4 className="font-medium text-lg">
            {item?.title} <span className="text-red-500 text-xl">*</span>
          </h4>
          {parts[item?.category]?.category?.length ? (
            <SelectedPartsCard item={parts[item?.category]} />
          ) : (
            <p>Select a {item?.title}</p>
          )}
        </div>
      </div>

      {!parts[item?.category]?.category?.length ? (
        <div className="col-span-1">
          <Link
            href={item?.link}
            className="bg-slate-700 px-5 py-3 rounded text-white  flex items-center gap-2"
          >
            <AiOutlinePlus className="text-white" /> Select
          </Link>
        </div>
      ) : (
        <div className="col-span-1">
          <button
            className="bg-gray-400 px-5 py-3 rounded text-white  flex items-center gap-2 cursor-not-allowed"
            disabled={true}
          >
            <AiOutlinePlus className="text-white" /> Select
          </button>
        </div>
      )}
    </div>
  );
};

export default RequiredPartsRow;
