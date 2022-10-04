import Head from 'next/head';
import Image from 'next/image';
import Card from '../public/static/hero-card-1.png';
import User from '../components/User';
import Seller from '../components/Seller';
import Hot from '../components/Hot';
import Footer from '../components/Footer';

export default function Home() {
    const imgStyle = {
        backgroundImage: `url('/static/card-bg.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'content-box',
        backgroundPosition: 'center',
        backgroundSize: 'auto 130%',
    };
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
            <main className="px-20">
                <section
                    id="hero"
                    className="container scroll-mt-[80px] flex flex-col md:flex-row justify-around items-center py-8 mb-16 md:py-12 lg:py-2 "
                >
                    <div className="basis-[40%] flex flex-col mt-12 text-center mx-auto md:text-start md:mx-0 gap-y-0 items-start order-2  md:py-12 lg:py-8 lg:px-0 md:px-0 md:order-1">
                        <div className="text-2xl leading-snug  font-pop text-start font-semibold md:px-0 md:mx-0 md:text-2xl lg:text-3xl xl:text-5xl mb-0">
                            Buy Sell and Trade <br />
                            <p className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#49DFC1] to-[#ca38ff]">
                                Creative NFTs
                            </p>
                        </div>
                        <div className="text-start mt-8 flex flex-col space-y-1 md:space-y-2 border-transparent transition ease-in-out">
                            <p className="font-jak text-sm sm:text-md md:text-md lg:text-lg leading-tight font-regular text-start md:text-start mb-4">
                                Surf away The Worlds most Secure Marketplace to discover a large
                                collection of creative NFTs
                            </p>
                            <User />
                        </div>
                    </div>
                    <div
                        className=" flex-initial max-w-[29rem]  overflow-visible md:max-w-full md:basis-[50%] mx-auto order-1 md:order-2"
                        style={imgStyle}
                    >
                        <div className="mx-auto items-center overflow-visible flex flex-col space-y-6 bg-white rounded-[2.6rem] pb-6 border-[5px] border-purple-400 w-max ">
                            <div className="w-[25rem] rounded-[2.4rem]">
                                <Image
                                    src={Card}
                                    alt="card"
                                    className="rounded-[2.4rem]"
                                    // width={350}
                                    // height={250}
                                />
                            </div>
                            <div className="font-krona text-xl  ">Guss Serendipity</div>
                        </div>
                    </div>
                </section>
                <Seller />
                <Hot />
            </main>
            <Footer />
        </div>
    );
}
