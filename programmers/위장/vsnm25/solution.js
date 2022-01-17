function solution(clothes) {
  const memory = {};
  clothes.forEach(([name, type]) => {
    if (memory[type]) memory[type] = [...memory[type], name];
    else memory[type] = [name];
  });
  const combines = Object.values(memory).reduce((acc, cur) => {
    return cur.length * acc;
  }, 1);
  if (Object.keys(memory).length === 1) return clothes.length;
  return clothes.length + combines;
}
