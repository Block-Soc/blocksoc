import Image from 'next/image'

const Offerings = () => {
    return (
        <div className="flex flex-col md:flex-row gap-x-8 gap-y-6 py-6 px-4 md:py-12 text-zinc-200 max-w-5xl mx-auto">
            <div className="flex flex-1 flex-col md:py-8 md:pb-4 gap-y-6 p-4 py-6 bg-zinc-700/30 rounded-xl ">
                <div className="flex items-center gap-x-2 text-zinc-200">
                    <Image src="/engage.svg" alt="engage icon" width="40" height="40" />
                    <h2 className="text-2xl font-bold text-white">Engage</h2>
                </div>
                <p className="text-lg">
                    Join the discord, introduce yourself and engage with the BlockSoc community to
                    discover how you can get involved and begin your journey
                </p>
                <a href="https://discord.gg/YRKHzc7ymb" className="bg-indigo-600 self-start flex items-center transition duration-200 py-2 rounded px-4 font-bold">
                    <span className="pr-2 text-white">Join Discord</span>
                    <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
            <div className="flex flex-1 flex-col md:py-8 gap-y-6 p-4 py-6 bg-zinc-700/30 rounded-xl">
                <div className="flex items-center gap-x-2">
                    <Image src="/learn.svg" alt="learn icon" width="40" height="40" />
                    <h2 className="text-2xl font-bold text-white">Learn</h2>
                </div>
                <p className="text-lg">
                    Access a range of comprehensive blockchain courses that will prepare you for
                    entry into our guilds. Students can enrol in courses for free.
                </p>
                <p className="font-bold py-2 bg-zinc-600/30 rounded px-4 self-start">Coming Soon!</p>
            </div>
            <div className="flex flex-1 flex-col md:py-8 gap-y-6 p-4 py-6 bg-zinc-700/30 rounded-xl">
                <div className="flex items-center gap-x-2">
                    <Image src="/build.svg" alt="build icon" width="40" height="40" />
                    <h2 className="text-2xl font-bold text-white">Build</h2>
                </div>
                <p className="text-lg text-white">
                    Join a guild that suits your profile, become a core contributor to BlockSocDAO through collaborating with peers and building a portfolio of work.
                </p>
                <p className="font-bold py-2 bg-zinc-600/30 rounded px-4 self-start">Coming Soon!</p>
            </div>
        </div>
    );
}

export default Offerings;
