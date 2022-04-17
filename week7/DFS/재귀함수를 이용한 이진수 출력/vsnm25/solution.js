// 2번 문제
function dps2(n,s){
  const a = Math.floor(n/2);
  const b = n % 2;
  s += b;
  if(n > 1){
    dps2(a,s);
  }else{
    console.log(s);
  }
}

function solution2(n){
  dps2(n,'');
}
solution2(11);