import React from 'react'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/layouts/Header/Header'
import List from '@/components/elements/List'
import Head from 'next/head'
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Shop List | Japanese HIPHOP Artists Map</title>
                <meta name="viewport" content="width=device-width,  maximum-scale=1.0"></meta>
            </Head>
            <Header />
            <main className={styles.main}>
                <div>
                    <List initialArtists={[]} />
                </div>
            </main>
        </div>
    );
}
