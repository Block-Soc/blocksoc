const HorizontalTimeline = () => {
    return (
        <div className="bg-gradient-to-b from-[#201f1f] via-[#201f1f] to-indigo-900/5">
            <div className="px-4 md:px-6 pb-12 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl pb-4 font-bold text-zinc-200">Roadmap</h2>
                <ol className="mt-4 relative border-l-8 border-indigo-600">
                    <li className="mb-8 ml-4 text-white">
                        <div className="absolute w-4 h-4 left-[-12px] rounded-full mt-1.5 bg-emerald-400 animate-pulse"></div>
                        <h3 className="my-1 text-2xl md:text-2xl font-bold">Build Community</h3>
                        <p className="mb-1 text-lg text-zinc-200">
                            Onboard students &amp; establish ambassadors from
                            universities across the globe.
                        </p>
                    </li>
                    <li className="mb-8 ml-4 text-white">
                        <div className="absolute w-4 h-4 left-[-12px] rounded-full mt-1.5 bg-slate-400"></div>
                        <h3 className="my-1 text-2xl md:text-2xl font-bold">Raise Funds</h3>
                        <p className="mb-1 text-lg text-zinc-200">
                            Raise funds from the layer 1 protocol we
                            are building our DAO on and gain support
                            from key partners &amp; VC firms.
                        </p>
                    </li>
                    <li className="mb-8 ml-4 text-white">
                        <div className="absolute w-4 h-4 left-[-12px] rounded-full mt-1.5 bg-slate-400"></div>
                        <h3 className="my-1 text-2xl md:text-2xl font-bold">Build Product</h3>
                        <p className="mb-1 text-lg text-zinc-200">
                            Invite students who want to become core
                            contributors and get involved building out our DAO
                            infrastructure &amp; guilds.
                        </p>
                    </li>
                    <li className="mb-8 ml-4 text-white">
                        <div className="absolute w-4 h-4 left-[-12px] rounded-full mt-1.5 bg-slate-400"></div>
                        <h3 className="my-1 text-2xl md:text-2xl font-bold">NFT Drop</h3>
                        <p className="mb-1 text-lg text-zinc-200">
                            Launch our NFT drop,
                            encompassing gated entry into our guilds,
                            as well as announce tokenonmics &amp; governance plans
                        </p>
                    </li>
                    <li className="ml-4 text-white">
                        <div className="absolute w-4 h-4 left-[-12px] rounded-full mt-1.5 bg-slate-400"></div>
                        <h3 className="my-1 text-2xl md:text-2xl font-bold">DAO Launch</h3>
                        <p className="mb-1 text-lg text-zinc-200">
                            Our DAO will be fully operational from Tiers 1-3.
                            Members can join a guild, complete mock bounties,
                            build their portfolios, vote on and write proposals.
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default HorizontalTimeline