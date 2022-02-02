const Offerings = () => {
    return (
        <div className="grid md:grid-cols-2 py-8 gap-6 md:gap-14 md:py-16 px-4 sm:px-8 md:px-16 lg:px-48 xl:px-48 bg-stone-400/10 border-0 border-b border-stone-300 border-solid" id="offerings-section">

            <div className="md:px-8 rounded-lg bg-white text-black shadow-md border border-solid border-stone-200 p-4" id='first_offering'>
                <h3 className="text-2xl text-[#2a274b]">📈 Cryptoasset Evaluation Forum</h3>
                <p>The CEF seeks to analyse cryptoassets based on their
                    fundamental use case, core competencies,
                    ecosystem and financials.
                </p>
            </div>

            <div className="md:px-8 rounded-lg bg-white text-black shadow-md border border-solid border-stone-200 p-4">
                <h3 className="text-2xl text-[#2a274b]">💡 Blockchain Startathon</h3>
                <p>An exceptional opportunity for students to learn about innovation in the domains of Blockchain.</p>
            </div>

            <div className="md:px-8 rounded-lg bg-white text-black shadow-md border border-solid border-stone-200 p-4">
                <h3 className="text-2xl text-[#2a274b]">👨‍🏫 &nbsp; Guest Speakers</h3>
                <p>Discussions with significant figures
                    &amp; professionals from leading blockchain companies.
                </p>
            </div>

            <div className="md:px-8 rounded-lg bg-white text-black shadow-md border border-solid border-stone-200 p-4">
                <h3 className="text-2xl text-[#2a274b]">📚 Educational Content</h3>
                <p>Content will be published and circulated via our socials, website and newsletter.</p>
            </div>
        </div>
    )
}

export default Offerings

