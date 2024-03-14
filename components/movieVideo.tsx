import { API_URL } from '../app/(home)/apiurl';
import styles from './movieVideo.module.css';

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}&movieSeq=${id}`);
  const json = await response.json();
  const result = json.Data[0].Result[0];
  return result;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  console.log(videos.vods.vod[0].length);

  return (
    <div className={styles.container}>
      {videos.vods.vod[0].vodUrl.length >= 1 ? (
        <iframe src={`${videos.vods.vod[0].vodUrl}`} allowFullScreen />
      ) : (
        '아쉽게도 예고편이 없습니다. 다른 영화를 확인해보세요!'
      )}
    </div>
  );
}
