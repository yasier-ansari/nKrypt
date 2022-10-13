import Head from 'next/head';
import Seller from '../components/Seller';
import Hot from '../components/Hot';
import Hero from '../components/Hero';
import MainSlider from '../components/MainSlider';
import Filter from '../components/Filter';

export default function Home() {
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
            <main className="px-32">
                <Hero />
                <Seller />
                <Hot />
                <MainSlider />
                <Filter />
            </main>
        </div>
    );
}
