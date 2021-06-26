function SearchResult(props) {
  return (
    <div className="result">
      {props.data.map((search) => (
        <section className="result__text">
          <img className="result__img" src={search.Poster}></img>
          <p>{search.Title}</p>
          <small>{search.Year}</small>
          <br />
          <br></br>
        </section>
      ))}
    </div>
  );
}

export default SearchResult;
