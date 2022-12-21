import { useState, createContext, useContext } from "react";
import "./search-form.css";
import Context from "../Context";
import MenuItems from "../MenuItems/MenuItems";

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <section className="search" id="seach">
        <div className="search-box">
          <h3 className="search-title">Search your Favorite Cocktail</h3>
          <input
            type="text"
            className="search-input"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
      </section>
      <MenuItems searchValue={searchValue} />
    </>
  );
}
