// 1번 문제
function dps1(n,m){
  console.log(n);
  n += 1;
  if(n === m){
    console.log(n);
    return;
  }else{
    dps1(n,m);
  }
}