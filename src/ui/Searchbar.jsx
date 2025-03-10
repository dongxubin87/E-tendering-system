import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

function Searchbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (query) {
      navigate(`?search=${encodeURIComponent(query)}`);
    }
  }
  return (
    <form onSubmit={handleSearch} className="flex justify-end">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="#search for tender name"
        className="bg-amber-50 w-80 h-8 border rounded-sm"
      />
    </form>
  );
}

export default Searchbar;
