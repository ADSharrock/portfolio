import styles from '@/styles/Sidebar.module.css'
import Link from 'next/link'
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Sidebar = () => {
    
    return (
        <div className={styles.main}>
            <Link href="/" className={styles.navLink}>About</Link>
            <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>
    );
}

export default Sidebar;