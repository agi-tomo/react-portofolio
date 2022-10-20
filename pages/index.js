import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to My Blog</h1>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Link href="/posts/first-post">
                            <h3>First Post</h3>
                        </Link>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry...
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
