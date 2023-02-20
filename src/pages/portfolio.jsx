import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";

const portfolio = () => {
    return (
        <>
        <Head>
          <title>Adam Sharrock | Portfolio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
              <h1 className={styles.title}>Portfolio</h1>
            </div>
          </div>
        </main>
      </>
    );
}

export default portfolio;