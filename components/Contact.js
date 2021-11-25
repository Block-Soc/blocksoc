import { arrayUnion, doc, updateDoc } from "@firebase/firestore";
import { db } from "../firebase"
import { useState } from "react"

const Contact = () => {
    const [newsletterEmail, setNewsletterEmail] = useState("")

    const newsletterSignUpHandler = async () => {
        await updateDoc(doc(db, "Blocksoc", "newsletter"), { emails: arrayUnion(newsletterEmail) });
    }
    return (
        <div className='Contact'>
            <div className='contact-header'>
                <h2>Connect with us</h2>
            </div>
            <div className='Contact-grid'>
                <div className='Socials'>
                    <a href="https://www.instagram.com/blocksoc/" target='_blank'><p>Instagram</p></a>
                    <a href="https://www.linkedin.com/company/blocksoc/?viewAsMember=true" target='_blank'><p>LinkedIn</p></a>
                    <a href="https://twitter.com/block_soc" target='_blank'><p>Twitter</p></a>
                    <a href="https://www.facebook.com/BlockSoc-101816239000113" target='_blank'><p>Facebook</p></a>
                    {/* <p>Email: info@blocksoc.io</p> */}
                </div>


                <div className='Contact-newsletter'>
                    <p>Join our Newsletter!</p>
                    <div className='newsletter-input'>
                        <input placeholder='Email' value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)}></input>

                        <button onClick={(e) => { newsletterSignUpHandler(); setNewsletterEmail("") }}>Submit</button>
                    </div>
                    {/* <p>Or email us at info@blocksoc.io</p> */}
                </div>
            </div>
        </div >
    )
}

export default Contact
