import Link from 'next/link'
import Image from 'next/image'
import Layout from './Layout'
import styles from '../styles/hero.module.css'

const HeroSection = () => {

    return (
        <Layout>
            <div className={styles.container} id="home-section">
                <div className={styles.hero}>

                    <h1>Ireland's first student Blockchain society</h1>
                    <div className={styles.columns}>
                        <div className={styles.image_container}>
                            <Image src={'/hero.svg'} alt='hero image' height={300} width={300} />
                        </div>
                        <div>
                            <p>
                                Connecting students, industry leaders, and academics to foster collaborative learning
                                &amp; networking in the fields of Blockchain and Cryptocurrency.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className={styles.secondgrid}>
                    <p>Blurb about us and the roadmap and image of roadmap. Culpa anim amet ex fugiat amet.Minim duis proident sunt
                        mollit consectetur dolor.Laborum amet velit commodo eu
                        voluptate cupidatat ad nostrud adipisicing fugiat consectetur
                    </p>
                    <div>
                        <div className={styles.timeline_img}><Image alt="timeline" src={'/timeline.png'} height={400} width={800} /></div>
                        <p >
                            Now taking applications for the Cypto Asset Evaluation Forum, register your interest below!
                        </p>
                        <Link href='/signup'><button>Get Involved</button></Link>
                    </div>
                </div> */}
            </div>
        </Layout >
    )
}

export default HeroSection
