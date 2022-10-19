import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <h1 className={styles["title"]}>Halo ini halaman Home</h1>
            <Footer />
        </>
    );
}
