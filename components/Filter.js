import React, { useState } from 'react';
import { FaFilter, FaAngleDown, FaAngleUp, FaUser } from 'react-icons/fa';
import { BsImages, BsMusicNote } from 'react-icons/bs';
import { BiVideoRecording } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
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
        <div className="mt-8">
            <h2 className="text-2xl text-center font-semibold">Search By Filters</h2>
            <div className="flex space-x-3 md:space-x-4 lg:space-x-8 justify-center mb-4 ">
                <button
                    className={`${
                        overFocus ? ' bg-white px-4 py-2 rounded-2xl ' : 'px-4 py-2 rounded-2xl'
                    } text-sm md:text-md lg:text-base font-medium `}
                    onClick={() => {
                        if (!overFocus) {
                            setFeatFocus(false);
                            setDetFocus(false);
                            setNearFocus(false);
                            setOverFocus(!overFocus);
                        }
                    }}
                >
                    NFTs
                </button>
                <button
                    className={`${
                        detFocus ? 'bg-white px-4 py-2 rounded-2xl' : 'px-4 py-2 rounded-2xl'
                    } text-sm md:text-md lg:text-base font-medium `}
                    onClick={() => {
                        if (!detFocus) {
                            setFeatFocus(false);
                            setDetFocus(!detFocus);
                            setNearFocus(false);
                            setOverFocus(false);
                        }
                    }}
                >
                    Image
                </button>
                <button
                    className={`${
                        featFocus ? 'bg-white px-4 py-2 rounded-2xl' : 'px-4 py-2 rounded-2xl'
                    } text-sm md:text-md lg:text-base font-medium `}
                    onClick={() => {
                        if (!featFocus) {
                            setFeatFocus(!featFocus);
                            setDetFocus(false);
                            setNearFocus(false);
                            setOverFocus(false);
                        }
                    }}
                >
                    Video
                </button>
                <button
                    className={`${
                        nearFocus ? 'bg-white px-4 py-2 rounded-2xl' : 'px-4 py-2 rounded-2xl'
                    } text-sm md:text-md lg:text-base font-medium `}
                    onClick={() => {
                        if (!nearFocus) {
                            setFeatFocus(false);
                            setDetFocus(false);
                            setNearFocus(!nearFocus);
                            setOverFocus(false);
                        }
                    }}
                >
                    Audio{' '}
                </button>
            </div>
            <div className={`flex justify-end ${filter && 'justify-between'} `}>
                <div
                    className="px-4 py-2 flex space-x-2 order-2 items-center bg-white rounded-2xl w-max h-max "
                    onClick={() => openFilter()}
                >
                    <FaFilter className="h-3 w-3" />
                    <small>Filter</small> {filter ? <FaAngleDown /> : <FaAngleUp />}
                </div>
                {filter && (
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
                )}
            </div>
        </div>
    );
};

export default Filter;
