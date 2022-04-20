import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';


const advisors = () => {
    return (
        <>
            <Navbar />
            <main className="px-4 text-white py-8 max-w-5xl mx-auto">
                <h1 className="text-white text-4xl md:text-4xl md:py-8 font-bold tracking-tighter mb-4 underline underline-offset-4 decoration-4 md:decoration-8 decoration-indigo-800">Advisors</h1>
                <div className="flex flex-col md:flex-row gap-x-8">
                    <div className="p-6 pr-8 rounded-3xl bg-zinc-800 border-0 border-l-8 rounded-l-none border-indigo-800">
                        <div className="flex items-center gap-x-4 mb-4">
                            <Image className="rounded-full bg-blue-200" src='/Dapp.svg' height={100} width={100} />
                            <div className="flex flex-col justify-between">
                                <h2 className="text-3xl font-semibold">Lory Kehoe</h2>
                                <div className="flex gap-x-2">
                                    {/* <LinkedInIcon fontSize="large" /> */}
                                    {/* <TwitterIcon fontSize="large" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="pl-2">
                            <p><span className="font-bold text-white">Coinbase</span> - Director of NFT Success</p>
                            <p><span className="font-bold text-white">Blockchain Ireland</span> - Founder</p>
                            <p><span className="font-bold text-white">Deloitte</span> - Blockchain Lab Founder</p>
                            {/* <p>BNY Mellon - Former Head of Digital Assets</p> */}
                        </div>
                    </div>

                    <div className="p-6 pr-8 rounded-3xl bg-zinc-800 border-0 border-l-8 rounded-l-none border-indigo-800">
                        <div className="flex items-center gap-x-4 mb-4">
                            <Image className="rounded-full bg-blue-200" src='/Dapp.svg' height={100} width={100} />
                            <div>
                                <h2 className="text-3xl font-semibold tracking">Oisin Lyons</h2>
                                <div className="flex gap-x-2">
                                    {/* <LinkedInIcon fontSize="large" /> */}
                                    {/* <TwitterIcon fontSize="large" /> */}
                                </div>
                            </div>
                        </div>
                        <div className=" pl-2 ">
                            <p><span className="font-bold">VRYNT</span> - Operations &amp; Strategy</p>
                            <p><span className="font-bold">BaconDAO</span> - Co-founder</p>
                            <p><span className="font-bold">CityDAO</span> - Operations Lead</p>
                        </div>
                    </div>
                </div>
            </main>
        </>


    )
}

export default advisors