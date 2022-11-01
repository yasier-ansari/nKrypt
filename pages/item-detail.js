import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const ItemDetail = () => {
    return (
        <div className="px-20 mt-12">
            <div className="flex space-x-12">
                <div className="h-[28rem] w-[28rem] basis-[40%]">
                    <img
                        src="/static/col-2-1.png"
                        className="object-cover h-[28rem] w-[28rem] rounded-xl "
                    />
                </div>
                <div className="basis-[50%] py-4">
                    <div className="flex justify-between items-center ">
                        <div>
                            <h2 className="font-medium text-[0.94rem] ">Noruporu</h2>
                        </div>
                        <div className="bg-white h-max border rounded-lg flex space-x-3 items-center px-2 py-1 ">
                            <AiFillHeart className="h-5 w-5 fill-purple-500" />
                            <button>23</button>
                        </div>
                    </div>
                    <h3 className="text-start mt-4 text-[1.65rem] font-semibold font-krona ">
                        Dress of KnightMare
                    </h3>
                    <p className="mt-4 ">
                        cursed by its creator, who ever owns this piece of collectibles; will surely
                        get a serene day.... wait its a bless 😁 get your own dress of knightmare to
                        show off how spooky yet still elegant your taste when it comes to dresses.
                    </p>
                    <div class="flex mt-8 justify-start space-x-32  items-center">
                        <div className="leading-tight">
                            <p className="text-sm text-gray-600">NFT listed at</p>
                            <p className="text-[1rem] -mt-1"> November 1, 2022 </p>
                        </div>
                        <div className="flex space-x-6 items-center ">
                            <img
                                src="/static/user-2.png"
                                alt=""
                                className="rounded-full h-16 w-16"
                            />
                            <div className="leading-tight items-center">
                                <p className="text-sm text-gray-600">owned by</p>
                                <p className="text-xl font-medium -mt-1 ">Ginko Sora</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 leading-tight">
                        <p className="text-[0.96rem] text-gray-500">Listed price</p>
                        <p className="text-[1.7rem] font-mont font-semibold">
                            1.03ETH{' '}
                            <span className="text-sm  font-medium text-gray-600">₹ 5,430</span>{' '}
                        </p>
                        <div className="flex w-max  text-white font-medium rounded-lg  text-lg space-x-4 px-8 mt-6 py-2 bg-purple-400 hover:bg-purple-700">
                            <HiOutlineShoppingCart className="h-6 w-6 stroke-3" />
                            <button> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
