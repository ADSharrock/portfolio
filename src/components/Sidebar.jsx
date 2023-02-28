import styles from "@/styles/Sidebar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const asPath = useRouter().asPath;
  return (
    <div className={styles.main}>
      <Link href="/" className={styles.navLink} style={asPath === "/" ? {color: "#f59e0b", opacity: 1}: {}}>
        About
      </Link>
      <Link href="/portfolio" className={styles.navLink} style={asPath.includes("/portfolio") ? {color: "#f59e0b", opacity: 1}: {}}>
        Portfolio
      </Link>
      <Link href="/contact" className={styles.navLink} style={asPath === "/contact" ? {color: "#f59e0b", opacity: 1}: {}}>
        Contact
      </Link>
    </div>
    
  );
};

export default Sidebar;
