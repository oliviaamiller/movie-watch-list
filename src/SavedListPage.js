import { useEffect, useState } from 'react';
import { getList } from './services/fetch-utils';
import MoviesList from './MoviesList';

export default function SavedListPage() {
  const [movies, setMovies] = useState([]);

  async function reloadSavedList() {
    const myList = await getList();

    setMovies(myList);
  }

  useEffect(() => {
    reloadSavedList();
  }, []);

  return (
    <div className='savedlistpage'>
      <p>saved movies</p>
      <MoviesList movies={movies} reloadSavedList={reloadSavedList} />

    </div>
  );
}
