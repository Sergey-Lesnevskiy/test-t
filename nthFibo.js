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
nthFibo(4);
