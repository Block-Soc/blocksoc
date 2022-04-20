import Image from 'next/image'

const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-8 max-w-5xl mx-auto px-4">
            <a href="/" className="md:hidden text-[0px]">
                <Image
                    alt="mobile logo"
                    width={70}
                    height={63}
                    priority={true}
                    src="/mobile_logo.png"
                >
                </Image>
            </a>
            <a href="/" className="hidden md:inline text-[0px]">
                <Image
                    alt="logo"
                    width={300}
                    height={59}
                    priority={true}
                    src="/logo.png"
                >
                </Image>
            </a>
            <nav className="flex items-center gap-x-1 md:gap-x-4">
                <a href="https://discord.gg/YRKHzc7ymb" target="_blank" rel="noopener noreferrer" className="flex gap-x-2 hover:no-underline bg-indigo-600 border-2 border-indigo-600 p-2 px-4 rounded-md hover:no-underlinehover:bg-zinc-700">
                    <span className="text-white font-medium">
                        Discord
                    </span>
                    <Image src='/discord.svg' alt="discord logo" className="text-white" width='20' height='20' />
                </a>
                <a target="_blank" href="/manifesto.pdf" rel="noopener noreferrer" className="hidden md:inline border-2 p-2 px-4 rounded border-indigo-600">
                    <span className="text-white font-medium">
                        Manifesto <span className="pl-1">📜</span>
                    </span>
                </a>
            </nav>
        </header>
    )
}

export default Navbar
