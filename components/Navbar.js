import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { VscChromeClose, VscThreeBars } from 'react-icons/vsc';
import { FaUser } from 'react-icons/fa';
import { IoWallet, IoSearch } from 'react-icons/io5';
import Logo from '../public/static/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    let [open, setOpen] = useState(false);
    return (
        <nav className="shadow-lg font-mont z-40 w-full font-medium sticky bg-opacity-[0.45] bg-[#FFEEFF] backdrop-blur-xl drop-shadow-lg top-0 items-center justify-around duration-700 transition-all ease-in justify-items-center  ">
            <div className="md:flex items-center place-items-center justify-between py-3 md:px-10 px-7">
                <div className="h-10 sm:h-12 cursor-pointer flex space-x-2 md:space-x-8 items-center text-gray-800">
                    <p className=" font-bold text-2xl mr-2">myra</p>
                    <Image src={Logo} alt="card" width={40} height={60} />
                    {/* <span className=" ml-1 px-2"> */}
                    {/* <a href="#hero" className="flex">
                        <img
                            src={Logo}
                            alt=""
                            className=" h-[1.8rem] md:h-[2.15rem] lg:h-[2.4rem] items-center mx-auto text-center"
                        />
                    </a> */}
                    <div className="flex items-center justify-center bg-white rounded-xl ">
                        <div className="relative text-gray-600 focus-within:text-gray-400">
                            <span className="absolute inset-y-0 right-2 flex items-center pl-2">
                                <button
                                    type="submit"
                                    className="p-1 focus:outline-none  focus:shadow-outline"
                                >
                                    <IoSearch className="h-4 w-4" />
                                </button>
                            </span>
                            <input
                                type="search"
                                name="q"
                                className="py-2 text-sm text-white rounded-xl pl-4 focus:outline-purple-600 focus:bg-white focus:text-gray-900"
                                placeholder="Search..."
                                autoComplete="off"
                            />
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="text-lg absolute right-8 top-6 cursor-pointer items-center  font-bold md:hidden"
                >
                    {!open ? (
                        <VscThreeBars name="open" className="h-5 w-5" />
                    ) : (
                        <VscChromeClose name="menu" className="stroke-1 h-5 w-5" />
                    )}
                    {/* <FaBars name={open ? 'close' : 'menu'} /> */}
                </div>

                <ul
                    className={`bg-white md:bg-transparent md:flex md:items-center md:pb-0 pb-8 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? 'top-[4rem]' : 'top-[-490px]'
                    }`}
                >
                    <li className="md:ml-8 text-base font-regular md:my-0 my-7">
                        <Link href="/" className="text-gray-800 hover:text-gray-400 duration-500">
                            Discover
                        </Link>
                    </li>
                    <li className="md:ml-8 text-base font-regular md:my-0 my-7">
                        <Link href="/" className="text-gray-800 hover:text-gray-400 duration-500">
                            Help
                        </Link>
                    </li>
                    <li className="md:ml-8 text-base font-regular md:my-0 my-7">
                        <Link href="/" className="text-gray-800 hover:text-gray-400 duration-500">
                            <div className="bg-white px-4 py-2 border w-max shadow-md  rounded-full border-[#F9E5FB] text-[#C353CD]  ">
                                Start Selling
                            </div>
                        </Link>
                    </li>
                    <li className="md:ml-8 text-base font-regular md:my-0 my-7">
                        <Link href="/">
                            <button>
                                <FaUser className="w-6 h-6 mx-auto fill-[#d700e7]" />
                            </button>
                        </Link>
                    </li>
                    <li className="md:ml-8 text-base font-regular md:my-0 my-7">
                        <Link href="/">
                            <button>
                                <IoWallet className="w-7 h-7 mx-auto fill-[#d700e7]" />
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
