import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { Shoes } from "@/media";

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Nationwide</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.content}>
            <Image src={Shoes} alt="Campaign" className={styles.image}/>
            <h2>Nationwide</h2>
            <p>I took part in a competition hosted by Nationwide in collaboration with the Ideas Foundation which saw me and my team creating a campaign to condemn online harassment and bullying. Within the time given we created the “In Their Shoes” campaign, this included marketing tools in both the physical world and online spaces such as posters, banners, posts and an advert.</p>
            <p>Being a multi-stage competition the team and I achieved first place in the group stage, then going onto win the regional stage, and finally the national competition. This meant we had the opportunity to visit the offices in London. We then asked to visit Nationwide’s HQ in Swindon to pitch to the higher ups, meet the marketing team, and receive a tour of the HQ.</p>
            <p>After pitching they sought to make it into an amateur advert created by film students at our own college which gave us insight into how Nationwide conducts their marketing.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default portfolio;