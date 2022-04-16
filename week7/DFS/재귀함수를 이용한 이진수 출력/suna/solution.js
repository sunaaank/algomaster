function solution(n) {
  let num = ''
  
  function recursion(n) {
    if(n < 1) return;
    recursion(parseInt(n/2))
    num += String(n%2)
  }
  
  recursion(n)
  return num
}
  
console.log(solution(11))