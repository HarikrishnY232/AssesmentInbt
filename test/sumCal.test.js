"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sumCal_1 = require("../src/sumCal");
describe('StringReducer', function () {
    it('should return 0 for an empty string', function () {
        var calculator = new sumCal_1.default();
        expect(calculator.add("")).toBe(0);
    });
    it('should return the sum of comma-separated numbers', function () {
        var calculator = new sumCal_1.default();
        expect(calculator.add("1,2,3")).toBe(6);
    });
    it('should handle custom delimiters', function () {
        var calculator = new sumCal_1.default();
        expect(calculator.add("//;\n1;2;3")).toBe(6);
    });
    it('should throw an error for negative numbers', function () {
        var calculator = new sumCal_1.default();
        expect(function () { return calculator.add("1,-2,3"); }).toThrow("Negatives not allowed: -2");
    });
    it('should ignore numbers greater than or equal to 1000', function () {
        var calculator = new sumCal_1.default();
        expect(calculator.add("1,1000,2")).toBe(3);
    });
});
