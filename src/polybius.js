// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
     if(input.replace(/\s/g, '').length % 2 == 1 && !encode){
      return false
    }

    const p_square = {
      a : 11, b: 21, c: 31, d: 41, e: 51, 
      f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, 
      l: 13, m: 23, n: 33, o: 43, p: 53,
      q: 14, r: 24, s: 34, t: 44, u: 54,
      v: 15, w: 25, x: 35, y: 45, z: 55
    }

    let result = '';

    if(encode){
      input.toLowerCase().split('').forEach((letter) => {
        if(p_square[letter]){
          result += `${p_square[letter]}`
        } else {
          result += letter;
        }
      })
    } else {
      const input_with_space = input.split(' ');

      input_with_space.forEach((num) => {
        let every_two = num.match(/.{1,2}/g);
          every_two.forEach((n) => {
            if(Number(n) == 42){
              result += '(i/j)'
            } else {
              let value = Object.keys(p_square).find(key => p_square[key] === Number(n));
              result += value;
            }
          })
        
        result += ' '
      })
    }

    return result.trim();
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
