import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Next JS | Home</title>
                <meta name="description" content="website next js basic" />
            </Head>

            <Header />
            <main className={styles.main}>
                <Image
                    src="/favicon.ico"
                    width={250}
                    height={250}
                    alt="profile"
                />
                <Layout />
                <h1 className={styles.title}>Welcome to My Blog</h1>
                <p className={styles.code}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                    quae cumque corporis necessitatibus aut! Id laudantium
                    doloremque temporibus, voluptatem quidem consequuntur
                    maiores modi eum nemo repellendus cumque expedita, quae
                    dolorem, architecto ipsa omnis esse aliquid numquam!
                    Inventore atque minus quo quis veritatis repudiandae
                    ducimus, magnam, totam obcaecati iusto quam fugiat
                    voluptatibus neque vel voluptatem, fugit aspernatur corporis
                    distinctio molestiae itaque earum? Aliquam assumenda quasi
                    minima maxime ullam nulla voluptates fuga officia ab, enim,
                    libero corporis iste est dolore reprehenderit suscipit
                    soluta voluptatem cupiditate corrupti aspernatur similique
                    unde? Dolorem dolore delectus non rerum laudantium
                    consequuntur eveniet reiciendis hic. Nemo, eaque aperiam.
                </p>
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
