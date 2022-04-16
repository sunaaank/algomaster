function recursion(n) {
  if(n < 1) return
  console.log(n)
  return recursion(n-1)
}

function solution(n) {
return recursion(n)
}

solution(3)