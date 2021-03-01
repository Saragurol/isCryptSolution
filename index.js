function isCryptSolution(crypt, solution) {
  let cryptToDigits = [[],[],[]];

  for(let i = 0; i < crypt.length; i++){
    for(let j = 0; j < crypt[i].length; j++){
      let char = crypt[i][j];
      for(let k = 0; k < solution.length; k++){
        if(solution[k][0] === char){
          cryptToDigits[i].push(solution[k][1]);
        }
      }
    }
  }

  for(let l = 0; l < cryptToDigits.length; l++){
    let charToCheck = Number(cryptToDigits[l][0]);

    if(charToCheck === 0){
      if(Number(cryptToDigits[l][1]) >= 0){
        return false;
      } 
    }
  }

  if ( Number(cryptToDigits[0].join('')) + Number(cryptToDigits[1].join('')) !== Number(cryptToDigits[2].join(''))) return false;

  return true;
}
console.log(isCryptSolution(["SEND", "MORE", "MONEY"],
[
  ["O","0"], 
  ["M","1"], 
  ["Y","2"], 
  ["E","5"], 
  ["N","6"], 
  ["D","7"], 
  ["R","8"], 
  ["S","9"]
]))

console.log(isCryptSolution(
["TEN", 
 "TWO", 
 "ONE"],
[["O","1"], 
 ["T","0"], 
 ["W","9"], 
 ["E","5"], 
 ["N","4"]]))

console.log(isCryptSolution(["BAA", 
 "CAB", 
 "DAB"], 
[["A","0"], 
 ["B","1"], 
 ["C","2"], 
 ["D","4"]]))

