/*Javascript Functioning - recursion is a function that call itself until it does not*/
//Ecmascript
let countDown = (num) => {
  if(num === 0) return;
  console.log(num)
  countDown(num-1)
}
countDown(10)
