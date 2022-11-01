import Image from 'next/image';
import { useState, useRef } from 'react';
import { AiFillHeart, AiOutlineHeart, AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';

const Video = () => {
    const [like, setLike] = useState(false);
    const rowRef = useRef(null);
    const [isMoved, setIsMoved] = useState(false);
    const handleClick = (direction) => {
        setIsMoved(true);
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo =
                direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };
    return (
        <section className="mx-auto items-center my-20 ">
            <h3 className=" mb-6 font-bold text-2xl pl-8 ">NFT Videos 📉</h3>
            <div className="flex justify-between px-8 mb-6 ">
                <p className="font-medium text-xl  ">
                    {' '}
                    Amazing collection of Videos of different genre
                </p>
                <div className="flex space-x-8">
                    <div
                        className="bg-white shadow-md hover:shadow-dark-blue shadow-light-blue drop-shadow-xl group p-2 h-max w-max rounded-full items-center hover:scale-125"
                        onClick={() => handleClick('left')}
                    >
                        <TiArrowLeftThick
                            className={`mx-auto cursor-pointer fill-blue group-hover:fill-purple-600 transition `}
                        />
                    </div>
                    <div
                        className="bg-white shadow-md hover:shadow-dark-blue shadow-light-blue drop-shadow-xl group p-2 h-max w-max rounded-full items-center hover:scale-125"
                        onClick={() => handleClick('right')}
                    >
                        <TiArrowRightThick
                            className={`mx-auto cursor-pointer fill-blue group-hover:fill-purple-600 transition `}
                        />
                    </div>
                </div>
            </div>
            {/* <div
                    className="bg-white shadow-md hover:shadow-dark-blue shadow-light-blue drop-shadow-xl group p-2 h-max w-max rounded-full items-center hover:scale-125"
                    onClick={() => handleClick('left')}
                >
                    <AiFillCaretLeft
                        className={`mx-auto cursor-pointer fill-blue group-hover:fill-dark-blue transition `}
                    />
                </div> */}
            <div
                className="snap-mandatory snap-x scroll-smooth flex space-x-[4.6rem] items-center mx-auto overflow-scroll no-scroll "
                ref={rowRef}
            >
                <div key="1" className="snap-start flex flex-col bg-white rounded-[2.5rem]">
                    <div className="relative w-80 h-48  ">
                        <div className="">
                            <Image
                                src="/static/seller-1.png"
                                layout="fill"
                                className="rounded-t-[2.5rem] "
                                // width={450}
                                // height={280}
                            />
                        </div>
                        <div
                            className="px-2 py-2 rounded-md bg-[#ffffff84] absolute bottom-2  left-2 "
                            onClick={() => setLike(!like)}
                        >
                            <AiFillHeart className={` ${!like && 'hidden '}  w-6 h-6 `} />
                            <AiOutlineHeart className={` ${like && 'hidden'}  w-6 h-6 `} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-4 pb-6 px-6">
                        <div className=" h-max items-center">
                            <Image
                                src="/static/user-1.png"
                                // layout="fill"
                                className="rounded-full w-10 h-10 "
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="">
                            <h2 className=" text-md mb-2 font-semibold text-end">
                                Astronaut in the ocean
                            </h2>
                            <p className="text-end font-krona ">1.33ETH</p>
                        </div>
                    </div>
                </div>
                <div key="1" className="snap-start flex flex-col bg-white rounded-[2.5rem]">
                    <div className="relative w-80 h-48  ">
                        <div className="">
                            <Image
                                src="/static/vid-1.png"
                                layout="fill"
                                className="rounded-t-[2.5rem] "
                                // width={450}
                                // height={280}
                            />
                        </div>
                        <div
                            className="px-2 py-2 rounded-md bg-[#ffffff84] absolute bottom-2  left-2 "
                            onClick={() => setLike(!like)}
                        >
                            <AiFillHeart className={` ${!like && 'hidden '}  w-6 h-6 `} />
                            <AiOutlineHeart className={` ${like && 'hidden'}  w-6 h-6 `} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-4 pb-6 px-6">
                        <div className=" h-max items-center">
                            <Image
                                src="/static/user-1.png"
                                // layout="fill"
                                className="rounded-full w-10 h-10 "
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="">
                            <h2 className=" text-md mb-2 font-semibold text-end">
                                Astronaut in the ocean
                            </h2>
                            <p className="text-end font-krona ">1.33ETH</p>
                        </div>
                    </div>
                </div>
                <div key="1" className="snap-start flex flex-col bg-white rounded-[2.5rem]">
                    <div className="relative w-80 h-48  ">
                        <div className="">
                            <Image
                                src="/static/vid-2.png"
                                layout="fill"
                                className="rounded-t-[2.5rem] "
                                // width={450}
                                // height={280}
                            />
                        </div>
                        <div
                            className="px-2 py-2 rounded-md bg-[#ffffff84] absolute bottom-2  left-2 "
                            onClick={() => setLike(!like)}
                        >
                            <AiFillHeart className={` ${!like && 'hidden '}  w-6 h-6 `} />
                            <AiOutlineHeart className={` ${like && 'hidden'}  w-6 h-6 `} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-4 pb-6 px-6">
                        <div className=" h-max items-center">
                            <Image
                                src="/static/user-5.png"
                                // layout="fill"
                                className="rounded-full w-10 h-10 "
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="">
                            <h2 className=" text-md mb-2 font-semibold text-end">
                                Astronaut in the ocean
                            </h2>
                            <p className="text-end font-krona ">1.33ETH</p>
                        </div>
                    </div>
                </div>
                <div key="1" className="snap-start flex flex-col bg-white rounded-[2.5rem]">
                    <div className="relative w-80 h-48  ">
                        <div className="">
                            <Image
                                src="/static/vid-3.png"
                                layout="fill"
                                className="rounded-t-[2.5rem] "
                                // width={450}
                                // height={280}
                            />
                        </div>
                        <div
                            className="px-2 py-2 rounded-md bg-[#ffffff84] absolute bottom-2  left-2 "
                            onClick={() => setLike(!like)}
                        >
                            <AiFillHeart className={` ${!like && 'hidden '}  w-6 h-6 `} />
                            <AiOutlineHeart className={` ${like && 'hidden'}  w-6 h-6 `} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-4 pb-6 px-6">
                        <div className=" h-max items-center">
                            <Image
                                src="/static/user-2.png"
                                // layout="fill"
                                className="rounded-full w-10 h-10 "
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="">
                            <h2 className=" text-md mb-2 font-semibold text-end">
                                Astronaut in the ocean
                            </h2>
                            <p className="text-end font-krona ">1.33ETH</p>
                        </div>
                    </div>
                </div>
                <div key="1" className="snap-start flex flex-col bg-white rounded-[2.5rem]">
                    <div className="relative w-80 h-48  ">
                        <div className="">
                            <Image
                                src="/static/vid-4.png"
                                layout="fill"
                                className="rounded-t-[2.5rem] "
                                // width={450}
                                // height={280}
                            />
                        </div>
                        <div
                            className="px-2 py-2 rounded-md bg-[#ffffff84] absolute bottom-2  left-2 "
                            onClick={() => setLike(!like)}
                        >
                            <AiFillHeart className={` ${!like && 'hidden '}  w-6 h-6 `} />
                            <AiOutlineHeart className={` ${like && 'hidden'}  w-6 h-6 `} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-4 pb-6 px-6">
                        <div className=" h-max items-center">
                            <Image
                                src="/static/avt-3.png"
                                // layout="fill"
                                className="rounded-full w-10 h-10 "
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="">
                            <h2 className=" text-md mb-2 font-semibold text-end">
                                Astronaut in the ocean
                            </h2>
                            <p className="text-end font-krona ">1.33ETH</p>
                        </div>
                    </div>
                </div>
                <div key="1" className="snap-start flex flex-col bg-white rounded-[2.5rem]">
                    <div className="relative w-80 h-48  ">
                        <div className="">
                            <Image
                                src="/static/vid-5.png"
                                layout="fill"
                                className="rounded-t-[2.5rem] "
                                // width={450}
                                // height={280}
                            />
                        </div>
                        <div
                            className="px-2 py-2 rounded-md bg-[#ffffff84] absolute bottom-2  left-2 "
                            onClick={() => setLike(!like)}
                        >
                            <AiFillHeart className={` ${!like && 'hidden '}  w-6 h-6 `} />
                            <AiOutlineHeart className={` ${like && 'hidden'}  w-6 h-6 `} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-4 pb-6 px-6">
                        <div className=" h-max items-center">
                            <Image
                                src="/static/user-1.png"
                                // layout="fill"
                                className="rounded-full w-10 h-10 "
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="">
                            <h2 className=" text-md mb-2 font-semibold text-end">
                                Astronaut in the ocean
                            </h2>
                            <p className="text-end font-krona ">1.33ETH</p>
                        </div>
                    </div>
                </div>
                <div key="1" className="snap-start flex flex-col bg-white rounded-[2.5rem]">
                    <div className="relative w-80 h-48  ">
                        <div className="">
                            <Image
                                src="/static/seller-1.png"
                                layout="fill"
                                className="rounded-t-[2.5rem] "
                                // width={450}
                                // height={280}
                            />
                        </div>
                        <div
                            className="px-2 py-2 rounded-md bg-[#ffffff84] absolute bottom-2  left-2 "
                            onClick={() => setLike(!like)}
                        >
                            <AiFillHeart className={` ${!like && 'hidden '}  w-6 h-6 `} />
                            <AiOutlineHeart className={` ${like && 'hidden'}  w-6 h-6 `} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-4 pb-6 px-6">
                        <div className=" h-max items-center">
                            <Image
                                src="/static/user-1.png"
                                // layout="fill"
                                className="rounded-full w-10 h-10 "
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="">
                            <h2 className=" text-md mb-2 font-semibold text-end">
                                Astronaut in the ocean
                            </h2>
                            <p className="text-end font-krona ">1.33ETH</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div
                    className="bg-white shadow-md hover:shadow-dark-blue shadow-light-blue drop-shadow-xl group p-2 h-max w-max rounded-full items-center hover:scale-125"
                    onClick={() => handleClick('right')}
                >
                    <AiFillCaretRight
                        className={`mx-auto cursor-pointer fill-blue group-hover:fill-dark-blue transition `}
                    />
                </div> */}
        </section>
    );
};

export default Video;
