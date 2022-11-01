import React from 'react';

const Hot = () => {
    return (
        <section className="mx-auto items-center my-12">
            <h3 className=" mb-6 font-semibold text-2xl text-center">Hot Collections 🔥</h3>
            <div className="grid grid-cols-3 gap-x-12 justify-center mx-auto items-center ">
                <div className="flex flex-col space-y-2 bg-white rounded-[2.5rem]  w-72">
                    <div>
                        <img
                            src="/static/col-1-1.png"
                            alt="col-1"
                            className="rounded-t-[2.5rem] w-72"
                        />
                    </div>
                    <div className="flex space-x-2 mx-auto">
                        <img src="/static/col-1-2.png" alt="col-1-2" className="h-[5.5rem]" />
                        <img src="/static/col-1-3.png" alt="col-1-3" className="h-[5.5rem]" />
                        <img src="/static/col-1-4.png" alt="col-1-4" className="h-[5.5rem]" />
                    </div>
                    <span className="text-end pr-4 text-xs font-semibold">+ 12 items</span>
                    <div className="px-4 pb-6 flex space-x-6 justify-between items-center">
                        <div>
                            <img
                                src="/static/user-6.png"
                                alt="user-2"
                                className="rounded-full h-12 w-12"
                            />
                            <p className="text-center font-semibold text-xs mt-2">Noru Poru</p>
                        </div>
                        <div className="items-center">
                            <h4 className="text-md font-semibold">Jungle Safary</h4>
                            <div className="flex space-x-2">
                                <p className="w-max font-medium text-xs px-2 py-1 bg-[#ffc6ff] rounded-full">
                                    3D
                                </p>
                                <p className="w-max font-medium text-xs px-2 py-1 bg-[#ffc6ff] rounded-full">
                                    Animal
                                </p>
                                <p className="w-max font-medium text-xs px-2 py-1 bg-[#ffc6ff] rounded-full">
                                    Pastel
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 mx-auto items-center justify-end">
                    <div className="flex flex-col space-y-2 bg-white rounded-[2.5rem]  w-72">
                        <div className="h-48">
                            <img
                                src="/static/col-3-1.png"
                                alt="col-1"
                                className="rounded-t-[2.5rem] object-cover h-48 w-72"
                            />
                        </div>
                        <div className="flex justify-evenly">
                            <img
                                src="/static/col-3-2.png"
                                alt="col-1-2"
                                className="h-[5.5rem] object-cover "
                            />
                            <img
                                src="/static/col-3-3.png"
                                alt="col-1-3"
                                className="h-[5.5rem] object-cover "
                            />
                            <img
                                src="/static/col-3-4.png"
                                alt="col-1-4"
                                className="h-[5.5rem] object-cover "
                            />
                        </div>
                        <span className="text-end pr-4 text-xs font-semibold">+ 12 items</span>
                        <div className="px-4 pb-6 flex space-x-6 justify-between items-center">
                            <div>
                                <img
                                    src="/static/user-2.png"
                                    alt="user-2"
                                    className="rounded-full h-12 w-12"
                                />
                                <p className="text-center font-semibold text-xs mt-2">Noru Poru</p>
                            </div>
                            <div className="items-center">
                                <h4 className="text-md font-semibold">Pastel Rooms</h4>
                                <div className="flex space-x-2">
                                    <p className="w-max font-medium text-xs px-2 py-1 bg-[#ffc6ff] rounded-full">
                                        3D
                                    </p>
                                    <p className="w-max font-medium text-xs px-2 py-1 bg-[#ffc6ff] rounded-full">
                                        Animal
                                    </p>
                                    <p className="w-max font-medium text-xs px-2 py-1 bg-[#ffc6ff] rounded-full">
                                        Pastel
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 mx-auto items-center justify-end">
                    <div className="flex flex-col space-y-2 bg-white rounded-[2.5rem]  w-72">
                        <div className="w-72 h-48">
                            <img
                                src="/static/col-2-1.png"
                                alt="col-1"
                                className="rounded-t-[2.5rem] object-cover w-72 h-48 "
                            />
                        </div>
                        <div className="flex justify-evenly">
                            <img
                                src="/static/col-2-2.png"
                                alt="col-1-2"
                                className="h-[5.5rem] object-cover w-[5.5rem] "
                            />
                            <img
                                src="/static/col-2-3.png"
                                alt="col-1-3"
                                className="h-[5.5rem] object-cover w-[5.5rem] "
                            />
                            <img
                                src="/static/col-2-4.png"
                                alt="col-1-4"
                                className="h-[5.5rem] object-cover w-[5.5rem] "
                            />
                        </div>
                        <span className="text-end pr-4 text-xs font-semibold">+ 12 items</span>
                        <div className="px-4 pb-6 flex space-x-6 justify-between items-center">
                            <div>
                                <img
                                    src="/static/user-2.png"
                                    alt="user-2"
                                    className="rounded-full h-12 w-12"
                                />
                                <p className="text-center font-semibold text-xs mt-2">Noru Poru</p>
                            </div>
                            <div className="items-center">
                                <h4 className="text-md font-semibold">Exotic Dress</h4>
                                <div className="flex space-x-2">
                                    <p className="w-max font-medium text-xs px-2 py-1 bg-[#ffc6ff] rounded-full">
                                        3D
                                    </p>
                                    <p className="w-max font-medium text-xs px-2 py-1 bg-[#ffc6ff] rounded-full">
                                        Animal
                                    </p>
                                    <p className="w-max font-medium text-xs px-2 py-1 bg-[#ffc6ff] rounded-full">
                                        Pastel
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hot;
