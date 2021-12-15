import styles from '../styles/layout.module.css'

export default function Layout({ children, backgroundColor }) {
    return <div className={styles.container} style={{ backgroundColor: backgroundColor }}>{children}</div>
}