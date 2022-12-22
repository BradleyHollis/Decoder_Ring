// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe('Caesar', () => {
    
    describe('Error Handling', () => {
        it('Should return false if the shift value is equal to 0', () => {
            const message = 'cake';
            const shift = 0;
            const actual = caesar(message, shift);
            
            expect(actual).to.be.false
        })
    
        it('Should return false if the shift value is less than -25', () => {
            const message = 'cake';
            const shift = -26;
            const actual = caesar(message, shift);
            
            expect(actual).to.be.false;
        })
    
        it('Should return false if the shift value is greater than 25', () => {
            const message = 'cake';
            const shift = 26;
            const actual = caesar(message, shift);
    
            expect(actual).to.be.false;
        })
    })

    describe('Encoding', () => {
        it('Should encode the message and shift the letters', () => {
            const message = 'cake';
            const shift = 2; 
            const actual = caesar(message, shift);
            const expected = 'ecmg';
    
            expect(actual).to.equal(expected)
        })

        it('Should maintain spaces', () => {
            const message = 'cake and sprinkles';
            const shift = 2;
            const actual = caesar(message, shift);
            
            expect(actual).to.include(' ');
        })
    
        it('Should maintain non-alphabetic symbols', () => {
            const message = '$ is not a problem.';
            const shift = 7;
            const actual = caesar(message, shift);
    
            expect(actual).to.include('$');
            expect(actual).to.include('.');
        })

        it('Should ignore capital letters', () => {
            const message = 'The end';
            const shift = 4;
            const actual = caesar(message, shift);
            const expected = 'xli irh'

            expect(actual).to.equal(expected);
        })

        it('Should account for letters that go off the alphabet', () => {
            const message = 'zebra';
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = 'cheud'

            expect(actual).to.equal(expected);
        })

    })

    describe('Decoding', () => {

        it('Should decode the message and shift the letters in the opposite direction', () => {
            const message = 'cake';
            const shift = 2;
            const actual = caesar(message, shift, false);
            const expected = 'ayic';
    
            expect(actual).to.equal(expected);
        })

        it('Should maintain spaces', () => {
            const message = 'cake and sprinkles';
            const shift = 2;
            const actual = caesar(message, shift, false);
            
            expect(actual).to.include(' ');
        })
    
        it('Should maintain non-alphabetic symbols', () => {
            const message = '$ is not a problem.';
            const shift = 7;
            const actual = caesar(message, shift, false);
    
            expect(actual).to.include('$');
            expect(actual).to.include('.')
        })

        it('Should ignore capital letters', () => {
            const message = 'The End';
            const shift = 2;
            const actual = caesar(message, shift, false);
            const expected = 'rfc clb';

            expect(actual).to.equal(expected)
        })

        it('Should account for letters that go off the alphabet', () => {
            const message = 'blanket';
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = 'yixkhbq'

            expect(actual).to.equal(expected);
        })

    })
})