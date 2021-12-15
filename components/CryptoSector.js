import { useState } from "react"
import Image from 'next/image'
import styles from '../styles/forumpage.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const CryptoSector = ({ type, examples, content, image }) => {
    const [opened, setOpened] = useState(false)
    return (
        <div className={styles.card} onClick={() => setOpened(!opened)}>
            <div className={styles.image}>
                <Image
                    src={image}
                    height={100}
                    width={100}
                />
            </div>
            <div className="tile-text">
                <p className={styles.coin}>{type}</p>
                <p className={styles.examples}>{examples}
                    <span onClick={() => setOpened(!opened)} className={opened ? styles.toggle_open : undefined}>
                        {/* &gt; */}
                        <ArrowDropDownIcon />
                    </span>
                </p>
            </div>
            <div className={`${opened ? styles.open : styles.closed}`}>
                <hr className={styles.hr} />
                <p>{content}</p>
            </div>
        </div>
    )
}
