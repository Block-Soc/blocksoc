import Image from 'next/image'
import Layout from './Layout'
import Link from 'next/link'
import styles from '../styles/offerings.module.css'

const Offerings = () => {
    return (
        <div className={styles.container} id="offerings-section">
            <div className={styles.description}>
            </div>
            <div className={styles.offering_grid}>
                <div className={`${styles.card} ${styles.testing}`} id='first_offering'>
                    <Image
                        alt='tile image'
                        src={'/CEF.svg'}
                        width={100}
                        height={50}
                        layout="responsive"
                    />
                    <div className={styles.card_text}>
                        <h3>Cryptoasset Evaluation Forum</h3>
                        <p>The CEF seeks to analyse cryptoassets based on their
                            fundamental use case, core competencies,
                            ecosystem and financials among others.
                            {/* As a student analyst, you will have the opportunity to
                            educate yourself further in the domain of blockchain and cryptoassets. */}
                        </p>
                        <br />
                        <p>Learn more about the process and apply&nbsp;
                            <Link href='/CEF'>
                                <a>here</a>
                            </Link>
                            .</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image
                        alt='tile image'
                        src={'/Dapp.svg'}
                        width={100}
                        height={40}
                        layout="responsive"
                    />
                    <div className={styles.card_text}>
                        <h3>DApp Open Source Project</h3>
                        <p>Through hands-on involvement, learn about the development and utility of DApps &amp; Web3 projects.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image
                        alt='tile image'
                        src={'/guest_speaker.svg'}
                        width={100}
                        height={40}
                        layout="responsive"
                    />
                    <div className={styles.card_text}>
                        <h3>Guest Speakers</h3>
                        <p>Discussions with significant figures
                            &amp; professionals from leading blockchain companies.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image
                        alt='tile image'
                        src={'/startathon.svg'}
                        width={100}
                        height={40}
                        layout="responsive"
                    />
                    <div className={styles.card_text}>
                        <h3>Blockchain Startathon</h3>
                        <p>An exceptional opportunity for students to learn about innovation in the domains of Blockchain.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image
                        alt='tile image'
                        src={'/edcontent.svg'}
                        width={100}
                        height={40}
                        layout="responsive"
                    />
                    <div className={styles.card_text}>
                        <h3>Educational Content</h3>
                        <p>Content will be published and circulated via our socials, website and newsletter.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Offerings

