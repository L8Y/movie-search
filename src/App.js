import Logo from "./Logo";
import SearchReasult from "./SearchResult";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchContent, setsearchContent] = useState([]);

  function input(event) {
    setSearchInput(event.target.value);
  }

  const fetchResult = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://www.omdbapi.com/?s=${encodeURIComponent(
        searchInput
      )}&apikey=9fe69dc`
    );

    if (!response.ok) {
      alert("Error in geting Data");
    }
    const searchResults = await response.json();
    console.log(searchResults.Response);
    if (searchResults.Response == "False") {
      alert("NO movie is like that");
    } else {
      setsearchContent(searchResults.Search);
    }
  };

  return (
    <div>
      <div className="container">
        <Logo />
        <div className="search">
          <form type="submit" onSubmit={fetchResult}>
            <input
              className="search__input"
              onChange={input}
              placeholder=" Search"
            />
          </form>
          <button className="button" onClick={fetchResult}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 31 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12.5"
                cy="12.5"
                r="10.5"
                stroke="#4F4F4F"
                stroke-width="4"
              />
              <path
                d="M16.3784 22.9382L20.6753 20L29.0664 32.271C29.6899 33.1828 29.4562 34.4274 28.5444 35.0509L27.5494 35.7313C26.6376 36.3548 25.393 36.1211 24.7695 35.2093L16.3784 22.9382Z"
                fill="#4F4F4F"
              />
            </svg>
          </button>
        </div>
      </div>
      <SearchReasult data={searchContent} />
    </div>
  );
}

export default App;
