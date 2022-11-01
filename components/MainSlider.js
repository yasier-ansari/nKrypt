import { useState, useEffect, useCallback } from 'react';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import images from '../images';

const MainSlider = () => {
    const data = [
        {
            title: 'hello world',
            id: 1,
            name: 'yasier',
            price: '1.22ETH',
            like: 243,
            image: images.user1,
            main: images.col13,
            read: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
        },
        {
            title: 'bye world',
            id: 1,
            name: 'ansari',
            price: '1ETH',
            like: 240,
            image: images.user2,
            main: images.seller2,
            read: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
        },
        {
            title: 'hello maniac',
            id: 1,
            name: 'noru',
            price: '1.82ETH',
            like: 2430,
            image: images.user3,
            main: images.seller3,
            read: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
        },
        {
            title: 'bye world',
            id: 1,
            name: 'poru',
            price: '0.8ETH',
            like: 23,
            image: images.user4,
            main: images.seller4,
            read: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
        },
    ];

    const [idNumber, setIdNumber] = useState(0);
    const [like, setLike] = useState(false);
    const rightArrow = () => {
        if (idNumber + 1 >= data.length) {
            setIdNumber(0);
        } else {
            setIdNumber(idNumber + 1);
        }
    };
    const leftArrow = () => {
        if (idNumber === 0) {
            setIdNumber(data.length - 1);
        } else {
            setIdNumber(idNumber - 1);
        }
    };
    const imgStyle = {
        backgroundImage: 'url(`${data[0].main}`)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bg-bottom',
    };
    console.log(like)

    return (
        <section className="mx-auto mt-20">
            <h2 className=" text-2xl font-semibold text-center mb-10">Trending NFTs 📈 </h2>
            <div className="grid grid-cols-2 w-4/6  bg-white rounded-[2rem] mx-auto items-center divide-x justify-center">
                <div className="flex flex-col space-y-3 px-10 mx-auto py-8 ">
                    <h3 className="my-3 text-2xl font-semibold ">{data[idNumber].title}</h3>
                    <div className="flex justify-start space-x-6 items-center ">
                        <div className="flex items-center">
                            <img
                                src={data[idNumber].image.src}
                                alt="user"
                                className="w-10 h-10 rounded-full "
                            />
                            <p>{data[idNumber].name}</p>
                        </div>
                        <div className="flex">
                            <BsFillBookmarkPlusFill className="w-8 h-8 " />
                            <p>{data[idNumber].name}</p>
                        </div>
                    </div>
                    <h3 className="pl-12">{data[idNumber].price}</h3>
                    <p>{data[idNumber].read}</p>
                    <div className="flex space-x-12 items-center ">
                        <a
                            href=""
                            className=" font-medium rounded-xl h-max bg-gray-200 px-8 py-2  "
                        >
                            View
                        </a>
                        <div onClick={() => setLike(!like)} >
                            <AiFillHeart className={` ${!like && 'hidden '}  w-10 h-10 `} />
                            <AiOutlineHeart className={` ${like && 'hidden'}  w-10 h-10 `} />

                        </div>


                    </div>
                    <div className="flex justify-between ">
                        <button
                            className="bg-[#fcccff] hover:bg-[#f456ff]  px-4 py-1 rounded-xl group "
                            onClick={leftArrow}
                        >
                            <TiArrowLeftThick className="w-6 h-6 group-hover:fill-white" />
                        </button>
                        <button
                            className="bg-[#fcccff] hover:bg-[#f456ff]  px-4 py-1 rounded-xl group "
                            onClick={rightArrow}
                        >
                            <TiArrowRightThick className="w-6 h-6 group-hover:fill-white" />
                        </button>
                    </div>
                </div>
                <div className="h-full ">
                    {/* <div> */}
                    <img
                        src={data[idNumber].main.src}
                        alt="seller6"
                        className="h-full object-cover rounded-br-[2rem] rounded-tr-[2rem] "
                    />
                </div>
                {/* </div> */}
            </div>
        </section>
    );
};

export default MainSlider;
