export function feladat01(szinek){
    let n =szinek.length;
    if(n<2){ // 2 alatt 0  az eredmény
        return 0;
    }
  let full=1 
  for ( let i=1; i<n;i++){// 2^n számitas, kombinatorika összes verzió
      full=full*2;
  }
  return full-1-n; // full-1db luft hz- 1x a színek 
}
