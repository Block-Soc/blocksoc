import Image from 'next/image'
import Link from 'next/link'
import Layout from "./Layout";


const Contact = () => {
    return (
        <Layout>
            <div className="grid grid-cols-3 md:grid-cols-[.3fr,.3fr,.3fr] py-6 pt-8 pr-4" id="contact-section">
                <div className="flex flex-col justify-between">
                    <Link href="/">
                        <a>
                            <Image
                                alt="logo"
                                width={73}
                                height={70}
                                priority={true}
                                src="/logo.png">
                            </Image>
                        </a>
                    </Link>
                    <span className="text-blue-900/80">&copy; Blocksoc 2022.</span>
                </div>
                <div className="flex flex-col items-start">
                    <span className="underline underline-offset-2">Socials</span>
                    <a href="https://www.instagram.com/blocksoc/" rel="noopener" target='_blank' className="text-blue-900/80 visited:text-blue-900/80">Instagram</a>
                    <a href="https://www.linkedin.com/company/blocksoc/" rel="noopener" target='_blank' className="text-blue-900/80 visited:text-blue-900/80">LinkedIn</a>
                    <a href="https://twitter.com/block_soc" rel="noopener" target='_blank' className="text-blue-900/80 visited:text-blue-900/80">Twitter</a>
                    <a href="https://www.facebook.com/BlockSoc-101816239000113" rel="noopener" target='_blank' className="text-blue-900/80 visited:text-blue-900/80">Facebook</a>
                </div>
                <div className="flex flex-col items-start">
                    <span className="underline underline-offset-2">Contact</span>
                    <span className="text-blue-900/80">info@blocksoc.io</span>
                </div>
            </div >
        </Layout>
    )
}

export default Contact
