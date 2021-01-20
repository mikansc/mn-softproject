import { useState } from "react";
import { useHistory } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import "./Searchbar.styles.css";

const Searchbar = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const searchButtonHandler = () => {
    if (!term.trim()) {
      setTerm("");
    } else {
      history.push(`/process?q=${term}`);
    }
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar__field"
        type="text"
        placeholder="Pesquise por uma informação do processo"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button
        type="button"
        className="search-bar__button"
        onClick={searchButtonHandler}
      >
        <SearchIcon style={{ color: "var(--color-black-38)" }} />
      </button>
    </div>
  );
};

export default Searchbar;
