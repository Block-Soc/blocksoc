const HeroSection = () => {
    return (
        <div className="p-4 py-12 md:py-24 mx-auto max-w-5xl">
            <h1 className="text-5xl text-center md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-indigo-300">
                {/* DAO built by students<br /><span className="text-indigo-500"> for students</span> */}
                The DAO for students
            </h1>
            <p className="text-zinc-200  text-center text-lg font-semibold md:text-3xl pt-4">
                Join a community of innovators.<br />
            </p>
            <div className="flex flex-wrap mt-8 gap-3 justify-center">
                <span className="text-indigo-400 text-sm text-center bg-indigo-600/20 hover:bg-indigo-400/20 hover:scale-[1.02] cursor-default transition-all rounded-md py-1.5 px-2.5">Acquire core skills</span>
                <span className="text-indigo-400 text-sm text-center bg-indigo-600/20 hover:bg-indigo-400/20 hover:scale-[1.02] cursor-default transition-all rounded-md py-1.5 px-2.5">Build an on-chain CV</span>
                <span className="text-indigo-400 text-sm text-center bg-indigo-600/20 hover:bg-indigo-400/20 hover:scale-[1.02] cursor-default transition-all rounded-md py-1.5 px-2.5">Contribute to the DAO</span>
            </div>
        </div >
    )
}

export default HeroSection
