import {
  removeOthersSingleBuild,
  removeSingleBuild,
} from '@/redux/product/productSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import {
  AiFillDelete,
  AiOutlineDelete,
  AiOutlineDeleteRow,
  AiOutlinePlus,
} from 'react-icons/ai';
import { FaEye } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

const SelectedPartsCard = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    if (item?.category !== 'others') return dispatch(removeSingleBuild(item));
    else {
      return dispatch(removeOthersSingleBuild(item));
    }
  };

  return (
    <div className="grid grid-cols-4 items-center  px-4 py-1 mt-2 bg-blue-50   ">
      <div className="flex items-center gap-2 col-span-3 py-2">
        <Image src={item?.image} width={50} height={50} alt=""></Image>
        <div className="">
          <h4 className="font-medium ">{item?.name}</h4>
          <p className="text-lg mt-1">${item?.price} </p>
        </div>
      </div>

      <div className="col-span-1 gap-4 flex justify-end items-center">
        <button
          onClick={() => router.push(`/productDetails/${item?._id}`)}
          className="border border-sky-500 flex gap-2 px-2 py-1 rounded text-sky-500"
        >
          <FaEye className="text-lg " />
          Details
        </button>
        <button
          onClick={() => handleRemove(item)}
          className="border border-red-500 flex gap-1 px-2 py-1 rounded text-red-500"
        >
          <AiFillDelete className="text-lg " />
          Remove
        </button>
      </div>
    </div>
  );
};

export default SelectedPartsCard;
