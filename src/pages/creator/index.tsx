import React from 'react'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/layouts/Header/Header'
import Creator from '@/components/elements/Creator'
import Head from 'next/head'
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Creator | Japanese HIPHOP Artists Map</title>
                <meta name="viewport" content="width=device-width,  maximum-scale=1.0"></meta>
            </Head>
            <Header />
            <main className={styles.main}>
                <div>
                    <Creator />
                </div>
            </main>
        </div>
    );
}
