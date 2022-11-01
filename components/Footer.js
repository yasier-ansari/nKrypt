import { CgMail } from 'react-icons/cg';
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
const Footer = () => {
    return (
        <footer className="w-full bg-white flex flex-col px-12 mt-20 ">
            <div className="flex space-x-12 mt-10 mb-6 ">
                <div className="basis-[30%]">
                    <h3 className="text-lg font-bold mb-3">myra</h3>
                    <p className="text-sm mb-4">
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maxime soluta
                        mollitia rerum, magnam rem tempor{' '}
                    </p>
                    <div className="flex space-x-8">
                        <AiFillInstagram className="h-6 w-6" />
                        <AiFillFacebook className="h-6 w-6" />
                        <AiOutlineTwitter className="h-6 w-6" />
                        <CgMail className="h-6 w-6" />
                    </div>
                </div>
                <div className=" w-[1.4px] mb-2 h-40 text-gray-500 fill-red-400 rounded bg-gray-700"></div>
                <div className="flex space-x-16 justify-center basis-[70%]">
                    <div className="basis-[40%]">
                        <p className="font-medium text-md mb-3">myra</p>
                        <ul className="space-y-3">
                            <li className="text-sm font-semibold">Discover</li>
                            <li className="text-sm font-semibold">wallet</li>
                            <li className="text-sm font-semibold">know more</li>
                        </ul>
                    </div>
                    <div className="basis-[40%]">
                        <h5 className="font-semibold text-lg mb-3">Join Our NewsLetter</h5>
                        <p>Stay in the loop with our latest features and exciting news at myra</p>
                        <div className="relative text-gray-600 w-full rounded-full mt-3 focus-within:text-gray-400">
                            <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                                <button
                                    type="submit"
                                    className="p-1 focus:outline-none  focus:shadow-outline"
                                >
                                    <BsArrowRight className="h-7 w-7 text-white stroke-2 bg-purple-700 p-2 rounded-full" />
                                </button>
                            </span>
                            <input
                                type="search"
                                name="q"
                                className="py-2 text-sm w-full text-gray-700 bg-gray-100 rounded-full pl-4 focus:outline-purple-600 focus:bg-white focus:text-gray-900"
                                placeholder="example@gmail.com..."
                                autoComplete="off"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-[70rem] mb-2 px-20 mx-auto h-[1.2px] bg-gray-100 rounded dark:bg-gray-700"></div>
            <div className="flex justify-between mb-2 items-center px-12 text-xs ">
                <p>Made with ❤️‍🔥 by Noru</p>
                <p>All Right Reserved &copy; myra utd ltd. 2022</p>
            </div>
        </footer>
    );
};

export default Footer;
