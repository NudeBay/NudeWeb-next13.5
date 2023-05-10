import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../assets/scss/Home.module.scss';

export default function Home() {
    return (
        <div className={styles.right}>
            <Head>
                <title>Home</title>
            </Head>
        </div>
    )
}
