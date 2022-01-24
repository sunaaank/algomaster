function solution(genres, plays) {
  const albums = {};
  const answer = [];
  // 배열을 순회하며 초기 정보 등록
  genres.forEach((genre, index) => {
    if (!albums[genre]) albums[genre] = { count: 0 };
    albums[genre][index] = { id: index, play: plays[index] };
    albums[genre].count += plays[index];
  });
  // 1차 카운트 정렬
  Object.values(albums)
    .sort((a, b) => b.count - a.count)
    .forEach((album, index) => {
      delete album.count;
      // 2차 재생순, 고유번호순으로 정렬
      Object.values(album)
        .sort((a, b) => {
          if (b.play - a.play > 0) return 1;
          else if (b.play === a.play && b.id - a.id < 0) return 1;
          else return -1;
        })
        .forEach(({ id }, index) => {
          // 3차 2개만 앨범 추가
          if (index > 1) return false;
          answer.push(id);
        });
    });

  return answer;
}
