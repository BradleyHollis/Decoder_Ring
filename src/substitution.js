// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length !== 26){
      return false
    }

    const input_alphabet_arr = alphabet.split('');
    const unique_alphabet_arr = [...new Set(alphabet.split(''))];
 
    if(input_alphabet_arr.length !== unique_alphabet_arr.length){
      return false
    }

    const og_alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = '';
    
    input.toLowerCase().split('').forEach((char) => {
      if(encode){
        if(char == ' '){
          result += ' '
        } else {
          const og_idx = og_alphabet.indexOf(char);
          const inp_to_find = input_alphabet_arr[og_idx];
          result += inp_to_find;
        }
      } else {
        if(char == ' '){
          result += ' '
        } else {
          const inp_idx = input_alphabet_arr.indexOf(char);
          const og_to_find = og_alphabet[inp_idx];
          result += og_to_find;
        }
      }
    })
    
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
