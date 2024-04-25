// first simple
function nthFibo(index) {
  let now = 0;
  let before = null;

  for (let i = 0; i < index; i++) {
    if (!now && i === 1) {
      now += 1;
      before = 0;
    } else if (!now) {
      now = 0;
      before += 1;
    } else {
      let c = before + now;
      before = now;
      now = c;
    }
  }
  return now;
}

console.log(nthFibo(4));

// second recursion

const nthFibo2 = (n) => {
  if(n < 0){
    return ["You entered the wrong number, it should be greater than 0"];
  }
  if (n == 0) {
    return [0, 1];
  } else {
    const [prev, next] = nthFibo2(n - 1);
    return [next, prev + next];
  }
};
const fib = (n) => nthFibo2(n - 1)[0];



console.log(fib(2));
