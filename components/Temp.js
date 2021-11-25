import { useState } from "react"
import { db } from "../firebase"
import { doc, updateDoc, arrayUnion } from "firebase/firestore";


const Temp = () => {
    const [signingUp, setSigningUp] = useState(false)
    const [welcomeMessage, setWelcomeMessage] = useState(false)
    const [emailInput, setEmail] = useState("")


    const signUpHandler = async () => {
        try {
            await updateDoc(doc(db, "Blocksoc", "general"), { emails: arrayUnion(emailInput) });
            console.log("Success")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="Temp">
            <div className='grid-top'>
                <img src="/final_no_bg_smaller_crop.png"></img>
                <h1>Ireland's first student led Blockchain society</h1>
                <p>
                    Connecting students, industry leaders, and academics to foster collaborative learning
                    &amp; networking in the fields of Blockchain and Cryptocurrency.
                </p>
                <div>
                    {!signingUp && <button id="sign-up-button" onClick={() => setSigningUp(true)}>Get Involved</button>}
                    {signingUp && !welcomeMessage &&
                        <div className="sign-up" >
                            <input placeholder="Enter Email" value={emailInput} onChange={(e) => setEmail(e.target.value)}></input>
                            <button
                                onClick={(e) => { signUpHandler(); setWelcomeMessage(true); setEmail("") }}>
                                Sign Up
                            </button>
                        </div>
                    }
                    {welcomeMessage && <p className="welcome-message">Welcome to the team!</p>}
                </div>
                <p id="scroll-down">Scroll down to read more &darr;</p>

            </div>
        </div >
    )
}

export default Temp
