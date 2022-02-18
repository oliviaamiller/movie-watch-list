import { addToList } from './services/fetch-utils';

export default function Movie({ movie, onList, reloadSavedList }) {
  const watched = onList(movie.id);

  async function handleClick() {
    if (!watched) {
      const savedListMovie = {
        title: movie.title,
        api_id: movie.id,
        description: movie.overview,
        poster: movie.poster_path
      };

      await addToList(savedListMovie);
      await reloadSavedList();
    }
  }


  return (
    <div 
      onClick={handleClick}
      className={`movie ${watched ? 'watched' : ''}`}>
      
      <p>{watched && 'watched'}</p>
      <p>{movie.title}</p>

    </div>
  );
}
