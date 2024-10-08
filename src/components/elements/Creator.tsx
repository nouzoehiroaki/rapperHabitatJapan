import React from 'react'
import styles from '@/styles/Creator.module.scss'
import Link from 'next/link'
import Image from 'next/image';
const generateMailtoLink = (user: string, domain: string) => {
    return `mailto:${user}@${domain}`
}

const Creator = () => {
    const mailUser = 'info'
    const mailDomain = 'info@kgetheshadowmen.com'
    const mailtoLink = generateMailtoLink(mailUser, mailDomain)
    return (
        <div className={styles.main}>
            <div className={styles.__creator}>
                <div className={styles.__text}>
                    <div className={styles.__prof}>
                        <h2>作成者<br />KGE THE SHADOWMEN</h2>
                        <p>HIPHOPとTypeScriptを愛するラッパー。</p>
                    </div>
                    <div className={styles.__appeal}>
                        <h3>Home Pageお作りします。</h3>
                        <p>
                            個人から法人までお手軽なお値段での提供が可能です。
                        </p>
                        <Link href={mailtoLink} className={styles.mailtoLink}>
                            info@kgetheshadowmen.com
                        </Link>
                    </div>
                    <div className={styles.works}>
                        <h4>制作事例</h4>
                        <ul>
                            <li>
                                <Link href='https://superme.tokyo/' target="_blank" rel="noopener noreferrer" className={styles.bio_url}>
                                    SUPER ME INC.
                                </Link>
                            </li>
                            <li>
                                <Link href='https://theater1.tokyo/' target="_blank" rel="noopener noreferrer" className={styles.bio_url}>
                                    シアターワン
                                </Link>
                            </li>
                            <li>
                                <Link href='https://roshichi.com/' target="_blank" rel="noopener noreferrer" className={styles.bio_url}>
                                    ろ七タオル
                                </Link>
                            </li>
                            <li>
                                <Link href='https://lp.l-funs.com/' target="_blank" rel="noopener noreferrer" className={styles.bio_url}>
                                    LFUNS
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creator