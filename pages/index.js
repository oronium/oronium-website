import Head from "next/head";
import Image from "next/image";
import Footer from "../components/GlobalComponents/footer";
import About from "../components/Home/about";
import Header from "../components/Home/header";
import Reviews from "../components/Home/reviews";
import Services from "../components/Home/services";
import Works from "../components/Home/works";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header /> <Services />
        <About />
        <Works />
        <Reviews />
        <Footer />
      </main>
    </div>
  );
}
