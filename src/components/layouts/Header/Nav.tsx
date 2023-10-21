import React from 'react'
import Link from 'next/link'
const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/list'>
                        Shop List
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        Creator
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav