import { addToList } from './services/fetch-utils';

export default function Movie({ movie, onList, reloadSavedList }) {
  const watched = onList(movie.id);

  async function handleClick() {
    if (!watched) {
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
      className={`movie ${watched ? 'watched' : ''}`}>
      
      <p>{watched && 'watched'}</p>
      <p>{movie.poster_path
        ? <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
        : 'no image'
      }
      </p>
      <p>{movie.title}</p>

    </div>
  );
}
