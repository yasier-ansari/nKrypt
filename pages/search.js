import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import Filter from '../components/Filter';
const search = () => {
    return (
        <div className="">
            <div className=" mt-20 relative text-gray-600 w-[35%] mx-auto rounded-full mb-20 focus-within:text-gray-400">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <BiSearch className="w-5 h-5  text-black " />
                </div>
                <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none  focus:shadow-outline">
                        <BsArrowRight className="h-7 w-7 text-white stroke-2 bg-purple-700 p-2 rounded-full" />
                    </button>
                </span>
                <input
                    type="search"
                    name="q"
                    className="pl-12 py-2 text-sm w-full text-gray-700 bg-gray-100 rounded-full focus:outline-purple-600 focus:bg-white focus:text-gray-900"
                    placeholder="example@gmail.com..."
                    autoComplete="off"
                />
                {/* <input
                    type="search"
                    id="default-search"
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                />
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button> */}
            </div>
            <div className="px-20">
                <Filter />
            </div>
        </div>
    );
};

export default search;
