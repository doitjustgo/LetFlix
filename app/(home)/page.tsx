import styles from './page.module.css';
import Link from 'next/link';
import { API_URL, getMovies } from './apiurl';
import Image from 'next/image';
import logo from '../public/logo.png';
import SearchTitle from '../../components/searchTitle';

export default async function HomePage(params) {
  const movies = await getMovies(params.searchParams.title);

  return (
    <>
      <div className={styles.logoContainer}>
        <p></p>
        <Link href="/">
          <Image src={logo} alt="로고" className="logo" />
        </Link>
        <SearchTitle />
      </div>
      <div className={styles.container}>
        {movies
          ? movies.map((movie) => {
              const lowerCasePosters = movie.posters.toLowerCase();
              const jpgIndex = lowerCasePosters.indexOf('jpg') + 3;
              const cleanedTitle = movie.title.replace(/!HS|!HE/g, '');

              return (
                <div className={styles.oneMovieBox} key={movie.id}>
                  <Link prefetch href={`/movies/${movie.movieSeq}`}>
                    <img src={movie.posters.substring(0, jpgIndex)} alt={movie.title} />
                    <p>{cleanedTitle}</p>
                  </Link>
                </div>
              );
            })
          : '검색결과가 없습니다'}
      </div>
    </>
  );
}
