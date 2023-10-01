import { removeSingleBuild } from '@/redux/product/productSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  AiFillDelete,
  AiOutlineDelete,
  AiOutlineDeleteRow,
  AiOutlinePlus,
} from 'react-icons/ai';
import { useDispatch } from 'react-redux';

const SelectedPartsCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-4 items-center  px-4 py-1 mt-2 bg-blue-50 mr-2  ">
      <div className="flex items-center gap-2 col-span-3">
        <Image
          src={'/assets/computer.avif'}
          width={50}
          height={50}
          alt=""
        ></Image>
        <div>
          <h4 className="font-medium ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            est.
            {item?.name} Lorem ipsum dolor sit amet.
          </h4>
          <p className="text-xl">{item?.price} TK</p>
        </div>
      </div>

      <div className="col-span-1 flex justify-end ">
        <button
          onClick={() => dispatch(removeSingleBuild(item))}
          className="border border-red-500 flex gap-2 px-2 py-1 rounded text-red-500"
        >
          <AiFillDelete className="text-2xl " />
          Remove
        </button>
      </div>
    </div>
  );
};

export default SelectedPartsCard;
