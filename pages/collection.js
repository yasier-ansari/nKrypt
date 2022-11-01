import Image from "next/image"
import Head from 'next/head';
import { AiFillHeart } from 'react-icons/ai'
import { useState } from "react";

const collection = () => {
    const [collectionLike, setCollectionLike] = useState(false)
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
                <div className="w-full h-[15rem]" >
                    <img className="w-screen h-full object-fill "
                        src='/static/collection-banner.jpg'
                    />
                </div>
                <div className="h-[80%] mx-auto items-center relative px-20 " >
                    <div className="absolute  flex px-6 h-60 -top-[4rem] py-0 space-x-12 w-3/4  left-[8rem] mx-auto text-center bg-white rounded-xl items-center  " >
                        <div className="basis-[20%] h-48 items-center " >
                            <img src='/static/col-1-3.png' className="object-fill h-full items-center  rounded-xl " />
                        </div>
                        <div className="relative basis-[70%] text-start " >
                            <h2 className="font-semibold text-2xl" >Jungle Safary NFT Collection</h2>
                            <p className="text-[0.85rem] mt-4 "  > Welcome to the jungle where you'll find cute pastel animals that will take your heart away. Its home to 20 amazing NFTs minted just for you. come and get your soul 'pastel animal' </p>
                            <div className="flex space-x-6 justify-center   mt-4" >
                                <div className="basis-[25%] text-center border border-black rounded-xl items-center px-4 py-2" >
                                    <h2 className="text-[0.8rem]">Price Range</h2>
                                    <p className="font-semibold text-[0.75rem]" >1.1ETH - 3.0ETH</p>
                                </div>
                                <div className="basis-[25%] text-center border border-black rounded-xl items-center px-4 py-2" >
                                    <h2 className="text-[0.8rem]">Item</h2>
                                    <p className="font-semibold text-[0.88rem]" >20 🖼️ </p>
                                </div>
                                <div className="basis-[25%] text-center border border-black rounded-xl items-center px-4 py-2" >
                                    <h2 className="text-[0.8rem]">Liked</h2>
                                    <p className="font-semibold text-[0.88rem]" >230 💖</p>
                                </div>
                                <div className="basis-[25%] text-center border border-black rounded-xl items-center px-4 py-2" >
                                    <h2 className="text-[0.8rem]">Creator</h2>
                                    <p className="font-semibold text-[0.88rem]" >noru poru</p>
                                </div>
                            </div>
                            <div className="absolute -top-5 -right-12 p-2 bg-[#ada8a850] rounded-xl ">
                                <AiFillHeart className='fill-[#d68afc] w-6 h-6' />
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
            </main>
        </div>
    )
}

export default collection