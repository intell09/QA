const {shuffleArray} = require('./utils')

const sum = (n, n2) => n + n2;
 const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

describe('shuffleArray', () => {
    // CODE HERE
    test('should shuffle an arrays', () => {
        expect(shuffleArray(testArr).length).toBe(9);
    })
    test('should shuffle an arrays with a empty arrays', () => {
    expect(shuffleArray(testArr)).toBeTruthy();
   });
})

describe('sum', () =>{
    test('should give proper output', () => {
    expect(sum(1,2)).toBe(3)  
    })
})
