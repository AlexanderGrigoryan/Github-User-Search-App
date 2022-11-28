import styles from "./Search.module.css";
import searchIcon from "../../img/icon-search.svg";
import axios from "axios";
import { useState } from "react";

function Search({ changeMode, setChangeMode, search, setSearch }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  async function userSearch() {
    try {
      const getUser = await axios.get(
        "https://api.github.com/users/" + inputValue
      );
      setSearch(getUser.data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  }

  function searchValue(event) {
    setInputValue(event.target.value);
  }
  return (
    <div
      className={`${styles.search__container} ${
        changeMode ? styles.container__dark : null
      }`}
    >
      <img className={styles.search__icon} src={searchIcon} alt="Search Icon" />
      <input
        onChange={searchValue}
        className={`${styles.search__input} ${
          changeMode ? styles.input__dark : null
        }`}
        placeholder="Search GitHub username…"
      />
      {error ? <p className={styles.error__message}>No results</p> : null}
      <button onClick={userSearch} className={styles.search__btn}>
        Search
      </button>
    </div>
  );
}

export default Search;
