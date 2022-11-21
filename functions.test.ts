const {shuffleArray} = require('./utils')

const sum = (n, n2) => n + n2;

describe('shuffleArray', () => {
    // CODE HERE
    test('should shuffle an arrays', () => {
        expect(shuffleArray('some array')).toBe('Some Array');
    })
    test('should shuffle an arrays with a empty arrays', () => {
        expect(shuffleArray('some array')).toBe('Some Array');
    });
})

describe('sum', () =>{
    test('should give proper output', () => {
    expect(sum(1,2)).toBe(3)  
    })
})