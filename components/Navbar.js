import Link from 'next/link'
import Image from 'next/image'
import Hamburger from '../components/Hamburger'
import styles from '../styles/navbar.module.css'
import { useRouter } from "next/router";


const Navbar = () => {

    const router = useRouter()

    return (
        <header className="flex justify-between items-center p-4 sticky top-0 bg-[#fff] z-50 w-[100%] sm:px-8 py-4 md:px-16 lg:px-48 xl:px-48 border-b border-solid border-[#4b4b4b54] border-0">
            <Link href="/">
                <a>
                    <Image
                        alt="logo"
                        width={83}
                        height={80}
                        priority={true}
                        src="/logo.png">
                    </Image>
                </a>
            </Link>
            <nav className={styles.NavLinks}>
                <Link href='/'>
                    <a className={router.pathname === "/" ? "underline underline-offset-4 text-blue-500" : "text-[#4b4b4b]"}>Home</a>
                </Link>
                <Link href='/CEF'>
                    <a className={router.pathname === "/CEF" ? "underline underline-offset-4 text-blue-500" : "text-[#4b4b4b]"}>Cryptoasset Evaluation</a>
                </Link>
                {/* <Link href="/startathon">
                    <a className={router.pathname === "/startathon" ? "underline underline-offset-4 text-blue-500" : "text-[#4b4b4b]"}>Blockchain Startathon</a>
                </Link> */}
                <Link href="/positions">
                    <a className={router.pathname === "/positions" ? "underline underline-offset-4 text-blue-500" : "text-[#4b4b4b]"}>Positions</a>
                </Link>
            </nav>

            <Hamburger styles={styles.Hamburger} />
        </header >
    )
}

export default Navbar
