import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <img src="/favicon.ico" alt="My Image" className="logo" />
                <h1 className={styles.title}>Welcome to My Blog</h1>
                <p className={styles.code}>Hello World!</p>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Link href="/posts/first-post">
                            <h3>First Post</h3>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link href="/posts/second-post">
                            <h3>Second Post</h3>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer className={styles.footer} />
        </>
    );
}
