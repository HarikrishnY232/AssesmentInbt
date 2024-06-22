import StringReducer from '../src/sumCal';

describe('StringReducer', () => {
    it('should return 0 for an empty string', () => {
        const calculator = new StringReducer();
        expect(calculator.add("")).toBe(0);
    });

    it('should return the sum of comma-separated numbers', () => {
        const calculator = new StringReducer();
        expect(calculator.add("1,2,3")).toBe(6);
    });

    it('should handle custom delimiters', () => {
        const calculator = new StringReducer();
        expect(calculator.add("//;\n1;2;3")).toBe(6);
    });

    it('should throw an error for negative numbers', () => {
        const calculator = new StringReducer();
        expect(() => calculator.add("1,-2,3")).toThrow("Negatives not allowed: -2");
    });

    it('should ignore numbers greater than or equal to 1000', () => {
        const calculator = new StringReducer();
        expect(calculator.add("1,1000,2")).toBe(3);
    });
});
