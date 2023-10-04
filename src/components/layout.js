import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import { FaComputer } from 'react-icons/fa6';
import { BiChevronDown } from 'react-icons/bi';
import { useState } from 'react';
import Link from 'next/link';
import { categoriesData } from '@/data/categoriesData';
import { useRouter } from 'next/router';
const { Header, Content, Footer } = Layout;
const LayOut = ({ children }) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavigate = (category) => {
    router.push(category.link);
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <Layout className="layout">
      <Header
        style={{ display: 'flex', alignItems: 'center' }}
        className="bg-slate-800"
      >
        <nav className=" text-white w-full">
          <div
            className="  flex justify-between items-center"
            id="navbar-default"
          >
            <Link href="/" className=" text-xl flex items-center gap-1">
              <FaComputer className="text-3xl " />
              <span className=" font-[500]">PC FORGE</span>
            </Link>
            <div className="flex items-center gap-10 text-lg">
              <div className="relative inline-block text-center">
                <button
                  id="dropdownDefaultButton"
                  onClick={toggleDropdown}
                  className="text-white  hover:text-blue-300 text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Categories
                  <svg
                    className={`w-2.5 h-2.5 ml-2.5 transition-transform ${
                      isDropdownOpen ? 'transform rotate-180' : ''
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div
                    id="dropdown"
                    className="z-10 text-start absolute mt-2  border  rounded-lg bg-slate-800 text-white shadow-lg w-44"
                  >
                    <div
                      className=" text-sm  dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      {categoriesData?.map((category) => (
                        <p
                          key={category?.title}
                          onClick={() => handleNavigate(category)}
                          className="block px-4 py-2 font-medium border-b border-white hover:cursor-pointer   dark:hover:bg-gray-600 "
                        >
                          {category.title}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href={'/buildPC'}>
                <Button
                  type="primary"
                  size={'large'}
                  className="border-blue-400"
                >
                  PC Builder
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </Header>
      <content className="bg-gray-100 w-full">
        <main className="">{children}</main>
      </content>
      {/* <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default LayOut;
