import "./Search.css";
import { SearchProps } from "../../utils/dataAndTypes/interfaces";

const Search = ({ setKeyword, setRating }: SearchProps) => {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRating(e.target.value);
    }

    return (
        <div className="inputs">
            <div className="searchForm">
                <p>Filter by keyword</p>
                <input type="text" id="keyword" onChange={handleSearch} />
            </div>
            <div className="selectForm">
                <p>Filter by rating</p>
                <select name="rating" id="rating" onChange={handleSelect}>
                <option value="0">All Ratings</option>
                <option value="1">1 star</option>
                <option value="2">2 stars</option>
                <option value="3">3 stars</option>
                <option value="4">4 stars</option>
                <option value="5">5 stars</option>
                </select>
            </div>
        </div>
    )
}

export default Search;
