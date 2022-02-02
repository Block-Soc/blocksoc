import Image from 'next/image'
import Layout from './Layout'

const HeroSection = () => {

    return (
        <Layout>
            <div className="text-center scroll-mt-24 leading-[200%]" id="home-section">
                <div className="grid md:grid-cols-[1fr,.6fr] md:py-12">
                    <div className=" mx-auto sm:pl-8 row-start-2 md:row-start-1 md:row-end-3 md:items-center md:col-start-2 md:row-start-0 md:m-auto">
                        <Image src={'/hero.svg'} className="" alt='hero image' height={350} width={350} />
                    </div>
                    <h1 className="title-text text-dynamic mx-8 md:text-left md:mx-auto">Ireland's student Blockchain society</h1>
                    <p className="max-w-[40ch] text-xl md:text-left mb-8 md:col-start-1">
                        Connecting students, industry leaders, and academics to foster collaborative learning
                        &amp; networking in the fields of <span className="text-indigo-800">Blockchain</span> and <span className="text-indigo-800">Cryptocurrency</span>.
                    </p>
                </div>
            </div>
        </Layout >
    )
}

export default HeroSection
