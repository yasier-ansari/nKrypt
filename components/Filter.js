import React, { useState } from 'react';
import { FaFilter, FaAngleDown, FaAngleUp, FaUser } from 'react-icons/fa';
import { BsImages, BsMusicNote } from 'react-icons/bs';
import { BiVideoRecording } from 'react-icons/bi';
import { AiFillCloseCircle, AiFillHeart } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';
import { IoWallet } from 'react-icons/io5';

const Filter = () => {
    const [overFocus, setOverFocus] = useState(true);
    const [detFocus, setDetFocus] = useState(false);
    const [featFocus, setFeatFocus] = useState(false);
    const [nearFocus, setNearFocus] = useState(false);
    const [filter, setFilter] = useState(true);
    const [image, setImage] = useState(true);
    const [video, setVideo] = useState(true);
    const [music, setMusic] = useState(true);
    const [verify, setVerify] = useState(true);

    //FUNCTION SECTION
    const openFilter = () => {
        if (!filter) {
            setFilter(true);
        } else {
            setFilter(false);
        }
    };

    const openImage = () => {
        if (!image) {
            setImage(true);
        } else {
            setImage(false);
        }
    };

    const openVideo = () => {
        if (!video) {
            setVideo(true);
        } else {
            setVideo(false);
        }
    };

    const openMusic = () => {
        if (!music) {
            setMusic(true);
        } else {
            setMusic(false);
        }
    };
    return (
        <div className="mt-8 items-center ">
            <div className="flex justify-between items-center">
                <div class="flex">
                    <h2 className="text-2xl text-center font-semibold">Search By Filters</h2>
                </div>
                <div
                    className="px-4 py-2 flex space-x-2 order-2 items-center bg-white rounded-2xl w-max h-max "
                    onClick={() => openFilter()}
                >
                    <FaFilter className="h-3 w-3" />
                    <small>Filter</small> {filter ? <FaAngleDown /> : <FaAngleUp />}
                </div>
            </div>
            <div className={`mt-10 ${filter && 'flex flex-col space-y-10 justify-center '} `}>
                {filter && (
                    <>
                        <div class="h-[0.1rem] shadow-2xl w-full mx-auto bg-purple-200"></div>
                        <div className="flex order-1 space-x-6 overflow-y-hidden overflow-x-scroll lg:overflow-hidden basis-[80%]  ">
                            <div className="">
                                <div
                                    className={`flex space-x-2 px-2 py-1 items-center border border-black rounded-2xl cursor-pointer  `}
                                >
                                    <IoWallet className="w-4 h-4" /> <small>10 ETH</small>
                                    <AiFillCloseCircle className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="">
                                <div
                                    className={`flex space-x-2 px-2 py-1 items-center border border-black rounded-2xl cursor-pointer   ${
                                        image && 'rounded-2xl bg-white'
                                    } `}
                                    onClick={() => openImage()}
                                >
                                    <BsImages className="w-4 h-4" /> <small>Images</small>
                                </div>
                            </div>

                            <div className="">
                                <div
                                    className={`flex space-x-2 px-2 py-1 items-center border border-black rounded-2xl cursor-pointer   ${
                                        video && 'bg-white rounded-2xl '
                                    } `}
                                    onClick={() => openVideo()}
                                >
                                    <BiVideoRecording className="w-4 h-4" /> <small>Videos</small>
                                </div>
                            </div>

                            <div className="">
                                <div
                                    className={`flex space-x-2 px-2 py-1 items-center border border-black rounded-2xl cursor-pointer   ${
                                        music && 'bg-white rounded-2xl '
                                    } `}
                                    onClick={() => openMusic()}
                                >
                                    <BsMusicNote className="w-4 h-4" /> <small>Musics</small>
                                </div>
                            </div>

                            <div className="">
                                <div
                                    className={`flex space-x-2 px-2 py-1 cursor-pointer items-center border border-black rounded-2xl ${
                                        verify && 'bg-white rounded-2xl'
                                    } `}
                                    onClick={() => setVerify(!verify)}
                                >
                                    <FaUser className="w-3 h-4" /> <small>Verified</small>
                                    <MdVerified className="h-4 w-3 fill-purple-800" />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className=" mt-10 ">
                <div className="grid grid-cols-4 gap-8 mx-auto items-center">
                    <div className="flex flex-col bg-white rounded-xl">
                        <div className=" h-[15rem] relative ">
                            <img
                                src="/static/seller-1.png"
                                alt="sell1"
                                className="w-full h-full rounded-t-xl"
                            />
                            <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                            </div>
                        </div>
                        <div className="h-[6rem] px-6 py-4 ">
                            <h2 className="text-xl font-semibold mb-1">Le Bron James</h2>
                            <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                            <div className="flex justify-between items-center mt-2 ">
                                <p className="font-krona">1.5ETH</p>
                                <p className="text-sm">32 in stock</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white rounded-xl">
                        <div className=" h-[15rem] relative ">
                            <img
                                src="/static/seller-1.png"
                                alt="sell1"
                                className="w-full h-full rounded-t-xl"
                            />
                            <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                            </div>
                        </div>
                        <div className="h-[6rem] px-6 py-4 ">
                            <h2 className="text-xl font-semibold mb-1">Le Bron James</h2>
                            <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                            <div className="flex justify-between items-center mt-2 ">
                                <p className="font-krona">1.5ETH</p>
                                <p className="text-sm">32 in stock</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white rounded-xl">
                        <div className=" h-[15rem] relative ">
                            <img
                                src="/static/seller-1.png"
                                alt="sell1"
                                className="w-full h-full rounded-t-xl"
                            />
                            <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                            </div>
                        </div>
                        <div className="h-[6rem] px-6 py-4 ">
                            <h2 className="text-xl font-semibold mb-1">Le Bron James</h2>
                            <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                            <div className="flex justify-between items-center mt-2 ">
                                <p className="font-krona">1.5ETH</p>
                                <p className="text-sm">32 in stock</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white rounded-xl">
                        <div className=" h-[15rem] relative ">
                            <img
                                src="/static/seller-1.png"
                                alt="sell1"
                                className="w-full h-full rounded-t-xl"
                            />
                            <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                            </div>
                        </div>
                        <div className="h-[6rem] px-6 py-4 ">
                            <h2 className="text-xl font-semibold mb-1">Le Bron James</h2>
                            <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                            <div className="flex justify-between items-center mt-2 ">
                                <p className="font-krona">1.5ETH</p>
                                <p className="text-sm">32 in stock</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white rounded-xl">
                        <div className=" h-[15rem] relative ">
                            <img
                                src="/static/seller-1.png"
                                alt="sell1"
                                className="w-full h-full rounded-t-xl"
                            />
                            <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                            </div>
                        </div>
                        <div className="h-[6rem] px-6 py-4 ">
                            <h2 className="text-xl font-semibold mb-1">Le Bron James</h2>
                            <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                            <div className="flex justify-between items-center mt-2 ">
                                <p className="font-krona">1.5ETH</p>
                                <p className="text-sm">32 in stock</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white rounded-xl">
                        <div className=" h-[15rem] relative ">
                            <img
                                src="/static/seller-1.png"
                                alt="sell1"
                                className="w-full h-full rounded-t-xl"
                            />
                            <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                            </div>
                        </div>
                        <div className="h-[6rem] px-6 py-4 ">
                            <h2 className="text-xl font-semibold mb-1">Le Bron James</h2>
                            <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                            <div className="flex justify-between items-center mt-2 ">
                                <p className="font-krona">1.5ETH</p>
                                <p className="text-sm">32 in stock</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white rounded-xl">
                        <div className=" h-[15rem] relative ">
                            <img
                                src="/static/seller-1.png"
                                alt="sell1"
                                className="w-full h-full rounded-t-xl"
                            />
                            <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                            </div>
                        </div>
                        <div className="h-[6rem] px-6 py-4 ">
                            <h2 className="text-xl font-semibold mb-1">Le Bron James</h2>
                            <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                            <div className="flex justify-between items-center mt-2 ">
                                <p className="font-krona">1.5ETH</p>
                                <p className="text-sm">32 in stock</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white rounded-xl">
                        <div className=" h-[15rem] relative ">
                            <img
                                src="/static/seller-1.png"
                                alt="sell1"
                                className="w-full h-full rounded-t-xl"
                            />
                            <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                            </div>
                        </div>
                        <div className="h-[6rem] px-6 py-4 ">
                            <h2 className="text-xl font-semibold mb-1">Le Bron James</h2>
                            <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                            <div className="flex justify-between items-center mt-2 ">
                                <p className="font-krona">1.5ETH</p>
                                <p className="text-sm">32 in stock</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
