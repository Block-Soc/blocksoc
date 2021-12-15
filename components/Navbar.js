import Link from 'next/link'
import Image from 'next/image'
import Hamburger from '../components/Hamburger'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <header className={styles.Navbar}>
            <Link href="/">
                <a>
                    <Image
                        alt="logo"
                        width={72}
                        height={70}
                        priority={true}
                        src="/logo.png">
                    </Image>
                </a>
            </Link>

            <nav className={styles.NavLinks}>
                <Link href="/"><a>Home</a></Link>
                <Link href='/CEF'><a>Cryptoasset Evaluation</a></Link>
                <Link href="#offerings-section"><a>Offerings</a></Link>
            </nav>

            <Link href="/positions">
                <a className={styles.NavSignUp}>
                    {/* Sign Up */}
                    Positions
                </a>
            </Link>

            <Hamburger styles={styles.Hamburger} />
        </header >
    )
}

export default Navbar
