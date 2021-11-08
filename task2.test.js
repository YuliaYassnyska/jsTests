const { count } = require('./task2')

describe('Count function:', () => {
    let num;
    beforeEach(() => {
        num = '70405205';
    })

    test('should be defined.', () => {
        expect(count).toBeDefined()
    })

    test('should return number without 0 and 5.', () => {
        expect(count(num)).toBe(742);
        expect(count(num)).not.toContain(5);
        expect(count(num)).not.toContain(0);
    })
})