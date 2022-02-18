import { isWatched } from './services/fetch-utils';

export default function SavedMovie({ movie, reloadSavedList }) {

  async function handleClick() {
    await isWatched(movie.id);

    await reloadSavedList();
  }

  return (
    <div className='saved'
      onClick={handleClick}>
      <p>watched? {movie.watched ? 'yes' : 'no'}</p>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      <p>{movie.title}</p>

    </div>
  );
}
