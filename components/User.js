import { BsFillCircleFill } from 'react-icons/bs';

const User = () => {
    return (
        <div className="container pt-20 flex flex-col space-y-4">
            <div>
                <a
                    href="/"
                    className="mt-6  md:mx-0 text-sm md:text-md lg:text-lg text-start bg-gradient-to-l from-[#F8D0C4] via-[#D4B1EC] to-[#F5B8CD] px-6 py-2 rounded-2xl font-medium "
                >
                    Get Started for FREE
                </a>
            </div>
            <div className="flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start">
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full">
                        <img src="/static/avt1.png" alt="" />
                    </div>
                    <div className="w-8 h-8 rounded-full">
                        <img src="/static/avt2.png" alt="" />
                    </div>
                    <div className="w-8 h-8 rounded-full">
                        <img src="/static/avt3.png" alt="" />
                    </div>
                    <div className="w-8 h-8 rounded-full">
                        <img src="/static/avt4.png" alt="" />
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <div>
                        <BsFillCircleFill className="text-xs text-purple-700 animate-pulse w-3 h-3" />
                    </div>
                    <div className="text-xs font-medium text-gray-400">40k people online</div>
                </div>
            </div>
        </div>
    );
};

export default User;
