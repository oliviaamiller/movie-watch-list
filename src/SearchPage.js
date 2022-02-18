import { useState, useEffect } from 'react';
import ListPage from './ListPage';
import { searchMovies, getList } from './services/fetch-utils';
import './App.css';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [savedList, setSavedList] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();

    const movies = await searchMovies(search);

    setResults(movies);
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
        <ListPage movies={results} onList={onList} reloadSavedList={reloadSavedList} />
      </div>

    </div>
  );
}
