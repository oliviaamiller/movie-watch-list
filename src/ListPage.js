import { useLocation } from 'react-router-dom';
import Movie from './Movie';
import SavedListMovie from './SavedListMovie';


export default function ListPage({ movies, onList, reloadSavedList }) {
  const location = useLocation();

  return (
    <div className='movie-search-results'>
      {movies.map((movie, i) => location.pathname.includes('search')
        ? <Movie key={`${movie.title}-${i}`}
          movie={movie}
          onList={onList}
          reloadSavedList={reloadSavedList} />
        : <SavedListMovie key={`${movie.title}-${i}`}
          movie={movie}
          reloadSavedList={reloadSavedList} />)
      }
    </div>
  );
}
