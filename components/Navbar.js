import Image from 'next/image'

const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-6 max-w-5xl mx-auto px-4">
            <a href="/">
                <Image
                    alt="mobile logo"
                    width={54}
                    height={60}
                    priority={true}
                    src="/mobile_logo.png"
                >
                </Image>
            </a>
            <nav className="flex items-center gap-x-1 md:gap-x-3">
                <a href="https://discord.gg/YRKHzc7ymb" target="_blank" rel="noopener noreferrer" className="flex gap-x-2 hover:no-underline bg-indigo-600 border-indigo-600 p-2 px-4 rounded-md hover:bg-indigo-700">
                    <span className="text-white text-sm font-medium">
                        Discord
                    </span>
                    <Image src='/discord.svg' alt="discord logo" className="text-white" width='20' height='20' />
                </a>
                <a target="_blank" href="/manifesto.pdf" rel="noopener noreferrer" className="hidden md:flex p-2 px-4 rounded-md bg-zinc-600 hover:bg-zinc-700 border-indigo-600 hover:no-underline">
                    <span className="text-white text-sm font-medium">
                        Manifesto
                    </span>
                </a>
            </nav>
        </header>
    )
}

export default Navbar
