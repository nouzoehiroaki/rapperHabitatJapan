import React, { FC, useState } from "react";
interface SearchProps {
    onSearch: (keyword: string) => void;
}

const Search: FC<SearchProps> = ({ onSearch }) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const handleSearchClick = () => {
        onSearch(searchKeyword);
    };
    return (
        <div>
            <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button onClick={handleSearchClick}>
                Search
            </button>
        </div>
    )
}

export default Search