// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe('Polybius', () => {

    describe('Encoding', () => {
        it('Should return a string', () => {
            const message = 'strtest';
            const actual = polybius(message);
            
            expect(actual).to.be.a('string')
        });

        it('Spaces should be maintained throughout', () => {
            const message = 'bring me a space';
            const actual = polybius(message);

            expect(actual).to.include(' ');
        });

        it('Capital letters can be ignored', () => {
            const message = 'Taco';
            const actual = polybius(message);
            const expected = '44113143';

            expect(actual).to.equal(expected);
        });

        it('Letters I and J share a space and are assigned the same value', () => {
            const message_eye = 'i';
            const message_jay = 'j';
            const actual_eye = polybius(message_eye);
            const actual_jay = polybius(message_jay);
            const expected = '42';

            expect(actual_eye).to.equal(expected);
            expect(actual_jay).to.equal(expected);
        });

    });

    describe('Decoding', () => {  
        it('Should return false if length of input exlcuding spaces is odd', () => {
            const message = '432 1234';
            const actual = polybius(message, false);

            expect(actual).to.be.false
        });

        it('Spaces should be maintained throughout', () => {
            const message = '5789 4512 8734';
            const actual = polybius(message, false);
            expect(actual).to.include(' ');
        });

        it('The value 42 should return I and J', () => {
            const message = '42';
            const actual = polybius(message, false);
            const expected = '(i/j)';

            expect(actual).to.equal(expected);
        });
    })
})