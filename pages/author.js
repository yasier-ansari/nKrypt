import Image from 'next/image';
import Head from 'next/head';
import { AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';
import { TbBrandMeta } from 'react-icons/tb';
const author = () => {
    const [following, setFollowing] = useState(false)
    return (
        <div>
            <Head>
                <title>myra | NFT Marketplace | Smart, Secure & Seamless</title>
                <meta
                    name="description"
                    content="Buy, Sell and Trade NFTs on the most secure and fun to use 'myra' NFT Marketplace  "
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="relative mx-auto">
                <div className="w-full h-[15rem]">
                    <img
                        className="w-screen h-full object-fill "
                        src="/static/collection-banner.jpg"
                    />
                </div>
                <div className="h-[80%] mx-auto items-center relative px-20 ">
                    <div className="absolute  flex px-6 h-60 -top-[4rem] py-0 space-x-12 w-3/4  left-[8rem] mx-auto text-center bg-white rounded-xl items-center  ">
                        <div className="basis-[20%] h-48 items-center ">
                            <img
                                src="/static/user-4.png"
                                className="object-fill h-full items-center  rounded-xl "
                            />
                        </div>
                        <div className="relative basis-[70%] text-start ">
                            <div class="flex justify-between place-items-center items-center">
                                <h2 className="font-semibold text-2xl">Ginko Sora</h2>
                                <div className="flex space-x-3 ">
                                    <div className="bg-purple-400 px-4 py-1 overflow-hidden rounded-full" onClick={() => setFollowing(!following)} >
                                        <button class=" text-white text-sm font-medium rounded-2xl px-4  "  >
                                            {
                                                following ? 'following' : 'follow'
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className="flex space-x-2  items-center text-sm">
                                0x7a86c0b06...9a63e
                                <IoCopyOutline className="h-4 w-4 ml-2" />
                            </p>

                            <p className="text-[0.85rem] mt-4 ">
                                {' '}
                                Welcome to the jungle where you'll find cute pastel animals that
                                will take your heart away. Its home to 20 amazing NFTs minted just
                                for you. come and get your soul 'pastel animal'{' '}
                            </p>
                            <div className="flex space-x-6 justify-center items-center  mt-4">
                                <div class="w-full h-[0.02rem] bg-purple-600"></div>
                                <div className="px-2 py-1 group rounded-md hover:bg-purple-400 " >
                                    <FiInstagram className=" text-purple-500  w-5 h-5 group-hover:text-white   " />
                                </div>
                                <div className="px-2 py-1 group rounded-md hover:bg-purple-400 " >
                                    <TbBrandMeta className=" text-purple-500  w-5 h-5  group-hover:text-white  " />
                                </div>
                                <div className="px-2 py-1 group rounded-md hover:bg-purple-400 " >
                                    <FiTwitter className=" text-purple-500  w-5 h-5  group-hover:text-white  " />
                                </div>
                                <div className="px-2 py-1 group rounded-md hover:bg-purple-400 " >
                                    <FiMail className=" text-purple-500  w-5 h-5  group-hover:text-white  " />
                                </div>
                                <div class="w-full h-[0.02rem] bg-purple-600"></div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[15rem]  " >
                        <div className="grid grid-cols-4 gap-8 mx-auto items-center">
                            <div className="flex flex-col bg-white rounded-xl">
                                <div className=" h-[15rem] relative " >
                                    <img src="/static/seller-1.png" alt="sell1" className="w-full h-full rounded-t-xl" />
                                    <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                        <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                                    </div>
                                </div>
                                <div className="h-[6rem] px-6 py-4 " >
                                    <h2 className="text-xl font-semibold mb-1" >Le Bron James</h2>
                                    <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                                    <div className="flex justify-between items-center mt-2 ">
                                        <p className="font-krona" >1.5ETH</p>
                                        <p className="text-sm" >32 in stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white rounded-xl">
                                <div className=" h-[15rem] relative " >
                                    <img src="/static/seller-1.png" alt="sell1" className="w-full h-full rounded-t-xl" />
                                    <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                        <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                                    </div>
                                </div>
                                <div className="h-[6rem] px-6 py-4 " >
                                    <h2 className="text-xl font-semibold mb-1" >Le Bron James</h2>
                                    <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                                    <div className="flex justify-between items-center mt-2 ">
                                        <p className="font-krona" >1.5ETH</p>
                                        <p className="text-sm" >32 in stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white rounded-xl">
                                <div className=" h-[15rem] relative " >
                                    <img src="/static/seller-1.png" alt="sell1" className="w-full h-full rounded-t-xl" />
                                    <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                        <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                                    </div>
                                </div>
                                <div className="h-[6rem] px-6 py-4 " >
                                    <h2 className="text-xl font-semibold mb-1" >Le Bron James</h2>
                                    <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                                    <div className="flex justify-between items-center mt-2 ">
                                        <p className="font-krona" >1.5ETH</p>
                                        <p className="text-sm" >32 in stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white rounded-xl">
                                <div className=" h-[15rem] relative " >
                                    <img src="/static/seller-1.png" alt="sell1" className="w-full h-full rounded-t-xl" />
                                    <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                        <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                                    </div>
                                </div>
                                <div className="h-[6rem] px-6 py-4 " >
                                    <h2 className="text-xl font-semibold mb-1" >Le Bron James</h2>
                                    <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                                    <div className="flex justify-between items-center mt-2 ">
                                        <p className="font-krona" >1.5ETH</p>
                                        <p className="text-sm" >32 in stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white rounded-xl">
                                <div className=" h-[15rem] relative " >
                                    <img src="/static/seller-1.png" alt="sell1" className="w-full h-full rounded-t-xl" />
                                    <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                        <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                                    </div>
                                </div>
                                <div className="h-[6rem] px-6 py-4 " >
                                    <h2 className="text-xl font-semibold mb-1" >Le Bron James</h2>
                                    <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                                    <div className="flex justify-between items-center mt-2 ">
                                        <p className="font-krona" >1.5ETH</p>
                                        <p className="text-sm" >32 in stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white rounded-xl">
                                <div className=" h-[15rem] relative " >
                                    <img src="/static/seller-1.png" alt="sell1" className="w-full h-full rounded-t-xl" />
                                    <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                        <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                                    </div>
                                </div>
                                <div className="h-[6rem] px-6 py-4 " >
                                    <h2 className="text-xl font-semibold mb-1" >Le Bron James</h2>
                                    <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                                    <div className="flex justify-between items-center mt-2 ">
                                        <p className="font-krona" >1.5ETH</p>
                                        <p className="text-sm" >32 in stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white rounded-xl">
                                <div className=" h-[15rem] relative " >
                                    <img src="/static/seller-1.png" alt="sell1" className="w-full h-full rounded-t-xl" />
                                    <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                        <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                                    </div>
                                </div>
                                <div className="h-[6rem] px-6 py-4 " >
                                    <h2 className="text-xl font-semibold mb-1" >Le Bron James</h2>
                                    <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                                    <div className="flex justify-between items-center mt-2 ">
                                        <p className="font-krona" >1.5ETH</p>
                                        <p className="text-sm" >32 in stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col bg-white rounded-xl">
                                <div className=" h-[15rem] relative " >
                                    <img src="/static/seller-1.png" alt="sell1" className="w-full h-full rounded-t-xl" />
                                    <div className=" absolute top-2 right-2 p-2 bg-[#f2f2f2aa] rounded-xl">
                                        <AiFillHeart className="fill-[#ac48de]  w-4 h-4" />
                                    </div>
                                </div>
                                <div className="h-[6rem] px-6 py-4 " >
                                    <h2 className="text-xl font-semibold mb-1" >Le Bron James</h2>
                                    <div className="h-[0.03rem] w-full bg-black mx-auto "></div>
                                    <div className="flex justify-between items-center mt-2 ">
                                        <p className="font-krona" >1.5ETH</p>
                                        <p className="text-sm" >32 in stock</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
};

export default author;
