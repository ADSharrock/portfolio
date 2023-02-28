import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { FishBox } from "@/media";

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio | The Saucy Fish Co</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.content}>
          <Image src={FishBox} alt="Mockups" className={styles.image}/>
            <h2>The Saucy Fish Co</h2>
            <p>The Saucy Fish Co was a brief I took on to redesign the company’s food packaging. The task was to make it sustainable, but also allow the product to actually be viewable via a window into the packaging, the brief had many requirements including specific colour palette, size, font and more.</p>
            <p>This was my first time ever doing packaging design, I took this on to test my skills in something entirely new to me but managed to make a quality design as an end product. Even going so far into the project that I actually created my own mock up design including a fake fish made from foam and constructed the whole box.</p>
            <p>At the end of the process I succeeded in following the brief, to all its specifications. I had learnt a new skill and took on a new challenge. While confusing at first, I stuck to the brief and persevered, finally creating a quality mock up.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default portfolio;