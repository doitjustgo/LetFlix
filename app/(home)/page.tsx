import styles from './page.module.css';
import Link from 'next/link';
import { API_URL } from './apiurl';
import Image from 'next/image';
import logo from '../public/logo.png';

export const metadata = {
  title: 'Home',
};

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  const result = json.Data[0].Result;
  return result;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src={logo} alt="로고" className="logo" />
        </Link>
      </div>
      <div className={styles.container}>
        {movies.map((movie) => {
          const lowerCasePosters = movie.posters.toLowerCase();
          const jpgIndex = lowerCasePosters.indexOf('jpg') + 3;

          return (
            <div className={styles.oneMovieBox} key={movie.id}>
              <Link prefetch href={`/movies/${movie.movieSeq}`}>
                <img src={movie.posters.substring(0, jpgIndex)} alt={movie.title} />
                <p>{movie.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
