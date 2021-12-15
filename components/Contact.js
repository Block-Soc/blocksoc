import { arrayUnion, doc, updateDoc } from "@firebase/firestore";
import { db } from "../firebase"
import { useState } from "react"
import styles from '../styles/contact.module.css'
import Image from 'next/image'
import Layout from "./Layout";

const Contact = () => {
    const [newsletterEmail, setNewsletterEmail] = useState("")

    const newsletterSignUpHandler = async () => {
        await updateDoc(doc(db, "Blocksoc", "newsletter"), { emails: arrayUnion(newsletterEmail) });
    }
    return (
        <Layout>
            <div className={styles.container} id="contact-section">
                <div className={styles.title}><h3>Connect with us!</h3></div>
                <div className={styles.socials}>
                    <a href="https://www.instagram.com/blocksoc/" rel="noopener" target='_blank'>
                        <Image alt="instagram" src={'/instagram.png'} width={35} height={35} />
                    </a>
                    <a href="https://www.linkedin.com/company/blocksoc/?viewAsMember=true" rel="noopener" target='_blank'>
                        <Image alt="linkedin" src={'/linkedin.png'} width={35} height={35} />
                    </a>
                    <a href="https://twitter.com/block_soc" rel="noopener" target='_blank'>
                        <Image alt="twitter" src={'/twitter.png'} width={35} height={35} />
                    </a>
                    <a href="https://www.facebook.com/BlockSoc-101816239000113" rel="noopener" target='_blank'>
                        <Image alt="Facebook" src={'/facebook.png'} width={35} height={35} />
                    </a>
                </div>

                <p className={styles.email}><Image src='/mail.png' width={25} height={30} />&nbsp;info@blocksoc.io</p>

                <div className={styles.connect}>
                    <p>Join our Newsletter!</p>
                    <div className={styles.newsletter_input}>
                        <input placeholder='Email' value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)}></input>

                        <button onClick={(e) => { newsletterSignUpHandler(); setNewsletterEmail("") }}>Submit</button>
                    </div>
                </div>
            </div >
        </Layout>
    )
}

export default Contact
