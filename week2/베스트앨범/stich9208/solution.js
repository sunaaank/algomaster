const solution = (genres, plays) => {
  let answer = [];
  //주어진 배열들을 map구조로 정리할 변수 선언
  const genreMap = new Map();
  //내림차순 정렬에 사용될 callback함수 선언
  const sortByDescending = (a, b) => {
    return b - a;
  };

  //선언한 genreMap에 key(genre) value(total, lists)값으로 할당
  genres.map((_genre, _idx) => {
    //각 음악의 고유번호, 재생횟수 배열형태로 선언
    const eachSongInfo = [_idx, plays[_idx]];
    //genreMap내 해당 genre가 key값으로 존재할 경우 total과 lists값 수정 존재하지 않을 경우 새로 생성
    if (!genreMap.has(_genre)) {
      genreMap.set(_genre, { total: plays[_idx], lists: [eachSongInfo] });
    } else {
      //genreMap내 존재하는 genre의 값을 eachGenre 변수에 할당
      const eachGenre = genreMap.get(_genre);
      genreMap.set(_genre, {
        total: eachGenre.total + plays[_idx],
        lists: [...eachGenre.lists, eachSongInfo],
      });
    }
  });

  //정리된 genreMap을 배열형태로 변환
  const genreArray = Array.from(genreMap);

  //total값 내림차순 정렬
  genreArray.sort((a, b) => sortByDescending(a[1].total, b[1].total));

  //각 장르별 lists의 plays값들을 내림차순으로 정렬
  for (let i = 0; i < genreArray.length; i++) {
    genreArray[i][1].lists.sort((a, b) => sortByDescending(a[1], b[1]));
    //lists의 plays값이 높은 최대 2개의 고유번호값을 answer배열에 추가
    if (genreArray[i][1].lists.length < 2) {
      answer.push(genreArray[i][1].lists[0][0]);
    } else {
      for (let j = 0; j < 2; j++) {
        answer.push(genreArray[i][1].lists[j][0]);
      }
    }
  }
  return answer;
};
