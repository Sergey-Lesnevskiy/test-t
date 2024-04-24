// first option
function nthFibo(index) {
  let now = 0;
  let before = null;

  for (let i = 0; i < index ; i++) {
  
    if (!now && i === 1) {
      now +=1;
      before = 0;
    } else if (!now) {
      now = 0;
      before += 1;
    } 
    else {
      let c = before + now;
      before = now;
      now = c;
    }
  }
  return now;
}
console.log(nthFibo(4));

// second option

// const nthFibo2 = (n) => {  
//   if ( n <= 0) {
//     return n;
//   }
//   // if (n <= 1 ) {
//   //   return n;
//   // }
//   return nthFibo2(n - 1) + nthFibo2(n - 2);
// };
// console.log(nthFibo2(4))