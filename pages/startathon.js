import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Head from 'next/head'
import Image from 'next/image'


const startathon = () => {
    return (
        <>
            <Navbar />
            <Head>
                <title>Blocksoc | Startathon</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="description" content="Blocksoc" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="pt-4">
                    <h1 className="title-text text-dynamic">Blockchain Startathon</h1>

                    <p className="max-w-[70ch] mx-auto text-center text-lg">
                        The CEF is a research-based forum that seeks to analyse crypto
                        assets based on sound principles, including consensus mechanisms, tokenomics and much more...
                    </p>
                </div>
            </Layout>
        </>

    )
}

export default startathon;