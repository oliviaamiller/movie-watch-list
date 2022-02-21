import { addToList } from './services/fetch-utils';

export default function Movie({ movie, onList, reloadSavedList }) {
  const savedToList = onList(movie.id);

  async function handleClick() {
    if (!savedToList) {
      const savedMovie = {
        title: movie.title,
        api_id: movie.id,
        description: movie.overview,
        poster: movie.poster_path,
        watched: false,
      };

      await addToList(savedMovie);
      await reloadSavedList();
    }
  }


  return (
    <div 
      onClick={handleClick}
      className={`movie ${savedToList ? 'on-list' : ''}`}>
      
      <p>{savedToList && 'saved'}</p>
      <span>{movie.poster_path
        ? <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
        : <div className='poster'>
          <p className='poster-title'>{movie.title}</p>
        </div>
      }
      </span>
      <p>{movie.title}</p>

    </div>
  );
}
