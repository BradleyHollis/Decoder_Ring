// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe('Substitution', () => {
    describe('Error Handling', () => {

        it('The alphabet paramter must be passed', () => {
            const message = 'test';
            const actual = substitution(message);

            expect(actual).to.be.false;
        })

        it('The alphabet string must be exactly 26 characters long', () => {
            const message = 'test';
            const alphabet = '$zyxwvutsrqponmlkjihgfedcba';
            const actual = substitution(message, alphabet);

            expect(actual).to.be.false;
        });

        it('All the characters in the alphabet parameter must be unique', () => {
            const message = 'test';
            const alphabet = 'abcdabcdabcdabcdabcdabcdab';
            const actual = substitution(message, alphabet);
            const length = alphabet.length;

            expect(actual).to.be.false;
            expect(length).to.equal(26);
        });

    });

    describe('Encode', () => {
        it('It correctly translates the given phrase, based on the alphabet given to the function.', () => {
            const message = 'thinkful';
            const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
            const actual = substitution(message, alphabet);
            const expected = 'jrufscpw';

            expect(actual).to.equal(expected);
        });

        it('It maintains spaces in the message, before and after encoding or decoding.', () => {
            const message = 'You are an excellent spy';
            const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
            const actual = substitution(message, alphabet);
            const expected = 'elp xhm xf mbymwwmfj dne';
            
            expect(actual).to.equal(expected);
        });

        it('It ignores capital letters', () => {
            const message = 'A Message';
            const alphabet = '$wae&zrdxtfcygvuhbijnokmpl';
            const actual = substitution(message, alphabet);
            const expected = '$ y&ii$r&';

            expect(actual).to.equal(expected);
        });
    });

    describe('Decode', () => {
        it('It correctly translates the given phrase, based on the alphabet given to the function.', () => {
            const message = 'y&ii$r&';
            const alphabet = '$wae&zrdxtfcygvuhbijnokmpl';
            const actual = substitution(message, alphabet, false);
            const expected = 'message';
    
            expect(actual).to.equal(expected);
        });

        it("should work with any kind of key with unique characters", () => {
            const message = "ysii.rs";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet, false);
            const expected = "message";
      
            expect(actual).to.equal(expected);
          });
      
          it("should preserve spaces", () => {
            const message = "yp ysii.rs";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet, false);
            const expected = "my message";
      
            expect(actual).to.equal(expected);
          });
    });
})