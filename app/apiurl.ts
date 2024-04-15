const key = process.env.NEXT_PUBLIC_API_KEY;

export const API_URL = `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&nation=대한민국&actor=유해진&ratedYn=y&releaseDts=20110101&listCount=30&releaseDte=20240331&use=극장용&ServiceKey=${key}`;

export async function getMovies(title) {
  var response;

  if (!title || title === '') {
    response = await fetch(`${API_URL}`);
  } else {
    response = await fetch(
      `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&use=극장용&ServiceKey=${key}&title=${title}`
    );
  }

  const json = await response.json();

  if (json.TotalCount === 0) return;

  const result = json.Data[0].Result;
  return result;
}
