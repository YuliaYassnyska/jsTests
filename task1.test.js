const { competitionGrade, sum, deleteMinMax } = require('./task1')

describe('Delete min&max values function:', () => {
    test('should delete min&max values.', () => {
        expect(deleteMinMax([1, 2, 3, 4, 6])).toEqual([2, 3, 4])
    })

    test('should delete only one value of the min&max values.', () => {
        expect(deleteMinMax([1, 2, 1, 3, 7, 3, 7])).toEqual([2, 1, 3, 3, 7])
    })
})

describe('Sum function:', () => {
    test('should sum all array elements without min&max values.', () => {
        expect(sum([1, 2, 3, 4, 5])).toBe(9)
    })
})

describe('Competitions function:', () => {
    test('should return avg grade', () => {
        expect(competitionGrade([5, 8, 10, 7, 4, 10])).toBe(7.5)
    })
})
