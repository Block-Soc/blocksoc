import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="border-t border-zinc-700/30">
            <div className="px-4 py-8 max-w-5xl mx-auto text-base text-zinc-200" id="contact-section" >
                <div className="flex justify-between md:gap-x-32" >
                    <div className="hidden md:flex md:flex-col">
                        <div>
                            <Image
                                alt="logo"
                                width={300}
                                height={59}
                                priority={true}
                                src="/logo.png"
                            >
                            </Image>
                        </div>
                        <div>
                            <p className="text-right">Contact us: info@blocksoc.io</p>
                        </div>
                    </div>
                    <div className="flex gap-x-10 md:gap-x-20">
                        <div className="flex flex-col">
                            <h3 className="font-bold text-white text-xl pb-2">Connect</h3>
                            <div className="flex flex-col gap-y-2">
                                <a className="flex items-center gap-x-1" href="https://discord.gg/YRKHzc7ymb" rel="noopener noreferrer" target="_blank">
                                    <Image src="/discord.svg" alt="discord icon" height={20} width={18} />Discord
                                </a>
                                <a className="flex items-center gap-x-1" href="https://twitter.com/block_soc" rel="noopener noreferrer" target="_blank">
                                    <TwitterIcon fontSize="small" />
                                    Twitter
                                </a>
                                <a className="flex items-center gap-x-1" href="https://www.linkedin.com/company/blocksoc/" rel="noopener noreferrer" target="_blank">
                                    <LinkedInIcon fontSize="small" />
                                    LinkedIn
                                </a>
                                <a className="flex items-center gap-x-1" href="https://www.instagram.com/blocksoc/" rel="noopener noreferrer" target="_blank">
                                    <InstagramIcon fontSize="small" />
                                    Instagram
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-bold text-white text-xl pb-2">About Us</h3>
                            <div className="flex flex-col gap-y-2">
                                <a href="/manifesto.pdf" rel="noopener noreferrer" target="_blank">Manifesto</a>
                                <a href="https://blocksocdao.notion.site/BlocksocDAO-69b3193dc50f46518b087ab18ba5b2c1" rel="noopener noreferrer" target="_blank">Wiki</a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex flex-col">
                        <h3 className="font-bold text-white text-xl">People</h3>
                        <div className="flex flex-col gap-y-1">
                            <Link href="/advisors">
                                <a>Advisors</a>
                            </Link>
                            <Link href="/advisors">
                                <a>Partners</a>
                            </Link>
                        </div>
                    </div> */}
                </div >
            </div >
        </div >
    )
}

export default Footer
