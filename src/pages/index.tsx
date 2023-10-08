import React from 'react'
import styles from '@/styles/Home.module.scss'
import dynamic from 'next/dynamic'
import Header from '@/components/layouts/Header/Header'
import Head from 'next/head'
const Map = dynamic(
  () => import('@/components/elements/Map').then(mod => mod.default) as any,
  { loading: () => <p className={styles.loading}>Loading...</p>, ssr: false }
);
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Japanese HIPHOP Artists Map</title>
        <meta name="viewport" content="width=device-width,  maximum-scale=1.0"></meta>
      </Head>
      <Header />
      <main className={styles.main}>
        <div>
          <Map />
        </div>
      </main>
    </div>
  );
}
