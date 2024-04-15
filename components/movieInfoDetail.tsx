import { API_URL } from '../app/apiurl';
import styles from './movieInfoDetail.module.css';

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}&movieSeq=${id}`);
  const json = await response.json();
  const result = json.Data[0].Result[0];
  return result;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  const lowerCasePosters = movie.posters.toLowerCase();
  const jpgIndex = lowerCasePosters.indexOf('jpg') + 3;

  return (
    <div className={styles.container}>
      <img src={movie.posters.substring(0, jpgIndex)} className={styles.poster} alt={movie.title} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>감독 : {movie.directors.director[0].directorNm}</h3>
        <p>{movie.genre}</p>
        <p>{movie.plots.plot[0].plotText}</p>
        <a href={movie.kmdbUrl} target={'_blank'}>
          홈페이지에서 더 자세한 정보 확인하기 &rarr;
        </a>
      </div>
    </div>
  );
}
