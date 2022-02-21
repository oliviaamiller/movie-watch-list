export function RenderPoster(movie) {
  const PosterDiv = document.createElement('div');
  const TitleEl = document.createAttribute('p');

  PosterDiv.classList.add('poster');
  TitleEl.classList.add('poster-tite');

  TitleEl.textContent = movie.title;

  PosterDiv.append(TitleEl);

  return PosterDiv;
}