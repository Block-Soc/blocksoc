const arrowRedirect = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>

const socials = [
    { text: 'Discord', link: "https://discord.gg/YRKHzc7ymb" },
    { text: 'Twitter', link: "https://twitter.com/block_soc" },
    { text: 'LinkedIn', link: "https://www.linkedin.com/company/blocksoc/" },
    { text: 'Instagram', link: "https://www.instagram.com/blocksoc/" }
]

const SocialLink = ({ text, link }) => {
    return (
        <div className='flex items-center gap-1 text-sm'>
            <a className="flex items-center gap-x-1" href={link} rel="noopener noreferrer" target="_blank">
                {text}
            </a>
            {arrowRedirect}
        </div>
    )
}

const Footer = () => {
    return (
        <div className="border-t border-zinc-700/30">
            <div className="flex flex-col-reverse md:flex-row justify-between px-4 py-8 md:px-12 max-w-5xl mx-auto text-base text-zinc-200" id="contact-section" >
                <div className='text-sm self-end'>© Blocksoc 2022</div>
                <div className="flex flex-col md:flex-row justify-end gap-y-10 md:gap-x-20">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-white">Connect</h3>
                        <div className="space-y-2">
                            {socials.map(({ text, link }) => {
                                return (
                                    <SocialLink key={text} text={text} link={link} />
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-white pb-2">Contact Us</h3>
                        <div className='gap-1 text-sm'>
                            <a href='mailto:info@blocksoc.io'>
                                <div className='flex items-center gap-2'>
                                    <p>info@blocksoc.io</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-white pb-2">About Us</h3>
                        <div className="flex items-center text-sm">
                            <a href="/manifesto.pdf" rel="noopener noreferrer" target="_blank">Manifesto</a>
                            {arrowRedirect}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Footer
