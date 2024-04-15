import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../components/movieInfoDetail';
import MovieVideos from '../../../components/movieVideo';
import Menu from '../../../components/menu';

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Menu />
      <Suspense fallback={<h1>영화 정보를 불러오고 있습니다.</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>관련된 유튜브를 불러오고 있습니다.</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
