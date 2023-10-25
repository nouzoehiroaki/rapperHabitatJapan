import React, { FC, useState } from 'react'
import styles from '@/styles/Home.module.scss'
interface SearchProps {
    onSearch: (keyword: string) => void;
}

const Search: FC<SearchProps> = ({ onSearch }) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const handleFormSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onSearch(searchKeyword);
    };
    return (
        <form id='search' className={styles.search} onSubmit={handleFormSubmit}>
            <label htmlFor='name'>
                <input
                    id='name'
                    className={styles.textbox}
                    type='text'
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder='店名 アーティスト名で検索'
                />
                <button
                    type="submit"
                    className={styles.button}
                >
                    <img src='/search-icon.svg' alt='' className={styles.img} />
                </button>
            </label>
        </form>
    )
}

export default Search