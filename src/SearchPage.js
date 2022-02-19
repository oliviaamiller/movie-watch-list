import { useState, useEffect } from 'react';
import MoviesList from './MoviesList';
import { getList } from './services/fetch-utils';
import './App.css';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [savedList, setSavedList] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();

    const response = await fetch(`/.netlify/functions/movie-endpoint?searchQuery=${search}`);

    const json = await response.json();
    
    setResults(json);
  }

  async function reloadSavedList() {
    const myList = await getList();

    setSavedList(myList);
  }

  useEffect(() => {
    reloadSavedList();
  }, []);

  function onList(api_id) {
    const match = savedList.find(item => Number(item.api_id) === Number(api_id));

    return Boolean(match);
  }

  return (
    <div className='search'>
      <form onSubmit={handleSearch}>
        <input 
          value={search}
          onChange={e => setSearch(e.target.value)} />
        <button>search</button>
      </form>

      <div className='search-results'>
        <MoviesList movies={results} onList={onList} reloadSavedList={reloadSavedList} />
      </div>

    </div>
  );
}
