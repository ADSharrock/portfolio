import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const contact = () => {
  return (
    <>
      <Head>
        <title>Adam Sharrock | Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.content}>
            <p>
              You can contact me via any of the options below although LinkedIn
              is best!
            </p>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faPhone} size="xs" height={"48px"} />
                <p>07930203654</p>
              </div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faEnvelope} size="xs" height={"48px"} />
                <p>adsharrock2000@gmail.com</p>
              </div>
              <div className={styles.icon}>
                <Link href={"http://linkedin.com/in/adamsharrock"}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="xs"
                    height={"48px"}
                  />
                </Link>
                <p>@adamsharrock</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default contact;
