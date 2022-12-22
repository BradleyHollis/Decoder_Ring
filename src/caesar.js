// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    // Create an alphabet array
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    // Conditions to return false
    if(!shift || shift == 0 || shift < -25 || shift > 25){
      return false;
    }

    // Create an input array to lowercase
    let input_arr = input.toLowerCase().split('');

    let result = '';
    // Iterate over the input array
    input_arr.forEach((letter) => {
      if(alphabet.includes(letter)){
        const index = alphabet.indexOf(letter);
        let adjusted_index = encode ? (index + shift) % 26 : (index - shift) % 26; 

        if(adjusted_index < 0){
          adjusted_index = 26 + adjusted_index;
        }

        result += alphabet[adjusted_index];

      } else {
        result += letter
      }
    })

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
