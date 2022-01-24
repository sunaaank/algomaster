const g = ["classic", "pop", "classic", "classic", "pop"];
const p = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
  const dic = genres.reduce((p, c, i) => {
    /*
 classic: {
    play: 1450,
    songs: [{
  key: 0,
  playtime: 500
}, {
  key: 2,
  playtime: 150
}, {
  key: 3,
  playtime: 800
}]
  },
  pop: {
    play: 3100,
    songs: [{
  key: 1,
  playtime: 600
}, {
  key: 4,
  playtime: 2500
}]
 }

*/
    if (!p[c]) {
      const temp = { play: 0, songs: [] };
      p[c] = temp;
    }

    p[c]["songs"].push({ key: i, playtime: plays[i] });
    p[c]["play"] = p[c].play + plays[i];

    return p;
  }, {});

  // genre별 songs 배열을 playtime 순으로 정렬
  Object.values(dic).forEach((v) =>
    v.songs.sort((a, b) => b.playtime - a.playtime)
  );

  console.log("dic", dic);

  /* console.log("dic", dic)
const genres_dic = Object.keys(dic).reduce((p,c,i) => {
const sort_songs = dic[c].sort((a, b) => b-a).slice(0, 2)
const song_index_arr = sort_songs.map(v => plays.indexOf(v)) 
p[c] = {count: dic[c].length , songs: song_index_arr
}
return p

}, {}) */

  const sort_genres = Object.keys(dic).sort(
    (a, b) => dic[a].play - dic[b].play
  );

  const result = sort_genres.reduce((p, c) => {
    p.push(...dic[c].songs.map((v) => v.key).slice(0, 2));
    return p;
  }, []);

  /* sort_genres.forEach(v => result.push(...dic[v].songs.)) */

  return result;
}

console.log(solution(g, p));
