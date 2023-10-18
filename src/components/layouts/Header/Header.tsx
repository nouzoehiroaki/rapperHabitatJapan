import React from 'react'
import styles from '@/styles/Home.module.scss'
import Nav from './Nav'
const Header = () => {
    return (
        <header className={styles.header}>
            <h1>HIPHOP Artists Map</h1>
            <Nav />
        </header>
    )
}

export default Header