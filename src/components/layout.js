import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import { FaCircleUser, FaComputer } from "react-icons/fa6";
import { HiOutlineUser, HiOutlineUserCircle } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
import { categoriesData } from "@/data/categoriesData";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { AiOutlineLogout } from "react-icons/ai";
const { Header, Content, Footer } = Layout;
const LayOut = ({ children }) => {
  const { data: session } = useSession();

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
    <Layout className="layout ">
      <header
        style={{ display: "flex", alignItems: "center" }}
        className="bg-slate-800 py-3 sticky top-0 z-[9999]"
      >
        <nav className=" text-white w-full h-75 lg:px-28 px-6">
          <div className="lg:hidden ">
            <Link
              href="/"
              className="justify-center text-xl flex none items-center gap-1  mb-3"
            >
              <FaComputer className="text-3xl " />
              <span className=" font-[500]">PC FORGE</span>
            </Link>
          </div>

          <div
            className="  flex lg:justify-between lg items-center"
            id="navbar-default"
          >
            <Link
              href="/"
              className=" text-xl lg:flex items-center gap-1  hidden"
            >
              <FaComputer className="text-3xl " />
              <span className=" font-[500]">PC FORGE</span>
            </Link>
            <div className="flex items-center gap-y-10 gap-x-5 text-lg">
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
                      isDropdownOpen ? "transform rotate-180" : ""
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
                    className=" text-start absolute mt-2  border  rounded-lg bg-slate-800 text-white shadow-lg w-44"
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

              <Link href={"/buildPC"}>
                <Button
                  type="primary"
                  size={"large"}
                  className="border-blue-400"
                >
                  PC Builder
                </Button>
              </Link>
              {!session?.user ? (
                <Link href="/login">Login</Link>
              ) : (
                <>
                  <button onClick={() => router.push("/profile")}>
                    <HiOutlineUser className="text-2xl text-" />
                  </button>
                  <button onClick={() => signOut()}>
                    <AiOutlineLogout className="text-2xl" />
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
      <content className="bg-gray-100 w-full">
        <main className="">{children}</main>
      </content>
      <Footer style={{ textAlign: "center" }}>
        © PC Forge. All Rights Reserved. ``
      </Footer>
    </Layout>
  );
};

export default LayOut;
