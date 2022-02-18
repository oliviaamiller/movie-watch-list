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


  return (
    <div>SearchPage</div>
  );
}
