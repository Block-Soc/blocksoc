import styles from '../styles/layout.module.css'

export default function Layout({ children, backgroundColor }) {
    return <div className={styles.layout} style={{ backgroundColor: backgroundColor }}>{children}</div>
}