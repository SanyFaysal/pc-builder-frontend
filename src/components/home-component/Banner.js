import { Carousel } from 'antd';
import Image from 'next/image';

import { FaComputer } from 'react-icons/fa6';
const Banner = () => {
  return (
    <Carousel autoplay effect="fade" className="w-full p-0 m-0 my-auto   ">
      <div className=" bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-orange-300 to-blue-100">
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:px-28 px-6 lg:my-20 mt-8">
          <div className="">
            <h1 className="mt-10 text-3xl lg:text-[50px] font-[800] text-orange-10 ">
              {' '}
              Fully Customizable
            </h1>
            <p className=" text-4xl">Pick The Components You Want</p>

            <h1 className="lg:text-[50px] text-center flex justify-start items-center mb-20">
              {' '}
              <span className="text-xl pr-3 lg:mt-4">With</span> PC FORGE
            </h1>
          </div>

          <Image
            src="/assets/banner1.png"
            width={400}
            height={500}
            alt="Computer "
          />
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-green-400 to-slate-200">
        <div className="flex flex-col-reverse justify-between items-center lg:px-28 px-6 lg:my-20 mt-8">
          <div className="">
            <h1 className="mt-10 lg:text-[50px] font-[800] text-orange-10 ">
              {' '}
              Build Your First PC
            </h1>
            <p className=" text-4xl">With Your Personal Choice</p>

            <h1 className="lg:text-[50px] text-center flex justify-start items-center mb-20">
              {' '}
              <span className="text-xl pr-3 lg:mt-4">by</span> PC FORGE
            </h1>
          </div>

          <div>
            <Image
              src="/assets/banner1.png"
              width={400}
              height={500}
              alt="Computer "
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
