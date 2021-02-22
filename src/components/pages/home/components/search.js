import React, { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState();

  useEffect(() => {
    if (!query) return;
    console.log("data fetch on query");
  }, [query]); // dakhele [] ba har bar taqir render mishe

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={"Type any..."}
      />
    </div>
  );
};

export default Search;
