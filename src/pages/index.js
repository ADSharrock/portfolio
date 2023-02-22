import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Sharrock | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.content}>
            <p>I am an experienced marketing executive with a track record of researching and applying new ideas in advertising. I like to keep up to date with the latest technologies and social media trends which I am then able to apply to my work.</p>

<p>Both in my work and personal life, I enjoy creating and uploading content. I am from a content creation background, uploading to sites such as YouTube and Twitter and I like to maintain digital spaces, whether that be a channel, account or website. I often schedule and upload content at a time I know will generate the most engagement and gain the most interaction from my audience, by researching and learning when my audience most frequently uses each social platform.</p>

<p>My time in the industry has involved time in digital marketing, mainly Social Media marketing, completing and uploading marketing packs for clients and updating and upkeeping the company website, introducing changes and innovations to streamline and improve navigation and user engagement.</p>

<p>Please feel free to use the <Link href="/contact" style={{textDecoration: "underline"}}>Contact</Link> page to get in touch!</p>
           
          </div>
        </div>
      </main>
    </>
  );
}
